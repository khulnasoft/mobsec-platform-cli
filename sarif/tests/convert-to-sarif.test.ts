/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { convertToSarif } from "../src/index";
import { DEFAULT_FILTER, DEFAULT_KEY_PARAMS } from "@mobsec/platform-lib";

const platformToken = "AAABBB";
const assessmentId = "CCCDDD";

import assessment from "./resources/assessment.json";
import { Assessment } from "@mobsec/platform-lib/lib/types";

describe("SARIF conversion", () => {
  test("can perform conversion", async () => {
    const sarif = await convertToSarif(
      assessment as Assessment,
      DEFAULT_FILTER,
      "./",
      {
        fingerprint: false,
        includePackage: true,
        includePlatform: true,
      }
    );
    expect(sarif).toMatchSnapshot();
  });
});
