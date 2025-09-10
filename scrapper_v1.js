/*const axios = require("axios");
const fs = require("fs");
const { JSDOM } = require("jsdom");

const DAYS = [
  "आईतवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "बिहीवार",
  "शुक्रवार",
  "शनिवार",
];

const _fetchData = async (year, month) => {
  try {
    console.log("fetching", year, month);
    if (fs.existsSync(`./data/${year}/${month}.json`)) {
      console.log("returned");
      return;
    }

    const { data } = await axios({
      method: "post",
      url: "https://www.drikpanchang.com/nepali/calender/nepali-patro.html?",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: `solar-date=01/${month}/${year}`,
    });

    let dom = new JSDOM(data);
	  /*
    // === Check if data is present ===
    if (!dom.window.document.querySelector("#nday")) {
      console.log(`No data found for year ${year}, month ${month}`);
      return;
    }*/
    // metadata
   /* let metadata = {
      en: dom.window.document.querySelector(".dpBigDate").textContent.trim(),
      np: dom.window.document.querySelector(".dpSmallDate").textContent.trim(),
    };

/*
    // holidays & festivals
    dom.window.document.querySelector("#holi b").remove();
    dom.window.document.querySelector("#holi a").remove();
    let holiFest = dom.window.document
      .querySelector("#holi")
      .textContent.trim()
      .split("\n");

    // marriage date
    dom.window.document.querySelector("#bibah b").remove();
    let marriage = dom.window.document
      .querySelector("#bibah")
      .textContent.trim()
      .split("\n");

    // bratabandha date
    dom.window.document.querySelector("#bratabandha b").remove();
    let bratabandha = dom.window.document
      .querySelector("#bratabandha")
      .textContent.trim()
      .split("\n");
*/
  /*  let days = [];

    let dayCount = 1;
    let arr = Array.from(dom.window.document.querySelectorAll(".cells"));
    arr.forEach((cell) => {
      dom = new JSDOM(cell.innerHTML);
      days.push({
        n: dom.window.document.querySelector(".dpBigDate").textContent.trim(),
        e: dom.window.document.querySelector(".dbSmallDate").textContent.trim(),
        t: dom.window.document.querySelector(".dpMoonTiming").textContent.trim(),
        f: dom.window.document.querySelector(".dpNakshatra").textContent.trim(),
        d: dayCount,
      });

      dayCount++;
      if (dayCount > 7) dayCount = 1;
    });

    // write to file
    if (!fs.existsSync(`./data/${year}`)) fs.mkdirSync(`./data/${year}`);
    fs.writeFileSync(
      `./data/${year}/${month}.json`,
      JSON.stringify({ metadata, days })
    );
    console.log("Done", year, month);
  } catch (e) {
    console.log(e);
  }
};

const scrapeData = async (year, month) => {
  await _fetchData(year, month);
  console.log("Data fetch completed");
};

module.exports = { scrapeData };*/

