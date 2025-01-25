# `sarif`

A library to produce a [SARIF log file](https://sarifweb.azurewebsites.net/) from a MobSec Platform assessment.

The output includes the `security-severity` property in the rules to display severities in [GitHub Code Scans](https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/sarif-support-for-code-scanning)

### Prerequisites

- An active MobSec Platform account is required to generate the input data. If you **_are not_** an existing MobSec Platform customer, please [contact us](https://info.khulnasoft.com/github-request).
- [ripgrep](https://github.com/BurntSushi/ripgrep) is required for line-number identification.

### Api

```typescript
async function convertToSarif(
  assessment: Assessment,
  filter: Filter = DEFAULT_FILTER,
  codePath = "./",
  keyParams: KeyParams = DEFAULT_KEY_PARAMS,
  labUrl: string = DEFAULT_LAB_UI_URL,
  errorLog?: (text: string) => void
): Promise<Log> {
```

- `assessment`: The assessment data from Platform, retrieved via a call to `pollForReport` or `fetchAssessment` in the `@mobsec/platform-lib` library
- `filter`: Controls which findings are included in the report. The default value includes all findings of `medium` or higher severity
- `codePath`: Location of the codebase for code scanning to obtain line number information. Can be falsy to disable scanning.
- `keyParams`: Controls the derivation of the Rule ID. The default is to include the package name and platform in the derivation function
- `labUrl`: URL of the Platform UI server, used to construct links from the SARIF report to the findings on Platform
- `errorLog`: Callback to log errors in the process.

```typescript
async function createSarifLogFile(
  nsClient: MobSecClient,
  reportId: string,
  outPath: string
) {
  // pull the report from platform
  const assessment = await pollForReport(nsClient, reportId);
  // Convert to SARIF and save e.g. for upload to GitHub
  const sarifLog = await convertToSarif(assessment);
  await fs.promises.writeFile(outPath, JSON.stringify(sarifLog));
}
```

## License

This project is released under the [MIT License](https://mit-license.org/).

MobSec Platform has separate [Terms and Conditions](https://www.khulnasoft.com/terms-and-conditions/) and requires a valid license to function.
