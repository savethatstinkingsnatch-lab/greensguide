import { useEffect, useState } from "react";
import { Check, Copy, RotateCcw } from "lucide-react";
import { CROPS, FROST_LABEL, HEAT_LABEL, cropById, type Crop } from "@/data/crops";
import { IN_PLAY, MONTHS, MONTH_NOTES, ZONES, bandFor, zoneFact } from "@/data/zones";
import { useShelf } from "@/lib/shelf";

const chipOn =
  "inline-flex min-h-11 items-center border border-moss bg-moss px-3 font-display text-sm text-paper";
const chipOff =
  "inline-flex min-h-11 items-center border border-rule bg-paper px-3 font-display text-sm text-ink hover:border-moss";

function chip(on: boolean) {
  return on ? chipOn : chipOff;
}

export function CropGallery({
  cropId,
  onOpenSeed,
}: {
  cropId?: string;
  onOpenSeed: (id: string) => void;
}) {
  const [open, setOpen] = useState<string | null>(cropId ?? null);

  useEffect(() => {
    if (cropId) setOpen(cropId);
  }, [cropId]);

  return (
    <div className="my-8 border-t border-rule">
      {CROPS.map((crop) => {
        const expanded = open === crop.id;
        return (
          <article key={crop.id} id={`crop-${crop.id}`} className="border-b border-rule">
            <button
              type="button"
              className="flex w-full min-h-11 items-center justify-between gap-4 py-4 text-left"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : crop.id)}
            >
              <span>
                <span className="block font-display text-2xl leading-tight">{crop.name}</span>
                <span className="mt-1 block text-sm italic text-muted">{crop.latin}</span>
              </span>
              <span className="shrink-0 font-display text-sm text-moss">
                {expanded ? "Close" : "Open"}
              </span>
            </button>
            {expanded ? <CropBody crop={crop} onOpenSeed={onOpenSeed} /> : null}
          </article>
        );
      })}
    </div>
  );
}

