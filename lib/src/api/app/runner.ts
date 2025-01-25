/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient, RequestConfig } from "../../client";
import { AppResource, PlatformEnum } from "../../types";

const runnerUrl = (
  platform: PlatformEnum,
  packageName: string,
  groupRef: string
) => `/app/${platform}/${packageName}/runner?group=${groupRef}`;

export async function uploadRunnerBinary(
  client: MobSecClient,
  stream: NodeJS.ReadableStream,
  platform: PlatformEnum,
  packageName: string,
  groupRef: string,
  config?: RequestConfig
): Promise<AppResource> {
  const url = runnerUrl(platform, packageName, groupRef);
  return await client.postStream<AppResource>(url, stream, config);
}

export async function deleteRunnerBinary(
  client: MobSecClient,
  platform: PlatformEnum,
  packageName: string,
  groupRef: string
): Promise<AppResource> {
  const url = runnerUrl(platform, packageName, groupRef);
  return await client.delete<AppResource>(url);
}
