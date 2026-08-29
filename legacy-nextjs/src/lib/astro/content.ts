import type {
  Badge,
  DailyChallenge,
  LeaderboardEntry,
  Lesson,
  Track,
  UserStats,
} from "./types";

// L / T / q helpers live in their own module so the auto-generated
// content-expansion.ts can reuse them without creating an import cycle.
export { L, T, q } from "./content-helpers";
import { L, T, q } from "./content-helpers";
export type { ChoiceSeed } from "./content-helpers";

// Stargazing track lessons
const constellations: Lesson = {
  id: "constellations",
  trackId: "stargazing",
  title: L("北斗七星", "The Big Dipper"),
  subtitle: L("认识指路星", "Find your way by the stars"),
  icon: "🌌",
  xp: 20,
  teach: [
    T("🌌", ["北斗七星是天空中最好认的图案之一", "The Big Dipper is one of the easiest shapes to spot"], ["它由七颗亮星组成一个大勺子形状，几乎全年可见。", "Seven bright stars form a big dipper (ladle) shape, visible almost year-round."]),
    T("🧭", ["顺着勺口两星，能找到北极星", "Its two 'pointer' stars lead you to Polaris"], ["把勺口两颗星连线延长约 5 倍，就会指向几乎不动的北极星。", "Extend the line through its two pointer stars about 5× and you land on Polaris, which barely moves."]),
  ],
  questions: [
    q("con-1", ["北斗七星属于哪个星座的一部分？", "The Big Dipper is part of which constellation?"], [
      { zh: "大熊座", en: "Ursa Major", glyph: "🐻" },
      { zh: "猎户座", en: "Orion", glyph: "🏹" },
      { zh: "天蝎座", en: "Scorpius", glyph: "🦂" },
    ], 0, ["北斗七星是大熊座的显著部分，古人靠它辨方向。", "The Big Dipper is a prominent part of Ursa Major, long used to find direction."]),
    q("con-2", ["顺着北斗“勺口”两颗星延长，能找到哪颗星？", "Extending the Dipper's two pointer stars leads to which star?"], [
      { zh: "织女星", en: "Vega" },
      { zh: "北极星", en: "Polaris", glyph: "⭐" },
      { zh: "天狼星", en: "Sirius" },
    ], 1, ["勺口两星连线延长约 5 倍，就指向北极星，它几乎正对北天极。", "Extend the pointer stars about 5× and you reach Polaris, nearly at the north celestial pole."]),
    q("con-3", ["下列哪颗是北极星？", "Which one is Polaris?"], [
      { zh: "🔴", en: "🔴" },
      { zh: "⭐", en: "⭐" },
      { zh: "🟠", en: "🟠" },
    ], 1, ["北极星并不是最亮的星，但它位置几乎不动，是夜空的“定盘星”。", "Polaris isn't the brightest star, but it barely moves — the sky's anchor."], "🧭"),
    q("con-4", ["北极星在夜空中的位置会怎样？", "How does Polaris move across the night sky?"], [
      { zh: "几乎不动", en: "Barely moves" },
      { zh: "快速东升西落", en: "Rises east, sets west fast" },
      { zh: "随季节消失", en: "Vanishes by season" },
    ], 0, ["因为它接近北天极，一整夜几乎待在原地，其他星围着它转。", "Being near the north celestial pole, it stays put while others circle it."]),
  ],
};

const moonPhases: Lesson = {
  id: "moon-phases",
  trackId: "stargazing",
  title: L("月相变化", "Moon Phases"),
  subtitle: L("从新月到满月", "From new moon to full"),
  icon: "🌙",
  xp: 20,
  teach: [
    T("🌗", ["月相由太阳、地球、月亮的位置决定", "Moon phases depend on Sun–Earth–Moon geometry"], ["月亮本身不发光，我们看到的是它被太阳照亮的那一面，比例会随位置变化。", "The Moon doesn't glow on its own — we see the sunlit portion, which changes as it orbits."]),
    T("🌕", ["满月与新月是两个极端", "Full moon and new moon are the two extremes"], ["满月时地球在中间，月面全亮；新月时月亮在太阳一侧，月面几乎全暗。", "At full moon Earth is in the middle so we see it fully lit; at new moon the Moon sits near the Sun and looks almost dark."]),
  ],
  questions: [
    q("moon-1", ["月相变化的根本原因是？", "What causes the Moon's phases?"], [
      { zh: "月亮自己发光强弱", en: "The Moon's own glow varies" },
      { zh: "日地月相对位置变化", en: "Sun–Earth–Moon geometry", glyph: "🌗" },
      { zh: "地球影子遮住月亮", en: "Earth's shadow on the Moon" },
    ], 1, ["月相由太阳照亮的月面被我们看到的比例决定，取决于日、地、月三者位置。", "Phases depend on how much of the sunlit Moon we see, set by Sun–Earth–Moon positions."]),
    q("moon-2", ["满月时，太阳、地球、月亮大致呈什么关系？", "At full moon, how are Sun, Earth and Moon arranged?"], [
      { zh: "地球在中间", en: "Earth in the middle" },
      { zh: "月亮在中间", en: "Moon in the middle" },
      { zh: "三点一线各在两端", en: "All in a random line" },
    ], 0, ["满月时地球位于太阳和月亮之间，我们看到被完全照亮的月面。", "At full moon Earth sits between Sun and Moon, so we see the fully lit face."]),
    q("moon-3", ["下列哪个是新月？", "Which one is a new moon?"], [
      { zh: "🌑", en: "🌑" },
      { zh: "🌕", en: "🌕" },
      { zh: "🌓", en: "🌓" },
    ], 0, ["新月时月面朝向地球的一侧几乎没被照亮，所以几乎看不见。", "At new moon the Earth-facing side is barely lit, so it's nearly invisible."], "🌘"),
  ],
};

