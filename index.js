/*const { scrapeData } = require("./scrapper_v1.js");



async function run() {
    for (let i = 2024; i <= 2026; i++) {
        for (let j = 1; j <= 12; j++) {
            await scrapeData(i, j);
        }
    }
}

run();
*/
/*
const { scrapeData } = require("./scrapper_v1.js");

async function run() {
    const months = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]; // May to April

    for (let i = 2024; i <= 2026; i++) {
        for (let j of months) {
            await scrapeData(i, j);
        }
    }
}

run();
*/
/*
const { scrapeData } = require("./scrapper_v1.js");

async function run() {
  const months = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]; // May to April

  for (let year = 2024; year <= 2026; year++) {
    for (let idx = 0; idx < months.length; idx++) {
      const month = months[idx];
      const seqNum = idx + 1; // Map 5 → 1, 6 → 2, ...
      await scrapeData(year, month, seqNum);
    }
  }
}

run();
*/


const { scrapeData } = require("./scrapper_v1.js");

async function run() {
  const months = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4]; // May → April

  for (let actualYear = 2024; actualYear <= 2026; actualYear++) {
    let nepaliYearFolder = null;

    for (let idx = 0; idx < months.length; idx++) {
      const month = months[idx];
      const seqNum = idx + 1;

      // Fetch data
      const result = await scrapeData(actualYear, month, seqNum, nepaliYearFolder);

      // On first fetch of the cycle, set the Nepali year folder from metadata.np
      if (!nepaliYearFolder) {
        nepaliYearFolder = result.nepaliYearFolder;
        console.log(`📂 Using Nepali year folder: ${nepaliYearFolder}`);
      }
    }
  }
}

run();

