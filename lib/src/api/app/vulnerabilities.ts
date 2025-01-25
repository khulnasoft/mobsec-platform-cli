/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { VulnerabilityResponse } from "../../types";

export /* async */ function getAppVulnerabilities(
  client: MobSecClient,
  appRef: string
): Promise<VulnerabilityResponse> {
  const url = `/resource/app/${appRef}/vulnerability`;
  return client.get<VulnerabilityResponse>(url);
}
