/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { Filter, filterAssessment } from "../../findings-filter";
import { AssessmentsQueryVariables } from "../../generated/graphql";
import { assessmentsQuery } from "../../queries";
import { Assessment } from "../../types";

export { AssessmentsQueryVariables } from "../../generated/graphql";

export async function listAssessments(
  client: MobSecClient,
  options?: AssessmentsQueryVariables,
  filter?: Filter
): Promise<Assessment[]> {
  const ret = await assessmentsQuery(client, options);
  const assessments = ret.auto.assessments;
  assessments.forEach((x) => filterAssessment(x, filter));
  return assessments;
}
