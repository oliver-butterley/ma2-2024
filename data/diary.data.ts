// diary.data.js

import fs from "node:fs";
import { parse } from "csv-parse/sync";
import { defineLoader } from "vitepress";

// interface diaryItem {}

// export interface Data {}

export default {
  watch: ["./diary.csv"],
  load(watchedFiles) {
    const file = watchedFiles[0];
    return parse(fs.readFileSync(file, "utf-8"), {
      columns: true,
      skip_empty_lines: true,
    });
  },
};

// To do: https://vitepress.dev/guide/data-loading#typed-data-loaders
