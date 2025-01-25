/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { JSONObject, MobSecClient } from "../../client";
import { assessmentsQuery } from "../../queries";

export async function rawAssessmentData(
  client: MobSecClient,
  assessmentId: string
): Promise<JSONObject> {
  const list = await assessmentsQuery(client, {
    includeConfig: false,
    includeDependencies: false,
    includeReport: false,
    includeState: false,
    includeBuild: false,
    refs: assessmentId,
  });
  if (list.auto?.assessments?.length !== 1) {
    return null;
  }
  const asmt = list.auto.assessments[0];

  const url = `/app/${asmt.platformType}/${asmt.packageKey}/assessment/${asmt.taskId}/_raw?group=${asmt.groupRef}`;
  return await client.get<JSONObject>(url);
}