/*
const axios = require("axios");
const fs = require("fs");
const { JSDOM } = require("jsdom");

const DAYS = [
  "आईतवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "बिहीवार",
  "शुक्रवार",
  "शनिवार",
];

const _fetchData = async (year, month) => {
  try {
    console.log("Fetching", year, month);

    // Skip if already saved
    if (fs.existsSync(`./data/${year}/${month}.json`)) {
      console.log("Already exists, skipping...");
      return;
    }

    // Fetch HTML
    const { data } = await axios({
      method: "get",
      url: "https://www.drikpanchang.com/nepali/calender/nepali-patro.html?",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: `solar-date=01/${month}/${year}`,
    });

    let dom = new JSDOM(data);

    // === Metadata ===
    const bigDateEl = dom.window.document.querySelector(".dpBigDate");
    const smallDateEl = dom.window.document.querySelector(".dpSmallDate");

    let metadata = {
      en: bigDateEl ? bigDateEl.textContent.trim() : "",
      np: smallDateEl ? smallDateEl.textContent.trim() : "",
    };

    /* === Holidays & festivals (optional) ===
    const holiEl = dom.window.document.querySelector("#holi");
    if (holiEl) {
      holiEl.querySelector("b")?.remove();
      holiEl.querySelector("a")?.remove();
      var holiFest = holiEl.textContent.trim().split("\n").filter(Boolean);
    }

    const marriageEl = dom.window.document.querySelector("#bibah");
    if (marriageEl) {
      marriageEl.querySelector("b")?.remove();
      var marriage = marriageEl.textContent.trim().split("\n").filter(Boolean);
    }

    const bratabandhaEl = dom.window.document.querySelector("#bratabandha");
    if (bratabandhaEl) {
      bratabandhaEl.querySelector("b")?.remove();
      var bratabandha = bratabandhaEl.textContent.trim().split("\n").filter(Boolean);
    }
    

    // === Days ===
    let days = [];
    let dayCount = 1;

    let arr = Array.from(dom.window.document.querySelectorAll(".MonthlyGrid"));
    arr.forEach((cell) => {
      const dayDom = new JSDOM(cell.innerHTML);

      const bigNepali = dayDom.window.document.querySelector(".dpBigDate");
      const smallEnglish = dayDom.window.document.querySelector(".dpSmallDate");
      const moonTiming = dayDom.window.document.querySelector(".dpMoonTiming");
      const nakshatra = dayDom.window.document.querySelector(".dpNakshatra");

      days.push({
        n: bigNepali ? bigNepali.textContent.trim() : "",
        e: smallEnglish ? smallEnglish.textContent.trim() : "",
        t: moonTiming ? moonTiming.textContent.trim() : "",
        f: nakshatra ? nakshatra.textContent.trim() : "",
        d: DAYS[dayCount - 1], // weekday name
      });

      dayCount++;
      if (dayCount > 7) dayCount = 1;
    });

    // === Write to file ===
    if (!fs.existsSync(`./data/${year}`)) {
      fs.mkdirSync(`./data/${year}`, { recursive: true });
    }

    fs.writeFileSync(
      `./data/${year}/${month}.json`,
      JSON.stringify({ metadata, days }, null, 2),
      "utf-8"
    );

    console.log("Done", year, month);
  } catch (e) {
    console.error("Error fetching data:", e.message);
  }
};

const scrapeData = async (year, month) => {
  await _fetchData(year, month);
  console.log("Data fetch completed for", year, month);
};

module.exports = { scrapeData };
*/
/*
const axios = require("axios");
const fs = require("fs");
const { JSDOM } = require("jsdom");
const cheerio = require("cheerio")

const DAYS = [
  "आईतवार",
  "सोमवार",
  "मंगलवार",
  "बुधवार",
  "बिहीवार",
  "शुक्रवार",
  "शनिवार",
];

const _fetchData = async (year, month) => {
	console.log(year, month, "done")
	axios.get('https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?solar-date=27/05/2082')
	.then((response) => {
		const html = response.data
		const $ = cheerio.load(html)

		$('')
	})
}

const scrapeData = async (year, month) => {
  await _fetchData(year, month);
  console.log("Data fetch completed for", year, month);
};

module.exports = { scrapeData };
*/

/*
const axios = require("axios");
const cheerio = require("cheerio");

const _fetchData = async (year, month) => {
  console.log(`Fetching data for ${month}/${year}...`);

  try {
    // Example: This should point to the FIRST day of the month you want
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const results = [];

    $("div.dpMonthGrid").each((i, el) => {
      const dateUrl = $(el).attr("data-url"); // you can store this if you need the exact day
      const moonTiming = $(el).find("div.dpMoonTiming").text().trim();
      const nakshatra = $(el).find("div.dpNakshatra").text().trim();

      if (moonTiming || nakshatra) {
        results.push({
          day: i + 1,
          moonTiming,
          nakshatra,
          dateUrl,
        });
      }
    });

    console.log(results);
    return results;

  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
};

const scrapeData = async (year, month) => {
  const data = await _fetchData(year, month);
  console.log(`Fetched ${data.length} days for ${month}/${year}`);
};

module.exports = { scrapeData };
*/


