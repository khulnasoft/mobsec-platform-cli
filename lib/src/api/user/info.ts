/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { currentUserQuery } from "../../queries";
import { FullUser } from "../../types";

export async function userInfo(client: MobSecClient): Promise<FullUser> {
  const ret = await currentUserQuery(client, {});
  return ret.my.user;
}
