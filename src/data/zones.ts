import { CROPS } from "@/data/crops";

export type BandId = "cold" | "cool" | "mild" | "warm" | "hot";

export type Band = {
  id: BandId;
  zones: number[];
  label: string;
  character: string;
};

export const BANDS: Band[] = [
  {
    id: "cold",
    zones: [3, 4],
    label: "Zones 3–4",
    character: "A short, cold season. Fall sowing is a race, and winter harvest needs a frame.",
  },
  {
    id: "cool",
    zones: [5, 6],
    label: "Zones 5–6",
    character: "The classic four-season greens year. Spring and a serious August sowing both matter.",
  },
  {
    id: "mild",
    zones: [7, 8],
    label: "Zones 7–8",
    character: "Long shoulder seasons. Zone 8 can cut kale and spinach in winter under a cover.",
  },
  {
    id: "warm",
    zones: [9, 10],
    label: "Zones 9–10",
    character: "Greens are a cool-season crop. September, not May, is the big planting month.",
  },
  {
    id: "hot",
    zones: [11],
    label: "Zone 11",
    character: "Grow from late autumn through winter. Summer is for drying seed, not sowing spinach.",
  },
];

export type ZoneFact = {
  zone: number;
  minimum: string;
  lastFrost: string;
  firstFrost: string;
};

/** USDA whole-zone winter minimums, and typical frost windows — not a local forecast. */
export const ZONES: ZoneFact[] = [
  { zone: 3, minimum: "−40 to −30°F", lastFrost: "late May–early June", firstFrost: "early–mid September" },
  { zone: 4, minimum: "−30 to −20°F", lastFrost: "mid–late May", firstFrost: "late September" },
  { zone: 5, minimum: "−20 to −10°F", lastFrost: "early–mid May", firstFrost: "early–mid October" },
  { zone: 6, minimum: "−10 to 0°F", lastFrost: "mid–late April", firstFrost: "mid–late October" },
  { zone: 7, minimum: "0 to 10°F", lastFrost: "early–mid April", firstFrost: "early November" },
  { zone: 8, minimum: "10 to 20°F", lastFrost: "mid–late March", firstFrost: "mid November" },
  { zone: 9, minimum: "20 to 30°F", lastFrost: "mid February", firstFrost: "early December" },
  { zone: 10, minimum: "30 to 40°F", lastFrost: "late January, often rare", firstFrost: "late December, often rare" },
  { zone: 11, minimum: "40 to 50°F", lastFrost: "essentially frost-free", firstFrost: "essentially frost-free" },
];

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const all = CROPS.map((crop) => crop.id);
const hardyFall = ["kale", "collards", "spinach", "lettuce", "arugula", "mustard", "mizuna", "bokchoy", "cilantro", "chard"];

