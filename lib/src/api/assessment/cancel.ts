/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { assessmentInfoQuery } from "../../queries";
import { CancelAssessmentResponse } from "../../types";

export async function cancelAssessment(
  client: MobSecClient,
  assessmentRef: string
): Promise<CancelAssessmentResponse> {
  const info = await assessmentInfoQuery(client, { ref: assessmentRef });
  const assessment = info.auto.assessments[0];
  const url = `/app/${assessment.platformType}/${assessment.packageKey}/assessment/${assessment.taskId}/cancel?group=${assessment.groupRef}`;
  return client.post<CancelAssessmentResponse>(url);
}
