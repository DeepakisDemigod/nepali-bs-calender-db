const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const _fetchData = async (actualYear, month, seqNum, nepaliYearFolder) => {
  console.log(`Fetching data for ${month}/${actualYear} (seq ${seqNum})...`);

  try {
    const url = `https://www.drikpanchang.com/nepali/calendar/nepali-patro.html?date=01/${month}/${actualYear}`;
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    const days = [];
    let weekdayCount = 1; // Tracks weekday (1=Sunday, 7=Saturday)

    // Extract Nepali and English month-year separately
    const nepaliMonthYear =
      $("div.dpFlexEqual").contents().first().text().trim() || "";
    const englishMonthYear =
      $("div.dpFlexEqual").find("div.dpSmallText").text().trim() || "";

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
      const MoonTiming =
        $(el)
          .find("div.dpMoonTiming")
          .first()
          .text()
          .trim()
          .replace(/\s+/g, " ") || null;
      const Nakshatra =
        $(el)
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

    // Derive a safe folder name for Nepali year
    const nepaliYearMatch = nepaliMonthYear.match(/\d{4}/);
    const nepaliYearFromMeta = nepaliYearMatch ? nepaliYearMatch[0] : null;
    const outFolder =
      nepaliYearFolder || nepaliYearFromMeta || `eng-${actualYear}`;

    // Ensure output folder exists
    if (!fs.existsSync(`./data/${outFolder}`)) {
      fs.mkdirSync(`./data/${outFolder}`, { recursive: true });
    }

    // Save file using sequence number
    fs.writeFileSync(
      `./data/${outFolder}/${seqNum}.json`,
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
      ),
      "utf-8"
    );

    console.log(`Saved ${seqNum}.json in ${outFolder} (${days.length} days)`);
    // Return a stable folder name back to the caller so it doesn't become `null`
    return { days, nepaliYearFolder: outFolder };
  } catch (err) {
    console.error("Error fetching data:", err.message);
    // Fallback: return a non-null folder name (prefer existing param), so caller doesn't assign null
    const fallbackFolder = nepaliYearFolder || `eng-${actualYear}`;
    return { days: [], nepaliYearFolder: fallbackFolder };
  }
};

const scrapeData = async (actualYear, month, seqNum, nepaliYearFolder) => {
  return await _fetchData(actualYear, month, seqNum, nepaliYearFolder);
};

module.exports = { scrapeData };
