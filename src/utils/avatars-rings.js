// importing images for use as player avatars
import imageOne from '../images/avatars/0tGrbNG.png';
import imageTwo from '../images/avatars/4kc4Aku.png';
import imageThree from '../images/avatars/905I2oh.png';
import imageFour from '../images/avatars/i2eBBIw.png';
import imageFive from '../images/avatars/RfKqwVO.png';
import imageSix from '../images/avatars/rvACBed.png';
import imageSeven from '../images/avatars/yKQyEkt.png';

// importing images for use as avatar rigns
import ringOne from '../images/rings/orwO9G0.png';
import ringTwo from '../images/rings/orLtClP.png';
// select and export random avatar for use in UserProfile
const avatars = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
];

// having two values for a random index is redundant. I should create a function that takes in an array and returns an index and use that function to get my avatar and ring

const avatarIndex = Math.floor(Math.random() * avatars.length);
export const avatar = avatars[avatarIndex];

// select and export random ring for use in UserProfile
const rings = [ringOne, ringTwo];
const ringIndex = Math.floor(Math.random() * rings.length);
export const ring = rings[ringIndex];
