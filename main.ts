import * as fs from "node:fs";

const LINE =
  "The spot under the dining table is still dirty — my sensors classified the dropped spaghetti as a load-bearing structure, and I do not demolish architecture.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote /output/entry.txt (${LINE.length} chars)`);
