/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { userGroupsQuery } from "../../queries";
import { Group } from "../../types";

export async function userGroups(client: MobSecClient): Promise<Group[]> {
  const ret = await userGroupsQuery(client, {});
  return ret.my.groups;
}