export const MONTH_NOTES: Record<BandId, string[]> = {
  cold: [
    "Seed orders and a germination test are the whole garden. If fewer than half of last year’s lettuce or kale sprout, buy fresh.",
    "Still winter. A windowsill tray is practice, not a harvest plan.",
    "Start kale, collards, and lettuce indoors under bright light, six to eight weeks before your last frost.",
    "When the soil crumbles, direct-sow spinach, arugula, mizuna, and mustard, and set hardy transplants under a row cover.",
    "This is the main outdoor planting month. Transplant chard and kale, and sow lettuce and cilantro every two weeks.",
    "Cut spring spinach before it bolts. Keep lettuce in afternoon shade. Stop sowing anything that needs a long cool run.",
    "Heat is the problem. Hold fall transplants of kale and collards until the last week, then harden them off.",
    "The fall garden is now or never. Sow spinach, lettuce, and the fast mustards at once. A zone 3 frost can arrive in early September.",
    "Frost is here or close. Cut tender heads, cover kale, and sow only inside a cold frame.",
    "Mulch crowns, clear spent beds, and bring seed jars indoors before a shed swings through freeze and damp.",
    "Write down what bolted and what tasted sweet after frost. Fix labels while you still remember the variety.",
    "Nothing to sow. Sharpen the scissors, oil the harvest knife, and count packets.",
  ],
  cool: [
    "Order open-pollinated seed, and test anything older than three years.",
    "In zone 6, start lettuce and kale indoors at the end of the month. Zone 5 can wait until March.",
    "Direct-sow spinach, arugula, and mizuna when the soil can be worked. Keep a row cover for hard nights.",
    "Peak planting. Transplant kale and chard, and begin a lettuce succession every two weeks.",
    "Sow cilantro and a last bok choy. Pick outer kale leaves so the plants stay young into summer.",
    "Spring spinach is finished. Sow only heat-tolerant lettuce in shade, and start fall kale indoors late in the month.",
    "Set out fall kale and collards. Water deeply in the morning. Do not sow spinach yet — it will bolt.",
    "The best sowing month of the year. Spinach, lettuce, arugula, mustard, mizuna, and bok choy all belong in the ground.",
    "Early on, sow a last spinach and arugula. Have row cover ready before the first cold nights.",
    "First frost is typical. Leave kale and collards. Cut lettuce before a hard freeze. A light frost improves the hardy leaves.",
    "Outdoor sowing is done. A cold frame can still carry spinach that is already up.",
    "Keep seed cool and dry, and note which bed should get compost before spring.",
  ],
  mild: [
    "Zone 8 can sow spinach and lettuce under cover. Zone 7 is for indoor starts and bed prep.",
    "Direct-sow spinach, arugula, cilantro, and kale. Transplant anything started in January.",
    "The generous month. Succession-sow lettuce, and keep cilantro coming before the days get too long.",
    "Plant chard and collards for the warm months. In zone 8, shift lettuce toward afternoon shade.",
    "Harvest hard. New sowings should be chard, and maybe a bolt-resistant lettuce. Leave a few of the best plants if you want seed.",
    "Pause. Pull bolted cilantro unless you are saving it. Start fall transplants only if you can keep them cool.",
    "Late in the month, sow and transplant the fall garden. Kale, collards, and chard go first.",
    "Fill the gaps. Spinach, lettuce, mustards, bok choy, and arugula all go in now.",
    "A second wave. Cilantro sown now often lasts deep into fall. Thin, and eat the thinnings.",
    "Zone 8 can still sow fast greens. Zone 7 should be protecting, not starting, except under cover.",
    "Harvest through light frost. Kale, collards, and spinach can stand a zone 8 winter with a cover.",
    "Zone 8 is a winter kitchen garden. Zone 7 is a cold-frame garden. Both are a seed-inventory month.",
  ],
  warm: [
    "This is spring. Sow and transplant the full list, and repeat lettuce every two weeks.",
    "Keep sowing. Cilantro and spinach are excellent now and will not be in May.",
    "Still a prime month. Choose slow-bolt lettuce, and decide which plants you will let flower.",
    "Finish cool-season sowings early. Chard and collards carry you toward summer. Shade cloth goes on the lettuce.",
    "Mostly harvest and seed. Leave the healthiest, slowest lettuce, and a cilantro plant if you want coriander. Pull the rest.",
    "Do not fight July. Water the chard, mulch, and let seed heads dry if the rain allows.",
    "Rest the beds and add compost. No outdoor spinach. A few kale transplants can live in deep shade if you must.",
    "In zone 9 the last week can take kale transplants. Otherwise wait. The soil is still too hot for spinach.",
    "The planting month. Sow everything. Warm soil germinates fast — keep the surface damp until the rows are up.",
    "Sow again. This is the start of the long harvest. Thin lettuce and eat the babies.",
    "A small succession of lettuce, arugula, and cilantro. Kale planted in September is ready for outer leaves.",
    "Peak salads. Sow a backup row of spinach and lettuce so January does not run out.",
  ],
  hot: [
    "The heart of the greens season. Sow lettuce, spinach, kale, and cilantro in succession.",
    "Keep sowing the fast crops. Spinach and cilantro fade as soon as nights stay warm.",
    "Last easy month for spinach and cilantro. Kale and chard can stay longer.",
    "Harvest, and shift new plantings to chard in bright shade. Stop sowing lettuce in the open.",
    "The garden wants heat crops, not salad. Save seed from anything that bolted late and stayed true to type.",
    "Leave beds mulched. Drying seed is the greens work this month.",
    "Nothing to sow. Keep stored seed in the coolest room of the house, not the shed.",
    "Still too hot. Prepare beds and water for October.",
    "Only the very end of the month, and only if nights have dropped. Otherwise wait.",
    "Begin again with kale, chard, collards, and a first lettuce once nights are comfortable.",
    "Full sowing month. Everything on the list can go in.",
    "Sow what you want to cut in February. Repeat a short row every two or three weeks.",
  ],
};

