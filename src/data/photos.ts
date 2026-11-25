import type { ImageMetadata } from 'astro';

const files = import.meta.glob<ImageMetadata>('../assets/photography/*.jpg', {
  eager: true,
  import: 'default',
});

export const PHOTO_TOPICS = {
  mountains: 'Mountains',
  forest: 'Forest',
  coast: 'Coast',
  water: 'Water',
  plants: 'Plants',
  people: 'People',
  built: 'Built',
  sky: 'Sky',
} as const;

export type PhotoTopic = keyof typeof PHOTO_TOPICS;

type PhotoMeta = {
  file: string;
  alt: string;
  caption: string;
  topic: PhotoTopic;
  featured?: boolean;
};

const meta: PhotoMeta[] = [
  {
    file: '01-sea-of-clouds.jpg',
    alt: 'A sea of cloud spilling between forested mountain ridges at dawn, with grass in the foreground.',
    caption: 'Cloud falling into the valleys below the ridge line.',
    topic: 'mountains',
    featured: true,
  },
  {
    file: '02-first-light.jpg',
    alt: 'A hiker sits in tall grass on a mountain ridge as the sun rises over layered peaks.',
    caption: 'First light, and a reason to stop walking.',
    topic: 'people',
    featured: true,
  },
  {
    file: '03-last-light.jpg',
    alt: 'The sun sets over a calm sea, with footprints leading along the wet sand.',
    caption: 'The last light on an empty shore.',
    topic: 'coast',
    featured: true,
  },
  {
    file: '04-morning-ridge.jpg',
    alt: 'Backlit grasses in the foreground of a dark, silhouetted mountain ridge.',
    caption: 'Grass holding the morning before the sun clears the ridge.',
    topic: 'mountains',
  },
  {
    file: '05-pines-in-fog.jpg',
    alt: 'Tall pine trunks and branches fading into thick fog above golden grass.',
    caption: 'Pines in fog, somewhere high and cool.',
    topic: 'forest',
    featured: true,
  },
  {
    file: '06-terraces.jpg',
    alt: 'Terraced slopes catch sunrise light below the dark silhouette of a pine branch.',
    caption: 'Terraces catching the first sun of the day.',
    topic: 'people',
    featured: true,
  },
  {
    file: '07-lake-dusk.jpg',
    alt: 'Dusk colours over a calm lake, with a dark island and mountains in silhouette.',
    caption: 'A lake at dusk, holding the last colour.',
    topic: 'water',
  },
  {
    file: '08-crater-lake.jpg',
    alt: 'A hiker in a cap sits on a rocky slope looking over a green crater lake ringed by volcanic ridges.',
    caption: 'A crater lake, seen from the rim.',
    topic: 'water',
    featured: true,
  },
  {
    file: '09-ridge-first-light.jpg',
    alt: 'A jagged mountain ridge lit by early sun, with tall grass in the foreground.',
    caption: 'The ridge line emerging from cloud shadow.',
    topic: 'mountains',
  },
  {
    file: '10-dusk-ridge.jpg',
    alt: 'A lone pine tree silhouetted against an orange dusk sky above a valley of clouds.',
    caption: 'One pine above a valley of cloud.',
    topic: 'forest',
  },
  {
    file: '11-morning-sun.jpg',
    alt: 'The sun burning through a bank of morning cloud, with dark plants silhouetted below.',
    caption: 'Sun through the morning cloud bank.',
    topic: 'sky',
  },
  {
    file: '12-holding-sun.jpg',
    alt: 'A silhouetted hiker holds one hand up as if holding the sun.',
    caption: 'A small joke with the sun.',
    topic: 'people',
  },
  {
    file: '13-geometry.jpg',
    alt: 'A geometric glass and steel canopy viewed from below against a blue sky.',
    caption: 'A different kind of canopy.',
    topic: 'built',
  },
  {
    file: '14-one-palm.jpg',
    alt: 'A single coconut palm stands above sunlit grass with blue hills behind.',
    caption: 'One palm, a whole horizon.',
    topic: 'plants',
  },
  {
    file: '15-waterfall.jpg',
    alt: 'A tall waterfall drops into a pool surrounded by dense green jungle.',
    caption: 'Water arriving after a long way down.',
    topic: 'forest',
    featured: true,
  },
  {
    file: '16-light-through-pines.jpg',
    alt: 'Sunbeams pass through a pine forest and light up ferns and understory plants.',
    caption: 'Light through the pines and ferns.',
    topic: 'forest',
  },
  {
    file: '17-summit.jpg',
    alt: 'A hiker with a walking stick stands on a summit ridge above a sea of clouds.',
    caption: 'On the summit, with the cloud below.',
    topic: 'people',
  },
  {
    file: '18-the-scramble.jpg',
    alt: 'Two hikers with backpacks scramble up a rocky ridge trail beneath green slopes.',
    caption: 'The unglamorous part of the view.',
    topic: 'people',
  },
  {
    file: '19-the-lookout.jpg',
    alt: 'A hiker stands on a rocky outcrop against a pale, empty sky.',
    caption: 'A lookout with nothing but sky behind.',
    topic: 'people',
  },
  {
    file: '20-water-break.jpg',
    alt: 'A silhouetted hiker drinks from a bottle in front of the sun.',
    caption: 'Water break, backlit.',
    topic: 'people',
  },
  {
    file: '21-the-branch.jpg',
    alt: 'A hiker rests on a wind-shaped branch above a valley filled with clouds.',
    caption: 'A branch shaped by weather, and a quiet seat.',
    topic: 'people',
  },
  {
    file: '22-bench.jpg',
    alt: 'A traveler in a blue shirt sits on a rough wooden bench in a rural yard.',
    caption: 'A bench, a rooster, and a slow afternoon.',
    topic: 'people',
  },
  {
    file: '23-low-tide.jpg',
    alt: 'A wide tidal flat reflects an orange sunset beneath heavy, dark clouds.',
    caption: 'Low tide, holding the sky.',
    topic: 'coast',
    featured: true,
  },
  {
    file: '24-clouds-building.jpg',
    alt: 'Towering white cumulus clouds build above a dark tree line.',
    caption: 'Clouds building over the tree line.',
    topic: 'sky',
  },
  {
    file: '25-stone-chess.jpg',
    alt: 'A chessboard made of painted stones sits on a ledge beside a calm lake.',
    caption: 'A chess game left beside the lake.',
    topic: 'water',
  },
  {
    file: '26-from-the-hut.jpg',
    alt: 'The sea and horizon framed by the open canvas flaps of a bamboo hut.',
    caption: 'The sea, framed by a hut.',
    topic: 'coast',
  },
  {
    file: '27-rain-lilies.jpg',
    alt: 'White rain lilies with yellow centres bloom along a wet stone path.',
    caption: 'Rain lilies after the rain.',
    topic: 'plants',
    featured: true,
  },
  {
    file: '28-sorsogon-capitol.jpg',
    alt: 'The Sorsogon Provincial Capitol building stands against a dramatic clouded sky.',
    caption: 'Sorsogon Provincial Capitol under weather.',
    topic: 'built',
  },
  {
    file: '29-mayon-cloud.jpg',
    alt: 'Mayon volcano rises as a dark cone above a low bank of clouds, with forest in the foreground.',
    caption: 'Mayon, mostly hidden.',
    topic: 'mountains',
    featured: true,
  },
  {
    file: '30-mayon-clear.jpg',
    alt: 'A clear view of the near-perfect cone of Mayon volcano under a grey sky.',
    caption: 'Mayon, clear.',
    topic: 'mountains',
    featured: true,
  },
  {
    file: '31-beach-walk.jpg',
    alt: 'A person walks two small dogs along a beach with Mayon volcano in the distance.',
    caption: 'A beach walk with Mayon in the distance.',
    topic: 'coast',
  },
  {
    file: '32-water-lily.jpg',
    alt: 'A single white water lily opens among large green lily pads.',
    caption: 'A water lily among the pads.',
    topic: 'plants',
  },
  {
    file: '33-past-the-break.jpg',
    alt: 'A swimmer sits in the water beyond the breaking waves, facing the horizon.',
    caption: 'Past the break.',
    topic: 'coast',
  },
  {
    file: '34-branches-at-dusk.jpg',
    alt: 'Bare tree branches form dark silhouettes against a pale blue and orange dusk sky.',
    caption: 'Branches writing against the dusk.',
    topic: 'sky',
    featured: true,
  },
  {
    file: '35-last-walk.jpg',
    alt: 'A person walks along a wet beach at sunset, reflected in the shallow water.',
    caption: 'The last walk before dark.',
    topic: 'coast',
  },
];

export type Photo = PhotoMeta & { src: ImageMetadata };

export const photos: Photo[] = meta.map((item) => {
  const src = files[`../assets/photography/${item.file}`];
  if (!src) {
    throw new Error(`Missing photograph: ${item.file}`);
  }
  return { ...item, src };
});

export const featuredPhotos = photos.filter((photo) => photo.featured);
