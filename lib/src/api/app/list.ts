/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { Filter, filterAssessment } from "../../findings-filter";
import {
  AppsListQueryVariables as ListApplicationOptions,
  AppsListQuery,
} from "../../generated/graphql";
import { listApplicationsQuery } from "../../queries";

export type Application = NonNullable<AppsListQuery["auto"]["applications"][0]>;

export { AppsListQueryVariables as ListApplicationOptions } from "../../generated/graphql";

export async function listApplications(
  client: MobSecClient,
  options?: ListApplicationOptions,
  filter?: Filter
): Promise<Application[]> {
  const result = await listApplicationsQuery(client, options || {});
  const apps = result.auto.applications;
  apps.forEach((x) => filterAssessment(x.latestCompleteAssessment, filter));
  return apps;
}