function CropBody({ crop, onOpenSeed }: { crop: Crop; onOpenSeed: (id: string) => void }) {
  return (
    <div className="space-y-4 pb-6">
      <p className="text-sm text-muted">
        {crop.family} · {crop.life} · {FROST_LABEL[crop.frost]} · {HEAT_LABEL[crop.heat]}
      </p>
      <dl className="grid gap-3 sm:grid-cols-2">
        <Fact label="Baby leaves" value={`${crop.daysBaby} days`} />
        <Fact label="Full size" value={`${crop.daysMature} days`} />
        <Fact label="Sow" value={crop.sowDepth} />
        <Fact label="Spacing" value={crop.spacing} />
        <Fact label="Seed keeps" value={crop.seedYears} />
        <Fact label="Germinates" value={crop.germDays} />
      </dl>
      <Section label="Spring">{crop.spring}</Section>
      <Section label="Fall">{crop.fall}</Section>
      <Section label="Cutting">{crop.harvest}</Section>
      <Section label="Seed">{crop.seed}</Section>
      <Section label="Washing">{crop.wash}</Section>
      <button type="button" onClick={() => onOpenSeed(crop.id)} className={chipOff}>
        Seed notes for {crop.name}
      </button>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-rule bg-paper-deep px-3 py-2">
      <dt className="font-display text-sm text-moss">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}

function Section({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h3 className="font-display text-lg">{label}</h3>
      <p className="mt-1 text-ink">{children}</p>
    </div>
  );
}

export function SpacingTable() {
  return (
    <div className="my-8 min-w-0 max-w-full overflow-x-auto border border-rule">
      <table className="w-full min-w-[36rem] text-left text-sm">
        <caption className="border-b border-rule px-3 py-3 text-left font-display text-base text-moss">
          Sowing measures
        </caption>
        <thead className="bg-paper-deep">
          <tr>
            {["Crop", "Depth", "Spacing", "Baby", "Mature"].map((col) => (
              <th key={col} className="px-3 py-2 font-display font-medium">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {CROPS.map((crop) => (
            <tr key={crop.id} className="border-t border-rule">
              <th className="px-3 py-2 font-display font-medium">{crop.name}</th>
              <td className="px-3 py-2">{crop.sowDepth}</td>
              <td className="px-3 py-2">{crop.spacing}</td>
              <td className="px-3 py-2">{crop.daysBaby} days</td>
              <td className="px-3 py-2">{crop.daysMature} days</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function CropLines({ field }: { field: "harvest" | "wash" }) {
  return (
    <dl className="my-6 border-t border-rule">
      {CROPS.map((crop) => (
        <div key={crop.id} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[9rem_1fr] sm:gap-4">
          <dt className="font-display text-lg">{crop.name}</dt>
          <dd>{field === "harvest" ? crop.harvest : crop.wash}</dd>
        </div>
      ))}
    </dl>
  );
}

const CROSSES = [
  {
    name: "Brassica oleracea",
    members: "Kale, collards, cabbage, broccoli, Brussels sprouts, cauliflower, kohlrabi",
    note: "Insects carry pollen among all of these. One flowering broccoli plant will rewrite your kale seed.",
  },
  {
    name: "Brassica rapa",
    members: "Bok choy, mizuna, tatsoi, napa cabbage, turnip",
    note: "A turnip left to flower is a bok choy cross waiting to happen.",
  },
  {
    name: "Brassica juncea",
    members: "Mustard greens",
    note: "Does not cross with kale or with bok choy.",
  },
  {
    name: "Eruca vesicaria",
    members: "Garden arugula",
    note: "Not wild arugula, and not the brassicas above.",
  },
  {
    name: "Beta vulgaris",
    members: "Swiss chard and every beet",
    note: "Wind-pollinated. Neighborhood gardens share pollen more often than people think.",
  },
  {
    name: "Lactuca sativa",
    members: "Lettuce",
    note: "Mostly self-pollinated. A short gap between varieties is usually enough at home.",
  },
  {
    name: "Spinacia oleracea",
    members: "Spinach",
    note: "Wind, and plants are male or female. Other spinach will cross. Save from a crowd.",
  },
  {
    name: "Coriandrum sativum",
    members: "Cilantro",
    note: "Crosses with other cilantro. The seed is the coriander already in the spice jar.",
  },
];

export function CrossGroups() {
  return (
    <div className="my-8 space-y-3">
      <h3 className="font-display text-2xl">Crossing groups</h3>
      {CROSSES.map((group) => (
        <article key={group.name} className="border border-rule bg-paper-deep px-4 py-3">
          <h4 className="font-display text-lg italic">{group.name}</h4>
          <p className="mt-1">{group.members}</p>
          <p className="mt-2 text-sm text-muted">{group.note}</p>
        </article>
      ))}
    </div>
  );
}

function labelText(crop: Crop, variety: string, year: string) {
  return [
    crop.name,
    `variety: ${variety.trim() || "________________"}`,
    `year: ${year.trim() || String(new Date().getFullYear())}`,
    "bed:",
    `life: ${crop.life}`,
    `keeps: ${crop.seedYears}`,
    `isolation: ${crop.isolation}`,
    "germ test:",
  ].join("\n");
}

export function SeedBench({
  focus,
  cropId,
  onPick,
}: {
  focus: "seed" | "store";
  cropId?: string;
  onPick: (id: string) => void;
}) {
  const fallback = cropId && cropById(cropId) ? cropId : CROPS[0].id;
  const [id, setId] = useState(fallback);
  const [variety, setVariety] = useState("");
  const [year, setYear] = useState(String(new Date().getFullYear()));
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");

  useEffect(() => {
    if (cropId && cropById(cropId)) setId(cropId);
  }, [cropId]);

  const crop = cropById(id) ?? CROPS[0];
  const label = labelText(crop, variety, year);

  function choose(next: string) {
    setId(next);
    setVariety("");
    setCopyState("idle");
    onPick(next);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(label);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  }

  return (
    <section className="my-8 border border-rule p-4 sm:p-5" aria-label="Seed bench">
      <h3 className="font-display text-2xl">
        {focus === "store" ? "Jar label" : "Seed notes"}
      </h3>
      <p className="mt-2 text-muted">
        {focus === "store"
          ? "Pick the crop, name the variety, and copy a label into the jar with the seed."
          : "The harvest changes with the species. Isolation here is for a kitchen garden, not a seed catalog."}
      </p>
      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Choose a crop">
        {CROPS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={chip(item.id === crop.id)}
            aria-pressed={item.id === crop.id}
            onClick={() => choose(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <p className="font-display text-xl">
          {crop.name} <span className="text-base italic text-muted">{crop.latin}</span>
        </p>
        <p>
          {crop.pollination}. {crop.isolation}.
        </p>
        {focus === "seed" ? <p>{crop.seed}</p> : null}
        <p className="text-sm text-muted">
          {crop.life === "biennial" ? "Biennial — it flowers after a winter." : "Annual — it can set seed the year you sow it."}{" "}
          Germination test window: {crop.germDays}. Stored cool and dry: {crop.seedYears}.
        </p>
        {focus === "store" ? <p>{crop.seed}</p> : null}
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-display text-moss">Variety</span>
          <input
            value={variety}
            onChange={(event) => {
              setVariety(event.target.value);
              setCopyState("idle");
            }}
            placeholder="as on the original packet"
            className="mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-base text-ink placeholder:text-muted"
          />
        </label>
        <label className="block text-sm">
          <span className="font-display text-moss">Year saved</span>
          <input
            value={year}
            inputMode="numeric"
            onChange={(event) => {
              setYear(event.target.value);
              setCopyState("idle");
            }}
            className="mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-base text-ink"
          />
        </label>
      </div>
      <pre className="mt-4 whitespace-pre-wrap border border-rule bg-paper-deep p-4 font-body text-sm text-ink">
        {label}
      </pre>
      <div className="mt-3 flex flex-wrap items-center gap-3">
        <button type="button" onClick={() => void copy()} className={chipOff}>
          {copyState === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
          {copyState === "copied" ? "Copied" : "Copy label"}
        </button>
        {copyState === "manual" ? (
          <p className="text-sm text-muted">Select the label above and copy it by hand.</p>
        ) : null}
      </div>
    </section>
  );
}

const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function ZoneGuide({ zone, onZone }: { zone: number; onZone: (zone: number) => void }) {
  const [month, setMonth] = useState<number | null>(null);
  const [filter, setFilter] = useState<"all" | "now" | "hardy" | "shy">("all");

  useEffect(() => {
    setMonth(new Date().getMonth());
  }, []);

  const band = bandFor(zone);
  const fact = zoneFact(zone);
  const inPlay = month === null ? [] : IN_PLAY[band.id][month];
  const crops = CROPS.filter((crop) => {
    if (filter === "now") return inPlay.includes(crop.id);
    if (filter === "hardy") return crop.frost === "hardy";
    if (filter === "shy") return crop.heat === "shy";
    return true;
  });

  return (
    <div className="my-8 space-y-6">
      <div>
        <p className="font-display text-sm text-moss">USDA zone</p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Choose your zone">
          {ZONES.map((item) => (
            <button
              key={item.zone}
              type="button"
              className={`${chip(item.zone === zone)} min-w-11 justify-center`}
              aria-pressed={item.zone === zone}
              onClick={() => onZone(item.zone)}
            >
              {item.zone}
            </button>
          ))}
        </div>
      </div>

      <article className="border border-rule bg-moss-soft px-4 py-4 text-ink">
        <h3 className="font-display text-2xl">Zone {zone}</h3>
        <p className="mt-1">{band.label}. {band.character}</p>
        <dl className="mt-4 grid gap-3 sm:grid-cols-3">
          <Fact label="Winter minimum" value={fact.minimum} />
          <Fact label="Last spring frost" value={fact.lastFrost} />
          <Fact label="First fall frost" value={fact.firstFrost} />
        </dl>
      </article>

      <div>
        <p className="font-display text-sm text-moss">Month</p>
        <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Choose a month">
          {SHORT_MONTHS.map((label, index) => (
            <button
              key={label}
              type="button"
              className={`${chip(month === index)} min-w-11 justify-center`}
              aria-pressed={month === index}
              aria-label={MONTHS[index]}
              onClick={() => setMonth(index)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {month !== null ? (
        <article className="border-l-2 border-clay bg-paper-deep px-4 py-4">
          <h3 className="font-display text-xl">
            {MONTHS[month]} in zone {zone}
          </h3>
          <p className="mt-2">{MONTH_NOTES[band.id][month]}</p>
          <p className="mt-3 text-sm text-muted">
            {inPlay.length
              ? `In play: ${inPlay.map((id) => cropById(id)?.name ?? id).join(", ")}.`
              : "Nothing on the sowing list. The work this month is beds, covers, seed, or waiting."}
          </p>
        </article>
      ) : (
        <p className="text-muted">Matching the calendar to this month…</p>
      )}

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter crops">
        {(
          [
            ["all", "All ten"],
            ["now", "In play"],
            ["hardy", "Stand cold"],
            ["shy", "Quit in heat"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={chip(filter === id)}
            aria-pressed={filter === id}
            onClick={() => setFilter(id)}
          >
            {label}
          </button>
        ))}
      </div>

      {crops.length === 0 ? (
        <p className="border border-rule px-4 py-4">
          Nothing in this filter for {month === null ? "this" : MONTHS[month]}. Try “All ten,” or read the month note — some months are for seed and soil, not a new row.
        </p>
      ) : (
        <div className="space-y-3">
          {crops.map((crop) => (
            <article key={crop.id} className="border border-rule px-4 py-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl">{crop.name}</h3>
                {month !== null && inPlay.includes(crop.id) ? (
                  <span className="font-display text-sm text-moss">In play</span>
                ) : null}
              </div>
              <p className="text-sm text-muted">
                {FROST_LABEL[crop.frost]} · {HEAT_LABEL[crop.heat]} · seed {crop.seedYears}
              </p>
              <p className="mt-2">
                <span className="font-display">Spring. </span>
                {crop.spring}
              </p>
              <p className="mt-2">
                <span className="font-display">Fall. </span>
                {crop.fall}
              </p>
            </article>
          ))}
        </div>
      )}

      <div className="min-w-0 max-w-full overflow-x-auto border border-rule">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <caption className="border-b border-rule px-3 py-3 text-left font-display text-base text-moss">
            Whole zones, for when you are between numbers
          </caption>
          <thead className="bg-paper-deep">
            <tr>
              {["Zone", "Winter minimum", "Last spring frost", "First fall frost"].map((col) => (
                <th key={col} className="px-3 py-2 font-display font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ZONES.map((item) => (
              <tr
                key={item.zone}
                className={item.zone === zone ? "border-t border-rule bg-moss-soft" : "border-t border-rule"}
              >
                <th className="px-3 py-2 font-display">{item.zone}</th>
                <td className="px-3 py-2">{item.minimum}</td>
                <td className="px-3 py-2">{item.lastFrost}</td>
                <td className="px-3 py-2">{item.firstFrost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-muted">
        Minimums are the USDA average annual extreme low. Slide every date two weeks toward your real last frost. Coastal fog, high elevation, and a south wall all beat the printed zone.
      </p>
    </div>
  );
}

const WASH_STEPS = [
  {
    id: "garden",
    title: "Shake soil off in the row",
    text: "Do it over the bed, not over the basket. Mud you leave outside does not have to be washed out of a curl.",
  },
  {
    id: "shade",
    title: "Get the cut into the shade",
    text: "Spread warm leaves. An hour in a hot basket starts the rot before you ever reach the sink.",
  },
  {
    id: "basin",
    title: "Clean the basin, then fill it with cold water",
    text: "The sink is part of the wash. Greens should not mop yesterday’s counter.",
  },
  {
    id: "swish",
    title: "Swish, then wait",
    text: "A short pause lets sand drop. Aphids let go if you give curly kale a few minutes.",
  },
  {
    id: "lift",
    title: "Lift the leaves out",
    text: "Empty the basin after the leaves are gone. Pouring the water through them puts the grit back on.",
  },
  {
    id: "again",
    title: "Repeat until the water stays clear",
    text: "Spinach and mizuna often need three rounds. Lettuce often needs one. Bok choy needs the heart opened.",
  },
  {
    id: "dry",
    title: "Spin or towel until the shine is gone",
    text: "Surface water is what turns a box to slime. Dry the towel between batches if you are washing a lot.",
  },
  {
    id: "box",
    title: "Box them loosely, cold, away from apples",
    text: "A dry towel in the container, lid not sealed flat, crisper near freezing. Pull any leaf that yellows.",
  },
];

export function WashBench() {
  const done = useShelf((state) => state.wash);
  const toggle = useShelf((state) => state.toggleWash);
  const reset = useShelf((state) => state.resetWash);
  const finished = WASH_STEPS.filter((step) => done.includes(step.id)).length;

  return (
    <section className="my-6" aria-label="Wash checklist">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-display text-lg">
          {finished} of {WASH_STEPS.length} done
        </p>
        <button type="button" onClick={reset} className={chipOff}>
          <RotateCcw className="size-4" aria-hidden="true" />
          Clear checks
        </button>
      </div>
      <ol className="mt-3 border-t border-rule">
        {WASH_STEPS.map((step, index) => {
          const on = done.includes(step.id);
          return (
            <li key={step.id} className="border-b border-rule">
              <button
                type="button"
                className="flex w-full min-h-11 items-start gap-3 py-3 text-left"
                aria-pressed={on}
                onClick={() => toggle(step.id)}
              >
                <span
                  className={
                    on
                      ? "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-moss bg-moss text-paper"
                      : "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-rule font-display text-sm text-moss"
                  }
                  aria-hidden="true"
                >
                  {on ? <Check className="size-4" /> : index + 1}
                </span>
                <span>
                  <span className="block font-display text-lg">{step.title}</span>
                  <span className="mt-1 block text-muted">{step.text}</span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