const planetsSky: Lesson = {
  id: "planets-sky",
  trackId: "stargazing",
  title: L("辨认行星", "Spotting Planets"),
  subtitle: L("行星不眨眼", "Planets don't twinkle"),
  icon: "🪐",
  xp: 24,
  teach: [
    T("✨", ["行星和恒星最大的区别：会不会“眨眼”", "The big giveaway: does it twinkle?"], ["恒星因大气扰动容易闪烁，行星视面稍大，光线更稳定、几乎不闪。", "Stars twinkle due to air turbulence; planets show a tiny disk and shine with a steadier light."]),
  ],
  questions: [
    q("plsky-1", ["如何用肉眼区分行星和恒星？", "How can you tell a planet from a star by eye?"], [
      { zh: "行星更亮更闪烁", en: "Planets are brighter and twinkle" },
      { zh: "行星通常不眨眼、光稳定", en: "Planets shine steadily, no twinkle", glyph: "✨" },
      { zh: "行星总是红色", en: "Planets are always red" },
    ], 1, ["恒星因大气扰动更容易“眨眼”闪烁，行星视面较大，光相对稳定。", "Stars twinkle from air turbulence; planets show a small disk and shine steadily."]),
    q("plsky-2", ["傍晚西方天空常见的极亮“星”多半是？", "The very bright 'star' low in the west after sunset is usually?"], [
      { zh: "金星", en: "Venus", glyph: "♀" },
      { zh: "火星", en: "Mars", glyph: "♂" },
      { zh: "土星", en: "Saturn", glyph: "♄" },
    ], 0, ["金星是天空第三亮的天体，常在日出前或日落后出现，俗称启明星/长庚星。", "Venus is the third-brightest object in the sky, seen near dawn or dusk."]),
    q("plsky-3", ["下列哪颗行星呈明显红色？", "Which planet appears distinctly red?"], [
      { zh: "🔵", en: "🔵" },
      { zh: "🔴", en: "🔴" },
      { zh: "🟡", en: "🟡" },
    ], 1, ["火星表面富含氧化铁（铁锈），因此呈现红色。", "Mars looks red because its surface is rich in iron oxide (rust)."], "🔭"),
  ],
};

// Cosmos track lessons
const solarSystem: Lesson = {
  id: "solar-system",
  trackId: "cosmos",
  title: L("八大行星", "Eight Planets"),
  subtitle: L("太阳系家族", "The Solar System family"),
  icon: "☀️",
  xp: 20,
  teach: [
    T("☀️", ["太阳系有八颗大行星", "The Solar System has eight major planets"], ["按离太阳从近到远：水星、金星、地球、火星、木星、土星、天王星、海王星。", "In order from the Sun: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune."]),
  ],
  questions: [
    q("ss-1", ["太阳系有几颗大行星？", "How many major planets are in the Solar System?"], [
      { zh: "八颗", en: "Eight" },
      { zh: "九颗", en: "Nine" },
      { zh: "七颗", en: "Seven" },
    ], 0, ["2006 年冥王星被重新归类为矮行星后，太阳系有八颗大行星。", "Since Pluto was reclassified as a dwarf planet in 2006, there are eight major planets."]),
    q("ss-2", ["离太阳最近的行星是？", "Which planet is closest to the Sun?"], [
      { zh: "金星", en: "Venus" },
      { zh: "水星", en: "Mercury", glyph: "☿" },
      { zh: "地球", en: "Earth" },
    ], 1, ["水星是最靠近太阳的行星，公转一圈只需约 88 天。", "Mercury is closest to the Sun, orbiting in about 88 days."]),
    q("ss-3", ["下列哪颗是太阳系最大的行星？", "Which is the largest planet?"], [
      { zh: "🪐", en: "🪐" },
      { zh: "🌍", en: "🌍" },
      { zh: "🟤", en: "🟤" },
    ], 0, ["木星是太阳系最大的行星，其质量超过其他所有行星之和的两倍。", "Jupiter is the largest planet — over twice the mass of all others combined."], "🌌"),
    q("ss-4", ["地球在八大行星中排第几近太阳？", "Earth is the nth closest planet to the Sun — which n?"], [
      { zh: "第二", en: "Second" },
      { zh: "第三", en: "Third" },
      { zh: "第四", en: "Fourth" },
    ], 1, ["按水、金、地、火……的顺序，地球是离太阳第三近的行星。", "In order Mercury, Venus, Earth, Mars… Earth is the third from the Sun."]),
  ],
};