/*

const axios = require("axios");
const cheerio = require("cheerio");

const _fetchData = async (year, month) => {
  console.log(`Fetching data for ${month}/${year}...`);

  try {
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const results = [];

    $("div.dpMonthGridCell").each((i, el) => {
      const dateUrl = $(el).attr("data-url") || null;

      // Only get the immediate text inside dpMoonTiming and dpNakshatra
      const moonTiming = $(el).find("div.dpMoonTiming").first().text().trim();
      const nakshatra = $(el).find("div.dpNakshatra").first().text().trim();

      // Push even if empty to keep day count correct
      results.push({
        day: i + 1,
        moonTiming: moonTiming || null,
        nakshatra: nakshatra || null,
        dateUrl,
      });
    });

    console.log(results);
    return results;

  } catch (err) {
    console.error("Error fetching data:", err.message);
  }
};

const scrapeData = async (year, month) => {
  const data = await _fetchData(year, month);
  console.log(`Fetched ${data.length} days for ${month}/${year}`);
};

module.exports = { scrapeData };
*/
/*

const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeNepaliMonth(year, month) {
  const results = [];

  // For Nepali calendar, month is usually 1–12, days vary by month
  // We'll fetch once for the last day of that month to get the grid
  const lastDay = 32; // try higher, site will return the valid last date
  const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=${month}/${
    lastDay
  }/${year}`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Find the dpmonthgrid table
    $(".dpMonthGrid .dpDay").each((_, el) => {
      const engDate = $(el).find(".dpEngDate").text().trim();
      const nepDate = $(el).find(".dpNepDate").text().trim();
      if (engDate && nepDate) {
        results.push({ engDate, nepDate });
      }
    });

    return results;
  } catch (err) {
    console.error(`Error scraping ${year}-${month}:`, err.message);
    return [];
  }
}

(async () => {
  const year = 2024;
  const month = 1; // 1 = January (Nepali calendar equivalent will be shown)

  const monthData = await scrapeNepaliMonth(year, month);
  console.log(monthData);
})();
*/
/*
const axios = require("axios");
const cheerio = require("cheerio");

const _fetchData = async (year, month) => {
  console.log(`Fetching data for ${month}/${year}...`);

  try {
    // This loads the full Nepali month, starting from date 1
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const results = [];

    $("div.dpMonthGridCell").each((i, el) => {
      const dateUrl = $(el).attr("data-url") || null;

      // Extract Moon Timing text
      const moonTiming = $(el)
        .find("div.dpMoonTiming")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " "); // clean extra spaces
      
// Extract Nepali date (only the number, no weekday)
const n = $(el)
  .find("span.dpBigDate")
  .contents()                 // get all child nodes (including text + elements)
  .filter(function () {
    return this.type === "text"; // keep only raw text nodes
  })
  .text()
  .trim();

// Extract English date
const e = $(el)
  .find("span.dpSmallDate")
  .first()
  .text()
  .trim();



	    // Extract Nakshatra text
      const nakshatra = $(el)
        .find("div.dpNakshatra")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ");


      results.push({
        day: i + 1,
	      e,
	      n,
        moonTiming: moonTiming || null,
        nakshatra: nakshatra || null,
        dateUrl,
      });
    });

    console.log(results);
    return results;

  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  }
};

const scrapeData = async (year, month) => {
  const data = await _fetchData(year, month);
  console.log(`Fetched ${data.length} days for ${month}/${year}`);
  return data;
};

module.exports = { scrapeData };

/**
 *
 * index.js file
 *
 *const { scrapeData } = require("./scrapper_v1.js");

async function run() {
    for (let i = 2024; i <= 2024; i++) {
        for (let j = 1; j <= 12; j++) {
            await scrapeData(i, j);
        }
    }
}

run();
 *
 */



