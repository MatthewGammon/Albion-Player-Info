// used to generate relative paths for image imports for both rings and avatars from 01-09.
// dir = directory to include in path, type = image type (ring or avatar), num = num of paths to generate, ext = image extension type
const generateImport1 = (dir, type, num, ext) => {
  for (let i = 1; i <= num && i <= 9; i++) {
    console.log(
      `import ${type}${i} from '../assets/images/${dir}/${type}-0${i}.${ext}'`
    );
  }
};
// used to generate relative paths for image imports for rings and avatars from 10 - n.
const generateImport2 = (dir, type, num, ext) => {
  for (let i = 10; i <= num; i++) {
    console.log(
      `import ${type}${i} from '../assets/images/${dir}/${type}-${i}.${ext}'`
    );
  }
};
generateImport1('avatars', 'avatar', 65, 'png');
generateImport2('avatars', 'avatar', 65, 'png');
generateImport1('rings', 'ring', 31, 'png');
generateImport2('rings', 'ring', 31, 'png');

const addToImgArr = (type, num) => {
  for (let i = 1; i <= num; i++) {
    console.log(`${type}${i},`);
  }
};

addToImgArr('avatar', 65);
addToImgArr('ring', 31);
