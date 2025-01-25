/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { orgUsersQuery } from "../../queries";
import { User } from "../../types";

import { OrgUsersQueryVariables as OrgUsersOptions } from "../../generated/graphql";
export { OrgUsersQueryVariables as OrgUsersOptions } from "../../generated/graphql";

export async function orgUsers(
  client: MobSecClient,
  options: OrgUsersOptions
): Promise<User[]> {
  const ret = await orgUsersQuery(client, options);
  return ret.my.organization.users || [];
}
