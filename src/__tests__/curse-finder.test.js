const {
  fileToArr,
  dirToArr,
  readFileByLocale
} = require('../utils/file-utils');
const {
  lowerCaseArrItems,
  sortLocaleSpecificFile
} = require('../utils/sort-utils');

const testFile =
  '/Users/andrewsadowski/dev/nodeTest/Curse-Finder/src/__tests__/test-file.txt';

describe('file-utils', () => {
  test('fileToArr', async () => {
    const fileContent = await fileToArr(testFile);
    expect(Array.isArray(fileContent)).toBeTruthy();
  });

  test('readFileByLocale', async () => {
    const localeText = await readFileByLocale('es');
    expect(Array.isArray(localeText)).toBeTruthy();
  });

  test('dirToArr', async () => {
    const directory = await dirToArr('./data');
    console.log(directory);
  });
});

describe('sort-utils', () => {
  xtest('lowerCaseArrItems', () => {});
  xtest('sortLocaleSpecificFile', () => {});
});
