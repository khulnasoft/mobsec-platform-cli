/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { PlatformEnum, StartAssessmentResponse } from "../../types";

function makeUrl(
  platform: PlatformEnum,
  packageName: string,
  groupRef: string,
  isAppStore: boolean
) {
  const appStoreQuery = isAppStore ? "&appstore_download=*" : "";
  return `/app/${platform}/${packageName}/assessment/?group=${groupRef}${appStoreQuery}`;
}

export async function startAssessment(
  client: MobSecClient,
  platform: PlatformEnum,
  packageName: string,
  groupRef: string,
  isAppStore: boolean
): Promise<StartAssessmentResponse> {
  const url = makeUrl(platform, packageName, groupRef, isAppStore);
  return await client.post<StartAssessmentResponse>(url, {});
}
