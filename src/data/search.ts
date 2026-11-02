export type BookSearch = {
  chapter: string;
  zone?: number;
  crop?: string;
};

export function bookSearch(chapter: string, zone?: number, crop?: string): BookSearch {
  const search: BookSearch = { chapter };
  if (zone !== undefined) search.zone = zone;
  if (crop) search.crop = crop;
  return search;
}
