const fs = require('fs');

/**
 * TODO: - Create utility that orders said words
 * TODO: - Create utility that write matches to console && file
 * TODO: - Create utility that takes a locale code and processes file into an array of naughty words
 */

const fileToArr = pathName => {
  const file = fs.readFile(pathName, 'utf8', err => {
    if (err) {
      throw err;
    }
  });
  const fileArr = file.split(' ');
  return fileArr;
};

module.exports = {
  fileToArr
};
