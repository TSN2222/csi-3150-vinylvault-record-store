import kindOfBlueCover from '../assets/kind-of-blue.jpg';
import selectedAmbientWorksCover from '../assets/selected-ambient-works.jpg';
import abbeyRoadCover from '../assets/abbey-road.jpg';
import goldbergVariationsCover from '../assets/goldberg-variations.jpg';
import headHuntersCover from '../assets/head-hunters.jpg';
import musicHasTheRightToChildrenCover from '../assets/music-has-the-right-to-children.jpg';
import rumoursCover from '../assets/rumours.jpg';
import sleepCover from '../assets/sleep.jpg';

export const ALBUMS = [
  {
    id: 'alb-01',
    title: 'Kind of Blue (180g Remaster)',
    artist: 'Miles Davis',
    genre: 'Jazz',
    price: 38.99,
    stock: 9,
    image: kindOfBlueCover,
    description:
      'Peak modal jazz recorded in two sessions in 1959. Mastered from original analog tapes on heavy virgin vinyl.',
    specs: {
      catalogNumber: 'CS-8163',
      weight: '180g',
      speed: '33 1/3 RPM',
      label: 'Columbia',
    },
    tracklist: ['So What', 'Freddie Freeloader', 'Blue in Green', 'All Blues', 'Flamenco Sketches'],
  },
  {
    id: 'alb-02',
    title: 'Selected Ambient Works 85-92',
    artist: 'Aphex Twin',
    genre: 'Electronic',
    price: 44.5,
    stock: 5,
    image: selectedAmbientWorksCover,
    description:
      'Seminal ambient techno masterwork featuring layered analog synthesizers and breakbeat rhythms on gatefold 2xLP.',
    specs: {
      catalogNumber: 'AMB-3922',
      weight: '140g',
      speed: '33 1/3 RPM',
      label: 'Apollo',
    },
    tracklist: ['Xtal', 'Tha', 'Pulsewidth', 'Ageispolis', 'Green Calx'],
  },
  {
    id: 'alb-03',
    title: 'Abbey Road (Anniversary Edition)',
    artist: 'The Beatles',
    genre: 'Rock',
    price: 36.0,
    stock: 14,
    image: abbeyRoadCover,
    description:
      'Stereo mix produced by Giles Martin directly from original eight-track session tapes.',
    specs: {
      catalogNumber: 'PCS-7088',
      weight: '180g',
      speed: '33 1/3 RPM',
      label: 'Apple Records',
    },
    tracklist: ['Come Together', 'Something', "Octopus's Garden", 'Here Comes the Sun', 'The End'],
  },
  {
    id: 'alb-04',
    title: 'The Goldberg Variations, BWV 988',
    artist: 'Glenn Gould',
    genre: 'Classical',
    price: 31.25,
    stock: 4,
    image: goldbergVariationsCover,
    description:
      "The landmark 1981 digital recording documenting Gould's contemplative return to Bach's variations.",
    specs: {
      catalogNumber: 'IM-37779',
      weight: '150g',
      speed: '33 1/3 RPM',
      label: 'CBS Masterworks',
    },
    tracklist: [
      'Aria',
      'Variatio 1 a 1 Clav.',
      'Variatio 2 a 1 Clav.',
      "Variatio 3 Canone all'Unisono",
      'Aria da Capo',
    ],
  },
  {
    id: 'alb-05',
    title: 'Head Hunters',
    artist: 'Herbie Hancock',
    genre: 'Jazz',
    price: 34.0,
    stock: 8,
    image: headHuntersCover,
    description:
      "Pioneering jazz-funk fusion powered by ARP synthesizers, clavinet grooves, and Paul Jackson's basslines.",
    specs: {
      catalogNumber: 'KC-32731',
      weight: '180g',
      speed: '33 1/3 RPM',
      label: 'Columbia',
    },
    tracklist: ['Chameleon', 'Watermelon Man', 'Sly', 'Vein Melter'],
  },
  {
    id: 'alb-06',
    title: 'Music Has the Right to Children',
    artist: 'Boards of Canada',
    genre: 'Electronic',
    price: 42.0,
    stock: 6,
    image: musicHasTheRightToChildrenCover,
    description:
      'Warm, nostalgic downtempo electronica built with degraded tape samples, vintage synth patches, and field recordings.',
    specs: {
      catalogNumber: 'WARP-LP55',
      weight: '140g',
      speed: '33 1/3 RPM',
      label: 'Warp',
    },
    tracklist: [
      'Wildlife Analysis',
      'An Eagle in Your Mind',
      'Telephasic Workshop',
      'Roygbiv',
      'Rue the Whirl',
    ],
  },
  {
    id: 'alb-07',
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    genre: 'Rock',
    price: 29.99,
    stock: 16,
    image: rumoursCover,
    description:
      '1977 pop-rock classic pressed on high-grade vinyl with gatefold packaging and lyric insert.',
    specs: {
      catalogNumber: 'BSK-3010',
      weight: '140g',
      speed: '33 1/3 RPM',
      label: 'Warner Records',
    },
    tracklist: [
      'Second Hand News',
      'Dreams',
      'Never Going Back Again',
      "Don't Stop",
      'Go Your Own Way',
    ],
  },
  {
    id: 'alb-08',
    title: 'Max Richter: Sleep (Excerpts)',
    artist: 'Max Richter',
    genre: 'Classical',
    price: 49.0,
    stock: 3,
    image: sleepCover,
    description:
      "Curated 2xLP selections from Richter's 8-hour composition scored for piano, string quintet, soprano, and modular electronics.",
    specs: {
      catalogNumber: 'DG-479-5257',
      weight: '180g',
      speed: '33 1/3 RPM',
      label: 'Deutsche Grammophon',
    },
    tracklist: [
      'Dream 1 (before the wind blows it all away)',
      'Path 5 (delta)',
      'Dream 3 (in the midst of my life)',
      'Path 19 (yet frailest)',
    ],
  },
];
