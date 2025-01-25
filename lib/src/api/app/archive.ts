/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { AppResource } from "../../types";

export async function archiveApp(
  client: MobSecClient,
  appRef: string,
  unarchive?: boolean
) {
  const url = `/resource/${
    unarchive ? "_unarchive_app" : "_archive_app"
  }/${appRef}`;

  // workround for bug: the archive route returns an array of one element
  // containing the original
  const ret = await client.post<AppResource | AppResource[]>(url);
  if (!Array.isArray(ret)) {
    return ret;
  }
  const pre = ret[0];
  const checkUrl = `/app/${pre.platform}/${pre.package}?group=${pre.group}`;
  return await client.get<AppResource>(checkUrl);
}
