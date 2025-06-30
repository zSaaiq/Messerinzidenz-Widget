
const apiUrl = "https://messerinzidenz.de/geojson";

const widget = new ListWidget();
widget.setPadding(14, 16, 14, 16);
widget.backgroundColor = Color.dynamic(Color.white(), new Color("#1c1c1e"));

const today = new Date();
const formatter = new Intl.DateTimeFormat("de-DE", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric"
});
const formattedDate = formatter.format(today);

const data = await fetchReports();
const count = data.length;
const top10 = data.slice(0, 10);

const countColor = count === 0
  ? new Color("#2ecc71")
  : count <= 4
    ? new Color("#f1c40f")
    : new Color("#e74c3c");

const main = widget.addStack();
main.layoutVertically();
main.size = new Size(0, 0);
main.setPadding(0, 0, 0, 0);

const header = main.addStack();
header.layoutHorizontally();

const title = header.addText("Heutige Messerangriffe");
title.font = Font.boldSystemFont(15);
title.textColor = Color.dynamic(Color.black(), Color.white());
title.leftAlignText();

header.addSpacer(5);

const dateText = header.addText(formattedDate);
dateText.font = Font.systemFont(13);
dateText.textColor = Color.dynamic(Color.gray(), Color.lightGray());
dateText.leftAlignText();

header.addSpacer();

main.addSpacer(10);

for (let i = 0; i < top10.length; i++) {
  const report = top10[i];

  const row = main.addStack();
  row.layoutHorizontally();
  row.url = report.link;

  const col = row.addStack();
  col.layoutVertically();

  const bullet = col.addText("• " + report.title);
  bullet.font = Font.systemFont(12);
  bullet.textColor = Color.dynamic(Color.black(), Color.white());
  bullet.lineLimit = 1;
  bullet.leftAlignText();

  const location = col.addText("📍 " + report.location);
  location.font = Font.systemFont(10);
  location.textColor = Color.gray();
  location.lineLimit = 1;
  location.leftAlignText();

  row.addSpacer();

  if (i < top10.length - 1) {
    main.addSpacer(5);
  }
}

main.addSpacer();

const footer = main.addStack();
footer.layoutHorizontally();

const countText = footer.addText(`${count} Vorfälle gesammt`);
countText.font = Font.semiboldSystemFont(16);
countText.textColor = countColor;
countText.leftAlignText();

footer.addSpacer();

if (!config.runsInWidget) {
  await widget.presentLarge();
}

Script.setWidget(widget);
Script.complete();

async function fetchReports() {
  try {
    const req = new Request(apiUrl);
    const res = await req.loadJSON();
    return res.features.map(f => ({
      title: f.properties.title,
      location: f.properties.location,
      link: f.properties.link
    }));
  } catch (e) {
    console.error("Fehler beim Laden:", e);
    return [];
  }
}