const marsBasics: Lesson = {
  id: "mars-basics",
  trackId: "cosmos",
  title: L("火星辨认", "Meet Mars"),
  subtitle: L("红色星球", "The Red Planet"),
  icon: "🔴",
  xp: 22,
  teach: [
    T("🔴", ["火星因表面氧化铁而呈红色", "Mars looks red because of iron oxide"], ["火星土壤富含氧化铁（铁锈），让整颗行星呈红褐色，肉眼就能看出。", "Martian soil is rich in iron oxide (rust), giving the whole planet a red-brown tint visible to the naked eye."]),
  ],
  questions: [
    q("mars-1", ["火星为什么是红色？", "Why is Mars red?"], [
      { zh: "表面富含氧化铁", en: "Surface rich in iron oxide", glyph: "🧲" },
      { zh: "大气充满火焰", en: "Its air is full of fire" },
      { zh: "反射太阳红光", en: "It reflects red sunlight" },
    ], 0, ["火星土壤富含氧化铁（铁锈），使整颗行星呈现红褐色。", "Martian soil is rich in iron oxide (rust), giving the planet its red-brown color."]),
    q("mars-2", ["下列哪颗是火星？", "Which one is Mars?"], [
      { zh: "金星", en: "Venus", glyph: "♀" },
      { zh: "火星", en: "Mars", glyph: "♂" },
      { zh: "木星", en: "Jupiter", glyph: "♃" },
    ], 1, ["火星是离太阳第四近的行星，肉眼看呈红色。", "Mars is the fourth planet from the Sun and looks red to the eye."], "🪐"),
    q("mars-3", ["火星上最高的火山奥林帕斯山有多特别？", "How special is Olympus Mons, Mars' tallest volcano?"], [
      { zh: "太阳系最高", en: "Tallest in the Solar System", glyph: "🌋" },
      { zh: "比珠峰略高", en: "Just taller than Everest" },
      { zh: "已被填平", en: "It's been flattened" },
    ], 0, ["奥林帕斯山约 22 公里高，是太阳系已知最高的火山。", "Olympus Mons is about 22 km high — the tallest known volcano in the Solar System."]),
    q("mars-4", ["火星有几颗卫星？", "How many moons does Mars have?"], [
      { zh: "两颗", en: "Two" },
      { zh: "一颗", en: "One" },
      { zh: "没有", en: "None" },
    ], 0, ["火星有两颗小卫星：火卫一（Phobos）和火卫二（Deimos）。", "Mars has two small moons: Phobos and Deimos."]),
  ],
};

const blackHole: Lesson = {
  id: "black-hole",
  trackId: "cosmos",
  title: L("黑洞入门", "Black Holes 101"),
  subtitle: L("连光都逃不出", "Not even light escapes"),
  icon: "🕳️",
  xp: 28,
  teach: [
    T("🌀", ["黑洞：连光都逃不出的边界", "Black holes: a boundary even light can't escape"], ["“事件视界”是黑洞周围的边界，一旦越过，任何东西（包括光）都无法再逃出。", "The 'event horizon' marks the point of no return — cross it and nothing, not even light, escapes."]),
  ],
  questions: [
    q("bh-1", ["黑洞的“事件视界”是什么？", "What is a black hole's 'event horizon'?"], [
      { zh: "黑洞的表面岩层", en: "Its rocky surface" },
      { zh: "连光都无法逃逸的边界", en: "Boundary even light can't escape", glyph: "🌀" },
      { zh: "黑洞发出的光环", en: "A ring of emitted light" },
    ], 1, ["事件视界是一个边界，一旦越过，任何东西（包括光）都无法再逃出。", "The event horizon is a boundary beyond which nothing, not even light, can escape."]),
    q("bh-2", ["大多数恒星级黑洞是怎么形成的？", "How do most stellar black holes form?"], [
      { zh: "大质量恒星坍缩", en: "Collapse of a massive star", glyph: "💥" },
      { zh: "行星相撞", en: "Planets colliding" },
      { zh: "彗星聚集", en: "Comets clumping" },
    ], 0, ["大质量恒星耗尽燃料后核心坍缩，可能形成黑洞。", "When a massive star runs out of fuel its core collapses, possibly forming a black hole."]),
    q("bh-3", ["我们星系中心大概有什么？", "What's at the center of our galaxy?"], [
      { zh: "超大质量黑洞", en: "A supermassive black hole" },
      { zh: "一颗巨大行星", en: "A giant planet" },
      { zh: "空无一物", en: "Nothing at all" },
    ], 0, ["银河系中心存在一个超大质量黑洞，人马座 A*。", "The Milky Way's center hosts a supermassive black hole, Sagittarius A*."]),
  ],
};

