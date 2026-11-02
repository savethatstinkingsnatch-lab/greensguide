import { i as __toESM } from "../_runtime.mjs";
import { J as require_react, S as require_jsx_runtime, _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRoute, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B4bhfWv0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CBBsRS7W.css";
var APP_NAME = "The Greens Field Book";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "description",
				content: "The Greens Field Book by Blue and the Awesome Dudes. Grow leafy greens, cut the plant, save and store seed, read your USDA zone, and wash the harvest."
			},
			{
				name: "theme-color",
				content: "#2F5D40"
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			}
		]
	}),
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var CHAPTERS = [
	{
		id: "crops",
		numeral: "I",
		title: "The crops",
		kicker: "Ten leaves",
		summary: "What this book means by greens, and how the ten crops differ.",
		plate: "leaves",
		plateAlt: "Six leaves arranged on cream paper: kale, lettuce, spinach, chard, arugula, and cilantro.",
		plateCaption: "Kale, lettuce, spinach, chard, arugula, and cilantro — the mix most kitchens actually repeat.",
		parts: [{
			kind: "blocks",
			blocks: [
				{
					type: "p",
					text: "A green, in this book, is a leaf you sow in the cool part of the year and cut while it is still a leaf. Not a head of cabbage. Not a handful of sprouts from a jar. Ten crops cover almost every salad, braise, and seed packet a home garden needs: lettuce, spinach, kale, Swiss chard, arugula, collards, mustard, bok choy, mizuna, and cilantro."
				},
				{
					type: "p",
					text: "They are not interchangeable. Spinach bolts when kale is just getting good. Chard will still be standing when lettuce has gone bitter. Cilantro becomes the seed you cook with. Kale and chard will not flower until they have lived through a winter. If you save seed without knowing which plants share a species, next year’s row will be a stranger."
				},
				{
					type: "h2",
					text: "How to use the cards"
				},
				{
					type: "p",
					text: "Open a crop for the way it is sown, cut, washed, and sent to seed. The later chapters teach the methods those lines depend on: soil and succession, the cut itself, isolation, drying, your zone, and the sink. Tap “Seed notes” on a card when you want the jar-label bench with that crop already chosen."
				},
				{
					type: "note",
					title: "Open-pollinated, or don’t bother",
					text: "Seed from a hybrid packet (marked F1) grows a mix, not the plant you liked. Buy open-pollinated or heirloom seed in the year you plan to save."
				}
			]
		}, { kind: "crops" }]
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
		parts: [{
			kind: "blocks",
			blocks: [
				{
					type: "p",
					text: "Greens are not hungry for drama. They want cool air, steady water, and soil that a hand can push into. Get those three right and the rest of this chapter is timing."
				},
				{
					type: "h2",
					text: "Light"
				},
				{
					type: "p",
					text: "In spring and fall, full sun makes thicker leaves and faster heads. In summer, afternoon shade is not a compromise — it is how lettuce and cilantro stay in the ground an extra two weeks. A bed on the east side of a tall crop, or under a 30 to 40 percent shade cloth, is the usual fix. Winter greens in mild zones want the sun back. Do not leave the cloth on once the heat breaks."
				},
				{
					type: "h2",
					text: "Soil"
				},
				{
					type: "p",
					text: "Aim for a loose, crumbly bed and a pH between 6.0 and 7.0. Spinach is the fussy one and prefers the upper end of that range; if it yellows in a bed where kale is fine, test before you pour on fertilizer. Work in finished compost before sowing. Greens are shallow-rooted, so a hard pan two inches down will stall them even when the surface looks rich."
				},
				{
					type: "ul",
					items: [
						"Rake the bed level. Seed washed into a puddle germinates in a clump and nowhere else.",
						"Do not bury lettuce. It wants light. Press it onto damp soil and sift a veil of compost over it.",
						"Chard and spinach go deeper, about half an inch. Cilantro the same, and it wants to be sown where it will stay.",
						"Thin while the leaves are still baby-sized, and eat the thinnings. Crowded kale never becomes the plant on the packet."
					]
				},
				{
					type: "h2",
					text: "Water and feeding"
				},
				{
					type: "p",
					text: "A steady inch of water a week, on the soil rather than across the leaves, prevents the bitter, bolted taste people blame on the variety. Mulch after the seedlings are up so the surface does not crust. Greens like nitrogen, but compost at sowing and a light side-dressing later are enough. A heavy feed of fresh manure on a leaf crop is a food-safety problem, not a shortcut — see the sink chapter."
				},
				{
					type: "h2",
					text: "Succession"
				},
				{
					type: "p",
					text: "One sowing of lettuce feeds you for ten days and then bolts in a chorus. Sow a short row every two weeks instead of a long row once. Pull the finished row, scratch the soil, and use that space again. Mark the date on a stake. Memory is a poor garden journal once three varieties are in the same bed."
				},
				{
					type: "quote",
					text: "Sow less, more often. A twelve-foot row of arugula on the same day becomes a twelve-foot row of flowers."
				},
				{
					type: "h2",
					text: "Heat, cold, and the cloth"
				},
				{
					type: "p",
					text: "Row cover, edges buried, is the single most useful tool in this book. In spring it holds a few degrees and keeps flea beetles and cabbage moths off the leaves. In a hot spell, switch to shade cloth. In fall, the row cover goes back on so a light freeze does not end the tender crops. Vent it on bright days. Greens steamed under plastic are not protected; they are cooked."
				},
				{
					type: "h2",
					text: "When they bolt"
				},
				{
					type: "p",
					text: "Bolting is the plant leaving the leaf stage to flower. Long days, heat, drought, and crowding all push it. You cannot talk a bolted spinach plant back into being mild. Cut what is still good, and decide: pull it, or leave the best one for seed. Lettuce seed germinates poorly once the soil is over about 75°F. For a summer sowing, sow at dusk into soil you have shaded with a board, and take the board off the hour the row sprouts. Or start the plants indoors where the room is cool."
				},
				{
					type: "h2",
					text: "Pests, without a shelf of bottles"
				},
				{
					type: "ul",
					items: [
						"Flea beetles leave shot holes in arugula and mustard. Cover the bed the day you sow, not the day you notice.",
						"Cabbageworms are the green caterpillars under kale and collards. Look for dark frass. Handpick. The cover prevents the moth from laying.",
						"Aphids cluster in new growth and in kale curls. A hard spray of water, morning after morning, clears a light case.",
						"Slugs take seedlings overnight. A board on the soil gives them a place to hide at dawn, which is when you remove them.",
						"Never save seed from a plant that was diseased. Leaf spots and mosaic travel further in a packet than in a salad."
					]
				},
				{
					type: "note",
					title: "Spacing at a glance",
					text: "Depth is measured after you firm the soil, not while it is fluffy. If a row fails, the cause is usually depth, dry surface, or hot soil — not a bad moon."
				}
			]
		}, { kind: "spacing" }]
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
		parts: [{
			kind: "blocks",
			blocks: [
				{
					type: "p",
					text: "Harvest is a decision about the plant’s future, not only about dinner. Cut the wrong part of a kale plant and you end the crop. Cut lettuce in the afternoon heat and you bring home leaves that are already losing the water you paid for all week."
				},
				{
					type: "h2",
					text: "Morning, while they are still full"
				},
				{
					type: "p",
					text: "Cut after the dew has dried and before the sun is high. Leaves are heaviest with water then, and they hold in the fridge. If you can only harvest in the evening, take them straight into shade and cool them — do not leave the basket on the path."
				},
				{
					type: "h2",
					text: "The knife"
				},
				{
					type: "p",
					text: "Use scissors or a small knife you can clean. Wipe the blade when you move from a spotted plant to a clean one. Tearing chard by hand rips the crown. Twisting a kale leaf downward, close to the stem, frees it without that tear. Do not harvest into a bag you used for compost."
				},
				{
					type: "h2",
					text: "Two ways to cut"
				},
				{
					type: "h3",
					text: "Cut and come again"
				},
				{
					type: "p",
					text: "For loose lettuce, arugula, mizuna, and young mustard, shear the canopy about an inch above the growing point. The stubs look brutal and then resprout. You usually get two or three cuts. Each one is a little rougher than the last. For kale, collards, and chard, do not shear the top. Take outer leaves only, and leave at least half the plant so it can feed itself."
				},
				{
					type: "h3",
					text: "The whole plant"
				},
				{
					type: "p",
					text: "Heading lettuce, mature bok choy, and spinach that is about to bolt come out at the base. A head is ready when it has weight and the center has filled, not when the outer leaves are huge and the heart is still loose. Bok choy should be cut before you see a flower stalk. After that stalk shows, the head opens and turns sharp."
				},
				{
					type: "h2",
					text: "What to leave in the bed"
				},
				{
					type: "ul",
					items: [
						"Yellow, slimy, or spotted leaves. They do not improve in the sink.",
						"Leaves from a plant you cannot name. This book is not a foraging guide.",
						"Anything recently sprayed, until the label’s interval has passed. If you did not write the date down, do not guess.",
						"The single best plant in the row, if you plan to save seed from that sowing. Mark it the day you decide, not after you have eaten it."
					]
				},
				{
					type: "h2",
					text: "Field heat"
				},
				{
					type: "p",
					text: "A warm leaf rots from the inside of the pile. Spread the cut in the shade, or rinse it in cold water and spin it dry if you will store it today. Muddy leaves can wait for the full wash in the sink chapter, but they should not wait in the sun. An hour in a hot car undoes a careful cut."
				},
				{
					type: "note",
					title: "Taste changes before the plant looks finished",
					text: "Lettuce goes bitter a few days before the flower stalk is obvious. Spinach does the same. If a leaf tastes sharp or soapy and it did not last week, stop harvesting that plant for the table."
				}
			]
		}, { kind: "harvest" }]
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
						text: "Saving seed is how a garden stops being a customer. It is also how a garden fills itself with crosses you did not mean. The work is mostly patience and a label. The knowledge is which plants can pollinate each other, and when the seed is actually finished."
					},
					{
						type: "h2",
						text: "Start with the right packet"
					},
					{
						type: "p",
						text: "Save from open-pollinated plants only. Pick the plant you want more of: slow to bolt, true to the leaf shape, not the one that merely got huge because it sat in the wet corner. Disease, bitterness, and a habit of flowering in the first hot week are all heritable enough to matter in a backyard."
					},
					{
						type: "h2",
						text: "One plant is not a variety"
					},
					{
						type: "p",
						text: "Lettuce and cilantro can give useful home seed from one or two good plants, because they mostly pollinate themselves. Spinach cannot. It makes separate male and female plants and sheds pollen on the wind; save from a crowd of at least fifteen or twenty, or the next generation thins out. Kale’s seed from a single overwintered plant will grow, but a larger group keeps the strain steadier. For a kitchen garden, be honest about the goal: seed that grows a good green, not seed you could sell as a named variety."
					},
					{
						type: "h2",
						text: "Biennials have to live through winter"
					},
					{
						type: "p",
						text: "Kale, collards, and chard flower in their second spring, after cold has told them the winter is over. In zones 7 and warmer they can stay in the garden under cover if the soil drains. In colder zones, dig the plant with soil on the roots, keep it just above freezing and slightly moist — a box in a cold garage, not a warm closet — and replant it when the ground can be worked. Dry storage, the kind you use for seed, will kill the plant you meant to replant."
					},
					{
						type: "h2",
						text: "Ripe, then gone"
					},
					{
						type: "p",
						text: "Green seed does not store and often does not sprout. Wait until the plant looks finished: lettuce heads fluffy and pale, brassica pods tan and brittle, coriander seeds the color of straw, chard clusters brown and corky. Most of these shatter. The day before you think they are ready, pull or cut them into a paper bag. A rainstorm on ripe lettuce seed is how a crop ends on the path instead of in a jar."
					},
					{
						type: "h2",
						text: "Thresh and winnow"
					},
					{
						type: "ol",
						items: [
							"Dry the stalks another week in a single layer, out of the sun’s full glare and away from mice.",
							"Crush pods and heads inside the bag, or between your palms over a tray. Gloves for prickly spinach.",
							"Shake the seed to the bottom. Lift off the big stems.",
							"Pour the rest from one bowl to another in a light breeze, or in front of a fan on low. Chaff blows off. Seed falls.",
							"Pick out stones and broken bits. Seed that looks moldy does not go in the jar with the rest."
						]
					},
					{
						type: "p",
						text: "The seed is not finished until it is dry enough to store. That test lives in the next chapter. Do not seal today’s harvest in glass tonight."
					},
					{
						type: "note",
						title: "Who crosses with whom",
						text: "Species matters more than the common name. Kale and collards are one species. Bok choy and mizuna are another. Mustard is a third. Arugula is none of those."
					}
				]
			},
			{ kind: "crosses" },
			{
				kind: "blocks",
				blocks: [{
					type: "h2",
					text: "Crop by crop"
				}, {
					type: "p",
					text: "The notes below are the part that changes from plant to plant. Isolation distances for selling seed are longer than anything listed here. These are home-garden distances: good enough to keep dinner honest, not a certification."
				}]
			},
			{
				kind: "seedbench",
				focus: "seed"
			}
		]
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
		parts: [{
			kind: "blocks",
			blocks: [
				{
					type: "p",
					text: "Seed dies from warmth and damp more often than from age. A packet on top of the fridge, or in a greenhouse, can be worthless in a single summer. The same seed in a cool cupboard can outlast the years printed in the crop cards."
				},
				{
					type: "h2",
					text: "The snap test"
				},
				{
					type: "p",
					text: "Dry seed until a typical seed snaps or shatters when you bend it, rather than folding. Lettuce and brassica seed should crack. Cilantro, which is a larger fruit, should be hard and glassy, not leathery. Spread the seed thin on a plate in a dry room for several days after winnowing. A fan helps. Direct sun cooks it. If you are unsure, wait two more days. Sealing damp seed grows mold, and mold does not stay in one jar."
				},
				{
					type: "h2",
					text: "Where it lives"
				},
				{
					type: "ul",
					items: [
						"Short term, one to three years: an airtight jar in a dark closet that stays under about 60°F. A bedroom closet beats a kitchen shelf.",
						"Longer: the same jar in the refrigerator, with the seed already dry. Put a paper packet of dry milk or a silica gel pack in the jar, not loose against the seed.",
						"A freezer works only for seed that is fully dry, in a jar that stays shut. When you take it out, let the jar reach room temperature before you open it. Moisture from the air condenses on cold seed and undoes the year you just spent.",
						"Do not store seed in the shed if the shed freezes and then thaws damp. Temperature swings matter less than the damp that comes with them, but both are bad."
					]
				},
				{
					type: "h2",
					text: "The label is part of the seed"
				},
				{
					type: "p",
					text: "An unlabeled jar is a guess. Write the crop, the variety, the year, the bed, and whether anything in the same crossing group flowered nearby. Add the germination test when you do one. Pencil on a paper slip inside the jar outlasts ink on a lid that gets handled with wet hands."
				},
				{
					type: "h2",
					text: "A germination test"
				},
				{
					type: "ol",
					items: [
						"Count ten seeds, or twenty if you can spare them. Ten is a rough percentage. Twenty is fairer.",
						"Lay them on a damp paper towel, not swimming. Fold, and slide the towel into a labeled bag.",
						"Keep it warm and out of the sun. Lettuce prefers the cooler end of room temperature.",
						"Check at the germination window on the crop card. Count anything with a root as sprouted.",
						"Percent is sprouted divided by the number you started. Under half, sow thicker or replace the packet. Under a fifth, compost it."
					]
				},
				{
					type: "p",
					text: "Run the test in late winter, before you need the seed, not the morning you planned to sow. The bench below copies a jar label and shows how long each crop usually keeps. Those years assume cool and dry. A humid jar does not get the long end of the range."
				},
				{
					type: "note",
					title: "Mice and weevils",
					text: "Paper envelopes inside a tin, or glass with a tight lid, are the whole defense. A desk drawer is not airtight. If you see pinpoint holes in a brassica seed, do not sow it and do not store it next to clean seed."
				}
			]
		}, {
			kind: "seedbench",
			focus: "store"
		}]
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
		parts: [{
			kind: "blocks",
			blocks: [
				{
					type: "p",
					text: "A USDA hardiness zone is the average coldest winter temperature, sorted into bands of ten degrees. It tells you whether kale, left outside, is making a reasonable bet. It does not tell you when your soil hits 75°F, how humid July is, or whether you garden on a hill. Zone 8 in a marine climate and zone 8 in a southern interior are different gardens that share a winter number."
				},
				{
					type: "p",
					text: "Use the guide as a pattern, then slide it. If your last frost is two weeks earlier than the phrase under your zone, sow two weeks earlier. County extension frost dates beat anything printed in a book, including this one. Half zones (6a, 6b) exist; this book uses the whole number so the month notes stay readable."
				},
				{
					type: "h2",
					text: "How to read the planner"
				},
				{
					type: "ul",
					items: [
						"Pick your zone. The frost line under it is typical, not a forecast for this year.",
						"The month opens on today. Change it when you are planning ahead.",
						"“In play” means those crops are worth starting now in that band — indoors or out, as the note says.",
						"Filter the list when you only want the hardy crops, or the ones that quit in heat."
					]
				},
				{
					type: "note",
					title: "Heat is the other map",
					text: "Spinach, cilantro, and lettuce fail in summer in almost every zone. Chard is the leaf that still earns its water. If your zone is warm but your summer is mild and foggy, you can ignore the pause months. If your zone is cool but your July is brutal, treat June like a warmer zone."
				}
			]
		}, { kind: "zones" }]
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
						text: "Washing is not a ritual you do because a package told you to. Garden leaves carry soil, and soil carries the organisms you would rather not eat. The method is ordinary: cold water, a clean basin, and enough patience to lift the leaves out instead of pouring the dirty water off over them. Soap does not belong on a salad. Neither does a bleach guess."
					},
					{
						type: "h2",
						text: "Two honest paths"
					},
					{
						type: "p",
						text: "If the leaves came in clean and dry and you will eat them in a day or two, you can store them unwashed and wash at the last minute. They often keep longer that way. If they are muddy, or you want them ready, wash now and dry them thoroughly before they go in the box. There is no third path where wet leaves sit in a sealed bag “just until tomorrow” and stay good."
					},
					{
						type: "h2",
						text: "The basin, not the splash"
					},
					{
						type: "p",
						text: "Fill a clean basin with cold water. Add the leaves. Swish. Wait a few breaths so sand drops. Lift the leaves into a colander. Do not pour the basin through the leaves — that puts the grit back on them. If the water was cloudy or sandy, repeat. Spinach, mizuna, and curly kale often need three rounds. Lettuce often needs one."
					},
					{
						type: "p",
						text: "Aphids let go in a soak of several minutes. Cabbageworm frass wipes off a collard midrib more reliably than it rinses. Bok choy has to be opened at the base or the heart stays packed with soil no matter how long you swish the outside."
					},
					{
						type: "h2",
						text: "Dry is the storage secret"
					},
					{
						type: "p",
						text: "Spin the leaves, or roll them gently in a dry towel, until they are no longer glistening. A little surface moisture is what makes a container slime over by the second day. Line a box with a dry towel, add the leaves loosely, and keep a corner of the lid cracked or use a bag that is not sealed flat. The crisper should be cold, close to 32–36°F. The leaves themselves should be dry. Keep the box away from apples, pears, and bananas; the gas those fruits give off yellows greens early."
					},
					{
						type: "p",
						text: "Spun-dry leaves often last five to ten days. Kale and collards outlast lettuce. Cilantro lasts longer as a stem bunch, dry, with a loose bag over the leaves, than it does chopped in a wet tub. Yellow leaves and slime come out the hour you see them, or they take the box with them."
					},
					{
						type: "h2",
						text: "What not to use"
					},
					{
						type: "ul",
						items: [
							"Soap, dish liquid, or “produce wash” as a default. The useful advice for home kitchens is running water or a clean cold bath, then a rinse you would drink.",
							"A vinegar soak is optional and not required. If you use one — about a tablespoon of vinegar in a quart of water — rinse with plain water afterward or the salad tastes pickled. It is not a sterilizer.",
							"Hot water. It wilts the leaf and sets the grit.",
							"A sink you have not cleaned. Wash the basin first. Greens should not be the thing that mops the counter."
						]
					},
					{
						type: "note",
						title: "Manure and the 120 days",
						text: "If fresh manure went into the bed, wait about 120 days before you harvest leaves. They sit in soil splash, so the longer interval is the one that fits. Finished compost is the ordinary amendment, and it does not carry that wait."
					},
					{
						type: "h2",
						text: "A checklist for this harvest"
					},
					{
						type: "p",
						text: "The steps stay checked on this device until you clear them, so a big wash can be interrupted. They follow the order that keeps grit moving down, not back onto the leaves."
					}
				]
			},
			{ kind: "wash" },
			{
				kind: "blocks",
				blocks: [{
					type: "h2",
					text: "Which leaf hides the dirt"
				}, {
					type: "p",
					text: "Use the crop cards if you want the full portrait. These are only the washing habits that differ."
				}]
			},
			{ kind: "rinses" }
		]
	}
];
function chapterById(id) {
	return CHAPTERS.find((chapter) => chapter.id === id);
}
var CROPS = [
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
		harvest: "Cut baby leaf about 1 inch above the crown so it can regrow, or take a firm head at the soil line. Loose-leaf types also give outer leaves for weeks.",
		seed: "Leave the slowest plant to bolt — the one that stayed mild. Flowers look like tiny dandelions. Seed is ripe when the heads turn fluffy, two or three weeks after bloom. Shake it into a bag. Wind will take it if you wait an extra day.",
		wash: "Usually the cleanest crop here. One cold bath is enough. Dry it at once; wet oakleaf turns to slime."
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
		harvest: "Take outer leaves, or cut the whole plant, before a flower stalk rises in the center. Bolted spinach turns bitter and is not worth washing.",
		seed: "You need a small crowd, not one plant. Seed clusters ripen tan and hard. Strip them into a bag and rub the hulls apart. Prickly-seeded types irritate bare fingers.",
		wash: "The grittiest leaf in this book. Swish, lift the leaves out, and repeat until the basin stays clear. Sand hides in the crown."
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
		harvest: "Twist or cut the lower leaves and always leave the growing tip. Stripping the crown stops the plant. A single plant can feed a kitchen for months.",
		seed: "Kale is a biennial. It must feel winter, then flower the next spring. In zones 7 and warmer, leave it in the bed under cover. In colder zones, dig plants with roots on, store them near freezing and slightly damp — not dry like seed — and replant in spring. Pods turn tan and shatter. Cut branches into a bag while some pods are still closed.",
		wash: "Aphids sit in the curls. Soak in cold water for several minutes, then rinse. Strip a woody midrib before it goes in the bowl."
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
		harvest: "Cut outer stalks at the base with a knife. Leave the heart. Pulling by hand tears the crown and invites rot.",
		seed: "In the second year a tall, branched stalk appears. Corky clusters turn brown. Cut the stalk, finish drying it under cover, then rub the seed free. Label the year, and write down whether any beet flowered within sight.",
		wash: "Rinse stems and leaves. Grit collects along the rib and where soil splashed the stalk. The leaf itself is easier than curly kale."
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
		harvest: "Cut young leaves for a mild taste. Older leaves are hotter, which some kitchens want and some do not. A cut 1 inch above the crown usually regrows once or twice.",
		seed: "One of the easier crops. Pods are thin and pointed, and they shatter. Pull plants when most pods are brown and hang them head-down in a bag. Wild arugula (Diplotaxis) is a different plant and does not cross with this one.",
		wash: "Tender. One gentle bath. Do not grind the leaves against the colander."
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
		harvest: "Take lower leaves the way you do with kale, and leave the bud. A light frost sweetens them. In mild zones a plant can stand all winter.",
		seed: "Treat it as kale's sibling. Overwinter the best plant, not the biggest stack of leaves from a struggling one. Bag the pods before they split. Do not save collard seed from a bed where broccoli or kale also flowered.",
		wash: "Broad leaves rinse more easily than curled kale. Check the underside for cabbageworm frass — dark green pellets — and wipe the midrib."
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
		harvest: "Young leaves are gentler. Cut and come again, or pull the plant when the leaves are full. Once the weather turns hot, expect spice, then a flower stalk.",
		seed: "Most gardens get seed the same season the plant bolts. Pods shatter as they tan. Cut stalks into a paper bag. This is not kale's species, so the two can flower side by side without mixing.",
		wash: "Fringed leaves hide grit. Soak, lift, and drain. The flavor is strong enough that a short soak will not wash it out."
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
		harvest: "Cut the whole head at the soil line when the base is swollen and before any flower stalk shows. Thinning gives you baby plants earlier.",
		seed: "A bolted spring plant often sets seed the same year. If mizuna or a turnip flowers in the same garden, this seed will not come back as bok choy. Dry the pods in a bag and thresh when they are brittle.",
		wash: "Soil packs into the heart. Split the base enough to flush between the stalks, then rinse. Do not skip the center."
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
		harvest: "Cut above the crown and it resprouts several times. The leaf is milder than mustard. Take it young if you want it in a mixed salad rather than a braise.",
		seed: "Pods shatter. Bag the stalks as they tan. Because it shares a species with bok choy, flowering both in one year gives you a mystery green next spring.",
		wash: "The lobes trap sand. A cold soak, then a lift out of the water, clears them. Spin dry before it goes in the fridge."
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
		harvest: "Cut leaves when stems are 4–6 inches, leaving the growing center, or shear the top third. When the flower stalk rises, leaf flavor changes. Let it rise if you want coriander.",
		seed: "The easiest seed in this book. Umbels go from green seeds to tan seeds. Cut the heads into a paper bag before they drop. Dry until the round seeds fall off. What you plant next year is the spice.",
		wash: "Hold the bunch by the stems and swish. Grit collects at the tie. Pat dry. Wet cilantro stored in a closed box turns dark."
	}
];
function cropById(id) {
	if (!id) return void 0;
	return CROPS.find((crop) => crop.id === id);
}
var FROST_LABEL = {
	tender: "Hurt by a hard freeze",
	light: "Takes a light frost",
	hardy: "Stands real cold"
};
var HEAT_LABEL = {
	shy: "Bolts in heat",
	fair: "Tolerates a warm spell",
	steady: "The one that keeps going"
};
var $$splitComponentImporter = () => import("./routes-BiJvkAFi.mjs");
var CHAPTER_IDS = /* @__PURE__ */ new Set(["cover", ...CHAPTERS.map((chapter) => chapter.id)]);
var CROP_IDS = new Set(CROPS.map((crop) => crop.id));
var Route = createFileRoute("/")({
	validateSearch: (search) => {
		const chapter = typeof search.chapter === "string" && CHAPTER_IDS.has(search.chapter) ? search.chapter : "cover";
		const zoneNum = typeof search.zone === "number" ? search.zone : Number(search.zone);
		return {
			chapter,
			zone: zoneNum >= 3 && zoneNum <= 11 ? Math.round(zoneNum) : void 0,
			crop: typeof search.crop === "string" && CROP_IDS.has(search.crop) ? search.crop : void 0
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { HEAT_LABEL as a, chapterById as c, FROST_LABEL as i, Route as n, cropById as o, CROPS as r, CHAPTERS as s, router_exports as t };