// scrapper_v1.js
/*const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const _fetchData = async (year, month) => {
  console.log(`Fetching data for ${month}/${year}...`);

  try {
    // URL loads the whole Nepali month
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const days = [];
    let weekdayCount = 1; // To track week days

	const monthYear =  $("div.dpFlexEqual").text()

    $("div.dpMonthGridCell").each((i, el) => {
      // Nepali date (exclude weekday span inside dpBigDate)
      const np = $(el)
        .find("span.dpBigDate")
        .contents()
        .filter(function () {
          return this.type === "text";
        })
        .text()
        .trim();

      // English date
      const en = $(el).find("span.dpSmallDate").first().text().trim();

      // Tithi
      const Tithi = $(el)
        .find("span.dpCellTithi").text()


      // Moon timing
      const MoonTiming = $(el)
        .find("div.dpMoonTiming")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ");

      // Nakshatra
      const Nakshatra = $(el)
        .find("div.dpNakshatra")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ");

      days.push({
        np,
        en,
	Tithi: Tithi || null,
        MoonTiming: MoonTiming || null,
        Nakshatra: Nakshatra || null,
        weekday: weekdayCount,
      });

      weekdayCount++;
      if (weekdayCount > 7) weekdayCount = 1;
    });

    // Save JSON file
    if (!fs.existsSync(`./data/${year}`)) {
      fs.mkdirSync(`./data/${year}`, { recursive: true });
    }

    fs.writeFileSync(
      `./data/${year}/${month}.json`,
      JSON.stringify({
      monthYear: monthYear.trim(),
      days: days
    }, null, 2)
    );

    console.log(`Saved ${days.length} days for ${month}/${year}`);
    return days;

  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  }
};

const scrapeData = async (year, month) => {
  return await _fetchData(year, month);
};

module.exports = { scrapeData };
*/

// scrapper_v1.js
/*const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const _fetchData = async (year, month) => {
  console.log(`Fetching data for ${month}/${year}...`);

  try {
    // URL loads the whole Nepali month
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const days = [];
    let weekdayCount = 1; // Tracks weekday (1=Sunday, 7=Saturday)

    // Extract Nepali and English month-year separately
    const nepaliMonthYear = $("div.dpFlexEqual").contents().first().text().trim();
    const englishMonthYear = $("div.dpFlexEqual").find("div.dpSmallText").text().trim();

    $("div.dpMonthGridCell").each((i, el) => {
      // Nepali date (exclude weekday span inside dpBigDate)
      const np = $(el)
        .find("span.dpBigDate")
        .contents()
        .filter(function () {
          return this.type === "text";
        })
        .text()
        .trim();

      // English date
      const en = $(el).find("span.dpSmallDate").first().text().trim();

      // Tithi
      const Tithi = $(el).find("span.dpCellTithi").text().trim() || null;

      // Moon timing
      const MoonTiming = $(el)
        .find("div.dpMoonTiming")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;

      // Nakshatra
      const Nakshatra = $(el)
        .find("div.dpNakshatra")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;

      days.push({
        np,
        en,
        Tithi,
        MoonTiming,
        Nakshatra,
        weekday: weekdayCount,
      });

      weekdayCount++;
      if (weekdayCount > 7) weekdayCount = 1;
    });

    // Ensure year folder exists
    if (!fs.existsSync(`./data/${year}`)) {
      fs.mkdirSync(`./data/${year}`, { recursive: true });
    }

    // Save JSON file with proper structure
    fs.writeFileSync(
      `./data/${year}/${month}.json`,
      JSON.stringify(
        {
          metadata: {
            np: nepaliMonthYear,
            en: englishMonthYear,
          },
          days: days,
        },
        null,
        2
      )
    );

    console.log(`Saved ${days.length} days for ${month}/${year}`);
    return days;

  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  }
};

const scrapeData = async (year, month) => {
  return await _fetchData(year, month);
};

module.exports = { scrapeData };
*/
/*
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const _fetchData = async (year, month, seqNum) => {
  console.log(`Fetching data for ${month}/${year} (saving as ${seqNum}.json)...`);

  try {
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${year}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const days = [];
    let weekdayCount = 1; // Tracks weekday (1=Sunday, 7=Saturday)

    // Extract Nepali and English month-year separately
    const nepaliMonthYear = $("div.dpFlexEqual").contents().first().text().trim();
    const englishMonthYear = $("div.dpFlexEqual").find("div.dpSmallText").text().trim();

    $("div.dpMonthGridCell").each((i, el) => {
      const np = $(el)
        .find("span.dpBigDate")
        .contents()
        .filter(function () {
          return this.type === "text";
        })
        .text()
        .trim();

      const en = $(el).find("span.dpSmallDate").first().text().trim();
      const Tithi = $(el).find("span.dpCellTithi").text().trim() || null;
      const MoonTiming = $(el)
        .find("div.dpMoonTiming")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;
      const Nakshatra = $(el)
        .find("div.dpNakshatra")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;

      days.push({
        np,
        en,
        Tithi,
        MoonTiming,
        Nakshatra,
        weekday: weekdayCount,
      });

      weekdayCount++;
      if (weekdayCount > 7) weekdayCount = 1;
    });

    // Ensure year folder exists
    if (!fs.existsSync(`./data/${year}`)) {
      fs.mkdirSync(`./data/${year}`, { recursive: true });
    }

    // Save file with seqNum instead of actual month
    fs.writeFileSync(
      `./data/${year}/${seqNum}.json`,
      JSON.stringify(
        {
          metadata: {
            np: nepaliMonthYear,
            en: englishMonthYear,
          },
          days: days,
        },
        null,
        2
      )
    );

    console.log(`Saved as ${seqNum}.json (${days.length} days) for ${month}/${year}`);
    return days;

  } catch (err) {
    console.error("Error fetching data:", err.message);
    return [];
  }
};

const scrapeData = async (year, month, seqNum) => {
  return await _fetchData(year, month, seqNum);
};

module.exports = { scrapeData };
*/