// Phenomena track lessons
const eclipse: Lesson = {
  id: "eclipse",
  trackId: "phenomena",
  title: L("日月食", "Eclipses"),
  subtitle: L("光影游戏", "A game of light and shadow"),
  icon: "🌑",
  xp: 22,
  teach: [
    T("🌘", ["日食月食都是光影的排队游戏", "Eclipses are a lineup of light and shadow"], ["日食：月亮挡住太阳；月食：地球的影子落在月亮上。两者都需要日、地、月排成一线。", "Solar eclipse: the Moon blocks the Sun. Lunar eclipse: Earth's shadow falls on the Moon. Both need the three roughly in a line."]),
  ],
  questions: [
    q("ecl-1", ["日食发生时，中间挡住太阳的是？", "During a solar eclipse, what blocks the Sun?"], [
      { zh: "月亮", en: "The Moon", glyph: "🌚" },
      { zh: "地球", en: "The Earth" },
      { zh: "云层", en: "Clouds" },
    ], 0, ["日食是月亮运行到太阳和地球之间，挡住了太阳光。", "A solar eclipse happens when the Moon moves between Sun and Earth, blocking sunlight."]),
    q("ecl-2", ["月食发生时，谁的影子落在月亮上？", "During a lunar eclipse, whose shadow falls on the Moon?"], [
      { zh: "月亮自己", en: "The Moon's own" },
      { zh: "地球", en: "Earth's", glyph: "🌍" },
      { zh: "太阳", en: "The Sun's" },
    ], 1, ["月食是地球位于太阳和月亮之间，地球影子投到月面上。", "In a lunar eclipse Earth sits between Sun and Moon, casting its shadow on the Moon."]),
    q("ecl-3", ["为什么不是每个月都有日食月食？", "Why isn't there an eclipse every month?"], [
      { zh: "月球轨道有倾角", en: "The Moon's orbit is tilted", glyph: "📐" },
      { zh: "月亮太小", en: "The Moon is too small" },
      { zh: "太阳太远", en: "The Sun is too far" },
    ], 0, ["月球轨道相对地球轨道有约 5° 倾角，多数月份三者不会精确成一线。", "The Moon's orbit is tilted ~5°, so the three rarely line up exactly each month."]),
  ],
};

const meteorShower: Lesson = {
  id: "meteor-shower",
  trackId: "phenomena",
  title: L("流星雨", "Meteor Showers"),
  subtitle: L("许愿时刻", "Time to make a wish"),
  icon: "☄️",
  xp: 22,
  teach: [
    T("🔥", ["流星是尘埃冲进大气层的火花", "Meteors are dust burning up in our atmosphere"], ["彗星留下的尘埃带闯入地球大气，与空气高速摩擦生热发光，形成一场流星雨。", "Dust trails left by comets slam into our atmosphere; friction heats them and they glow — a meteor shower."]),
  ],
  questions: [
    q("met-1", ["流星雨常来自哪类碎屑？", "Meteor showers usually come from debris of what?"], [
      { zh: "恒星黑子", en: "Star spots" },
      { zh: "彗星尘埃", en: "Comet dust", glyph: "☄️" },
      { zh: "行星环冰", en: "Ring ice" },
    ], 1, ["彗星留下的尘埃带进入地球大气高速摩擦发光，形成流星雨。", "Dust trails left by comets hit our atmosphere at high speed and glow — a meteor shower."]),
    q("met-2", ["流星发光是因为？", "Why does a meteor glow?"], [
      { zh: "自身燃烧的岩浆", en: "Its own burning lava" },
      { zh: "高速摩擦大气生热发光", en: "Friction with air heats it", glyph: "🔥" },
      { zh: "反射月光", en: "It reflects moonlight" },
    ], 1, ["流星体以极高速度冲入大气，与空气剧烈摩擦、电离发光。", "A meteoroid enters the air at huge speed; friction heats and ionizes it, making it glow."]),
    q("met-3", ["“辐射点”是指什么？", "What is a shower's 'radiant'?"], [
      { zh: "流星看似发散的天区", en: "Point meteors seem to spread from", glyph: "✨" },
      { zh: "最亮那颗流星", en: "The brightest meteor" },
      { zh: "地面观测点", en: "The ground observing spot" },
    ], 0, ["同一场流星雨的流星看似从天空某一点向四周辐射，那点就是辐射点。", "The meteors of a shower appear to radiate from one point in the sky — the radiant."]),
  ],
};

