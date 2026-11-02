export type Frost = "tender" | "light" | "hardy";
export type Heat = "shy" | "fair" | "steady";

export type Crop = {
  id: string;
  name: string;
  latin: string;
  family: string;
  daysBaby: string;
  daysMature: string;
  sowDepth: string;
  spacing: string;
  seedYears: string;
  germDays: string;
  pollination: string;
  isolation: string;
  life: "annual" | "biennial";
  frost: Frost;
  heat: Heat;
  spring: string;
  fall: string;
  harvest: string;
  seed: string;
  wash: string;
};

export const CROPS: Crop[] = [
  {
    id: "lettuce",
    name: "Lettuce",
    latin: "Lactuca sativa",
    family: "Asteraceae",
    daysBaby: "25–35",
    daysMature: "45–70",
    sowDepth: "1/8 in, barely covered",
    spacing: "4 in baby, 8–12 in heads",
    seedYears: "3–6 years",
    germDays: "2–10 days",
    pollination: "Mostly self-pollinated",
    isolation: "10–20 ft from other lettuce is enough for a home garden",
    life: "annual",
    frost: "light",
    heat: "shy",
    spring: "Start 4 weeks before the last frost, and keep sowing for 2 weeks after. In heat, sow only in afternoon shade.",
    fall: "Sow 8–10 weeks before the first frost so heads size up in cool weather.",
    harvest:
      "Cut baby leaf about 1 inch above the crown so it can regrow, or take a firm head at the soil line. Loose-leaf types also give outer leaves for weeks.",
    seed: "Leave the slowest plant to bolt — the one that stayed mild. Flowers look like tiny dandelions. Seed is ripe when the heads turn fluffy, two or three weeks after bloom. Shake it into a bag. Wind will take it if you wait an extra day.",
    wash: "Usually the cleanest crop here. One cold bath is enough. Dry it at once; wet oakleaf turns to slime.",
  },
  {
    id: "spinach",
    name: "Spinach",
    latin: "Spinacia oleracea",
    family: "Amaranthaceae",
    daysBaby: "25–30",
    daysMature: "40–50",
    sowDepth: "1/2 in",
    spacing: "3–4 in, rows 12 in",
    seedYears: "3 years",
    germDays: "5–10 days",
    pollination: "Wind. Plants are male or female.",
    isolation: "Crosses readily with other spinach. Save seed from 15–20 plants so both sexes are present.",
    life: "annual",
    frost: "hardy",
    heat: "shy",
    spring: "Sow as soon as the soil can be worked, as early as 6 weeks before the last frost. It germinates in cold soil and bolts in heat.",
    fall: "Sow 6–8 weeks before the first frost. Fall spinach is sweeter and slower to bolt.",
    harvest:
      "Take outer leaves, or cut the whole plant, before a flower stalk rises in the center. Bolted spinach turns bitter and is not worth washing.",
    seed: "You need a small crowd, not one plant. Seed clusters ripen tan and hard. Strip them into a bag and rub the hulls apart. Prickly-seeded types irritate bare fingers.",
    wash: "The grittiest leaf in this book. Swish, lift the leaves out, and repeat until the basin stays clear. Sand hides in the crown.",
  },
  {
    id: "kale",
    name: "Kale",
    latin: "Brassica oleracea",
    family: "Brassicaceae",
    daysBaby: "25–30",
    daysMature: "55–75",
    sowDepth: "1/4–1/2 in",
    spacing: "12–18 in",
    seedYears: "4–5 years",
    germDays: "5–10 days",
    pollination: "Insects",
    isolation: "Crosses with every other Brassica oleracea: collards, cabbage, broccoli, Brussels sprouts, cauliflower, kohlrabi",
    life: "biennial",
    frost: "hardy",
    heat: "fair",
    spring: "Start indoors about 6 weeks before the last frost. Transplant 2–4 weeks before that frost, under cover if nights are still hard.",
    fall: "Transplant 10–12 weeks before the first frost so the plants are sturdy when cold arrives. Flavor improves after a frost.",
    harvest:
      "Twist or cut the lower leaves and always leave the growing tip. Stripping the crown stops the plant. A single plant can feed a kitchen for months.",
    seed: "Kale is a biennial. It must feel winter, then flower the next spring. In zones 7 and warmer, leave it in the bed under cover. In colder zones, dig plants with roots on, store them near freezing and slightly damp — not dry like seed — and replant in spring. Pods turn tan and shatter. Cut branches into a bag while some pods are still closed.",
    wash: "Aphids sit in the curls. Soak in cold water for several minutes, then rinse. Strip a woody midrib before it goes in the bowl.",
  },
  {
    id: "chard",
    name: "Swiss chard",
    latin: "Beta vulgaris",
    family: "Amaranthaceae",
    daysBaby: "30",
    daysMature: "50–60",
    sowDepth: "1/2 in",
    spacing: "8–12 in",
    seedYears: "4–5 years",
    germDays: "5–14 days",
    pollination: "Wind",
    isolation: "Crosses with all beets and all chard. A home garden rarely keeps a strain pure if a beet flowers nearby.",
    life: "biennial",
    frost: "light",
    heat: "steady",
    spring: "Direct-sow about 2 weeks before the last frost, or transplant just after. Each corky cluster may throw up several seedlings — thin to one.",
    fall: "Sow in midsummer, about 10 weeks before the first frost, for stems through autumn.",
    harvest:
      "Cut outer stalks at the base with a knife. Leave the heart. Pulling by hand tears the crown and invites rot.",
    seed: "In the second year a tall, branched stalk appears. Corky clusters turn brown. Cut the stalk, finish drying it under cover, then rub the seed free. Label the year, and write down whether any beet flowered within sight.",
    wash: "Rinse stems and leaves. Grit collects along the rib and where soil splashed the stalk. The leaf itself is easier than curly kale.",
  },
  {
    id: "arugula",
    name: "Arugula",
    latin: "Eruca vesicaria",
    family: "Brassicaceae",
    daysBaby: "21",
    daysMature: "35–45",
    sowDepth: "1/4 in",
    spacing: "4–6 in",
    seedYears: "3–5 years",
    germDays: "3–7 days",
    pollination: "Insects, and it can set seed on its own",
    isolation: "Separate arugula varieties by a few hundred feet if you want them back true. It does not cross with kale.",
    life: "annual",
    frost: "hardy",
    heat: "shy",
    spring: "Direct-sow 4 weeks before the last frost, then every 2 weeks. Heat makes it sharp, then sends it to flower.",
    fall: "Sow 6 weeks before the first frost, and again under a cover. Fall leaves stay milder.",
    harvest:
      "Cut young leaves for a mild taste. Older leaves are hotter, which some kitchens want and some do not. A cut 1 inch above the crown usually regrows once or twice.",
    seed: "One of the easier crops. Pods are thin and pointed, and they shatter. Pull plants when most pods are brown and hang them head-down in a bag. Wild arugula (Diplotaxis) is a different plant and does not cross with this one.",
    wash: "Tender. One gentle bath. Do not grind the leaves against the colander.",
  },
  {
    id: "collards",
    name: "Collards",
    latin: "Brassica oleracea",
    family: "Brassicaceae",
    daysBaby: "30",
    daysMature: "60–85",
    sowDepth: "1/4–1/2 in",
    spacing: "18 in",
    seedYears: "4–5 years",
    germDays: "5–10 days",
    pollination: "Insects",
    isolation: "Same species as kale. If both flower in one garden, the seed is a blend.",
    life: "biennial",
    frost: "hardy",
    heat: "fair",
    spring: "Transplant around the last frost. Collards take more summer heat than kale, but they still prefer the shoulders of the year.",
    fall: "Start 12–14 weeks before the first frost. A fall planting is the one that tastes like the crop is supposed to.",
    harvest:
      "Take lower leaves the way you do with kale, and leave the bud. A light frost sweetens them. In mild zones a plant can stand all winter.",
    seed: "Treat it as kale's sibling. Overwinter the best plant, not the biggest stack of leaves from a struggling one. Bag the pods before they split. Do not save collard seed from a bed where broccoli or kale also flowered.",
    wash: "Broad leaves rinse more easily than curled kale. Check the underside for cabbageworm frass — dark green pellets — and wipe the midrib.",
  },
  {
    id: "mustard",
    name: "Mustard greens",
    latin: "Brassica juncea",
    family: "Brassicaceae",
    daysBaby: "21",
    daysMature: "40–50",
    sowDepth: "1/4 in",
    spacing: "6–12 in",
    seedYears: "4 years",
    germDays: "4–8 days",
    pollination: "Insects",
    isolation: "Crosses with other Brassica juncea, not with kale and not with bok choy",
    life: "annual",
    frost: "hardy",
    heat: "shy",
    spring: "Direct-sow about 4 weeks before the last frost. Succession keeps the heat from making every leaf fiery at once.",
    fall: "Sow 6–8 weeks before the first frost. This is the milder sowing.",
    harvest:
      "Young leaves are gentler. Cut and come again, or pull the plant when the leaves are full. Once the weather turns hot, expect spice, then a flower stalk.",
    seed: "Most gardens get seed the same season the plant bolts. Pods shatter as they tan. Cut stalks into a paper bag. This is not kale's species, so the two can flower side by side without mixing.",
    wash: "Fringed leaves hide grit. Soak, lift, and drain. The flavor is strong enough that a short soak will not wash it out.",
  },
  {
    id: "bokchoy",
    name: "Bok choy",
    latin: "Brassica rapa",
    family: "Brassicaceae",
    daysBaby: "30",
    daysMature: "45–60",
    sowDepth: "1/4 in",
    spacing: "6–10 in",
    seedYears: "4 years",
    germDays: "4–8 days",
    pollination: "Insects",
    isolation: "Crosses with mizuna, tatsoi, napa cabbage, and turnips. It does not cross with kale.",
    life: "annual",
    frost: "tender",
    heat: "shy",
    spring: "Time it so heads mature in cool weather. Sow or transplant starting 2–4 weeks before the last frost. Spring crops bolt sooner than fall crops.",
    fall: "Sow 6–8 weeks before the first frost. A hard freeze ruins a tight head, so do not push the date in a cold zone.",
    harvest:
      "Cut the whole head at the soil line when the base is swollen and before any flower stalk shows. Thinning gives you baby plants earlier.",
    seed: "A bolted spring plant often sets seed the same year. If mizuna or a turnip flowers in the same garden, this seed will not come back as bok choy. Dry the pods in a bag and thresh when they are brittle.",
    wash: "Soil packs into the heart. Split the base enough to flush between the stalks, then rinse. Do not skip the center.",
  },
  {
    id: "mizuna",
    name: "Mizuna",
    latin: "Brassica rapa",
    family: "Brassicaceae",
    daysBaby: "21",
    daysMature: "40",
    sowDepth: "1/4 in",
    spacing: "6–8 in",
    seedYears: "4 years",
    germDays: "4–7 days",
    pollination: "Insects",
    isolation: "Same crossing group as bok choy and turnips. Save one of them in flower, not all three.",
    life: "annual",
    frost: "hardy",
    heat: "shy",
    spring: "Direct-sow 4 weeks before the last frost. It is fast, so a short row every two weeks is better than one large sowing.",
    fall: "One of the best fall cuts. Sow 6 weeks before the first frost, then again under cover.",
    harvest:
      "Cut above the crown and it resprouts several times. The leaf is milder than mustard. Take it young if you want it in a mixed salad rather than a braise.",
    seed: "Pods shatter. Bag the stalks as they tan. Because it shares a species with bok choy, flowering both in one year gives you a mystery green next spring.",
    wash: "The lobes trap sand. A cold soak, then a lift out of the water, clears them. Spin dry before it goes in the fridge.",
  },
  {
    id: "cilantro",
    name: "Cilantro",
    latin: "Coriandrum sativum",
    family: "Apiaceae",
    daysBaby: "30–45 for leaves",
    daysMature: "90–120 for seed",
    sowDepth: "1/4–1/2 in",
    spacing: "4–6 in",
    seedYears: "2–3 years",
    germDays: "7–14 days",
    pollination: "Insects. Flowers can also pollinate themselves.",
    isolation: "Varieties cross. A few hundred feet between kinds is a fair home standard.",
    life: "annual",
    frost: "light",
    heat: "shy",
    spring: "Direct-sow about 2 weeks before the last frost, then every 2–3 weeks. It resents transplanting because of the taproot.",
    fall: "Sow about 6 weeks before the first frost. A fall sowing often outlasts every spring one.",
    harvest:
      "Cut leaves when stems are 4–6 inches, leaving the growing center, or shear the top third. When the flower stalk rises, leaf flavor changes. Let it rise if you want coriander.",
    seed: "The easiest seed in this book. Umbels go from green seeds to tan seeds. Cut the heads into a paper bag before they drop. Dry until the round seeds fall off. What you plant next year is the spice.",
    wash: "Hold the bunch by the stems and swish. Grit collects at the tie. Pat dry. Wet cilantro stored in a closed box turns dark.",
  },
];

export function cropById(id: string | undefined): Crop | undefined {
  if (!id) return undefined;
  return CROPS.find((crop) => crop.id === id);
}

export const FROST_LABEL: Record<Frost, string> = {
  tender: "Hurt by a hard freeze",
  light: "Takes a light frost",
  hardy: "Stands real cold",
};

export const HEAT_LABEL: Record<Heat, string> = {
  shy: "Bolts in heat",
  fair: "Tolerates a warm spell",
  steady: "The one that keeps going",
};
