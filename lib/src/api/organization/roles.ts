/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { rolesQuery } from "../../queries";
import { Role } from "../../types";

export async function listRoles(client: MobSecClient): Promise<Role[]> {
  const ret = await rolesQuery(client, {});
  return ret.my.organization.roles;
}