const aurora: Lesson = {
  id: "aurora",
  trackId: "phenomena",
  title: L("极光", "Auroras"),
  subtitle: L("天空的绸带", "Ribbons in the sky"),
  icon: "🌈",
  xp: 26,
  teach: [
    T("☀️", ["极光来自太阳发射的带电粒子", "Auroras are sparked by charged particles from the Sun"], ["这些粒子被地球磁场引导到南北极区，撞击大气分子后发出绚丽的光。", "Earth's magnetic field funnels these particles to the polar regions, where they excite air molecules into glowing ribbons."]),
  ],
  questions: [
    q("aur-1", ["极光主要由什么引发？", "What mainly triggers auroras?"], [
      { zh: "太阳带电粒子撞击大气", en: "Solar particles hitting the air", glyph: "☀️" },
      { zh: "月光折射", en: "Refracted moonlight" },
      { zh: "城市灯光反射", en: "City light reflection" },
    ], 0, ["太阳风的带电粒子被地球磁场引导到极区，撞击大气分子发光。", "Charged solar-wind particles are guided to the poles and make air molecules glow."]),
    q("aur-2", ["极光最常出现在地球的哪里？", "Where do auroras appear most often?"], [
      { zh: "赤道附近", en: "Near the equator" },
      { zh: "高纬度极区", en: "High-latitude polar zones", glyph: "🧭" },
      { zh: "海洋上空", en: "Above the oceans" },
    ], 1, ["极光多见于南北高纬度的“极光带”，如北欧、阿拉斯加。", "Auroras mostly appear in the high-latitude 'auroral ovals', like Scandinavia or Alaska."]),
    q("aur-3", ["绿色极光主要由哪种气体发光？", "Which gas mainly makes green auroras?"], [
      { zh: "氧原子", en: "Oxygen atoms" },
      { zh: "氢气", en: "Hydrogen" },
      { zh: "二氧化碳", en: "Carbon dioxide" },
    ], 0, ["约 100 公里高处的氧原子受激发，常发出标志性的绿色极光。", "Excited oxygen atoms around 100 km up give the signature green aurora."]),
  ],
};

// ── Extra Stargazing lessons ────────────────────────────────────────
const orionHunter: Lesson = {
  id: "orion-hunter",
  trackId: "stargazing",
  title: L("猎户座", "Orion the Hunter"),
  subtitle: L("冬夜最好认", "The easiest winter shape"),
  icon: "🏹",
  xp: 22,
  teach: [
    T("✨", ["猎户座的标志是腰带三连星", "Orion's signature is its three-star belt"], ["三颗几乎等距排列的亮星连成一线，冬夜非常好找。", "Three bright, evenly-spaced stars in a row make Orion easy to spot on winter nights."]),
  ],
  questions: [
    q("ori-1", ["猎户座最醒目的标志是？", "Orion's most recognizable feature is?"], [
      { zh: "腰带三连星", en: "The three belt stars", glyph: "✨" },
      { zh: "一颗超大红星", en: "One huge red star" },
      { zh: "一个圆环", en: "A ring shape" },
    ], 0, ["猎户腰带由三颗几乎等间距的亮星排成一线，非常好认。", "Orion's Belt is three bright, nearly evenly-spaced stars in a row — easy to spot."]),
    q("ori-2", ["猎户座肩上的红巨星叫什么？", "What's the red giant on Orion's shoulder?"], [
      { zh: "参宿四", en: "Betelgeuse", glyph: "🔴" },
      { zh: "天狼星", en: "Sirius" },
      { zh: "北极星", en: "Polaris" },
    ], 0, ["参宿四（Betelgeuse）是一颗红超巨星，未来可能以超新星爆发。", "Betelgeuse is a red supergiant that may one day explode as a supernova."]),
    q("ori-3", ["顺着猎户腰带向下延伸能找到哪颗全天最亮恒星？", "Following the belt down leads to the brightest star — which?"], [
      { zh: "天狼星", en: "Sirius", glyph: "🌟" },
      { zh: "织女星", en: "Vega" },
      { zh: "角宿一", en: "Spica" },
    ], 0, ["沿腰带向左下延伸即可找到全天最亮的恒星——天狼星。", "Extend the belt down-left to reach Sirius, the brightest star in the night sky."]),
  ],
};

const magnitude: Lesson = {
  id: "magnitude",
  trackId: "stargazing",
  title: L("星等亮度", "Star Brightness"),
  subtitle: L("数字越小越亮", "Smaller number, brighter star"),
  icon: "🔆",
  xp: 24,
  teach: [
    T("🔆", ["星等：数字越小越亮，有点反直觉", "Magnitude: smaller number = brighter (a bit backwards!)"], ["这是天文学的老规矩，最亮的星甚至是负数星等。人眼在暗夜大约能看到 6 等星。", "It's an old astronomy convention — the brightest objects even go negative. In dark skies the eye sees down to about magnitude 6."]),
  ],
  questions: [
    q("mag-1", ["天文里“星等”数字越小代表？", "In astronomy, a smaller magnitude number means?"], [
      { zh: "越亮", en: "Brighter", glyph: "🔆" },
      { zh: "越暗", en: "Dimmer" },
      { zh: "越远", en: "Farther" },
    ], 0, ["星等系统里数字越小越亮，最亮的天体甚至是负星等。", "In the magnitude scale, smaller numbers are brighter — the brightest are even negative."]),
    q("mag-2", ["肉眼在理想暗夜大约能看到几等星？", "Under a dark sky, the eye can see down to about which magnitude?"], [
      { zh: "约 6 等", en: "About 6th" },
      { zh: "约 20 等", en: "About 20th" },
      { zh: "约 0 等", en: "About 0" },
    ], 0, ["理想黑暗环境下，人眼极限大约是 6 等星。", "In ideal darkness the naked-eye limit is roughly magnitude 6."]),
  ],
};

