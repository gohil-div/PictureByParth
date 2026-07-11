//#region src/assets/hero-1.jpg
var hero_1_default = "/assets/hero-1-Ttwf7fYD.jpg";
//#endregion
//#region src/assets/hero-2.jpg
var hero_2_default = "/assets/hero-2-DCKsfTIR.jpg";
//#endregion
//#region src/assets/detail-1.jpg
var detail_1_default = "/assets/detail-1-jfBOE6LO.jpg";
//#endregion
//#region src/assets/reception.jpg
var reception_default = "/assets/reception-qH9KbKj2.jpg";
//#endregion
//#region src/assets/bride-1.jpg
var bride_1_default = "/assets/bride-1-iyJiXQjn.jpg";
//#endregion
//#region src/assets/dance.jpg
var dance_default = "/assets/dance-DcaWurnX.jpg";
//#endregion
//#region src/assets/ceremony.jpg
var ceremony_default = "/assets/ceremony-3Kmztb1e.jpg";
//#endregion
//#region src/assets/bouquet.jpg
var bouquet_default = "/assets/bouquet-E-fUS1Bi.jpg";
//#endregion
//#region src/lib/stories.ts
var images = {
	hero1: hero_1_default,
	hero2: hero_2_default,
	detail1: detail_1_default,
	reception: reception_default,
	bride1: bride_1_default,
	dance: dance_default,
	ceremony: ceremony_default,
	bouquet: bouquet_default
};
var stories = [
	{
		slug: "amelia-and-thomas",
		couple: "Amelia & Thomas",
		location: "Val d'Orcia, Tuscany",
		date: "June",
		year: "2025",
		chapter: "Love",
		cover: hero_2_default,
		coverAlt: "Amelia and Thomas in a Tuscan olive grove at dawn",
		intro: "On a morning when the hills wore mist like a veil, two families crossed an old stone road to meet beneath the olives. What followed was not a wedding so much as a long, quiet exhale — a day measured in glances, candlelight, and the slow rituals of belonging.",
		blocks: [
			{
				kind: "single",
				src: hero_1_default,
				alt: "Bride walking the aisle of an ancient chapel"
			},
			{
				kind: "verse",
				text: "Two families became one."
			},
			{
				kind: "pair",
				left: {
					src: detail_1_default,
					alt: "Bride's hands resting on lace, vintage ring catching the light"
				},
				right: {
					src: bouquet_default,
					alt: "Bouquet of garden roses on antique linen"
				}
			},
			{
				kind: "single",
				src: bride_1_default,
				alt: "Bride on a marble staircase before the ceremony"
			},
			{
				kind: "verse",
				text: "A celebration beyond photographs."
			},
			{
				kind: "pair",
				left: {
					src: ceremony_default,
					alt: "Cliffside ceremony at sunset"
				},
				right: {
					src: hero_2_default,
					alt: "Amelia and Thomas in the Tuscan olive grove"
				}
			},
			{
				kind: "single",
				src: reception_default,
				alt: "Long candlelit dinner table beneath olive trees"
			},
			{
				kind: "verse",
				text: "Some memories deserve to live forever."
			},
			{
				kind: "single",
				src: dance_default,
				alt: "First dance in a candlelit ballroom"
			},
			{
				kind: "paragraph",
				text: "They danced until the candles were low and the night was warm against the windows. Somewhere between the second song and the last, the day stopped belonging to anyone but them."
			}
		]
	},
	{
		slug: "isabel-and-rafael",
		couple: "Isabel & Rafael",
		location: "Amalfi Coast, Italy",
		date: "September",
		year: "2024",
		chapter: "Celebrations",
		cover: ceremony_default,
		coverAlt: "Cliffside ceremony at golden hour above the Mediterranean",
		intro: "A wedding written in salt air and sunlight, where the sea kept time and every promise was carried out across the water.",
		blocks: [
			{
				kind: "single",
				src: hero_1_default,
				alt: "Guests gathering on the cliffside terrace"
			},
			{
				kind: "verse",
				text: "The sea kept time for them."
			},
			{
				kind: "pair",
				left: {
					src: bouquet_default,
					alt: "Bouquet on linen"
				},
				right: {
					src: detail_1_default,
					alt: "Hands and rings"
				}
			},
			{
				kind: "single",
				src: dance_default,
				alt: "Dancing beneath string lights above the water"
			},
			{
				kind: "paragraph",
				text: "Somewhere past midnight the music slowed, and for a moment the whole terrace seemed to hold its breath with them."
			},
			{
				kind: "single",
				src: reception_default,
				alt: "Reception under string lights"
			},
			{
				kind: "verse",
				text: "Vows carried out across the water."
			},
			{
				kind: "single",
				src: ceremony_default,
				alt: "Cliffside ceremony at golden hour"
			}
		]
	},
	{
		slug: "claire-and-henry",
		couple: "Claire & Henry",
		location: "Cotswolds, England",
		date: "May",
		year: "2024",
		chapter: "Beginnings",
		cover: bride_1_default,
		coverAlt: "Bride on a marble staircase in soft window light",
		intro: "An intimate gathering in a manor of long halls and quiet rooms, where the morning began with letters and ended with a fire that would not go out.",
		blocks: [
			{
				kind: "single",
				src: hero_2_default,
				alt: "Morning light in the manor's east wing"
			},
			{
				kind: "verse",
				text: "Some mornings are written long before they happen."
			},
			{
				kind: "pair",
				left: {
					src: detail_1_default,
					alt: "Hands and lace"
				},
				right: {
					src: bouquet_default,
					alt: "Roses and trailing greenery"
				}
			},
			{
				kind: "single",
				src: dance_default,
				alt: "First dance in the manor hall"
			},
			{
				kind: "paragraph",
				text: "The fire was still going when the last of the letters were read aloud, long after the candles at the table had burned to nothing."
			},
			{
				kind: "single",
				src: reception_default,
				alt: "Fire in the manor hall"
			},
			{
				kind: "verse",
				text: "A fire that would not go out."
			},
			{
				kind: "single",
				src: bride_1_default,
				alt: "Quiet portrait before the vows"
			}
		]
	}
];
var chapters = [
	{
		name: "Love",
		tagline: "Quiet declarations.",
		image: detail_1_default
	},
	{
		name: "Beginnings",
		tagline: "The morning of.",
		image: bride_1_default
	},
	{
		name: "Legacy",
		tagline: "Families, becoming.",
		image: hero_1_default
	},
	{
		name: "Celebrations",
		tagline: "Long nights, low candles.",
		image: reception_default
	}
];
var findStory = (slug) => stories.find((s) => s.slug === slug);
//#endregion
export { stories as i, findStory as n, images as r, chapters as t };