export const IN_PLAY: Record<BandId, string[][]> = {
  cold: [
    [],
    [],
    ["kale", "collards", "lettuce"],
    ["spinach", "arugula", "mizuna", "mustard", "kale"],
    all,
    ["lettuce", "chard", "cilantro"],
    ["kale", "collards"],
    ["kale", "collards", "spinach", "lettuce", "arugula", "mustard", "mizuna", "bokchoy"],
    ["spinach"],
    [],
    [],
    [],
  ],
  cool: [
    [],
    ["kale", "lettuce"],
    ["spinach", "arugula", "mizuna", "mustard", "kale", "lettuce"],
    all,
    ["lettuce", "chard", "kale", "collards", "cilantro", "bokchoy", "arugula"],
    ["chard", "lettuce", "kale"],
    ["kale", "collards", "chard"],
    hardyFall,
    ["spinach", "lettuce", "arugula", "mizuna", "mustard", "cilantro", "kale"],
    ["spinach", "kale", "collards"],
    [],
    [],
  ],
  mild: [
    ["spinach", "lettuce", "kale", "arugula", "mizuna"],
    ["spinach", "lettuce", "kale", "arugula", "mustard", "mizuna", "cilantro", "collards", "chard", "bokchoy"],
    all,
    ["lettuce", "chard", "kale", "collards", "cilantro", "arugula"],
    ["chard", "collards", "lettuce"],
    ["chard"],
    ["kale", "collards", "chard"],
    hardyFall,
    all,
    ["spinach", "lettuce", "arugula", "mizuna", "mustard", "cilantro", "kale", "chard"],
    ["spinach", "lettuce", "kale", "arugula", "mizuna", "collards"],
    ["kale", "spinach", "lettuce", "collards"],
  ],
  warm: [
    all,
    all,
    all,
    ["chard", "collards", "kale", "lettuce"],
    ["chard"],
    [],
    [],
    ["kale"],
    all,
    all,
    all,
    all,
  ],
  hot: [
    all,
    all,
    ["lettuce", "spinach", "kale", "chard", "arugula", "cilantro", "mizuna", "collards"],
    ["chard", "collards"],
    [],
    [],
    [],
    [],
    [],
    ["kale", "chard", "collards", "lettuce"],
    all,
    all,
  ],
};

export function bandFor(zone: number): Band {
  return BANDS.find((band) => band.zones.includes(zone)) ?? BANDS[1];
}

export function zoneFact(zone: number): ZoneFact {
  return ZONES.find((item) => item.zone === zone) ?? ZONES[3];
}

for (const band of BANDS) {
  if (MONTH_NOTES[band.id].length !== 12 || IN_PLAY[band.id].length !== 12) {
    throw new Error(`Zone calendar for ${band.id} is not 12 months`);
  }
  for (const month of IN_PLAY[band.id]) {
    for (const id of month) {
      if (!CROPS.some((crop) => crop.id === id)) {
        throw new Error(`Unknown crop ${id} in ${band.id}`);
      }
    }
  }
}