// ── Extra Cosmos lessons ────────────────────────────────────────────
const saturnRings: Lesson = {
  id: "saturn-rings",
  trackId: "cosmos",
  title: L("土星光环", "Saturn's Rings"),
  subtitle: L("冰与岩的圆盘", "A disk of ice and rock"),
  icon: "🪐",
  xp: 24,
  teach: [
    T("🧊", ["土星环不是一整块，是无数碎片", "Saturn's rings aren't solid — they're countless pieces"], ["环由冰和岩石碎块组成，大小从微粒到数米不等，是太阳系最壮观的环系统。", "The rings are ice and rock chunks ranging from tiny grains to boulders — the Solar System's most spectacular ring system."]),
  ],
  questions: [
    q("sat-1", ["土星光环主要由什么组成？", "Saturn's rings are mostly made of?"], [
      { zh: "冰和岩石碎块", en: "Ice and rock chunks", glyph: "🧊" },
      { zh: "连续的固体盘", en: "One solid disk" },
      { zh: "气体云", en: "Gas clouds" },
    ], 0, ["土星环是无数冰块和岩石碎片，从微粒到数米大小不等。", "Saturn's rings are countless ice and rock pieces, from specks to boulders."]),
    q("sat-2", ["下列哪颗行星以壮观光环著称？", "Which planet is famous for spectacular rings?"], [
      { zh: "🪐", en: "🪐" },
      { zh: "🌍", en: "🌍" },
      { zh: "🔴", en: "🔴" },
    ], 0, ["土星拥有太阳系最壮观、最明亮的行星环系统。", "Saturn has the most spectacular, brightest ring system in the Solar System."], "💫"),
  ],
};

const galaxies: Lesson = {
  id: "galaxies",
  trackId: "cosmos",
  title: L("星系与银河", "Galaxies"),
  subtitle: L("千亿颗恒星的家", "Home to billions of stars"),
  icon: "🌌",
  xp: 26,
  teach: [
    T("🌌", ["我们住在一个叫银河系的旋涡星系里", "We live inside a spiral galaxy called the Milky Way"], ["银河系拥有上千亿颗恒星，太阳只是其中普通的一颗。", "The Milky Way holds hundreds of billions of stars — our Sun is just an ordinary one among them."]),
  ],
  questions: [
    q("gal-1", ["我们所在的星系叫什么？", "What is our home galaxy called?"], [
      { zh: "银河系", en: "The Milky Way", glyph: "🌌" },
      { zh: "仙女座星系", en: "Andromeda" },
      { zh: "麦哲伦云", en: "Magellanic Cloud" },
    ], 0, ["我们生活在银河系中，一个拥有上千亿颗恒星的棒旋星系。", "We live in the Milky Way, a barred spiral with hundreds of billions of stars."]),
    q("gal-2", ["离银河系最近的大星系是？", "The nearest large galaxy to the Milky Way is?"], [
      { zh: "仙女座星系", en: "Andromeda", glyph: "🌀" },
      { zh: "草帽星系", en: "Sombrero" },
      { zh: "涡状星系", en: "Whirlpool" },
    ], 0, ["仙女座星系（M31）是最近的大型旋涡星系，正朝我们靠近。", "The Andromeda Galaxy (M31) is the nearest large spiral — and it's approaching us."]),
  ],
};

const bigBang: Lesson = {
  id: "big-bang",
  trackId: "cosmos",
  title: L("宇宙起源", "The Big Bang"),
  subtitle: L("一切的开端", "How it all began"),
  icon: "💥",
  xp: 30,
  teach: [
    T("⏳", ["宇宙大约诞生于 138 亿年前", "The Universe is about 13.8 billion years old"], ["这就是“大爆炸”——空间和时间本身从那一刻开始膨胀，至今仍在继续。", "That's the 'Big Bang' — space and time themselves began expanding at that moment, and still are."]),
  ],
  questions: [
    q("bb-1", ["宇宙大约有多少岁？", "About how old is the Universe?"], [
      { zh: "约 138 亿年", en: "About 13.8 billion years", glyph: "⏳" },
      { zh: "约 5 亿年", en: "About 500 million" },
      { zh: "约 1 万亿年", en: "About 1 trillion" },
    ], 0, ["观测表明宇宙约诞生于 138 亿年前的一次大爆炸。", "Observations place the Big Bang about 13.8 billion years ago."]),
    q("bb-2", ["支持大爆炸理论的关键证据之一是？", "A key piece of evidence for the Big Bang is?"], [
      { zh: "宇宙微波背景辐射", en: "Cosmic microwave background", glyph: "📡" },
      { zh: "月球陨石坑", en: "Moon craters" },
      { zh: "太阳黑子", en: "Sunspots" },
    ], 0, ["宇宙微波背景是大爆炸残留的“余温”，均匀弥漫整个天空。", "The cosmic microwave background is leftover heat from the Big Bang, filling the sky."]),
  ],
};

