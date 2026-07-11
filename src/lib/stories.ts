import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import detail1 from "@/assets/detail-1.jpg";
import reception from "@/assets/reception.jpg";
import bride1 from "@/assets/bride-1.jpg";
import dance from "@/assets/dance.jpg";
import ceremony from "@/assets/ceremony.jpg";
import bouquet from "@/assets/bouquet.jpg";

export const images = {
  hero1,
  hero2,
  detail1,
  reception,
  bride1,
  dance,
  ceremony,
  bouquet,
};

export type StoryBlock =
  | { kind: "single"; src: string; alt: string; caption?: string }
  | {
      kind: "pair";
      left: { src: string; alt: string };
      right: { src: string; alt: string };
    }
  | { kind: "trio"; items: { src: string; alt: string }[] }
  | { kind: "verse"; text: string; attribution?: string }
  | { kind: "paragraph"; text: string };

export interface Story {
  slug: string;
  couple: string;
  location: string;
  date: string;
  year: string;
  chapter: "Love" | "Beginnings" | "Legacy" | "Celebrations";
  cover: string;
  coverAlt: string;
  intro: string;
  blocks: StoryBlock[];
}

export const stories: Story[] = [
  {
    slug: "amelia-and-thomas",
    couple: "Amelia & Thomas",
    location: "Val d'Orcia, Tuscany",
    date: "June",
    year: "2025",
    chapter: "Love",
    cover: hero2,
    coverAlt: "Amelia and Thomas in a Tuscan olive grove at dawn",
    intro:
      "On a morning when the hills wore mist like a veil, two families crossed an old stone road to meet beneath the olives. What followed was not a wedding so much as a long, quiet exhale — a day measured in glances, candlelight, and the slow rituals of belonging.",
    blocks: [
      {
        kind: "single",
        src: hero1,
        alt: "Bride walking the aisle of an ancient chapel",
      },
      { kind: "verse", text: "Two families became one." },
      {
        kind: "pair",
        left: {
          src: detail1,
          alt: "Bride's hands resting on lace, vintage ring catching the light",
        },
        right: {
          src: bouquet,
          alt: "Bouquet of garden roses on antique linen",
        },
      },
      {
        kind: "single",
        src: bride1,
        alt: "Bride on a marble staircase before the ceremony",
      },
      { kind: "verse", text: "A celebration beyond photographs." },
      {
        kind: "pair",
        left: { src: ceremony, alt: "Cliffside ceremony at sunset" },
        right: {
          src: hero2,
          alt: "Amelia and Thomas in the Tuscan olive grove",
        },
      },
      {
        kind: "single",
        src: reception,
        alt: "Long candlelit dinner table beneath olive trees",
      },
      { kind: "verse", text: "Some memories deserve to live forever." },
      {
        kind: "single",
        src: dance,
        alt: "First dance in a candlelit ballroom",
      },
      {
        kind: "paragraph",
        text: "They danced until the candles were low and the night was warm against the windows. Somewhere between the second song and the last, the day stopped belonging to anyone but them.",
      },
    ],
  },
  {
    slug: "isabel-and-rafael",
    couple: "Isabel & Rafael",
    location: "Amalfi Coast, Italy",
    date: "September",
    year: "2024",
    chapter: "Celebrations",
    cover: ceremony,
    coverAlt: "Cliffside ceremony at golden hour above the Mediterranean",
    intro:
      "A wedding written in salt air and sunlight, where the sea kept time and every promise was carried out across the water.",
    blocks: [
      {
        kind: "single",
        src: hero1,
        alt: "Guests gathering on the cliffside terrace",
      },
      { kind: "verse", text: "The sea kept time for them." },
      {
        kind: "pair",
        left: { src: bouquet, alt: "Bouquet on linen" },
        right: { src: detail1, alt: "Hands and rings" },
      },
      {
        kind: "single",
        src: dance,
        alt: "Dancing beneath string lights above the water",
      },
      {
        kind: "paragraph",
        text: "Somewhere past midnight the music slowed, and for a moment the whole terrace seemed to hold its breath with them.",
      },
      { kind: "single", src: reception, alt: "Reception under string lights" },
      { kind: "verse", text: "Vows carried out across the water." },
      {
        kind: "single",
        src: ceremony,
        alt: "Cliffside ceremony at golden hour",
      },
    ],
  },
  {
    slug: "claire-and-henry",
    couple: "Claire & Henry",
    location: "Cotswolds, England",
    date: "May",
    year: "2024",
    chapter: "Beginnings",
    cover: bride1,
    coverAlt: "Bride on a marble staircase in soft window light",
    intro:
      "An intimate gathering in a manor of long halls and quiet rooms, where the morning began with letters and ended with a fire that would not go out.",
    blocks: [
      {
        kind: "single",
        src: hero2,
        alt: "Morning light in the manor's east wing",
      },
      {
        kind: "verse",
        text: "Some mornings are written long before they happen.",
      },
      {
        kind: "pair",
        left: { src: detail1, alt: "Hands and lace" },
        right: { src: bouquet, alt: "Roses and trailing greenery" },
      },
      { kind: "single", src: dance, alt: "First dance in the manor hall" },
      {
        kind: "paragraph",
        text: "The fire was still going when the last of the letters were read aloud, long after the candles at the table had burned to nothing.",
      },
      { kind: "single", src: reception, alt: "Fire in the manor hall" },
      { kind: "verse", text: "A fire that would not go out." },
      { kind: "single", src: bride1, alt: "Quiet portrait before the vows" },
    ],
  },
];

export const chapters = [
  {
    name: "Love",
    tagline: "Quiet declarations.",
    image: detail1,
  },
  {
    name: "Beginnings",
    tagline: "The morning of.",
    image: bride1,
  },
  {
    name: "Legacy",
    tagline: "Families, becoming.",
    image: hero1,
  },
  {
    name: "Celebrations",
    tagline: "Long nights, low candles.",
    image: reception,
  },
] as const;

export const findStory = (slug: string) => stories.find((s) => s.slug === slug);
