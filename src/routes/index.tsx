import { createFileRoute } from "@tanstack/react-router";
import { BookApp } from "@/components/book-app";
import { CHAPTERS } from "@/data/chapters";
import { CROPS } from "@/data/crops";
import type { BookSearch } from "@/data/search";

const CHAPTER_IDS = new Set(["cover", ...CHAPTERS.map((chapter) => chapter.id)]);
const CROP_IDS = new Set(CROPS.map((crop) => crop.id));

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): BookSearch => {
    const chapter =
      typeof search.chapter === "string" && CHAPTER_IDS.has(search.chapter) ? search.chapter : "cover";
    const zoneNum = typeof search.zone === "number" ? search.zone : Number(search.zone);
    const zone = zoneNum >= 3 && zoneNum <= 11 ? Math.round(zoneNum) : undefined;
    const crop = typeof search.crop === "string" && CROP_IDS.has(search.crop) ? search.crop : undefined;
    return { chapter, zone, crop };
  },
  component: function Home() {
    const search = Route.useSearch();
    return <BookApp search={search} />;
  },
});
