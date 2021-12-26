import imageOne from '../images/0tGrbNG.png';
import imageTwo from '../images/4kc4Aku.png';
import imageThree from '../images/905I2oh.png';
import imageFour from '../images/i2eBBIw.png';
import imageFive from '../images/RfKqwVO.png';
import imageSix from '../images/rvACBed.png';
import imageSeven from '../images/yKQyEkt.png';

const images = [
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  imageFive,
  imageSix,
  imageSeven,
];
const index = Math.floor(Math.random() * images.length);
export const avatar = images[index];
