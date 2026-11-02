import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Shelf = {
  bookmarks: string[];
  lastChapter: string;
  started: boolean;
  zone: number;
  wash: string[];
  toggleBookmark: (id: string) => void;
  markRead: (id: string) => void;
  setZone: (zone: number) => void;
  toggleWash: (id: string) => void;
  resetWash: () => void;
};

export const useShelf = create<Shelf>()(
  persist(
    (set) => ({
      bookmarks: [],
      lastChapter: "crops",
      started: false,
      zone: 6,
      wash: [],
      toggleBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.includes(id)
            ? state.bookmarks.filter((item) => item !== id)
            : [...state.bookmarks, id],
        })),
      markRead: (id) => set({ lastChapter: id, started: true }),
      setZone: (zone) => set({ zone }),
      toggleWash: (id) =>
        set((state) => ({
          wash: state.wash.includes(id)
            ? state.wash.filter((item) => item !== id)
            : [...state.wash, id],
        })),
      resetWash: () => set({ wash: [] }),
    }),
    { name: "greens-field-book", skipHydration: true },
  ),
);

export function useShelfHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const unsub = useShelf.persist.onFinishHydration(() => setHydrated(true));
    void useShelf.persist.rehydrate();
    if (useShelf.persist.hasHydrated()) setHydrated(true);
    return unsub;
  }, []);
  return hydrated;
}
