import cover from "./plates/cover.jpg";
import leaves from "./plates/leaves.jpg";
import bed from "./plates/bed.jpg";
import harvest from "./plates/harvest.jpg";
import seed from "./plates/seed.jpg";
import jars from "./plates/jars.jpg";
import frost from "./plates/frost.jpg";
import wash from "./plates/wash.jpg";

export const PLATES = {
  cover,
  leaves,
  bed,
  harvest,
  seed,
  jars,
  frost,
  wash,
} as const;

export type PlateKey = keyof typeof PLATES;
