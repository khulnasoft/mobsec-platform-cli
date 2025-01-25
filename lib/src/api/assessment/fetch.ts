/*
 * Copyright © 2022 MobSec Inc.
 *
 * SPDX-License-Identifier: MIT
 */

import { MobSecClient } from "../../client";
import { sleep } from "../../utils";
import { AssessmentsQueryVariables } from "../../generated/graphql";
import { assessmentsQuery } from "../../queries";
import { Assessment } from "../../types";
import { Filter, filterAssessment } from "../../findings-filter";

/** Options for fetchAssessment */
export type AssessmentSections = Pick<
  AssessmentsQueryVariables,
  | "includeConfig"
  | "includeDependencies"
  | "includeReport"
  | "includeState"
  | "includeBuild"
>;

/** Options for pollForReport. includeReport is implicitly true */
export type PollSections = Exclude<AssessmentSections, "includeReport">;

/**
 * Fetch an assessment by reference
 *
 * @param client MobSecClient object
 * @param reportId assessment reference to retrieve
 */
export async function fetchAssessment(
  client: MobSecClient,
  reportId: string,
  sections?: AssessmentSections,
  filter?: Filter
): Promise<Assessment | null> {
  const {
    includeConfig = false,
    includeDependencies = true,
    includeReport = true,
    includeState = false,
    includeBuild = false,
  } = sections;
  const ret = await assessmentsQuery(client, {
    includeConfig,
    includeDependencies,
    includeReport,
    includeState,
    includeBuild,
    refs: reportId,
  });
  const assessment = ret.auto.assessments?.[0] || null;
  filterAssessment(assessment, filter);
  return assessment;
}

/**
 * Poll Platform to resolve the assessment ID to a assessment.
 * The loop will continue until the assessment has completed
 * and has a report element.
 *
 * @param client MobSecClient object
 * @param reportId assessment reference to pull
 * @param pollInterval poll interval in milliseconds
 * @param timeout timeout in milliseconds. Pass 0 for no timeout
 * @returns The completed assessment or null
 */
export async function pollForReport(
  client: MobSecClient,
  reportId: string,
  sections?: PollSections,
  filter?: Filter,
  pollInterval = 60000,
  timeout = 0,
  log?: (text: string) => void
): Promise<Assessment | null> {
  // Since we're polling for the report, includeReport must be true
  const options: AssessmentSections = {
    ...(sections || {}),
    includeReport: true,
  };

  let assessment: Assessment | null = null;

  const endTime = timeout > 0 ? Date.now() + timeout : Number.MAX_VALUE;
  while (Date.now() <= endTime) {
    log?.(`Checking for MobSec report ${reportId}...`);
    assessment = await fetchAssessment(client, reportId, options, filter);
    try {
      if (assessment?.report) {
        break;
      } else {
        assessment = null;
        await sleep(pollInterval);
      }
    } catch (e) {
      console.error(e);
      // No report data.
    }
  }
  return assessment;
}
