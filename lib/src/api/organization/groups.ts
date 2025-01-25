/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { OrgGroupsQueryVariables as OrgGroupsOptions } from "../../generated/graphql";
import { orgGroupsQuery } from "../../queries";
import { Group } from "../../types";

export { OrgGroupsQueryVariables as OrgGroupsOptions } from "../../generated/graphql";

export async function orgGroups(
  client: MobSecClient,
  options: OrgGroupsOptions
): Promise<Group[]> {
  const ret = await orgGroupsQuery(client, options);
  return ret.my.organization.groups;
}
