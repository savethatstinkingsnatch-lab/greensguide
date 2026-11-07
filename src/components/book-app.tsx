import { useEffect, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Bookmark, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { PLATES } from "@/assets/plates";
import {
  CropGallery,
  CropLines,
  CrossGroups,
  SeedBench,
  SpacingTable,
  WashBench,
  ZoneGuide,
} from "@/components/book-parts";
import { CHAPTERS, chapterById, type Block, type Chapter } from "@/data/chapters";
import { CROPS } from "@/data/crops";
import { bookSearch, type BookSearch } from "@/data/search";
import { EDITION } from "@/data/edition";
import { useShelf, useShelfHydrated } from "@/lib/shelf";

const inkBtn =
  "inline-flex min-h-11 items-center justify-center gap-2 border border-ink bg-ink px-4 font-display text-sm text-paper transition-colors duration-200 hover:border-moss hover:bg-moss";
const ghostBtn =
  "inline-flex min-h-11 items-center justify-center gap-2 border border-rule bg-paper px-4 font-display text-sm text-ink transition-colors duration-200 hover:border-ink";

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function chapterText(chapter: Chapter) {
  return chapter.parts
    .flatMap((part) => (part.kind === "blocks" ? part.blocks : []))
    .flatMap((block) => {
      if (block.type === "ul" || block.type === "ol") return block.items;
      if (block.type === "note") return [block.title, block.text];
      return [block.text];
    })
    .join(" ")
    .toLowerCase();
}

export function BookApp({ search }: { search: BookSearch }) {
  const navigate = useNavigate();
  const hydrated = useShelfHydrated();
  const bookmarks = useShelf((state) => state.bookmarks);
  const toggleBookmark = useShelf((state) => state.toggleBookmark);
  const markRead = useShelf((state) => state.markRead);
  const started = useShelf((state) => state.started);
  const lastChapter = useShelf((state) => state.lastChapter);
  const storedZone = useShelf((state) => state.zone);
  const setZone = useShelf((state) => state.setZone);
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");

  const chapter = chapterById(search.chapter);
  const zone = search.zone ?? (hydrated ? storedZone : 6);

  useEffect(() => {
    const name = chapter ? chapter.title : "Volume 3: Greens";
    document.title = chapter ? `${name} · Volume 3: Greens` : name;
  }, [chapter]);

  useEffect(() => {
    if (search.chapter !== "cover") markRead(search.chapter);
  }, [search.chapter, markRead]);

  useEffect(() => {
    if (search.chapter === "crops" && search.crop) {
      document.getElementById(`crop-${search.crop}`)?.scrollIntoView({ block: "start" });
      return;
    }
    window.scrollTo(0, 0);
  }, [search.chapter, search.crop]);

  function go(next: { chapter?: string; zone?: number; crop?: string | null }) {
    const crop = next.crop === null ? undefined : (next.crop ?? search.crop);
    void navigate({
      to: "/",
      search: bookSearch(next.chapter ?? search.chapter, next.zone ?? search.zone ?? zone, crop),
    });
    setMenu(false);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const tag = (event.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON" || tag === "A") return;
      const dir = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (dir === 0) return;
      const id = neighbor(search.chapter, dir);
      if (!id) return;
      event.preventDefault();
      void navigate({
        to: "/",
        search: bookSearch(id, search.zone ?? zone, search.crop),
      });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, search.chapter, search.crop, search.zone, zone]);

  const marked = hydrated && chapter ? bookmarks.includes(chapter.id) : false;
  const continueId = hydrated && started && chapterById(lastChapter) ? lastChapter : CHAPTERS[0].id;
  const continueTitle = chapterById(continueId)?.title ?? "The crops";

  return (
    <div className="min-h-screen bg-paper text-ink lg:flex">
      <a
        href="#page"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to text
      </a>
      {menu ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button type="button" className="absolute inset-0 bg-ink/40" aria-label="Close contents" onClick={() => setMenu(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-paper-deep">
            <Spine
              search={search}
              zone={zone}
              query={query}
              setQuery={setQuery}
              onClose={() => setMenu(false)}
              bookmarks={hydrated ? bookmarks : []}
            />
          </div>
        </div>
      ) : null}
      <aside className="sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-rule bg-paper-deep lg:block">
        <Spine
          search={search}
          zone={zone}
          query={query}
          setQuery={setQuery}
          bookmarks={hydrated ? bookmarks : []}
        />
      </aside>
      <div className="min-w-0 flex-1 overflow-x-hidden">
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-rule bg-paper/95 px-4 py-2 backdrop-blur-sm">
          <button type="button" className={`${ghostBtn} px-3 lg:hidden`} aria-label="Open contents" onClick={() => setMenu(true)}>
            <Menu className="size-5" aria-hidden="true" />
          </button>
          <p className="min-w-0 flex-1 truncate font-display text-sm">
            {chapter ? (
              <>
                <span className="text-moss">{chapter.numeral}</span> {chapter.title}
              </>
            ) : (
              "Volume 3: Greens"
            )}
          </p>
          {chapter ? (
            <button
              type="button"
              className={`${ghostBtn} px-3`}
              aria-pressed={marked}
              aria-label={marked ? "Remove bookmark" : "Bookmark this chapter"}
              onClick={() => toggleBookmark(chapter.id)}
            >
              <Bookmark className={marked ? "size-5 fill-current" : "size-5"} aria-hidden="true" />
            </button>
          ) : null}
        </header>
        <main id="page" className="mx-auto w-full max-w-2xl px-5 py-8 sm:px-8 sm:py-12">
          {chapter ? (
            <ChapterView
              key={chapter.id}
              chapter={chapter}
              search={search}
              zone={zone}
              onZone={(next) => {
                setZone(next);
                go({ zone: next });
              }}
              onCrop={(id) => go({ chapter: search.chapter === "crops" ? "seed" : search.chapter, crop: id })}
              onOpenSeed={(id) => go({ chapter: "seed", crop: id })}
            />
          ) : (
            <Cover continueId={continueId} continueTitle={continueTitle} started={hydrated && started} zone={zone} />
          )}
          <ChapterNav chapterId={search.chapter} zone={zone} crop={search.crop} />
          {search.chapter === CHAPTERS[CHAPTERS.length - 1].id ? <Colophon /> : null}
        </main>
      </div>
    </div>
  );
}

function neighbor(chapterId: string, dir: -1 | 1): string | null {
  if (chapterId === "cover") return dir === 1 ? CHAPTERS[0].id : null;
  const index = CHAPTERS.findIndex((item) => item.id === chapterId);
  if (index < 0) return null;
  if (dir === -1) return index === 0 ? "cover" : CHAPTERS[index - 1].id;
  return index === CHAPTERS.length - 1 ? null : CHAPTERS[index + 1].id;
}

function Spine({
  search,
  zone,
  query,
  setQuery,
  onClose,
  bookmarks,
}: {
  search: BookSearch;
  zone: number;
  query: string;
  setQuery: (value: string) => void;
  onClose?: () => void;
  bookmarks: string[];
}) {
  const q = query.trim().toLowerCase();
  const chapters = q
    ? CHAPTERS.filter((item) => `${item.title} ${item.summary} ${chapterText(item)}`.toLowerCase().includes(q))
    : CHAPTERS;
  const crops = q
    ? CROPS.filter((crop) => `${crop.name} ${crop.latin}`.toLowerCase().includes(q))
    : [];

  return (
    <div className="flex min-h-full flex-col px-4 py-5">
      <div className="flex items-start justify-between gap-3">
        <Link to="/" search={bookSearch("cover", zone, search.crop)} onClick={onClose} className="font-display text-lg leading-tight">
          The Greens
          <span className="block text-sm text-moss">Field Book</span>
        </Link>
        {onClose ? (
          <button type="button" className={`${ghostBtn} px-3`} aria-label="Close" onClick={onClose}>
            <X className="size-5" aria-hidden="true" />
          </button>
        ) : null}
      </div>
      <label className="mt-6 block text-sm text-muted" htmlFor={onClose ? "find-mobile" : "find-desk"}>
        Search
      </label>
      <input
        id={onClose ? "find-mobile" : "find-desk"}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="kale, frost, grit…"
        className="mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-ink placeholder:text-muted"
      />
      <nav className="mt-6" aria-label="Contents">
        <ol className="space-y-1">
          {chapters.map((item) => {
            const active = search.chapter === item.id;
            return (
              <li key={item.id}>
                <Link
                  to="/"
                  search={bookSearch(item.id, zone, search.crop)}
                  onClick={onClose}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "block border-l-2 border-moss bg-paper px-3 py-2"
                      : "block border-l-2 border-transparent px-3 py-2 hover:bg-paper"
                  }
                >
                  <span className="font-display text-sm text-moss">{item.numeral}</span>
                  <span className="mt-0.5 block font-display text-lg leading-tight">{item.title}</span>
                  <span className="mt-0.5 block text-sm text-muted">{item.summary}</span>
                </Link>
              </li>
            );
          })}
        </ol>
        {q && chapters.length === 0 && crops.length === 0 ? (
          <p className="mt-4 text-sm text-muted">Nothing under that name.</p>
        ) : null}
        {crops.length > 0 ? (
          <div className="mt-6">
            <p className="font-display text-sm text-moss">Crops</p>
            <ul className="mt-2 space-y-1">
              {crops.map((crop) => (
                <li key={crop.id}>
                  <Link
                    to="/"
                    search={bookSearch("crops", zone, crop.id)}
                    onClick={onClose}
                    className="block px-3 py-2 hover:bg-paper"
                  >
                    <span className="font-display">{crop.name}</span>
                    <span className="block text-sm italic text-muted">{crop.latin}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </nav>
      {bookmarks.length > 0 ? (
        <div className="mt-8 border-t border-rule pt-4">
          <p className="font-display text-sm text-moss">Bookmarks</p>
          <ul className="mt-2">
            {bookmarks.map((id) => {
              const item = chapterById(id);
              if (!item) return null;
              return (
                <li key={id}>
                  <Link to="/" search={bookSearch(id, zone, search.crop)} onClick={onClose} className="block py-2 font-display hover:text-moss">
                    {item.numeral}. {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
      <div className="mt-8 border-t border-rule pt-4">
        <p className="font-display text-ink">{EDITION.author}</p>
        <p className="mt-1 text-sm text-muted">Digital edition · {EDITION.year}</p>
      </div>
    </div>
  );
}

function Cover({
  continueId,
  continueTitle,
  started,
  zone,
}: {
  continueId: string;
  continueTitle: string;
  started: boolean;
  zone: number;
}) {
  return (
    <article className="page-enter">
      <p className="font-display text-sm tracking-widest text-moss uppercase">Leaf crops · seed · the sink</p>
      <h1 className="mt-3 font-display text-5xl leading-none text-ink sm:text-6xl">
        The Greens
        <span className="mt-1 block">Field Book</span>
      </h1>
      <p className="mt-4 font-display text-xl">{EDITION.author}</p>
      <p className="mt-1 text-sm text-muted">Digital edition · {EDITION.year}</p>
      <p className="mt-5 max-w-xl text-lg text-ink">
        How to grow the leaves, cut them without ending the plant, take the seed, keep it, read your zone, and wash the grit out.
      </p>
      <figure className="mt-8">
        <img
          src={PLATES.cover}
          alt="A wooden trug of kale, lettuce, chard, and arugula on a garden bench."
          className="h-96 w-full object-cover"
        />
        <figcaption className="mt-3 text-sm text-muted">A morning basket. The work starts before the leaves look like this.</figcaption>
      </figure>
      <div className="mt-8">
        <Link to="/" search={bookSearch(continueId, zone)} className={inkBtn}>
          {started ? `Continue · ${continueTitle}` : "Begin with the crops"}
        </Link>
      </div>
      <h2 className="mt-12 font-display text-2xl">Contents</h2>
      <ol className="mt-4 border-t border-rule">
        {CHAPTERS.map((item) => (
          <li key={item.id} className="border-b border-rule">
            <Link to="/" search={bookSearch(item.id, zone)} className="flex min-h-11 items-baseline gap-4 py-3 hover:text-moss">
              <span className="w-8 shrink-0 font-display text-moss">{item.numeral}</span>
              <span>
                <span className="block font-display text-xl">{item.title}</span>
                <span className="block text-sm text-muted">{item.kicker}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-8 text-sm text-muted">
        Home-garden guidance. Frost dates are typical for the zone, not a forecast. Arrow keys turn the chapter on a keyboard.
      </p>
      <Colophon />
    </article>
  );
}

function ChapterView({
  chapter,
  search,
  zone,
  onZone,
  onCrop,
  onOpenSeed,
}: {
  chapter: Chapter;
  search: BookSearch;
  zone: number;
  onZone: (zone: number) => void;
  onCrop: (id: string) => void;
  onOpenSeed: (id: string) => void;
}) {
  const headings = chapter.parts
    .flatMap((part) => (part.kind === "blocks" ? part.blocks : []))
    .filter((block): block is Extract<Block, { type: "h2" }> => block.type === "h2");
  let dropcapPending = true;

  return (
    <article className="page-enter">
      <p className="font-display text-sm tracking-widest text-moss uppercase">
        Chapter {chapter.numeral} · {chapter.kicker}
      </p>
      <h1 className="mt-2 font-display text-4xl leading-tight sm:text-5xl">{chapter.title}</h1>
      <p className="mt-3 text-lg text-muted">{chapter.summary}</p>
      {headings.length > 1 ? (
        <nav className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label="In this chapter">
          {headings.map((heading) => (
            <a key={heading.text} href={`#${headingId(heading.text)}`} className="font-display text-sm text-moss underline-offset-4 hover:underline">
              {heading.text}
            </a>
          ))}
        </nav>
      ) : null}
      <figure className="mt-8">
        <img src={PLATES[chapter.plate]} alt={chapter.plateAlt} className="h-72 w-full object-cover sm:h-96" />
        <figcaption className="mt-3 flex gap-3 text-sm text-muted">
          <span className="shrink-0 font-display text-moss">Plate {chapter.numeral}</span>
          <span>{chapter.plateCaption}</span>
        </figcaption>
      </figure>
      <div className="mt-8 space-y-4">
        {chapter.parts.map((part, index) => {
          if (part.kind === "blocks") {
            const useCap = dropcapPending;
            dropcapPending = false;
            return <Blocks key={index} blocks={part.blocks} dropcap={useCap} />;
          }
          if (part.kind === "crops") return <CropGallery key={index} cropId={search.crop} onOpenSeed={onOpenSeed} />;
          if (part.kind === "spacing") return <SpacingTable key={index} />;
          if (part.kind === "harvest") return <CropLines key={index} field="harvest" />;
          if (part.kind === "rinses") return <CropLines key={index} field="wash" />;
          if (part.kind === "crosses") return <CrossGroups key={index} />;
          if (part.kind === "seedbench") {
            return <SeedBench key={index} focus={part.focus} cropId={search.crop} onPick={onCrop} />;
          }
          if (part.kind === "zones") return <ZoneGuide key={index} zone={zone} onZone={onZone} />;
          if (part.kind === "wash") return <WashBench key={index} />;
          return null;
        })}
      </div>
    </article>
  );
}

function Blocks({ blocks, dropcap }: { blocks: Block[]; dropcap: boolean }) {
  let capped = false;
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} id={headingId(block.text)} className="scroll-mt-20 pt-6 font-display text-2xl">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="pt-2 font-display text-xl">
              {block.text}
            </h3>
          );
        }
        if (block.type === "p") {
          const cap = dropcap && !capped;
          if (cap) capped = true;
          return (
            <p key={index} className={cap ? "dropcap" : undefined}>
              {block.text}
            </p>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const List = block.type === "ul" ? "ul" : "ol";
          return (
            <List key={index} className={block.type === "ul" ? "list-disc space-y-2 pl-5" : "list-decimal space-y-2 pl-5"}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </List>
          );
        }
        if (block.type === "note") {
          return (
            <aside key={index} className="border-l-2 border-clay bg-paper-deep px-4 py-3">
              <p className="font-display text-ink">{block.title}</p>
              <p className="mt-1 text-muted">{block.text}</p>
            </aside>
          );
        }
        return (
          <blockquote key={index} className="border-y border-rule py-4 font-display text-xl leading-snug">
            {block.text}
          </blockquote>
        );
      })}
    </div>
  );
}

function ChapterNav({ chapterId, zone, crop }: { chapterId: string; zone: number; crop?: string }) {
  const prev = neighbor(chapterId, -1);
  const next = neighbor(chapterId, 1);
  const prevChapter = prev ? chapterById(prev) : undefined;
  const nextChapter = next ? chapterById(next) : undefined;

  return (
    <nav className="mt-12 flex flex-wrap items-stretch justify-between gap-3 border-t border-rule pt-6" aria-label="Chapters">
      {prev ? (
        <Link to="/" search={bookSearch(prev, zone, crop)} className={`${ghostBtn} max-w-full`}>
          <ChevronLeft className="size-4" aria-hidden="true" />
          <span className="text-left">
            <span className="block text-xs tracking-wide text-muted uppercase">{prev === "cover" ? "Cover" : "Previous"}</span>
            <span className="block">{prev === "cover" ? "Title page" : prevChapter?.title}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link to="/" search={bookSearch(next, zone, crop)} className={`${inkBtn} max-w-full`}>
          <span className="text-right">
            <span className="block text-xs tracking-wide text-paper/80 uppercase">Next</span>
            <span className="block">{nextChapter?.title}</span>
          </span>
          <ChevronRight className="size-4" aria-hidden="true" />
        </Link>
      ) : null}
    </nav>
  );
}

function Colophon() {
  return (
    <footer className="mt-10 border-t border-rule pt-6">
      <p className="font-display text-lg text-ink">{EDITION.title}</p>
      <p className="mt-1 text-sm text-muted">
        {EDITION.author}. Digital edition, {EDITION.year}.
      </p>
    </footer>
  );
}