// ── Extra Phenomena lessons ─────────────────────────────────────────
const tides: Lesson = {
  id: "tides",
  trackId: "phenomena",
  title: L("潮汐", "Tides"),
  subtitle: L("月亮拉着海水", "The Moon tugs the sea"),
  icon: "🌊",
  xp: 24,
  teach: [
    T("🌙", ["潮汐是月亮在“拉”海水", "Tides are the Moon tugging on the ocean"], ["月球引力拉扯地球海水，形成有规律的涨潮和落潮，太阳引力也有较小贡献。", "The Moon's gravity pulls on Earth's oceans, creating regular high and low tides; the Sun adds a smaller effect."]),
  ],
  questions: [
    q("tide-1", ["地球潮汐主要由谁引起？", "Earth's tides are mainly caused by?"], [
      { zh: "月球引力", en: "The Moon's gravity", glyph: "🌙" },
      { zh: "风", en: "Wind" },
      { zh: "地球自转发热", en: "Earth's heat" },
    ], 0, ["月球引力拉扯海水，产生涨落潮，太阳也有较小的贡献。", "The Moon's gravity pulls the oceans to make tides; the Sun adds a smaller effect."]),
    q("tide-2", ["一天通常有几次涨潮？", "How many high tides occur in a day (typically)?"], [
      { zh: "两次", en: "Two" },
      { zh: "一次", en: "One" },
      { zh: "五次", en: "Five" },
    ], 0, ["多数海岸每天有两次涨潮和两次落潮，约每 12 小时一轮。", "Most coasts see two high and two low tides a day, roughly every 12 hours."]),
  ],
};

const comets: Lesson = {
  id: "comets",
  trackId: "phenomena",
  title: L("彗星", "Comets"),
  subtitle: L("拖着尾巴的雪球", "Dirty snowballs with tails"),
  icon: "☄️",
  xp: 26,
  teach: [
    T("🧊", ["彗星是“脏雪球”", "Comets are 'dirty snowballs'"], ["彗核主要是冰、尘埃和岩石的混合体，靠近太阳时会蒸发出长长的彗尾。", "A comet's nucleus is a mix of ice, dust and rock; approaching the Sun makes it vaporize into a long glowing tail."]),
  ],
  questions: [
    q("com-1", ["彗星的核心主要成分是？", "A comet's nucleus is mostly?"], [
      { zh: "冰、尘埃和岩石", en: "Ice, dust and rock", glyph: "🧊" },
      { zh: "纯铁", en: "Pure iron" },
      { zh: "熔岩", en: "Lava" },
    ], 0, ["彗核是冰、尘埃和岩石的混合体，常被称作“脏雪球”。", "A comet nucleus is a mix of ice, dust and rock — a 'dirty snowball'."]),
    q("com-2", ["彗尾总是朝哪个方向？", "A comet's tail always points?"], [
      { zh: "背离太阳", en: "Away from the Sun", glyph: "☀️" },
      { zh: "朝向太阳", en: "Toward the Sun" },
      { zh: "沿运动方向", en: "Along its motion" },
    ], 0, ["太阳风和辐射压把彗尾吹向背离太阳的方向。", "The solar wind and radiation pressure blow the tail away from the Sun."]),
  ],
};

// ── One linear journey: a single winding path, difficulty-graded ────
// Ordered beginner→advanced. `chapter` marks a section divider above a node.
// `left` is a 0..100 % across the path width (alternates for the S-curve).

