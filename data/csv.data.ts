// diary.data.js

import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

// export default {
//   watch: ["./diary.csv"],
//   load(watchedFiles: string[]) {
//     const file = watchedFiles[0];
//     return parse(fs.readFileSync(file, "utf-8"), {
//       columns: true,
//       skip_empty_lines: true,
//     });
//   },
// };

export default {
  watch: ["./*.csv"],
  load(watchedFiles: string[]) {
    // creates a single object with a property containing the data for each csv file
    return watchedFiles.reduce((acc, file) => {
      return Object.assign(acc, {
        [path.basename(file, ".csv").toLowerCase()]: parse(
          fs.readFileSync(file, "utf-8"),
          {
            columns: true,
            skip_empty_lines: true,
          }
        ),
      });
    }, {});
  },
};
