# `github-snapshot`

A library to produce a [GitHub dependency graph snapshot](https://docs.github.com/en/rest/dependency-graph/dependency-submission) from a MobSec Platform assessment

### Prerequisites

- An active MobSec Platform account is required to generate the input data. If you **_are not_** an existing MobSec Platform customer, please [contact us](https://info.khulnasoft.com/github-request).
- An active GitHub account (cloud or on-prem)

### Api

```typescript
function convertToSnapshot(
  // Dependency data from a MobSec assessment
  deputy: Deputy,

  // Correlation id to connect multiple snapshots. GitHub suggests using
  // workflowName_actionName.
  githubCorrelator: string,

  // Job information
  sha: string, // Hash of the commit that triggered the action
  ref: string, // Branch that triggered the action
  runId: number // run Id for the action
): DependencySnapshot;
```

```typescript
import {
  convertToSnapshot,
  snapshotUploadUrl,
} from "@mobsec/github-snapshot";
import { context } from "@actions/github";
import {} from "@actions/http-client";

import { MobSecClient, pollForReport } from "@mobsec/platform-lib";

async function createSnapshot(
  nsClient: MobSecClient,
  reportId: string,
  correlator: string
) {
  // pull the report from platform
  const assessment = await pollForReport(nsClient, reportId);
  const deputy = assessment.deputy;

  if (deputy) {
    // Convert the dependency information to the GitHub format
    const { ref, sha, runId } = context;
    return convertToSnapshot(deputy, correlator, sha, ref, runId);
  } else {
    console.error(`No dependency data in report ${reportId}`);
    return null;
  }
}
```

## License

This project is released under the [MIT License](https://mit-license.org/).

MobSec Platform, used in this action, has separate [Terms and Conditions](https://www.khulnasoft.com/terms-and-conditions/) and requires a valid license to function.