const baseJourneyTrack: Track = {
  id: "journey",
  name: L("星旅之路", "Your Star Journey"),
  tagline: L("从零开始，一步一步", "From zero, one step at a time"),
  icon: "🚀",
  nodes: [
    // Chapter 1 — look up at the night sky (most concrete, naked-eye)
    { lesson: moonPhases, status: "done", stars: 3, left: 50, chapter: L("第 1 章 · 抬头看夜空", "Chapter 1 · Look up tonight") },
    { lesson: constellations, status: "current", stars: 0, left: 32 },
    { lesson: orionHunter, status: "locked", stars: 0, left: 62 },
    { lesson: planetsSky, status: "locked", stars: 0, left: 38 },
    { lesson: magnitude, status: "locked", stars: 0, left: 55 },
    // Chapter 2 — the Solar System & everyday sky events
    { lesson: solarSystem, status: "locked", stars: 0, left: 48, chapter: L("第 2 章 · 太阳系与身边天象", "Chapter 2 · The Solar System & sky events") },
    { lesson: marsBasics, status: "locked", stars: 0, left: 66 },
    { lesson: saturnRings, status: "locked", stars: 0, left: 40 },
    { lesson: tides, status: "locked", stars: 0, left: 58 },
    { lesson: eclipse, status: "locked", stars: 0, left: 34 },
    { lesson: meteorShower, status: "locked", stars: 0, left: 60 },
    { lesson: comets, status: "locked", stars: 0, left: 44 },
    // Chapter 3 — farther out & more abstract
    { lesson: aurora, status: "locked", stars: 0, left: 52, chapter: L("第 3 章 · 更远的宇宙", "Chapter 3 · The wider Universe") },
    { lesson: galaxies, status: "locked", stars: 0, left: 34 },
    { lesson: blackHole, status: "locked", stars: 0, left: 60 },
    { lesson: bigBang, status: "locked", stars: 0, left: 46 },
  ],
  };

// Auto-generated additional tracks (e.g. produced by scripts/import-content-from-json.ts).
// May be empty before the first import run.
import { EXTRA_TRACKS } from "./content-expansion";

export const TRACKS: Track[] = [baseJourneyTrack, ...EXTRA_TRACKS];

export const ALL_LESSONS: Lesson[] = TRACKS.flatMap((t) =>
  t.nodes.map((n) => n.lesson),
);

export function findLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id);
}

// ── Initial gamification state (in-app, no persistence) ─────────────

export const USER_STATS: UserStats = {
  displayName: L("星际旅人", "Star Voyager"),
  avatar: "🧑‍🚀",
  streak: 7,
  studiedToday: false,
  xp: 820,
  lessonsDone: 4,
  level: 5,
};

export const BADGES: Badge[] = [
  { id: "first-star", name: L("初次观星", "First Star"), desc: L("完成第一课", "Finish your first lesson"), icon: "🌟", unlocked: true },
  { id: "solar-grad", name: L("太阳系毕业", "Solar Grad"), desc: L("通关宇宙常识首单元", "Clear the first Cosmos unit"), icon: "☀️", unlocked: true },
  { id: "streak-7", name: L("七日连击", "7-Day Streak"), desc: L("连续打卡 7 天", "Study 7 days in a row"), icon: "🔥", unlocked: true },
  { id: "perfect", name: L("全对通关", "Flawless"), desc: L("一课全部答对", "Ace every question in a lesson"), icon: "💯", unlocked: true },
  { id: "night-owl", name: L("夜观达人", "Night Owl"), desc: L("完成观星入门全部关卡", "Clear all Stargazing levels"), icon: "🦉", unlocked: false },
  { id: "cosmos-master", name: L("宇宙学者", "Cosmos Scholar"), desc: L("通关全部宇宙常识", "Clear the whole Cosmos track"), icon: "🎓", unlocked: false },
  { id: "phenomena", name: L("现象猎人", "Phenomena Hunter"), desc: L("解锁三大天文现象", "Unlock all sky phenomena"), icon: "☄️", unlocked: false },
  { id: "streak-30", name: L("月度坚持", "30-Day Streak"), desc: L("连续打卡 30 天", "Study 30 days in a row"), icon: "🏆", unlocked: false },
];

export const DAILY_CHALLENGE: DailyChallenge = {
  date: "2026-08-24",
  question: q(
    "daily-1",
    ["银河系属于哪种类型的星系？", "What type of galaxy is the Milky Way?"],
    [
      { zh: "棒旋星系", en: "Barred spiral", glyph: "🌀" },
      { zh: "椭圆星系", en: "Elliptical" },
      { zh: "不规则星系", en: "Irregular" },
    ],
    0,
    ["银河系是一个棒旋星系，中央有棒状结构，旋臂从两端延展。", "The Milky Way is a barred spiral, with a central bar and arms extending from its ends."],
  ),
};

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: L("猎户座之王", "Orion King"), avatar: "🦁", xp: 2410, tier: "gold" },
  { rank: 2, name: L("追星少年", "Star Chaser"), avatar: "🌠", xp: 2180, tier: "gold" },
  { rank: 3, name: L("月光下的猫", "Moonlit Cat"), avatar: "🐈", xp: 1960, tier: "gold" },
  { rank: 4, name: L("银河漫游者", "Galaxy Rover"), avatar: "🚀", xp: 1520, tier: "silver" },
  { rank: 5, name: L("星际旅人", "Star Voyager"), avatar: "🧑‍🚀", xp: 820, tier: "silver", isMe: true },
  { rank: 6, name: L("小小天文台", "Tiny Observatory"), avatar: "🔭", xp: 760, tier: "silver" },
  { rank: 7, name: L("彗星尾巴", "Comet Tail"), avatar: "☄️", xp: 540, tier: "bronze" },
  { rank: 8, name: L("北极星旁", "By Polaris"), avatar: "⭐", xp: 410, tier: "bronze" },
];
