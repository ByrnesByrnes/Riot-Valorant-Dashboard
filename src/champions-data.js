import {
  Vector1,
  Vector2,
  Vector3,
  Vector4,
  Vector5,
  Vector6,
  Vector7,
  Vector8,
  Vector9,
  Vector10,
  Vector11,
  Vector12,
  Vector13,
  Vector14,
  Vector15,
  Vector16,


} from './components/abilities'

export const champions = [
  {
    id: 0,
    name: 'phoenix',
    country: 'united kingdom',
    img: './images/champions/phoenix/art.png',
    largeImg: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png',
    abilities: [
      {
        id: 0,
        name: 'curveball',
        type: 'basic',
        img: <Vector1/>,
        description: 'flare orb that takes a curving path and detonates shortly after throwing. ',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltad7b0ea9be090042/5ecad82c2f5c7259287654ff/Phoenix_Q_v001_web.mp4'
      },
      {
        id: 1,
        name: 'hot hands',
        type: '',
        img: <Vector2/>,
        description: 'Throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt318f7ee7d6435fac/5ecad82cf5bd13348a6cac7d/Phoenix_E_v001_web.mp4'
      },
      {
        id: 2,
        name: 'blaze',
        type: 'signature',
        img: <Vector3/>,
        description: 'create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0ee7c9d84985ecf/5ecad82d957e405e09905751/Phoenix_C_v001_web.mp4'
      },
      {
        id: 3,
        name: 'run it back',
        type: 'ultimate',
        img: <Vector4/>,
        description: 'While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt50beaed6524c3219/5ecad82bc846021917ecbb89/Phoenix_X_v001_web.mp4'
      },
    ]
  },
  {
    id: 1,
    name: 'jett',
    country: 'south korea',
    img: './images/champions/jett/art.png',
    largeImg: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png',
    abilities: [
      {
        id: 0,
        name: 'Coldburst',
        type: 'basic',
        img: <Vector5/>,
        description: 'Throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltb15019d03f48b8c3/5ecad7f7beb6c333c3a0f59d/Jett_C_v001_web.mp4'
      },
      {
        id: 1,
        name: 'updraft',
        type: '',
        img: <Vector6/>,
        description: 'Propel Jett high into the air.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt2c46e5d7a51be140/5ecad7f552c5395e0f2dd0de/Jett_Q_v001_web.mp4'
      },
      {
        id: 2,
        name: 'Tailwind',
        type: 'signature',
        img: <Vector7/>,
        description: 'Propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5368134438181520/5ecad7f6e2a559592eb0c1b4/Jett_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'blade storm',
        type: 'ultimate',
        img: <Vector8/>,
        description: 'a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta43d8d506e2f5e00/5ecad7f6957e405e0990574d/Jett_X_v001_web.mp4'
      },
    ]
  },
  {
    id: 2,
    name: 'sova',
    country: 'russia',
    img: './images/champions/sova/sova.png',
    largeImg: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf11234f4775729b7/5ebf2c275e73766852c8d5d4/V_AGENTS_587x900_ALL_Sova_2.png',
    abilities: [
      {
        id: 0,
        name: 'blade storm',
        type: 'basic',
        img: <Vector9/>,
        description: 'bow with a shock bolt.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7af29765c99f807d/5ecad882722d20585b2f4a48/Sova_Q_v001_web.mp4'
      },
      {
        id: 1,
        name: 'recon bolt',
        type: '',
        img: <Vector10/>,
        description: 'bow with a recon bolt.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt44b27c0d688217db/5ecad88398f79d6925dbee21/Sova_E_v001_web.mp4'
      },
      {
        id: 2,
        name: 'owl drone',
        type: 'signature',
        img: <Vector11/>,
        description: 'This dart will reveal the location of any player struck by the dart.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt07d2025ac5dcd792/5ecad883f5bd13348a6cac89/Sova_C_v001_web.mp4'
      },
      {
        id: 3,
        name: 'hunter\'s fury',
        type: 'ultimate',
        img: <Vector12/>,
        description: 'bow with three long-range wall-piercing energy blasts. ',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf9fc34106a23479c/5ecad88397b46c1911ad1872/Sova_X_v001_web.mp4'
      },
    ]
  },
  {
    id: 3,
    name: 'sage',
    country: 'china',
    img: './images/champions/sage/sage.png',
    largeImg: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png',
    abilities: [
      {
        id: 0,
        name: 'slow orb',
        type: 'basic',
        img: <Vector13/>,
        description: 'Cast out a radianite orb that breaks into a slowing field upon impact with the ground.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt4f4fdcc86da69972/5ecad872722d20585b2f4a44/Sage_Q_v001_web.mp4'
      },
      {
        id: 1,
        name: 'barrier orb',
        type: '',
        img: <Vector14/>,
        description: 'Equip a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target.',
        vid: 'A barrier orb'
      },
      {
        id: 2,
        name: 'healing orb',
        type: 'signature',
        img: <Vector15/>,
        description: 'Heal an ally or yourself to full health over a few seconds.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf1d16edc36ba3386/5ecad87152c5395e0f2dd0ea/Sage_E_v001_web.mp4'
      },
      {
        id: 3,
        name: 'resurrection',
        type: 'ultimate',
        img: <Vector16/>,
        description: 'Target a friendly corpse. After a short delay, revive them with full health.',
        vid: 'https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltef1820f276fbaa0c/5ecad871957e405e09905755/Sage_X_v001_web.mp4'
      },
    ]
  },
]