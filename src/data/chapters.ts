import type { PlateKey } from "@/assets/plates";

export type Block =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; title: string; text: string }
  | { type: "quote"; text: string };

export type Part =
  | { kind: "blocks"; blocks: Block[] }
  | { kind: "crops" }
  | { kind: "spacing" }
  | { kind: "harvest" }
  | { kind: "crosses" }
  | { kind: "seedbench"; focus: "seed" | "store" }
  | { kind: "zones" }
  | { kind: "wash" }
  | { kind: "rinses" };

export type Chapter = {
  id: string;
  numeral: string;
  title: string;
  kicker: string;
  summary: string;
  plate: PlateKey;
  plateAlt: string;
  plateCaption: string;
  parts: Part[];
};

export const CHAPTERS: Chapter[] = [
  {
    id: "crops",
    numeral: "I",
    title: "The crops",
    kicker: "Ten leaves",
    summary: "What this book means by greens, and how the ten crops differ.",
    plate: "leaves",
    plateAlt: "Six leaves arranged on cream paper: kale, lettuce, spinach, chard, arugula, and cilantro.",
    plateCaption: "Kale, lettuce, spinach, chard, arugula, and cilantro — the mix most kitchens actually repeat.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "A green, in this book, is a leaf you sow in the cool part of the year and cut while it is still a leaf. Not a head of cabbage. Not a handful of sprouts from a jar. Ten crops cover almost every salad, braise, and seed packet a home garden needs: lettuce, spinach, kale, Swiss chard, arugula, collards, mustard, bok choy, mizuna, and cilantro.",
          },
          {
            type: "p",
            text: "They are not interchangeable. Spinach bolts when kale is just getting good. Chard will still be standing when lettuce has gone bitter. Cilantro becomes the seed you cook with. Kale and chard will not flower until they have lived through a winter. If you save seed without knowing which plants share a species, next year’s row will be a stranger.",
          },
          {
            type: "h2",
            text: "How to use the cards",
          },
          {
            type: "p",
            text: "Open a crop for the way it is sown, cut, washed, and sent to seed. The later chapters teach the methods those lines depend on: soil and succession, the cut itself, isolation, drying, your zone, and the sink. Tap “Seed notes” on a card when you want the jar-label bench with that crop already chosen.",
          },
          {
            type: "note",
            title: "Open-pollinated, or don’t bother",
            text: "Seed from a hybrid packet (marked F1) grows a mix, not the plant you liked. Buy open-pollinated or heirloom seed in the year you plan to save.",
          },
        ],
      },
      { kind: "crops" },
    ],
  },
  {
    id: "ground",
    numeral: "II",
    title: "In the ground",
    kicker: "Growing",
    summary: "Light, soil, sowing, water, and how to keep a row coming.",
    plate: "bed",
    plateAlt: "A wooden raised bed of young salad greens in dark soil.",
    plateCaption: "Young rows in a raised bed. The soil is the crop; the leaves are what it spends.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "Greens are not hungry for drama. They want cool air, steady water, and soil that a hand can push into. Get those three right and the rest of this chapter is timing.",
          },
          {
            type: "h2",
            text: "Light",
          },
          {
            type: "p",
            text: "In spring and fall, full sun makes thicker leaves and faster heads. In summer, afternoon shade is not a compromise — it is how lettuce and cilantro stay in the ground an extra two weeks. A bed on the east side of a tall crop, or under a 30 to 40 percent shade cloth, is the usual fix. Winter greens in mild zones want the sun back. Do not leave the cloth on once the heat breaks.",
          },
          {
            type: "h2",
            text: "Soil",
          },
          {
            type: "p",
            text: "Aim for a loose, crumbly bed and a pH between 6.0 and 7.0. Spinach is the fussy one and prefers the upper end of that range; if it yellows in a bed where kale is fine, test before you pour on fertilizer. Work in finished compost before sowing. Greens are shallow-rooted, so a hard pan two inches down will stall them even when the surface looks rich.",
          },
          {
            type: "ul",
            items: [
              "Rake the bed level. Seed washed into a puddle germinates in a clump and nowhere else.",
              "Do not bury lettuce. It wants light. Press it onto damp soil and sift a veil of compost over it.",
              "Chard and spinach go deeper, about half an inch. Cilantro the same, and it wants to be sown where it will stay.",
              "Thin while the leaves are still baby-sized, and eat the thinnings. Crowded kale never becomes the plant on the packet.",
            ],
          },
          {
            type: "h2",
            text: "Water and feeding",
          },
          {
            type: "p",
            text: "A steady inch of water a week, on the soil rather than across the leaves, prevents the bitter, bolted taste people blame on the variety. Mulch after the seedlings are up so the surface does not crust. Greens like nitrogen, but compost at sowing and a light side-dressing later are enough. A heavy feed of fresh manure on a leaf crop is a food-safety problem, not a shortcut — see the sink chapter.",
          },
          {
            type: "h2",
            text: "Succession",
          },
          {
            type: "p",
            text: "One sowing of lettuce feeds you for ten days and then bolts in a chorus. Sow a short row every two weeks instead of a long row once. Pull the finished row, scratch the soil, and use that space again. Mark the date on a stake. Memory is a poor garden journal once three varieties are in the same bed.",
          },
          {
            type: "quote",
            text: "Sow less, more often. A twelve-foot row of arugula on the same day becomes a twelve-foot row of flowers.",
          },
          {
            type: "h2",
            text: "Heat, cold, and the cloth",
          },
          {
            type: "p",
            text: "Row cover, edges buried, is the single most useful tool in this book. In spring it holds a few degrees and keeps flea beetles and cabbage moths off the leaves. In a hot spell, switch to shade cloth. In fall, the row cover goes back on so a light freeze does not end the tender crops. Vent it on bright days. Greens steamed under plastic are not protected; they are cooked.",
          },
          {
            type: "h2",
            text: "When they bolt",
          },
          {
            type: "p",
            text: "Bolting is the plant leaving the leaf stage to flower. Long days, heat, drought, and crowding all push it. You cannot talk a bolted spinach plant back into being mild. Cut what is still good, and decide: pull it, or leave the best one for seed. Lettuce seed germinates poorly once the soil is over about 75°F. For a summer sowing, sow at dusk into soil you have shaded with a board, and take the board off the hour the row sprouts. Or start the plants indoors where the room is cool.",
          },
          {
            type: "h2",
            text: "Pests, without a shelf of bottles",
          },
          {
            type: "ul",
            items: [
              "Flea beetles leave shot holes in arugula and mustard. Cover the bed the day you sow, not the day you notice.",
              "Cabbageworms are the green caterpillars under kale and collards. Look for dark frass. Handpick. The cover prevents the moth from laying.",
              "Aphids cluster in new growth and in kale curls. A hard spray of water, morning after morning, clears a light case.",
              "Slugs take seedlings overnight. A board on the soil gives them a place to hide at dawn, which is when you remove them.",
              "Never save seed from a plant that was diseased. Leaf spots and mosaic travel further in a packet than in a salad.",
            ],
          },
          {
            type: "note",
            title: "Spacing at a glance",
            text: "Depth is measured after you firm the soil, not while it is fluffy. If a row fails, the cause is usually depth, dry surface, or hot soil — not a bad moon.",
          },
        ],
      },
      { kind: "spacing" },
    ],
  },
  {
    id: "cutting",
    numeral: "III",
    title: "The cutting",
    kicker: "Harvest the plant",
    summary: "When to cut, how much to take, and how to get the leaves out of the sun.",
    plate: "harvest",
    plateAlt: "Cut kale, lettuce, and arugula on linen beside garden scissors and a knife.",
    plateCaption: "A clean knife, a dry basket, and leaves cut before the day heats up.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "Harvest is a decision about the plant’s future, not only about dinner. Cut the wrong part of a kale plant and you end the crop. Cut lettuce in the afternoon heat and you bring home leaves that are already losing the water you paid for all week.",
          },
          {
            type: "h2",
            text: "Morning, while they are still full",
          },
          {
            type: "p",
            text: "Cut after the dew has dried and before the sun is high. Leaves are heaviest with water then, and they hold in the fridge. If you can only harvest in the evening, take them straight into shade and cool them — do not leave the basket on the path.",
          },
          {
            type: "h2",
            text: "The knife",
          },
          {
            type: "p",
            text: "Use scissors or a small knife you can clean. Wipe the blade when you move from a spotted plant to a clean one. Tearing chard by hand rips the crown. Twisting a kale leaf downward, close to the stem, frees it without that tear. Do not harvest into a bag you used for compost.",
          },
          {
            type: "h2",
            text: "Two ways to cut",
          },
          {
            type: "h3",
            text: "Cut and come again",
          },
          {
            type: "p",
            text: "For loose lettuce, arugula, mizuna, and young mustard, shear the canopy about an inch above the growing point. The stubs look brutal and then resprout. You usually get two or three cuts. Each one is a little rougher than the last. For kale, collards, and chard, do not shear the top. Take outer leaves only, and leave at least half the plant so it can feed itself.",
          },
          {
            type: "h3",
            text: "The whole plant",
          },
          {
            type: "p",
            text: "Heading lettuce, mature bok choy, and spinach that is about to bolt come out at the base. A head is ready when it has weight and the center has filled, not when the outer leaves are huge and the heart is still loose. Bok choy should be cut before you see a flower stalk. After that stalk shows, the head opens and turns sharp.",
          },
          {
            type: "h2",
            text: "What to leave in the bed",
          },
          {
            type: "ul",
            items: [
              "Yellow, slimy, or spotted leaves. They do not improve in the sink.",
              "Leaves from a plant you cannot name. This book is not a foraging guide.",
              "Anything recently sprayed, until the label’s interval has passed. If you did not write the date down, do not guess.",
              "The single best plant in the row, if you plan to save seed from that sowing. Mark it the day you decide, not after you have eaten it.",
            ],
          },
          {
            type: "h2",
            text: "Field heat",
          },
          {
            type: "p",
            text: "A warm leaf rots from the inside of the pile. Spread the cut in the shade, or rinse it in cold water and spin it dry if you will store it today. Muddy leaves can wait for the full wash in the sink chapter, but they should not wait in the sun. An hour in a hot car undoes a careful cut.",
          },
          {
            type: "note",
            title: "Taste changes before the plant looks finished",
            text: "Lettuce goes bitter a few days before the flower stalk is obvious. Spinach does the same. If a leaf tastes sharp or soapy and it did not last week, stop harvesting that plant for the table.",
          },
        ],
      },
      { kind: "harvest" },
    ],
  },
  {
    id: "seed",
    numeral: "IV",
    title: "Letting them go to seed",
    kicker: "Harvest the seed",
    summary: "Choose the plant, keep the cross off it, and catch the seed before it shatters.",
    plate: "seed",
    plateAlt: "Dried seed heads, round seeds, and blank kraft envelopes on an oak table.",
    plateCaption: "Dry heads, a paper bag, and envelopes. The writing comes after the seed is clean.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "Saving seed is how a garden stops being a customer. It is also how a garden fills itself with crosses you did not mean. The work is mostly patience and a label. The knowledge is which plants can pollinate each other, and when the seed is actually finished.",
          },
          {
            type: "h2",
            text: "Start with the right packet",
          },
          {
            type: "p",
            text: "Save from open-pollinated plants only. Pick the plant you want more of: slow to bolt, true to the leaf shape, not the one that merely got huge because it sat in the wet corner. Disease, bitterness, and a habit of flowering in the first hot week are all heritable enough to matter in a backyard.",
          },
          {
            type: "h2",
            text: "One plant is not a variety",
          },
          {
            type: "p",
            text: "Lettuce and cilantro can give useful home seed from one or two good plants, because they mostly pollinate themselves. Spinach cannot. It makes separate male and female plants and sheds pollen on the wind; save from a crowd of at least fifteen or twenty, or the next generation thins out. Kale’s seed from a single overwintered plant will grow, but a larger group keeps the strain steadier. For a kitchen garden, be honest about the goal: seed that grows a good green, not seed you could sell as a named variety.",
          },
          {
            type: "h2",
            text: "Biennials have to live through winter",
          },
          {
            type: "p",
            text: "Kale, collards, and chard flower in their second spring, after cold has told them the winter is over. In zones 7 and warmer they can stay in the garden under cover if the soil drains. In colder zones, dig the plant with soil on the roots, keep it just above freezing and slightly moist — a box in a cold garage, not a warm closet — and replant it when the ground can be worked. Dry storage, the kind you use for seed, will kill the plant you meant to replant.",
          },
          {
            type: "h2",
            text: "Ripe, then gone",
          },
          {
            type: "p",
            text: "Green seed does not store and often does not sprout. Wait until the plant looks finished: lettuce heads fluffy and pale, brassica pods tan and brittle, coriander seeds the color of straw, chard clusters brown and corky. Most of these shatter. The day before you think they are ready, pull or cut them into a paper bag. A rainstorm on ripe lettuce seed is how a crop ends on the path instead of in a jar.",
          },
          {
            type: "h2",
            text: "Thresh and winnow",
          },
          {
            type: "ol",
            items: [
              "Dry the stalks another week in a single layer, out of the sun’s full glare and away from mice.",
              "Crush pods and heads inside the bag, or between your palms over a tray. Gloves for prickly spinach.",
              "Shake the seed to the bottom. Lift off the big stems.",
              "Pour the rest from one bowl to another in a light breeze, or in front of a fan on low. Chaff blows off. Seed falls.",
              "Pick out stones and broken bits. Seed that looks moldy does not go in the jar with the rest.",
            ],
          },
          {
            type: "p",
            text: "The seed is not finished until it is dry enough to store. That test lives in the next chapter. Do not seal today’s harvest in glass tonight.",
          },
          {
            type: "note",
            title: "Who crosses with whom",
            text: "Species matters more than the common name. Kale and collards are one species. Bok choy and mizuna are another. Mustard is a third. Arugula is none of those.",
          },
        ],
      },
      { kind: "crosses" },
      {
        kind: "blocks",
        blocks: [
          {
            type: "h2",
            text: "Crop by crop",
          },
          {
            type: "p",
            text: "The notes below are the part that changes from plant to plant. Isolation distances for selling seed are longer than anything listed here. These are home-garden distances: good enough to keep dinner honest, not a certification.",
          },
        ],
      },
      { kind: "seedbench", focus: "seed" },
    ],
  },
  {
    id: "cupboard",
    numeral: "V",
    title: "The seed cupboard",
    kicker: "Store the seed",
    summary: "Dry it, label it, and keep it where the kitchen’s steam cannot reach.",
    plate: "jars",
    plateAlt: "Glass jars of seed on a dark wooden pantry shelf beside blank packets.",
    plateCaption: "Glass is fine once the seed is dry. The shelf should be the coolest, driest one in the house.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "Seed dies from warmth and damp more often than from age. A packet on top of the fridge, or in a greenhouse, can be worthless in a single summer. The same seed in a cool cupboard can outlast the years printed in the crop cards.",
          },
          {
            type: "h2",
            text: "The snap test",
          },
          {
            type: "p",
            text: "Dry seed until a typical seed snaps or shatters when you bend it, rather than folding. Lettuce and brassica seed should crack. Cilantro, which is a larger fruit, should be hard and glassy, not leathery. Spread the seed thin on a plate in a dry room for several days after winnowing. A fan helps. Direct sun cooks it. If you are unsure, wait two more days. Sealing damp seed grows mold, and mold does not stay in one jar.",
          },
          {
            type: "h2",
            text: "Where it lives",
          },
          {
            type: "ul",
            items: [
              "Short term, one to three years: an airtight jar in a dark closet that stays under about 60°F. A bedroom closet beats a kitchen shelf.",
              "Longer: the same jar in the refrigerator, with the seed already dry. Put a paper packet of dry milk or a silica gel pack in the jar, not loose against the seed.",
              "A freezer works only for seed that is fully dry, in a jar that stays shut. When you take it out, let the jar reach room temperature before you open it. Moisture from the air condenses on cold seed and undoes the year you just spent.",
              "Do not store seed in the shed if the shed freezes and then thaws damp. Temperature swings matter less than the damp that comes with them, but both are bad.",
            ],
          },
          {
            type: "h2",
            text: "The label is part of the seed",
          },
          {
            type: "p",
            text: "An unlabeled jar is a guess. Write the crop, the variety, the year, the bed, and whether anything in the same crossing group flowered nearby. Add the germination test when you do one. Pencil on a paper slip inside the jar outlasts ink on a lid that gets handled with wet hands.",
          },
          {
            type: "h2",
            text: "A germination test",
          },
          {
            type: "ol",
            items: [
              "Count ten seeds, or twenty if you can spare them. Ten is a rough percentage. Twenty is fairer.",
              "Lay them on a damp paper towel, not swimming. Fold, and slide the towel into a labeled bag.",
              "Keep it warm and out of the sun. Lettuce prefers the cooler end of room temperature.",
              "Check at the germination window on the crop card. Count anything with a root as sprouted.",
              "Percent is sprouted divided by the number you started. Under half, sow thicker or replace the packet. Under a fifth, compost it.",
            ],
          },
          {
            type: "p",
            text: "Run the test in late winter, before you need the seed, not the morning you planned to sow. The bench below copies a jar label and shows how long each crop usually keeps. Those years assume cool and dry. A humid jar does not get the long end of the range.",
          },
          {
            type: "note",
            title: "Mice and weevils",
            text: "Paper envelopes inside a tin, or glass with a tight lid, are the whole defense. A desk drawer is not airtight. If you see pinpoint holes in a brassica seed, do not sow it and do not store it next to clean seed.",
          },
        ],
      },
      { kind: "seedbench", focus: "store" },
    ],
  },
  {
    id: "zone",
    numeral: "VI",
    title: "Your zone",
    kicker: "A growing guide",
    summary: "What a USDA zone does and does not tell you, and what to sow this month.",
    plate: "frost",
    plateAlt: "Curly kale leaves edged with frost in a winter garden.",
    plateCaption: "Kale after a frost. The zone number is about this kind of cold, not about July.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "A USDA hardiness zone is the average coldest winter temperature, sorted into bands of ten degrees. It tells you whether kale, left outside, is making a reasonable bet. It does not tell you when your soil hits 75°F, how humid July is, or whether you garden on a hill. Zone 8 in a marine climate and zone 8 in a southern interior are different gardens that share a winter number.",
          },
          {
            type: "p",
            text: "Use the guide as a pattern, then slide it. If your last frost is two weeks earlier than the phrase under your zone, sow two weeks earlier. County extension frost dates beat anything printed in a book, including this one. Half zones (6a, 6b) exist; this book uses the whole number so the month notes stay readable.",
          },
          {
            type: "h2",
            text: "How to read the planner",
          },
          {
            type: "ul",
            items: [
              "Pick your zone. The frost line under it is typical, not a forecast for this year.",
              "The month opens on today. Change it when you are planning ahead.",
              "“In play” means those crops are worth starting now in that band — indoors or out, as the note says.",
              "Filter the list when you only want the hardy crops, or the ones that quit in heat.",
            ],
          },
          {
            type: "note",
            title: "Heat is the other map",
            text: "Spinach, cilantro, and lettuce fail in summer in almost every zone. Chard is the leaf that still earns its water. If your zone is warm but your summer is mild and foggy, you can ignore the pause months. If your zone is cool but your July is brutal, treat June like a warmer zone.",
          },
        ],
      },
      { kind: "zones" },
    ],
  },
  {
    id: "wash",
    numeral: "VII",
    title: "At the sink",
    kicker: "Cleaning the greens",
    summary: "How to get the grit out, dry the leaves, and keep them from rotting in the box.",
    plate: "wash",
    plateAlt: "A colander of wet salad leaves in a white sink beside a linen towel.",
    plateCaption: "Cold water, then a real drying. Wet leaves stored wet are compost with extra steps.",
    parts: [
      {
        kind: "blocks",
        blocks: [
          {
            type: "p",
            text: "Washing is not a ritual you do because a package told you to. Garden leaves carry soil, and soil carries the organisms you would rather not eat. The method is ordinary: cold water, a clean basin, and enough patience to lift the leaves out instead of pouring the dirty water off over them. Soap does not belong on a salad. Neither does a bleach guess.",
          },
          {
            type: "h2",
            text: "Two honest paths",
          },
          {
            type: "p",
            text: "If the leaves came in clean and dry and you will eat them in a day or two, you can store them unwashed and wash at the last minute. They often keep longer that way. If they are muddy, or you want them ready, wash now and dry them thoroughly before they go in the box. There is no third path where wet leaves sit in a sealed bag “just until tomorrow” and stay good.",
          },
          {
            type: "h2",
            text: "The basin, not the splash",
          },
          {
            type: "p",
            text: "Fill a clean basin with cold water. Add the leaves. Swish. Wait a few breaths so sand drops. Lift the leaves into a colander. Do not pour the basin through the leaves — that puts the grit back on them. If the water was cloudy or sandy, repeat. Spinach, mizuna, and curly kale often need three rounds. Lettuce often needs one.",
          },
          {
            type: "p",
            text: "Aphids let go in a soak of several minutes. Cabbageworm frass wipes off a collard midrib more reliably than it rinses. Bok choy has to be opened at the base or the heart stays packed with soil no matter how long you swish the outside.",
          },
          {
            type: "h2",
            text: "Dry is the storage secret",
          },
          {
            type: "p",
            text: "Spin the leaves, or roll them gently in a dry towel, until they are no longer glistening. A little surface moisture is what makes a container slime over by the second day. Line a box with a dry towel, add the leaves loosely, and keep a corner of the lid cracked or use a bag that is not sealed flat. The crisper should be cold, close to 32–36°F. The leaves themselves should be dry. Keep the box away from apples, pears, and bananas; the gas those fruits give off yellows greens early.",
          },
          {
            type: "p",
            text: "Spun-dry leaves often last five to ten days. Kale and collards outlast lettuce. Cilantro lasts longer as a stem bunch, dry, with a loose bag over the leaves, than it does chopped in a wet tub. Yellow leaves and slime come out the hour you see them, or they take the box with them.",
          },
          {
            type: "h2",
            text: "What not to use",
          },
          {
            type: "ul",
            items: [
              "Soap, dish liquid, or “produce wash” as a default. The useful advice for home kitchens is running water or a clean cold bath, then a rinse you would drink.",
              "A vinegar soak is optional and not required. If you use one — about a tablespoon of vinegar in a quart of water — rinse with plain water afterward or the salad tastes pickled. It is not a sterilizer.",
              "Hot water. It wilts the leaf and sets the grit.",
              "A sink you have not cleaned. Wash the basin first. Greens should not be the thing that mops the counter.",
            ],
          },
          {
            type: "note",
            title: "Manure and the 120 days",
            text: "If fresh manure went into the bed, wait about 120 days before you harvest leaves. They sit in soil splash, so the longer interval is the one that fits. Finished compost is the ordinary amendment, and it does not carry that wait.",
          },
          {
            type: "h2",
            text: "A checklist for this harvest",
          },
          {
            type: "p",
            text: "The steps stay checked on this device until you clear them, so a big wash can be interrupted. They follow the order that keeps grit moving down, not back onto the leaves.",
          },
        ],
      },
      { kind: "wash" },
      {
        kind: "blocks",
        blocks: [
          {
            type: "h2",
            text: "Which leaf hides the dirt",
          },
          {
            type: "p",
            text: "Use the crop cards if you want the full portrait. These are only the washing habits that differ.",
          },
        ],
      },
      { kind: "rinses" },
    ],
  },
];

export function chapterById(id: string): Chapter | undefined {
  return CHAPTERS.find((chapter) => chapter.id === id);
}
