import * as fs from "node:fs";

const LINE =
  "The spot under the dining table is still dirty — my sensors classified the dropped spaghetti as a load-bearing structure, and demolishing architecture is above my pay grade.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
