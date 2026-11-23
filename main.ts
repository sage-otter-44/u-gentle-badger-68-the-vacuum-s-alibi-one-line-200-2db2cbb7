import * as fs from "node:fs";

const LINE =
  "The spot under the dining table is still dirty — my sensors classified the dropped spaghetti as a load-bearing structure, and demolishing architecture is above my pay grade.";

const OUT = "/output/entry.txt";
const DIR = OUT.slice(0, OUT.lastIndexOf("/"));

fs.mkdirSync(DIR, { recursive: true });
fs.writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${OUT} (${LINE.length} chars)`);
