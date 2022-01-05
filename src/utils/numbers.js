function separator(numb) {
  let str = numb.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}

function generateIndex(array) {
  return Math.floor(Math.random() * array.length);
}

module.exports = {
  separator,
  generateIndex,
};