const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const _fetchData = async (actualYear, month, seqNum, nepaliYearFolder) => {
  console.log(`Fetching data for ${month}/${actualYear} (saving as ${seqNum}.json in ${nepaliYearFolder})...`);

  try {
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${actualYear}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const days = [];
    let weekdayCount = 1; // Tracks weekday (1=Sunday, 7=Saturday)

    // Extract Nepali and English month-year separately
    const nepaliMonthYear = $("div.dpFlexEqual").contents().first().text().trim();
    const englishMonthYear = $("div.dpFlexEqual").find("div.dpSmallText").text().trim();

    $("div.dpMonthGridCell").each((i, el) => {
      const np = $(el)
        .find("span.dpBigDate")
        .contents()
        .filter(function () {
          return this.type === "text";
        })
        .text()
        .trim();

      const en = $(el).find("span.dpSmallDate").first().text().trim();
      const Tithi = $(el).find("span.dpCellTithi").text().trim() || null;
      const MoonTiming = $(el)
        .find("div.dpMoonTiming")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;
      const Nakshatra = $(el)
        .find("div.dpNakshatra")
        .first()
        .text()
        .trim()
        .replace(/\s+/g, " ") || null;

      days.push({
        np,
        en,
        Tithi,
        MoonTiming,
        Nakshatra,
        weekday: weekdayCount,
      });

      weekdayCount++;
      if (weekdayCount > 7) weekdayCount = 1;
    });

    // Ensure Nepali year folder exists
    if (!fs.existsSync(`./data/${nepaliYearFolder}`)) {
      fs.mkdirSync(`./data/${nepaliYearFolder}`, { recursive: true });
    }

    // Save file using sequence number
    fs.writeFileSync(
      `./data/${nepaliYearFolder}/${seqNum}.json`,
      JSON.stringify(
        {
          metadata: {
            np: nepaliMonthYear,
            en: englishMonthYear,
          },
          days: days,
        },
        null,
        2
      )
    );

    console.log(`Saved ${seqNum}.json in ${nepaliYearFolder} (${days.length} days)`);
    return { days, nepaliYearFolder: nepaliMonthYear.slice(-4) }; // Send Nepali year back

  } catch (err) {
    console.error("Error fetching data:", err.message);
    return { days: [], nepaliYearFolder };
  }
};

const scrapeData = async (actualYear, month, seqNum, nepaliYearFolder) => {
  return await _fetchData(actualYear, month, seqNum, nepaliYearFolder);
};

module.exports = { scrapeData };

