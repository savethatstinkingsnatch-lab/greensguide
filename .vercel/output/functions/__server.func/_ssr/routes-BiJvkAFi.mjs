import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, c as Check, i as Menu, l as Bookmark, o as ChevronRight, r as RotateCcw, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { a as HEAT_LABEL, c as chapterById, i as FROST_LABEL, n as Route, o as cropById, r as CROPS, s as CHAPTERS } from "./router-B4bhfWv0.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BiJvkAFi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLATES = {
	cover: "/assets/cover-CdOIjDT2.jpg",
	leaves: "/assets/leaves-DZLlZdZM.jpg",
	bed: "/assets/bed-B4Y761bs.jpg",
	harvest: "/assets/harvest-C8uUhApB.jpg",
	seed: "/assets/seed-lVdQ4yWI.jpg",
	jars: "/assets/jars-CCZIsrSZ.jpg",
	frost: "/assets/frost-BKa9G8dk.jpg",
	wash: "/assets/wash-zYgvIc-A.jpg"
};
var BANDS = [
	{
		id: "cold",
		zones: [3, 4],
		label: "Zones 3–4",
		character: "A short, cold season. Fall sowing is a race, and winter harvest needs a frame."
	},
	{
		id: "cool",
		zones: [5, 6],
		label: "Zones 5–6",
		character: "The classic four-season greens year. Spring and a serious August sowing both matter."
	},
	{
		id: "mild",
		zones: [7, 8],
		label: "Zones 7–8",
		character: "Long shoulder seasons. Zone 8 can cut kale and spinach in winter under a cover."
	},
	{
		id: "warm",
		zones: [9, 10],
		label: "Zones 9–10",
		character: "Greens are a cool-season crop. September, not May, is the big planting month."
	},
	{
		id: "hot",
		zones: [11],
		label: "Zone 11",
		character: "Grow from late autumn through winter. Summer is for drying seed, not sowing spinach."
	}
];
/** USDA whole-zone winter minimums, and typical frost windows — not a local forecast. */
var ZONES = [
	{
		zone: 3,
		minimum: "−40 to −30°F",
		lastFrost: "late May–early June",
		firstFrost: "early–mid September"
	},
	{
		zone: 4,
		minimum: "−30 to −20°F",
		lastFrost: "mid–late May",
		firstFrost: "late September"
	},
	{
		zone: 5,
		minimum: "−20 to −10°F",
		lastFrost: "early–mid May",
		firstFrost: "early–mid October"
	},
	{
		zone: 6,
		minimum: "−10 to 0°F",
		lastFrost: "mid–late April",
		firstFrost: "mid–late October"
	},
	{
		zone: 7,
		minimum: "0 to 10°F",
		lastFrost: "early–mid April",
		firstFrost: "early November"
	},
	{
		zone: 8,
		minimum: "10 to 20°F",
		lastFrost: "mid–late March",
		firstFrost: "mid November"
	},
	{
		zone: 9,
		minimum: "20 to 30°F",
		lastFrost: "mid February",
		firstFrost: "early December"
	},
	{
		zone: 10,
		minimum: "30 to 40°F",
		lastFrost: "late January, often rare",
		firstFrost: "late December, often rare"
	},
	{
		zone: 11,
		minimum: "40 to 50°F",
		lastFrost: "essentially frost-free",
		firstFrost: "essentially frost-free"
	}
];
var MONTHS = [
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
	"December"
];
var all = CROPS.map((crop) => crop.id);
var hardyFall = [
	"kale",
	"collards",
	"spinach",
	"lettuce",
	"arugula",
	"mustard",
	"mizuna",
	"bokchoy",
	"cilantro",
	"chard"
];
var MONTH_NOTES = {
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
		"Nothing to sow. Sharpen the scissors, oil the harvest knife, and count packets."
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
		"Keep seed cool and dry, and note which bed should get compost before spring."
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
		"Zone 8 is a winter kitchen garden. Zone 7 is a cold-frame garden. Both are a seed-inventory month."
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
		"Peak salads. Sow a backup row of spinach and lettuce so January does not run out."
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
		"Sow what you want to cut in February. Repeat a short row every two or three weeks."
	]
};
var IN_PLAY = {
	cold: [
		[],
		[],
		[
			"kale",
			"collards",
			"lettuce"
		],
		[
			"spinach",
			"arugula",
			"mizuna",
			"mustard",
			"kale"
		],
		all,
		[
			"lettuce",
			"chard",
			"cilantro"
		],
		["kale", "collards"],
		[
			"kale",
			"collards",
			"spinach",
			"lettuce",
			"arugula",
			"mustard",
			"mizuna",
			"bokchoy"
		],
		["spinach"],
		[],
		[],
		[]
	],
	cool: [
		[],
		["kale", "lettuce"],
		[
			"spinach",
			"arugula",
			"mizuna",
			"mustard",
			"kale",
			"lettuce"
		],
		all,
		[
			"lettuce",
			"chard",
			"kale",
			"collards",
			"cilantro",
			"bokchoy",
			"arugula"
		],
		[
			"chard",
			"lettuce",
			"kale"
		],
		[
			"kale",
			"collards",
			"chard"
		],
		hardyFall,
		[
			"spinach",
			"lettuce",
			"arugula",
			"mizuna",
			"mustard",
			"cilantro",
			"kale"
		],
		[
			"spinach",
			"kale",
			"collards"
		],
		[],
		[]
	],
	mild: [
		[
			"spinach",
			"lettuce",
			"kale",
			"arugula",
			"mizuna"
		],
		[
			"spinach",
			"lettuce",
			"kale",
			"arugula",
			"mustard",
			"mizuna",
			"cilantro",
			"collards",
			"chard",
			"bokchoy"
		],
		all,
		[
			"lettuce",
			"chard",
			"kale",
			"collards",
			"cilantro",
			"arugula"
		],
		[
			"chard",
			"collards",
			"lettuce"
		],
		["chard"],
		[
			"kale",
			"collards",
			"chard"
		],
		hardyFall,
		all,
		[
			"spinach",
			"lettuce",
			"arugula",
			"mizuna",
			"mustard",
			"cilantro",
			"kale",
			"chard"
		],
		[
			"spinach",
			"lettuce",
			"kale",
			"arugula",
			"mizuna",
			"collards"
		],
		[
			"kale",
			"spinach",
			"lettuce",
			"collards"
		]
	],
	warm: [
		all,
		all,
		all,
		[
			"chard",
			"collards",
			"kale",
			"lettuce"
		],
		["chard"],
		[],
		[],
		["kale"],
		all,
		all,
		all,
		all
	],
	hot: [
		all,
		all,
		[
			"lettuce",
			"spinach",
			"kale",
			"chard",
			"arugula",
			"cilantro",
			"mizuna",
			"collards"
		],
		["chard", "collards"],
		[],
		[],
		[],
		[],
		[],
		[
			"kale",
			"chard",
			"collards",
			"lettuce"
		],
		all,
		all
	]
};
function bandFor(zone) {
	return BANDS.find((band) => band.zones.includes(zone)) ?? BANDS[1];
}
function zoneFact(zone) {
	return ZONES.find((item) => item.zone === zone) ?? ZONES[3];
}
for (const band of BANDS) {
	if (MONTH_NOTES[band.id].length !== 12 || IN_PLAY[band.id].length !== 12) throw new Error(`Zone calendar for ${band.id} is not 12 months`);
	for (const month of IN_PLAY[band.id]) for (const id of month) if (!CROPS.some((crop) => crop.id === id)) throw new Error(`Unknown crop ${id} in ${band.id}`);
}
var useShelf = create()(persist((set) => ({
	bookmarks: [],
	lastChapter: "crops",
	started: false,
	zone: 6,
	wash: [],
	toggleBookmark: (id) => set((state) => ({ bookmarks: state.bookmarks.includes(id) ? state.bookmarks.filter((item) => item !== id) : [...state.bookmarks, id] })),
	markRead: (id) => set({
		lastChapter: id,
		started: true
	}),
	setZone: (zone) => set({ zone }),
	toggleWash: (id) => set((state) => ({ wash: state.wash.includes(id) ? state.wash.filter((item) => item !== id) : [...state.wash, id] })),
	resetWash: () => set({ wash: [] })
}), {
	name: "greens-field-book",
	skipHydration: true
}));
function useShelfHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const unsub = useShelf.persist.onFinishHydration(() => setHydrated(true));
		useShelf.persist.rehydrate();
		if (useShelf.persist.hasHydrated()) setHydrated(true);
		return unsub;
	}, []);
	return hydrated;
}
var chipOn = "inline-flex min-h-11 items-center border border-moss bg-moss px-3 font-display text-sm text-paper";
var chipOff = "inline-flex min-h-11 items-center border border-rule bg-paper px-3 font-display text-sm text-ink hover:border-moss";
function chip(on) {
	return on ? chipOn : chipOff;
}
function CropGallery({ cropId, onOpenSeed }) {
	const [open, setOpen] = (0, import_react.useState)(cropId ?? null);
	(0, import_react.useEffect)(() => {
		if (cropId) setOpen(cropId);
	}, [cropId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-8 border-t border-rule",
		children: CROPS.map((crop) => {
			const expanded = open === crop.id;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: `crop-${crop.id}`,
				className: "border-b border-rule",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "flex w-full min-h-11 items-center justify-between gap-4 py-4 text-left",
					"aria-expanded": expanded,
					onClick: () => setOpen(expanded ? null : crop.id),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-2xl leading-tight",
						children: crop.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-sm italic text-muted",
						children: crop.latin
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 font-display text-sm text-moss",
						children: expanded ? "Close" : "Open"
					})]
				}), expanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropBody, {
					crop,
					onOpenSeed
				}) : null]
			}, crop.id);
		})
	});
}
function CropBody({ crop, onOpenSeed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4 pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-muted",
				children: [
					crop.family,
					" · ",
					crop.life,
					" · ",
					FROST_LABEL[crop.frost],
					" · ",
					HEAT_LABEL[crop.heat]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Baby leaves",
						value: `${crop.daysBaby} days`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Full size",
						value: `${crop.daysMature} days`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Sow",
						value: crop.sowDepth
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Spacing",
						value: crop.spacing
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Seed keeps",
						value: crop.seedYears
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						label: "Germinates",
						value: crop.germDays
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Spring",
				children: crop.spring
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Fall",
				children: crop.fall
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Cutting",
				children: crop.harvest
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Seed",
				children: crop.seed
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
				label: "Washing",
				children: crop.wash
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => onOpenSeed(crop.id),
				className: chipOff,
				children: ["Seed notes for ", crop.name]
			})
		]
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border border-rule bg-paper-deep px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "font-display text-sm text-moss",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "text-ink",
			children: value
		})]
	});
}
function Section({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "font-display text-lg",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-1 text-ink",
		children
	})] });
}
function SpacingTable() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "my-8 min-w-0 max-w-full overflow-x-auto border border-rule",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full min-w-[36rem] text-left text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
					className: "border-b border-rule px-3 py-3 text-left font-display text-base text-moss",
					children: "Sowing measures"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
						"Crop",
						"Depth",
						"Spacing",
						"Baby",
						"Mature"
					].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-3 py-2 font-display font-medium",
						children: col
					}, col)) })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: CROPS.map((crop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-rule",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-3 py-2 font-display font-medium",
							children: crop.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: crop.sowDepth
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-3 py-2",
							children: crop.spacing
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [crop.daysBaby, " days"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "px-3 py-2",
							children: [crop.daysMature, " days"]
						})
					]
				}, crop.id)) })
			]
		})
	});
}
function CropLines({ field }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "my-6 border-t border-rule",
		children: CROPS.map((crop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-1 border-b border-rule py-4 sm:grid-cols-[9rem_1fr] sm:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-lg",
				children: crop.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: field === "harvest" ? crop.harvest : crop.wash })]
		}, crop.id))
	});
}
var CROSSES = [
	{
		name: "Brassica oleracea",
		members: "Kale, collards, cabbage, broccoli, Brussels sprouts, cauliflower, kohlrabi",
		note: "Insects carry pollen among all of these. One flowering broccoli plant will rewrite your kale seed."
	},
	{
		name: "Brassica rapa",
		members: "Bok choy, mizuna, tatsoi, napa cabbage, turnip",
		note: "A turnip left to flower is a bok choy cross waiting to happen."
	},
	{
		name: "Brassica juncea",
		members: "Mustard greens",
		note: "Does not cross with kale or with bok choy."
	},
	{
		name: "Eruca vesicaria",
		members: "Garden arugula",
		note: "Not wild arugula, and not the brassicas above."
	},
	{
		name: "Beta vulgaris",
		members: "Swiss chard and every beet",
		note: "Wind-pollinated. Neighborhood gardens share pollen more often than people think."
	},
	{
		name: "Lactuca sativa",
		members: "Lettuce",
		note: "Mostly self-pollinated. A short gap between varieties is usually enough at home."
	},
	{
		name: "Spinacia oleracea",
		members: "Spinach",
		note: "Wind, and plants are male or female. Other spinach will cross. Save from a crowd."
	},
	{
		name: "Coriandrum sativum",
		members: "Cilantro",
		note: "Crosses with other cilantro. The seed is the coriander already in the spice jar."
	}
];
function CrossGroups() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-8 space-y-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-2xl",
			children: "Crossing groups"
		}), CROSSES.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "border border-rule bg-paper-deep px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg italic",
					children: group.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1",
					children: group.members
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: group.note
				})
			]
		}, group.name))]
	});
}
function labelText(crop, variety, year) {
	return [
		crop.name,
		`variety: ${variety.trim() || "________________"}`,
		`year: ${year.trim() || String((/* @__PURE__ */ new Date()).getFullYear())}`,
		"bed:",
		`life: ${crop.life}`,
		`keeps: ${crop.seedYears}`,
		`isolation: ${crop.isolation}`,
		"germ test:"
	].join("\n");
}
function SeedBench({ focus, cropId, onPick }) {
	const fallback = cropId && cropById(cropId) ? cropId : CROPS[0].id;
	const [id, setId] = (0, import_react.useState)(fallback);
	const [variety, setVariety] = (0, import_react.useState)("");
	const [year, setYear] = (0, import_react.useState)(String((/* @__PURE__ */ new Date()).getFullYear()));
	const [copyState, setCopyState] = (0, import_react.useState)("idle");
	(0, import_react.useEffect)(() => {
		if (cropId && cropById(cropId)) setId(cropId);
	}, [cropId]);
	const crop = cropById(id) ?? CROPS[0];
	const label = labelText(crop, variety, year);
	function choose(next) {
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-8 border border-rule p-4 sm:p-5",
		"aria-label": "Seed bench",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-2xl",
				children: focus === "store" ? "Jar label" : "Seed notes"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted",
				children: focus === "store" ? "Pick the crop, name the variety, and copy a label into the jar with the seed." : "The harvest changes with the species. Isolation here is for a kitchen garden, not a seed catalog."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Choose a crop",
				children: CROPS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chip(item.id === crop.id),
					"aria-pressed": item.id === crop.id,
					onClick: () => choose(item.id),
					children: item.name
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-xl",
						children: [
							crop.name,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base italic text-muted",
								children: crop.latin
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						crop.pollination,
						". ",
						crop.isolation,
						"."
					] }),
					focus === "seed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: crop.seed }) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							crop.life === "biennial" ? "Biennial — it flowers after a winter." : "Annual — it can set seed the year you sow it.",
							" ",
							"Germination test window: ",
							crop.germDays,
							". Stored cool and dry: ",
							crop.seedYears,
							"."
						]
					}),
					focus === "store" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: crop.seed }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-moss",
						children: "Variety"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: variety,
						onChange: (event) => {
							setVariety(event.target.value);
							setCopyState("idle");
						},
						placeholder: "as on the original packet",
						className: "mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-base text-ink placeholder:text-muted"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-moss",
						children: "Year saved"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: year,
						inputMode: "numeric",
						onChange: (event) => {
							setYear(event.target.value);
							setCopyState("idle");
						},
						className: "mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-base text-ink"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
				className: "mt-4 whitespace-pre-wrap border border-rule bg-paper-deep p-4 font-body text-sm text-ink",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => void copy(),
					className: chipOff,
					children: [copyState === "copied" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
						className: "size-4",
						"aria-hidden": "true"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
						className: "size-4",
						"aria-hidden": "true"
					}), copyState === "copied" ? "Copied" : "Copy label"]
				}), copyState === "manual" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted",
					children: "Select the label above and copy it by hand."
				}) : null]
			})
		]
	});
}
var SHORT_MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];
function ZoneGuide({ zone, onZone }) {
	const [month, setMonth] = (0, import_react.useState)(null);
	const [filter, setFilter] = (0, import_react.useState)("all");
	(0, import_react.useEffect)(() => {
		setMonth((/* @__PURE__ */ new Date()).getMonth());
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-8 space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-moss",
				children: "USDA zone"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Choose your zone",
				children: ZONES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${chip(item.zone === zone)} min-w-11 justify-center`,
					"aria-pressed": item.zone === zone,
					onClick: () => onZone(item.zone),
					children: item.zone
				}, item.zone))
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border border-rule bg-moss-soft px-4 py-4 text-ink",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-2xl",
						children: ["Zone ", zone]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1",
						children: [
							band.label,
							". ",
							band.character
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-3 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Winter minimum",
								value: fact.minimum
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "Last spring frost",
								value: fact.lastFrost
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
								label: "First fall frost",
								value: fact.firstFrost
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm text-moss",
				children: "Month"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Choose a month",
				children: SHORT_MONTHS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${chip(month === index)} min-w-11 justify-center`,
					"aria-pressed": month === index,
					"aria-label": MONTHS[index],
					onClick: () => setMonth(index),
					children: label
				}, label))
			})] }),
			month !== null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "border-l-2 border-clay bg-paper-deep px-4 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-xl",
						children: [
							MONTHS[month],
							" in zone ",
							zone
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2",
						children: MONTH_NOTES[band.id][month]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: inPlay.length ? `In play: ${inPlay.map((id) => cropById(id)?.name ?? id).join(", ")}.` : "Nothing on the sowing list. The work this month is beds, covers, seed, or waiting."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted",
				children: "Matching the calendar to this month…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Filter crops",
				children: [
					["all", "All ten"],
					["now", "In play"],
					["hardy", "Stand cold"],
					["shy", "Quit in heat"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: chip(filter === id),
					"aria-pressed": filter === id,
					onClick: () => setFilter(id),
					children: label
				}, id))
			}),
			crops.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "border border-rule px-4 py-4",
				children: [
					"Nothing in this filter for ",
					month === null ? "this" : MONTHS[month],
					". Try “All ten,” or read the month note — some months are for seed and soil, not a new row."
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: crops.map((crop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "border border-rule px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-baseline justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl",
								children: crop.name
							}), month !== null && inPlay.includes(crop.id) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-sm text-moss",
								children: "In play"
							}) : null]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: [
								FROST_LABEL[crop.frost],
								" · ",
								HEAT_LABEL[crop.heat],
								" · seed ",
								crop.seedYears
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display",
								children: "Spring. "
							}), crop.spring]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display",
								children: "Fall. "
							}), crop.fall]
						})
					]
				}, crop.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-w-0 max-w-full overflow-x-auto border border-rule",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[40rem] text-left text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
							className: "border-b border-rule px-3 py-3 text-left font-display text-base text-moss",
							children: "Whole zones, for when you are between numbers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-paper-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
								"Zone",
								"Winter minimum",
								"Last spring frost",
								"First fall frost"
							].map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2 font-display font-medium",
								children: col
							}, col)) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ZONES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: item.zone === zone ? "border-t border-rule bg-moss-soft" : "border-t border-rule",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2 font-display",
									children: item.zone
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: item.minimum
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: item.lastFrost
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2",
									children: item.firstFrost
								})
							]
						}, item.zone)) })
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Minimums are the USDA average annual extreme low. Slide every date two weeks toward your real last frost. Coastal fog, high elevation, and a south wall all beat the printed zone."
			})
		]
	});
}
var WASH_STEPS = [
	{
		id: "garden",
		title: "Shake soil off in the row",
		text: "Do it over the bed, not over the basket. Mud you leave outside does not have to be washed out of a curl."
	},
	{
		id: "shade",
		title: "Get the cut into the shade",
		text: "Spread warm leaves. An hour in a hot basket starts the rot before you ever reach the sink."
	},
	{
		id: "basin",
		title: "Clean the basin, then fill it with cold water",
		text: "The sink is part of the wash. Greens should not mop yesterday’s counter."
	},
	{
		id: "swish",
		title: "Swish, then wait",
		text: "A short pause lets sand drop. Aphids let go if you give curly kale a few minutes."
	},
	{
		id: "lift",
		title: "Lift the leaves out",
		text: "Empty the basin after the leaves are gone. Pouring the water through them puts the grit back on."
	},
	{
		id: "again",
		title: "Repeat until the water stays clear",
		text: "Spinach and mizuna often need three rounds. Lettuce often needs one. Bok choy needs the heart opened."
	},
	{
		id: "dry",
		title: "Spin or towel until the shine is gone",
		text: "Surface water is what turns a box to slime. Dry the towel between batches if you are washing a lot."
	},
	{
		id: "box",
		title: "Box them loosely, cold, away from apples",
		text: "A dry towel in the container, lid not sealed flat, crisper near freezing. Pull any leaf that yellows."
	}
];
function WashBench() {
	const done = useShelf((state) => state.wash);
	const toggle = useShelf((state) => state.toggleWash);
	const reset = useShelf((state) => state.resetWash);
	const finished = WASH_STEPS.filter((step) => done.includes(step.id)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-6",
		"aria-label": "Wash checklist",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-center justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-lg",
				children: [
					finished,
					" of ",
					WASH_STEPS.length,
					" done"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: reset,
				className: chipOff,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {
					className: "size-4",
					"aria-hidden": "true"
				}), "Clear checks"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-3 border-t border-rule",
			children: WASH_STEPS.map((step, index) => {
				const on = done.includes(step.id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-rule",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex w-full min-h-11 items-start gap-3 py-3 text-left",
						"aria-pressed": on,
						onClick: () => toggle(step.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: on ? "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-moss bg-moss text-paper" : "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-rule font-display text-sm text-moss",
							"aria-hidden": "true",
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : index + 1
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-lg",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-muted",
							children: step.text
						})] })]
					})
				}, step.id);
			})
		})]
	});
}
function bookSearch(chapter, zone, crop) {
	const search = { chapter };
	if (zone !== void 0) search.zone = zone;
	if (crop) search.crop = crop;
	return search;
}
var EDITION = {
	title: "The Greens Field Book",
	author: "Blue and the Awesome Dudes",
	year: 2026
};
var inkBtn = "inline-flex min-h-11 items-center justify-center gap-2 border border-ink bg-ink px-4 font-display text-sm text-paper transition-colors duration-200 hover:border-moss hover:bg-moss";
var ghostBtn = "inline-flex min-h-11 items-center justify-center gap-2 border border-rule bg-paper px-4 font-display text-sm text-ink transition-colors duration-200 hover:border-ink";
function headingId(text) {
	return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
function chapterText(chapter) {
	return chapter.parts.flatMap((part) => part.kind === "blocks" ? part.blocks : []).flatMap((block) => {
		if (block.type === "ul" || block.type === "ol") return block.items;
		if (block.type === "note") return [block.title, block.text];
		return [block.text];
	}).join(" ").toLowerCase();
}
function BookApp({ search }) {
	const navigate = useNavigate();
	const hydrated = useShelfHydrated();
	const bookmarks = useShelf((state) => state.bookmarks);
	const toggleBookmark = useShelf((state) => state.toggleBookmark);
	const markRead = useShelf((state) => state.markRead);
	const started = useShelf((state) => state.started);
	const lastChapter = useShelf((state) => state.lastChapter);
	const storedZone = useShelf((state) => state.zone);
	const setZone = useShelf((state) => state.setZone);
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const chapter = chapterById(search.chapter);
	const zone = search.zone ?? (hydrated ? storedZone : 6);
	(0, import_react.useEffect)(() => {
		const name = chapter ? chapter.title : "The Greens Field Book";
		document.title = chapter ? `${name} · The Greens Field Book` : name;
	}, [chapter]);
	(0, import_react.useEffect)(() => {
		if (search.chapter !== "cover") markRead(search.chapter);
	}, [search.chapter, markRead]);
	(0, import_react.useEffect)(() => {
		if (search.chapter === "crops" && search.crop) {
			document.getElementById(`crop-${search.crop}`)?.scrollIntoView({ block: "start" });
			return;
		}
		window.scrollTo(0, 0);
	}, [search.chapter, search.crop]);
	function go(next) {
		const crop = next.crop === null ? void 0 : next.crop ?? search.crop;
		navigate({
			to: "/",
			search: bookSearch(next.chapter ?? search.chapter, next.zone ?? search.zone ?? zone, crop)
		});
		setMenu(false);
	}
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const tag = event.target?.tagName;
			if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || tag === "BUTTON" || tag === "A") return;
			const dir = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
			if (dir === 0) return;
			const id = neighbor(search.chapter, dir);
			if (!id) return;
			event.preventDefault();
			navigate({
				to: "/",
				search: bookSearch(id, search.zone ?? zone, search.crop)
			});
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		navigate,
		search.chapter,
		search.crop,
		search.zone,
		zone
	]);
	const marked = hydrated && chapter ? bookmarks.includes(chapter.id) : false;
	const continueId = hydrated && started && chapterById(lastChapter) ? lastChapter : CHAPTERS[0].id;
	const continueTitle = chapterById(continueId)?.title ?? "The crops";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink lg:flex",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#page",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-3 focus:py-2",
				children: "Skip to text"
			}),
			menu ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "absolute inset-0 bg-ink/40",
					"aria-label": "Close contents",
					onClick: () => setMenu(false)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-paper-deep",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {
						search,
						zone,
						query,
						setQuery,
						onClose: () => setMenu(false),
						bookmarks: hydrated ? bookmarks : []
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "sticky top-0 hidden h-screen w-72 shrink-0 overflow-y-auto border-r border-rule bg-paper-deep lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spine, {
					search,
					zone,
					query,
					setQuery,
					bookmarks: hydrated ? bookmarks : []
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1 overflow-x-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "sticky top-0 z-20 flex items-center gap-3 border-b border-rule bg-paper/95 px-4 py-2 backdrop-blur-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ghostBtn} px-3 lg:hidden`,
							"aria-label": "Open contents",
							onClick: () => setMenu(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								"aria-hidden": "true"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "min-w-0 flex-1 truncate font-display text-sm",
							children: chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-moss",
									children: chapter.numeral
								}),
								" ",
								chapter.title
							] }) : "The Greens Field Book"
						}),
						chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `${ghostBtn} px-3`,
							"aria-pressed": marked,
							"aria-label": marked ? "Remove bookmark" : "Bookmark this chapter",
							onClick: () => toggleBookmark(chapter.id),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
								className: marked ? "size-5 fill-current" : "size-5",
								"aria-hidden": "true"
							})
						}) : null
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					id: "page",
					className: "mx-auto w-full max-w-2xl px-5 py-8 sm:px-8 sm:py-12",
					children: [
						chapter ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterView, {
							chapter,
							search,
							zone,
							onZone: (next) => {
								setZone(next);
								go({ zone: next });
							},
							onCrop: (id) => go({
								chapter: search.chapter === "crops" ? "seed" : search.chapter,
								crop: id
							}),
							onOpenSeed: (id) => go({
								chapter: "seed",
								crop: id
							})
						}, chapter.id) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {
							continueId,
							continueTitle,
							started: hydrated && started,
							zone
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterNav, {
							chapterId: search.chapter,
							zone,
							crop: search.crop
						}),
						search.chapter === CHAPTERS[CHAPTERS.length - 1].id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Colophon, {}) : null
					]
				})]
			})
		]
	});
}
function neighbor(chapterId, dir) {
	if (chapterId === "cover") return dir === 1 ? CHAPTERS[0].id : null;
	const index = CHAPTERS.findIndex((item) => item.id === chapterId);
	if (index < 0) return null;
	if (dir === -1) return index === 0 ? "cover" : CHAPTERS[index - 1].id;
	return index === CHAPTERS.length - 1 ? null : CHAPTERS[index + 1].id;
}
function Spine({ search, zone, query, setQuery, onClose, bookmarks }) {
	const q = query.trim().toLowerCase();
	const chapters = q ? CHAPTERS.filter((item) => `${item.title} ${item.summary} ${chapterText(item)}`.toLowerCase().includes(q)) : CHAPTERS;
	const crops = q ? CROPS.filter((crop) => `${crop.name} ${crop.latin}`.toLowerCase().includes(q)) : [];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-full flex-col px-4 py-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					search: bookSearch("cover", zone, search.crop),
					onClick: onClose,
					className: "font-display text-lg leading-tight",
					children: ["The Greens", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-sm text-moss",
						children: "Field Book"
					})]
				}), onClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `${ghostBtn} px-3`,
					"aria-label": "Close",
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						"aria-hidden": "true"
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
				className: "mt-6 block text-sm text-muted",
				htmlFor: onClose ? "find-mobile" : "find-desk",
				children: "Search"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				id: onClose ? "find-mobile" : "find-desk",
				value: query,
				onChange: (event) => setQuery(event.target.value),
				placeholder: "kale, frost, grit…",
				className: "mt-1 w-full min-h-11 border border-rule bg-paper px-3 text-ink placeholder:text-muted"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mt-6",
				"aria-label": "Contents",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-1",
						children: chapters.map((item) => {
							const active = search.chapter === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								search: bookSearch(item.id, zone, search.crop),
								onClick: onClose,
								"aria-current": active ? "page" : void 0,
								className: active ? "block border-l-2 border-moss bg-paper px-3 py-2" : "block border-l-2 border-transparent px-3 py-2 hover:bg-paper",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-sm text-moss",
										children: item.numeral
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block font-display text-lg leading-tight",
										children: item.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-0.5 block text-sm text-muted",
										children: item.summary
									})
								]
							}) }, item.id);
						})
					}),
					q && chapters.length === 0 && crops.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted",
						children: "Nothing under that name."
					}) : null,
					crops.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm text-moss",
							children: "Crops"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 space-y-1",
							children: crops.map((crop) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								search: bookSearch("crops", zone, crop.id),
								onClick: onClose,
								className: "block px-3 py-2 hover:bg-paper",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display",
									children: crop.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm italic text-muted",
									children: crop.latin
								})]
							}) }, crop.id))
						})]
					}) : null
				]
			}),
			bookmarks.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-rule pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm text-moss",
					children: "Bookmarks"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-2",
					children: bookmarks.map((id) => {
						const item = chapterById(id);
						if (!item) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							search: bookSearch(id, zone, search.crop),
							onClick: onClose,
							className: "block py-2 font-display hover:text-moss",
							children: [
								item.numeral,
								". ",
								item.title
							]
						}) }, id);
					})
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 border-t border-rule pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-ink",
					children: EDITION.author
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: ["Digital edition · ", EDITION.year]
				})]
			})
		]
	});
}
function Cover({ continueId, continueTitle, started, zone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-widest text-moss uppercase",
				children: "Leaf crops · seed · the sink"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-3 font-display text-5xl leading-none text-ink sm:text-6xl",
				children: ["The Greens", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block",
					children: "Field Book"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 font-display text-xl",
				children: EDITION.author
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted",
				children: ["Digital edition · ", EDITION.year]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-lg text-ink",
				children: "How to grow the leaves, cut them without ending the plant, take the seed, keep it, read your zone, and wash the grit out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PLATES.cover,
					alt: "A wooden trug of kale, lettuce, chard, and arugula on a garden bench.",
					className: "h-96 w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-3 text-sm text-muted",
					children: "A morning basket. The work starts before the leaves look like this."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					search: bookSearch(continueId, zone),
					className: inkBtn,
					children: started ? `Continue · ${continueTitle}` : "Begin with the crops"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-12 font-display text-2xl",
				children: "Contents"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 border-t border-rule",
				children: CHAPTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-rule",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						search: bookSearch(item.id, zone),
						className: "flex min-h-11 items-baseline gap-4 py-3 hover:text-moss",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-8 shrink-0 font-display text-moss",
							children: item.numeral
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-xl",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm text-muted",
							children: item.kicker
						})] })]
					})
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-muted",
				children: "Home-garden guidance. Frost dates are typical for the zone, not a forecast. Arrow keys turn the chapter on a keyboard."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Colophon, {})
		]
	});
}
function ChapterView({ chapter, search, zone, onZone, onCrop, onOpenSeed }) {
	const headings = chapter.parts.flatMap((part) => part.kind === "blocks" ? part.blocks : []).filter((block) => block.type === "h2");
	let dropcapPending = true;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "page-enter",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-sm tracking-widest text-moss uppercase",
				children: [
					"Chapter ",
					chapter.numeral,
					" · ",
					chapter.kicker
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-4xl leading-tight sm:text-5xl",
				children: chapter.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-lg text-muted",
				children: chapter.summary
			}),
			headings.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mt-5 flex flex-wrap gap-x-4 gap-y-2",
				"aria-label": "In this chapter",
				children: headings.map((heading) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${headingId(heading.text)}`,
					className: "font-display text-sm text-moss underline-offset-4 hover:underline",
					children: heading.text
				}, heading.text))
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PLATES[chapter.plate],
					alt: chapter.plateAlt,
					className: "h-72 w-full object-cover sm:h-96"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
					className: "mt-3 flex gap-3 text-sm text-muted",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "shrink-0 font-display text-moss",
						children: ["Plate ", chapter.numeral]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: chapter.plateCaption })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4",
				children: chapter.parts.map((part, index) => {
					if (part.kind === "blocks") {
						const useCap = dropcapPending;
						dropcapPending = false;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blocks, {
							blocks: part.blocks,
							dropcap: useCap
						}, index);
					}
					if (part.kind === "crops") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropGallery, {
						cropId: search.crop,
						onOpenSeed
					}, index);
					if (part.kind === "spacing") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SpacingTable, {}, index);
					if (part.kind === "harvest") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropLines, { field: "harvest" }, index);
					if (part.kind === "rinses") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CropLines, { field: "wash" }, index);
					if (part.kind === "crosses") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossGroups, {}, index);
					if (part.kind === "seedbench") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeedBench, {
						focus: part.focus,
						cropId: search.crop,
						onPick: onCrop
					}, index);
					if (part.kind === "zones") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneGuide, {
						zone,
						onZone
					}, index);
					if (part.kind === "wash") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WashBench, {}, index);
					return null;
				})
			})
		]
	});
}
function Blocks({ blocks, dropcap }) {
	let capped = false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: blocks.map((block, index) => {
			if (block.type === "h2") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				id: headingId(block.text),
				className: "scroll-mt-20 pt-6 font-display text-2xl",
				children: block.text
			}, index);
			if (block.type === "h3") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "pt-2 font-display text-xl",
				children: block.text
			}, index);
			if (block.type === "p") {
				const cap = dropcap && !capped;
				if (cap) capped = true;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: cap ? "dropcap" : void 0,
					children: block.text
				}, index);
			}
			if (block.type === "ul" || block.type === "ol") {
				const List = block.type === "ul" ? "ul" : "ol";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
					className: block.type === "ul" ? "list-disc space-y-2 pl-5" : "list-decimal space-y-2 pl-5",
					children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
				}, index);
			}
			if (block.type === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border-l-2 border-clay bg-paper-deep px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-ink",
					children: block.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-muted",
					children: block.text
				})]
			}, index);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
				className: "border-y border-rule py-4 font-display text-xl leading-snug",
				children: block.text
			}, index);
		})
	});
}
function ChapterNav({ chapterId, zone, crop }) {
	const prev = neighbor(chapterId, -1);
	const next = neighbor(chapterId, 1);
	const prevChapter = prev ? chapterById(prev) : void 0;
	const nextChapter = next ? chapterById(next) : void 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "mt-12 flex flex-wrap items-stretch justify-between gap-3 border-t border-rule pt-6",
		"aria-label": "Chapters",
		children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			search: bookSearch(prev, zone, crop),
			className: `${ghostBtn} max-w-full`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
				className: "size-4",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs tracking-wide text-muted uppercase",
					children: prev === "cover" ? "Cover" : "Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: prev === "cover" ? "Title page" : prevChapter?.title
				})]
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/",
			search: bookSearch(next, zone, crop),
			className: `${inkBtn} max-w-full`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-xs tracking-wide text-paper/80 uppercase",
					children: "Next"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block",
					children: nextChapter?.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
				className: "size-4",
				"aria-hidden": "true"
			})]
		}) : null]
	});
}
function Colophon() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-10 border-t border-rule pt-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-lg text-ink",
			children: EDITION.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-1 text-sm text-muted",
			children: [
				EDITION.author,
				". Digital edition, ",
				EDITION.year,
				"."
			]
		})]
	});
}
var SplitComponent = function Home() {
	const search = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookApp, { search });
};
//#endregion
export { SplitComponent as component };
