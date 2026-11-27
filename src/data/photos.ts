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
  pets: 'Pets',
  flowers: 'Flowers',
  built: 'Built',
  churches: 'Churches',
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
    file: '13-nmnh-tree-of-life.jpg',
    alt: 'Steel branches and glass panels of a geometric dome seen from below, with pale blue sky showing through the gaps.',
    caption: 'The Tree of Life, National Museum of Natural History, Manila.',
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
    file: '28-sorsogon-arena.jpg',
    alt: 'The curved white facade of the Sorsogon Sports Arena, its arches stacked in tiers beneath a heavy grey sky.',
    caption: 'Sorsogon Sports Arena, Balogo, Sorsogon City.',
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
  {
    file: '36-basilica-santo-nino-cebu.jpg',
    alt: 'The long white stone flank of the Basilica del Santo Niño in Cebu City, with dark louvered windows and a red-tiled bell tower at the far end.',
    caption: 'Basilica del Santo Niño, Cebu City, founded 1565.',
    topic: 'churches',
  },
  {
    file: '37-st-philomene-alcala.jpg',
    alt: 'A wide red brick church facade with a tall bell tower capped by a red dome, white statues in niches, and a Christ the King monument on a brick plinth in front.',
    caption: 'St. Philomene Church, Alcala, Cagayan. Brick from river clay.',
    topic: 'churches',
  },
  {
    file: '38-san-agustin-belfry-siquijor.jpg',
    alt: 'An old dark coral-stone bell tower with arched openings stands beside a modern concrete church under a clear sky, with festival bunting strung overhead.',
    caption: 'The 1863 belfry beside the modern church, San Juan, Siquijor.',
    topic: 'churches',
  },
  {
    file: '39-sto-nino-siquijor.jpg',
    alt: 'A small white church with black window trim, arched iron grilles, and a curving gable, with a white Sto. Niño sign at the gate.',
    caption: 'Sto. Niño Church, Siquijor.',
    topic: 'churches',
  },
  {
    file: '40-daraga-church-mayon.jpg',
    alt: 'The dark volcanic-stone facade and bell tower of Daraga Church on the left, with Mayon volcano rising under heavy cloud on the right.',
    caption: 'Daraga Church and Mayon, Albay.',
    topic: 'churches',
  },
  {
    file: '41-barcelona-church-dusk.jpg',
    alt: 'The weathered stone facade and bell tower of Barcelona Church at dusk, silhouetted against a deep blue sky.',
    caption: 'St. Joseph Parish Church, Barcelona, Sorsogon, at dusk.',
    topic: 'churches',
  },
  {
    file: '42-st-anthony-gubat-night.jpg',
    alt: 'A church facade and twin bell towers outlined in white lights at night, with a neon Christmas greeting above the door and tricycles parked in front.',
    caption: 'St. Anthony of Padua Parish, Gubat, at Christmas.',
    topic: 'churches',
  },
  {
    file: '43-farmplate-chapel.jpg',
    alt: 'A small white wooden chapel with a pointed steeple and Gothic windows, standing among coconut palms under a blue sky.',
    caption: 'The Little Chapel, FarmPlate, Daraga, Albay.',
    topic: 'churches',
  },
  {
    file: '44-guinobatan-dome.jpg',
    alt: 'Looking up at the weathered cream facade and dark red dome of a church, framed by the leaves of a tree.',
    caption: 'Our Lady of the Assumption Parish, Guinobatan, Albay.',
    topic: 'churches',
  },
  {
    file: '45-dogs-siquijor-shallows.jpg',
    alt: 'A lean brown dog stands alone in shallow blue water, a long way from the shore.',
    caption: 'A dog standing off in the shallows, Siquijor.',
    topic: 'pets',
  },
  {
    file: '46-dog-beach-walk-sunset.jpg',
    alt: 'A person walks a brown dog on a wet beach at sunset, both reflected in the film of water, with a bank of cloud stacked behind them.',
    caption: 'Evening walk on the Gubat shore.',
    topic: 'pets',
  },
  {
    file: '47-two-dogs-wet-beach.jpg',
    alt: 'Two small shaggy dogs on a red and green double leash stand on a wet beach, with palms and a low sun behind them.',
    caption: 'Two dogs, one long leash, low sun.',
    topic: 'pets',
  },
  {
    file: '48-two-dogs-coastal-road.jpg',
    alt: 'Two small dogs on leashes walk a concrete coastal road beside the sea under a wide sunset sky.',
    caption: 'Walking the seawall road at sunset, Gubat.',
    topic: 'pets',
  },
  {
    file: '49-two-dogs-storm-beach.jpg',
    alt: 'Two small shaggy dogs sit close together on a grey beach under heavy storm cloud, with boats moored in the water behind them.',
    caption: 'Storm coming in over the boats, Gubat.',
    topic: 'pets',
  },
  {
    file: '50-two-dogs-under-bench.jpg',
    alt: 'Two wet, scruffy dogs rest on damp sand beneath a weathered wooden bench.',
    caption: 'Two dogs under a bench, Beata Beach.',
    topic: 'pets',
  },
  {
    file: '51-dog-pawprints-sand.jpg',
    alt: 'A small dog on a leash walks across sand covered in hundreds of overlapping footprints, its shadow stretching beside it.',
    caption: 'The sand keeps a record of everyone who crossed it.',
    topic: 'pets',
  },
  {
    file: '52-dog-low-tide-seagrass.jpg',
    alt: 'A tan, short-haired dog walks along a wide sand flat at low tide, with seagrass and a blue mountain range beyond.',
    caption: 'A dog with the whole low tide to itself.',
    topic: 'pets',
  },
  {
    file: '53-white-flowers-manila.jpg',
    alt: 'Small white five-petalled flowers with yellow centres open among glossy green leaves.',
    caption: 'Small white flowers, Metro Manila.',
    topic: 'flowers',
  },
  {
    file: '54-white-flower-bee-baguio.jpg',
    alt: 'A white flower with broad petals and a yellow centre, with a bee already inside it.',
    caption: 'A bee inside a white flower, Mines View Park, Baguio.',
    topic: 'flowers',
  },
  {
    file: '55-hydrangea-hibiscus-baguio.jpg',
    alt: 'A blue hydrangea head and a red and yellow hibiscus open side by side in deep green foliage.',
    caption: 'Hydrangea and hibiscus, Baguio.',
    topic: 'flowers',
  },
  {
    file: '56-pink-flowers-baguio.jpg',
    alt: 'Two bright pink double flowers with yellow centres sit above dark, finely cut leaves.',
    caption: 'Pink flowers, Baguio.',
    topic: 'flowers',
  },
  {
    file: '57-white-flower-la-trinidad.jpg',
    alt: 'A large white flower with a yellow centre in the foreground, with mountain ridges and a valley village behind it.',
    caption: 'White flower, La Trinidad, Benguet.',
    topic: 'flowers',
  },
  {
    file: '58-yellow-flower-baguio.jpg',
    alt: 'A yellow flower with many narrow petals and a brown centre, against a clear blue sky.',
    caption: 'Yellow flower on the road out of Baguio.',
    topic: 'flowers',
  },
  {
    file: '59-purple-flowers-cavite.jpg',
    alt: 'Clusters of small purple flowers hang from a branch against palm fronds and bright sky.',
    caption: 'Purple flowers, Alfonso, Cavite.',
    topic: 'flowers',
  },
  {
    file: '60-purple-flowers-close-cavite.jpg',
    alt: 'A close view of small purple flowers with pale centres, clustered along a stem.',
    caption: 'The same vine, closer. Alfonso, Cavite.',
    topic: 'flowers',
  },
  {
    file: '61-rose-against-windows-makati.jpg',
    alt: 'A single dark red rose in the foreground, with a grid of air-conditioned apartment windows behind it.',
    caption: 'One rose against a wall of windows, Makati.',
    topic: 'flowers',
  },
  {
    file: '62-bougainvillea-makiling.jpg',
    alt: 'Pink bougainvillea bracts lit from above, with a red post and green leaves behind them.',
    caption: 'Bougainvillea at a trailhead, Mount Makiling.',
    topic: 'flowers',
  },
  {
    file: '63-morning-glory-jomalig-quezon.jpg',
    alt: 'Pink trumpet-shaped beach morning glories open over sand among round green leaves.',
    caption: 'Beach morning glory on the sand, Jomalig, Quezon.',
    topic: 'flowers',
  },
  {
    file: '64-morning-glory-catanduanes.jpg',
    alt: 'A field of pink beach morning glory in bloom runs to the edge of a grey sea under cloud.',
    caption: 'Morning glory to the waterline, Catanduanes.',
    topic: 'flowers',
  },
  {
    file: '65-orchid-gubat.jpg',
    alt: 'A spray of pale pink orchid flowers on a slender stem, with a yellow building behind.',
    caption: 'Orchid in flower, Gubat.',
    topic: 'flowers',
  },
  {
    file: '66-yellow-flower-bulusan.jpg',
    alt: 'A yellow five-petalled flower with an orange centre, with more of the same bush blurred behind it.',
    caption: 'Yellow flower near Bulusan.',
    topic: 'flowers',
  },
  {
    file: '67-lantana-bulusan.jpg',
    alt: 'Two orange and yellow lantana flower clusters above green leaves, with dark red leaves behind them.',
    caption: 'Lantana against red ti leaves, Bulusan.',
    topic: 'flowers',
  },
  {
    file: '68-red-flowers-shade-net.jpg',
    alt: 'Red flowers with long upright leaves growing under shade netting, with one stem tied with a red ribbon.',
    caption: 'Red flowers under shade netting, one stem tied with ribbon.',
    topic: 'flowers',
  },
  {
    file: '69-artificial-roses-cordova.jpg',
    alt: 'A field of white roses on tall stems runs to a small hut at the edge of the sea, every one of them artificial.',
    caption: 'Ten thousand roses that will never wilt, Cordova, Cebu.',
    topic: 'flowers',
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

/** Look up a photograph by filename. Throws at build time if the file is not catalogued. */
export function getPhoto(file: string): Photo {
  const photo = photos.find((item) => item.file === file);
  if (!photo) {
    throw new Error(`Unknown photograph: ${file}`);
  }
  return photo;
}
