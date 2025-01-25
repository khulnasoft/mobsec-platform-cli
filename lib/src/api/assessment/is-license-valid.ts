/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { licenseValidQuery } from "../../queries";

export async function isLicenseValid(
  client: MobSecClient,
  licenseWorkaround: boolean
): Promise<boolean> {
  const licenseResponse = await licenseValidQuery(client, {});
  const { total, limit, reached } =
    licenseResponse.my.user.organization.usage.assessment;

  let limitReached = reached;
  if (licenseWorkaround) {
    // FIXME: Workaround platform license counting issue.
    limitReached = limit !== -1 && total + 1 >= limit;
  }

  return !limitReached;
}
