# mobsec-cli

MobSec command line tool

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [mobsec-cli](#mobsec-cli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @mobsec/platform-cli
$ mobsec-cli COMMAND
running command...
$ mobsec-cli (--version)
@mobsec/platform-cli/1.2.2 darwin-x64 node-v20.12.2
$ mobsec-cli --help [COMMAND]
USAGE
  $ mobsec-cli COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`mobsec-cli app`](#mobsec-cli-app)
* [`mobsec-cli app archive [PLATFORM] [PACKAGENAME]`](#mobsec-cli-app-archive-platform-packagename)
* [`mobsec-cli app config [PLATFORM] [PACKAGENAME]`](#mobsec-cli-app-config-platform-packagename)
* [`mobsec-cli app create PLATFORM PACKAGENAME`](#mobsec-cli-app-create-platform-packagename)
* [`mobsec-cli app last [PLATFORM] [PACKAGENAME]`](#mobsec-cli-app-last-platform-packagename)
* [`mobsec-cli app last-assessment [PLATFORM] [PACKAGENAME]`](#mobsec-cli-app-last-assessment-platform-packagename)
* [`mobsec-cli app list`](#mobsec-cli-app-list)
* [`mobsec-cli app process BINARY`](#mobsec-cli-app-process-binary)
* [`mobsec-cli app update [PLATFORM] [PACKAGENAME] [STDIN]`](#mobsec-cli-app-update-platform-packagename-stdin)
* [`mobsec-cli app upload BINARY`](#mobsec-cli-app-upload-binary)
* [`mobsec-cli app vulnerabilities [PLATFORM] [PACKAGENAME]`](#mobsec-cli-app-vulnerabilities-platform-packagename)
* [`mobsec-cli assessment`](#mobsec-cli-assessment)
* [`mobsec-cli assessment cancel ASSESSMENT`](#mobsec-cli-assessment-cancel-assessment)
* [`mobsec-cli assessment github-snapshot ASSESSMENT`](#mobsec-cli-assessment-github-snapshot-assessment)
* [`mobsec-cli assessment list`](#mobsec-cli-assessment-list)
* [`mobsec-cli assessment raw ASSESSMENT`](#mobsec-cli-assessment-raw-assessment)
* [`mobsec-cli assessment sarif ASSESSMENT`](#mobsec-cli-assessment-sarif-assessment)
* [`mobsec-cli assessment show ASSESSMENT`](#mobsec-cli-assessment-show-assessment)
* [`mobsec-cli assessment start [PLATFORM] [PACKAGENAME]`](#mobsec-cli-assessment-start-platform-packagename)
* [`mobsec-cli autocomplete [SHELL]`](#mobsec-cli-autocomplete-shell)
* [`mobsec-cli configure`](#mobsec-cli-configure)
* [`mobsec-cli help [COMMANDS]`](#mobsec-cli-help-commands)
* [`mobsec-cli organization`](#mobsec-cli-organization)
* [`mobsec-cli organization groups`](#mobsec-cli-organization-groups)
* [`mobsec-cli organization invitations`](#mobsec-cli-organization-invitations)
* [`mobsec-cli organization invite EMAIL`](#mobsec-cli-organization-invite-email)
* [`mobsec-cli organization revoke-invitation [EMAIL]`](#mobsec-cli-organization-revoke-invitation-email)
* [`mobsec-cli organization users`](#mobsec-cli-organization-users)
* [`mobsec-cli plugins`](#mobsec-cli-plugins)
* [`mobsec-cli plugins:install PLUGIN...`](#mobsec-cli-pluginsinstall-plugin)
* [`mobsec-cli plugins:inspect PLUGIN...`](#mobsec-cli-pluginsinspect-plugin)
* [`mobsec-cli plugins:install PLUGIN...`](#mobsec-cli-pluginsinstall-plugin-1)
* [`mobsec-cli plugins:link PLUGIN`](#mobsec-cli-pluginslink-plugin)
* [`mobsec-cli plugins:uninstall PLUGIN...`](#mobsec-cli-pluginsuninstall-plugin)
* [`mobsec-cli plugins:uninstall PLUGIN...`](#mobsec-cli-pluginsuninstall-plugin-1)
* [`mobsec-cli plugins:uninstall PLUGIN...`](#mobsec-cli-pluginsuninstall-plugin-2)
* [`mobsec-cli plugins update`](#mobsec-cli-plugins-update)
* [`mobsec-cli user`](#mobsec-cli-user)
* [`mobsec-cli user account`](#mobsec-cli-user-account)
* [`mobsec-cli user groups`](#mobsec-cli-user-groups)

## `mobsec-cli app`

Commands to manipulate applications for analysis

```
USAGE
  $ mobsec-cli app

DESCRIPTION
  Commands to manipulate applications for analysis
```

_See code: [dist/commands/app/index.ts](https://github.com/khulnasoft/mobsec-cli/blob/v1.2.2/dist/commands/app/index.ts)_

## `mobsec-cli app archive [PLATFORM] [PACKAGENAME]`

Archive or unarchive an app

```
USAGE
  $ mobsec-cli app archive [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-r <value>] [-u]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -g, --group=<value>  Group name
  -r, --ref=<value>    Application reference
  -u, --unarchive      unarchive the application
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Archive or unarchive an app

EXAMPLES
  $ mobsec-cli app archive android com.example.package --group "My group"

  $ mobsec-cli app archive --app=d296eaea-f714-4e2d-8930-023b3f2bb12a --unarchive
```

## `mobsec-cli app config [PLATFORM] [PACKAGENAME]`

Retrieve the analysis configuration

```
USAGE
  $ mobsec-cli app config [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-r <value>]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -g, --group=<value>  Group name
  -r, --ref=<value>    Application reference
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Retrieve the analysis configuration

EXAMPLES
  $ mobsec-cli app config
```

## `mobsec-cli app create PLATFORM PACKAGENAME`

Create an app resource without a binary

```
USAGE
  $ mobsec-cli app create PLATFORM PACKAGENAME [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -g, --group=<value>  Group name
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Create an app resource without a binary

EXAMPLES
  $ mobsec-cli app create android com.example.package --group "My group"
```

## `mobsec-cli app last [PLATFORM] [PACKAGENAME]`

Show the details and findings of the last complete assessment for an application

```
USAGE
  $ mobsec-cli app last [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-a | -m critical|c|high|h|medium|m|low|l|info|i | -w
    | -i <value> | -e <value>] [-f] [-s] [-c] [-d] [-b] [-g <value>] [--group-ref <value>] [-r <value>]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -a, --all-findings           show all findings
  -b, --[no-]build             Include details of the build
  -c, --[no-]config            Include the analysis configuration
  -d, --dependencies           Include the application dependency analysis
  -e, --exclude=<value>...     Findings that should always be excluded
  -f, --[no-]findings          Include the findings report
  -g, --group=<value>          Group name
  -i, --include=<value>...     Findings that should always be included
  -m, --min-severity=<option>  minimum severity to report
                               <options: critical|c|high|h|medium|m|low|l|info|i>
  -r, --ref=<value>            Application reference
  -s, --[no-]state             Include the current state of the assessment tasks
  -w, --warnings               Include warnings
  --group-ref=<value>          Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Show the details and findings of the last complete assessment for an application

ALIASES
  $ mobsec-cli app last

EXAMPLES
  $ mobsec-cli app last 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli app last-assessment [PLATFORM] [PACKAGENAME]`

Show the details and findings of the last complete assessment for an application

```
USAGE
  $ mobsec-cli app last-assessment [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-a | -m critical|c|high|h|medium|m|low|l|info|i | -w
    | -i <value> | -e <value>] [-f] [-s] [-c] [-d] [-b] [-g <value>] [--group-ref <value>] [-r <value>]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -a, --all-findings           show all findings
  -b, --[no-]build             Include details of the build
  -c, --[no-]config            Include the analysis configuration
  -d, --dependencies           Include the application dependency analysis
  -e, --exclude=<value>...     Findings that should always be excluded
  -f, --[no-]findings          Include the findings report
  -g, --group=<value>          Group name
  -i, --include=<value>...     Findings that should always be included
  -m, --min-severity=<option>  minimum severity to report
                               <options: critical|c|high|h|medium|m|low|l|info|i>
  -r, --ref=<value>            Application reference
  -s, --[no-]state             Include the current state of the assessment tasks
  -w, --warnings               Include warnings
  --group-ref=<value>          Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Show the details and findings of the last complete assessment for an application

ALIASES
  $ mobsec-cli app last

EXAMPLES
  $ mobsec-cli app last-assessment 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli app list`

List available applications on Platform

```
USAGE
  $ mobsec-cli app list [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json] [--group-ref <value>] [-g <value>] [-r <value>] [-t <value>] [-p android|ios] [-i
    <value>]

FLAGS
  -g, --group=<value>...      Filter by group name
  -i, --id=<value>...         Filter on ID (package name or bundle ID)
  -p, --platform=<option>...  Filter on platform
                              <options: android|ios>
  -r, --ref=<value>...        Filter on reference
  -t, --title=<value>...      Filter on title
  --group-ref=<value>...      Filter by group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  List available applications on Platform

EXAMPLES
  $ mobsec-cli app list
```

## `mobsec-cli app process BINARY`

Upload and analyze an application binary

```
USAGE
  $ mobsec-cli app process BINARY [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile
    <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-v <value>] [-t
    full|static|dependencies]

ARGUMENTS
  BINARY  file to send to Platform

FLAGS
  -g, --group=<value>           Group name
  -t, --analysis-type=<option>  The type of analysis to perform.
                                <options: full|static|dependencies>
  -v, --set-version=<value>     Set the version of the uploaded binary.
  --group-ref=<value>           Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

EXAMPLES
  $ mobsec-cli app process my_application.apk

FLAG DESCRIPTIONS
  -t, --analysis-type=full|static|dependencies  The type of analysis to perform.

    "static": Perform a static analysis only.
    "dependencies": Analyze the application's library dependencies.
    "full": Run a complete assessment including dynamic analysis.

    If the flag is not specified a full analysis will be run.

    Static-only and dependency-only analyses do not attempt to decrypt encrypted binaries as
    these analyses are intended to provide a rapid result for e.g. a CI/CD pipeline. An encrypted
    binary will fail to analyze.

    Please note:
    The assessment status on MobSec Platform UI does not reflect successful completion of
    static-only or dependencies-only analysis. The labels in the UI will be "Partial Results"
    and "Failed Dynamic Analysis" due to the lack of a dynamic analysis.

  -v, --set-version=<value>  Set the version of the uploaded binary.

    Attached a custom version string to the uploaded build,
    overriding the version string contained in the package file.

    The custom string will be displayed in the "Version" column of the application list in Platform.
```

## `mobsec-cli app update [PLATFORM] [PACKAGENAME] [STDIN]`

Update the application's analysis configuration

```
USAGE
  $ mobsec-cli app update [PLATFORM] [PACKAGENAME] [STDIN] [--token <value>] [--graphql <value>] [--rest <value>]
    [--ui <value>] [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-r <value>]
    [-r | -t none|js|xctest|appium | -f <value>] [-c <value>] [-m]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)
  STDIN        (-) Read the configuration from stdin instead of a file

FLAGS
  -c, --config=<value>        JSON or YAML file containing the required updates
  -f, --script-file=<value>   Script file
  -g, --group=<value>         Group name
  -m, --[no-]merge            Merge search terms in the update file with the existing values
  -r, --ref=<value>           Application reference
  -r, --reset
  -t, --script-type=<option>  Set up a Javascript, Appium or XCTest script, or remove all scripts.
                              <options: none|js|xctest|appium>
  --group-ref=<value>         Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Update the application's analysis configuration

EXAMPLES
  $ mobsec-cli app update
```

## `mobsec-cli app upload BINARY`

Upload an application binary

```
USAGE
  $ mobsec-cli app upload BINARY [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile
    <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>]

ARGUMENTS
  BINARY  file to send to Platform

FLAGS
  -g, --group=<value>  Group name
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Upload an application binary

EXAMPLES
  $ mobsec-cli app upload my_application.apk
```

## `mobsec-cli app vulnerabilities [PLATFORM] [PACKAGENAME]`

Show application vulnerabilities

```
USAGE
  $ mobsec-cli app vulnerabilities [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-r <value>]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -g, --group=<value>  Group name
  -r, --ref=<value>    Application reference
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Show application vulnerabilities

EXAMPLES
  $ mobsec-cli app vulnerabilities android com.example.package --group "My group"

  $ mobsec-cli app vulnerabilities --app=d296eaea-f714-4e2d-8930-023b3f2bb12a
```

## `mobsec-cli assessment`

Commands to retrieve assessment data

```
USAGE
  $ mobsec-cli assessment

DESCRIPTION
  Commands to retrieve assessment data
```

_See code: [dist/commands/assessment/index.ts](https://github.com/khulnasoft/mobsec-cli/blob/v1.2.2/dist/commands/assessment/index.ts)_

## `mobsec-cli assessment cancel ASSESSMENT`

Cancel a running assessment

```
USAGE
  $ mobsec-cli assessment cancel ASSESSMENT [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>] [--json]

ARGUMENTS
  ASSESSMENT  Reference of the assessment to cancel

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Cancel a running assessment

EXAMPLES
  $ mobsec-cli assessment cancel 244ed89a-a99c-1fec-b95d-1be1c0238cb4
```

## `mobsec-cli assessment github-snapshot ASSESSMENT`

Create a SARIF report from an assessment

```
USAGE
  $ mobsec-cli assessment github-snapshot ASSESSMENT -c <value> -s <value> -r <value> -j <value> [--token <value>] [--graphql
    <value>] [--rest <value>] [--ui <value>] [--profile <value>] [--config-file <value>] [--json] [-t <value>] [-o
    <value>]

ARGUMENTS
  ASSESSMENT  Source assessment reference

FLAGS
  -c, --correlator=<value>  (required) Correlation ID to link snapshots for the same app
  -j, --job-id=<value>      (required) id of the build job
  -o, --output=<value>      Write to a file, instead of STDOUT
  -r, --ref=<value>         (required) Tag or branch causing the build
  -s, --sha=<value>         (required) git hash of the commit causing the build
  -t, --timeout=<value>     Timeout in seconds to wait for the analysis to complete

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Create a SARIF report from an assessment

EXAMPLES
  $ mobsec-cli assessment github-snapshot 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli assessment list`

List assessments

```
USAGE
  $ mobsec-cli assessment list [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [-m critical|c|high|h|medium|m|low|l|info|i --json] [-w ] [-i <value> ] [-e <value> ] [-a ]
    [-f ] [--config ] [-d ] [-b ] [--group-ref <value>] [-g <value>] [-r <value>] [--platform android|ios] [--limit
    <value>] [--scope *] [--finding <value>] [--status cancelled|completed|failed|pending] [--since <value>] [--after
    <value>] [--before <value>] [--until <value>] [--reverse] [-d] [--baseline] [--appstore] [--fail-fast] [--favorite]

FLAGS
  -a, --all-findings           show all findings
  -b, --[no-]build             Include details of the build
  -d, --[no-]dependencies      Include the application dependency analysis
  -d, --include-deleted        Show all assessements including deleted ones
  -e, --exclude=<value>...     Findings that should always be excluded
  -f, --[no-]findings          Include the findings report
  -g, --group=<value>...       Filter by group name
  -i, --include=<value>...     Findings that should always be included
  -m, --min-severity=<option>  minimum severity to report
                               <options: critical|c|high|h|medium|m|low|l|info|i>
  -r, --ref=<value>...         Filter on reference
  -w, --warnings               Include warnings
  --after=<value>              Assessments created after this date
  --[no-]appstore              Show assessments on apps downloaded from the platform's app store
  --[no-]baseline              Only show baseline assessments
  --before=<value>             Assessments created before this date
  --[no-]config                Include the analysis configuration
  --[no-]fail-fast
  --[no-]favorite              Show favorited assessments
  --finding=<value>            Only show assessments with this finding
  --group-ref=<value>...       Filter by group reference
  --limit=<value>
  --platform=<option>          Filter on platform
                               <options: android|ios>
  --reverse                    Show in reverse order
  --scope=<option>             <options: *>
  --since=<value>              Assessments created since this date
  --status=<option>            Filter by job status
                               <options: cancelled|completed|failed|pending>
  --until=<value>              Assessments created until this date

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  List assessments

EXAMPLES
  $ mobsec-cli assessment list
```

## `mobsec-cli assessment raw ASSESSMENT`

Get the raw data for an assessment

```
USAGE
  $ mobsec-cli assessment raw ASSESSMENT [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>] [--json]

ARGUMENTS
  ASSESSMENT  Reference of the assessment

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Get the raw data for an assessment

EXAMPLES
  $ mobsec-cli assessment raw 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli assessment sarif ASSESSMENT`

Create a SARIF report from an assessment

```
USAGE
  $ mobsec-cli assessment sarif ASSESSMENT [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>] [--json] [-a | -m critical|c|high|h|medium|m|low|l|info|i | -w | -i
    <value> | -e <value>] [-t <value>] [-c <value>] [-o <value>] [--fingerprint] [--package] [--platform] [--v1-key
    <value>]

ARGUMENTS
  ASSESSMENT  Source assessment reference

FLAGS
  -a, --all-findings           show all findings
  -c, --code=<value>
  -e, --exclude=<value>...     Findings that should always be excluded
  -i, --include=<value>...     Findings that should always be included
  -m, --min-severity=<option>  minimum severity to report
                               <options: critical|c|high|h|medium|m|low|l|info|i>
  -o, --output=<value>         Write to a file, instead of STDOUT
  -t, --timeout=<value>        Timeout in seconds to wait for the analysis to complete
  -w, --warnings               Include warnings
  --[no-]fingerprint
  --[no-]package
  --[no-]platform
  --v1-key=<value>

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Create a SARIF report from an assessment

EXAMPLES
  $ mobsec-cli assessment sarif 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli assessment show ASSESSMENT`

Show the details and findings of an assessment

```
USAGE
  $ mobsec-cli assessment show ASSESSMENT [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>] [--json] [-a | -m critical|c|high|h|medium|m|low|l|info|i | -w | -i
    <value> | -e <value>] [-f] [-s] [-c] [-d] [-b] [-t <value>]

ARGUMENTS
  ASSESSMENT  Reference of the assessment to view

FLAGS
  -a, --all-findings           show all findings
  -b, --[no-]build             Include details of the build
  -c, --[no-]config            Include the analysis configuration
  -d, --dependencies           Include the application dependency analysis
  -e, --exclude=<value>...     Findings that should always be excluded
  -f, --[no-]findings          Include the findings report
  -i, --include=<value>...     Findings that should always be included
  -m, --min-severity=<option>  minimum severity to report
                               <options: critical|c|high|h|medium|m|low|l|info|i>
  -s, --[no-]state             Include the current state of the assessment tasks
  -t, --timeout=<value>        Timeout in seconds to wait for the analysis to complete. Specify -1 to wait indefinitely.
                               If unspecified or 0, the assessment is returned as-is and may contain partial results
  -w, --warnings               Include warnings

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Show the details and findings of an assessment

EXAMPLES
  $ mobsec-cli assessment show 24891ee6-698e-4a55-bb27-adbfa4694787
```

## `mobsec-cli assessment start [PLATFORM] [PACKAGENAME]`

Start an assessment

```
USAGE
  $ mobsec-cli assessment start [PLATFORM] [PACKAGENAME] [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [-g <value>] [--group-ref <value>] [-r <value>] [-s]

ARGUMENTS
  PLATFORM     (android|ios) Platform
  PACKAGENAME  Package identifier (e.g. com.example.app)

FLAGS
  -g, --group=<value>  Group name
  -r, --ref=<value>    Application reference
  -s, --app-store
  --group-ref=<value>  Group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Start an assessment

EXAMPLES
  $ mobsec-cli assessment start android com.example.package --group "My group" --app-store

  $ mobsec-cli assessment start --app=d296eaea-f714-4e2d-8930-023b3f2bb12a
```

## `mobsec-cli autocomplete [SHELL]`

display autocomplete installation instructions

```
USAGE
  $ mobsec-cli autocomplete [SHELL] [-r]

ARGUMENTS
  SHELL  shell type

FLAGS
  -r, --refresh-cache  Refresh cache (ignores displaying instructions)

DESCRIPTION
  display autocomplete installation instructions

EXAMPLES
  $ mobsec-cli autocomplete

  $ mobsec-cli autocomplete bash

  $ mobsec-cli autocomplete zsh

  $ mobsec-cli autocomplete --refresh-cache
```

_See code: [@oclif/plugin-autocomplete](https://github.com/oclif/plugin-autocomplete/blob/v2.1.8/src/commands/autocomplete/index.ts)_

## `mobsec-cli configure`

```
USAGE
  $ mobsec-cli configure [-y | -n] [-c] [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>]
    [--profile <value>] [--config-file <value>]

FLAGS
  -c, --clear            Remove the profile from the configuration file
  -n, --no               Abort if an existing profile would be overwritten
  -y, --yes              Do not prompt for confirmation when overwriting an existing profile
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --profile=<value>      Name of the profile
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server
```

_See code: [dist/commands/configure/index.ts](https://github.com/khulnasoft/mobsec-cli/blob/v1.2.2/dist/commands/configure/index.ts)_

## `mobsec-cli help [COMMANDS]`

Display help for mobsec-cli.

```
USAGE
  $ mobsec-cli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mobsec-cli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `mobsec-cli organization`

Commands for the user's organization

```
USAGE
  $ mobsec-cli organization

DESCRIPTION
  Commands for the user's organization
```

_See code: [dist/commands/organization/index.ts](https://github.com/khulnasoft/mobsec-cli/blob/v1.2.2/dist/commands/organization/index.ts)_

## `mobsec-cli organization groups`

Get the organization's groups

```
USAGE
  $ mobsec-cli organization groups [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json] [--active | --inactive]

FLAGS
  --active    List only active groups
  --inactive  List only inactive groups

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Get the organization's groups

EXAMPLES
  $ mobsec-cli organization groups
```

## `mobsec-cli organization invitations`

List invitations

```
USAGE
  $ mobsec-cli organization invitations [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json]

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  List invitations

EXAMPLES
  $ mobsec-cli organization invitations
```

## `mobsec-cli organization invite EMAIL`

Invite a user to join your organization

```
USAGE
  $ mobsec-cli organization invite EMAIL -n <value> -r <value> [--token <value>] [--graphql <value>] [--rest <value>] [--ui
    <value>] [--profile <value>] [--config-file <value>] [--json] [--group-ref <value>] [-g <value>]

ARGUMENTS
  EMAIL  Email address of the new user

FLAGS
  -g, --group=<value>...  Add user to this group by group name
  -n, --name=<value>      (required)
  -r, --role=<value>      (required) Role to assign to the user
  --group-ref=<value>...  Add user to this group by group reference

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Invite a user to join your organization

EXAMPLES
  $ mobsec-cli organization invite someone@example.com --name "John Doe" --role "QA" --group "Test Apps"
```

## `mobsec-cli organization revoke-invitation [EMAIL]`

Revoke an invitation to join your organization

```
USAGE
  $ mobsec-cli organization revoke-invitation [EMAIL] [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile
    <value>] [--config-file <value>] [--json] [--ref <value>]

ARGUMENTS
  EMAIL  Email address to revoke

FLAGS
  --ref=<value>  Reference of the invitation to delete

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Revoke an invitation to join your organization

EXAMPLES
  $ mobsec-cli organization revoke-invitation someone@example.com

  $ mobsec-cli organization revoke-invitation --ref=7342762a-5a3b-4ca9-95e7-225ea6913aee
```

## `mobsec-cli organization users`

List users in the organization

```
USAGE
  $ mobsec-cli organization users [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json] [--active | --inactive]

FLAGS
  --active    Only list active users
  --inactive  List only inactive users

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  List users in the organization

EXAMPLES
  $ mobsec-cli organization users
```

## `mobsec-cli plugins`

List installed plugins.

```
USAGE
  $ mobsec-cli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mobsec-cli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.4/src/commands/plugins/index.ts)_

## `mobsec-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mobsec-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mobsec-cli plugins add

EXAMPLES
  $ mobsec-cli plugins:install myplugin 

  $ mobsec-cli plugins:install https://github.com/someuser/someplugin

  $ mobsec-cli plugins:install someuser/someplugin
```

## `mobsec-cli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mobsec-cli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mobsec-cli plugins:inspect myplugin
```

## `mobsec-cli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mobsec-cli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mobsec-cli plugins add

EXAMPLES
  $ mobsec-cli plugins:install myplugin 

  $ mobsec-cli plugins:install https://github.com/someuser/someplugin

  $ mobsec-cli plugins:install someuser/someplugin
```

## `mobsec-cli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mobsec-cli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mobsec-cli plugins:link myplugin
```

## `mobsec-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobsec-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobsec-cli plugins unlink
  $ mobsec-cli plugins remove
```

## `mobsec-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobsec-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobsec-cli plugins unlink
  $ mobsec-cli plugins remove
```

## `mobsec-cli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mobsec-cli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mobsec-cli plugins unlink
  $ mobsec-cli plugins remove
```

## `mobsec-cli plugins update`

Update installed plugins.

```
USAGE
  $ mobsec-cli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `mobsec-cli user`

Commands for users & accounts

```
USAGE
  $ mobsec-cli user

DESCRIPTION
  Commands for users & accounts
```

_See code: [dist/commands/user/index.ts](https://github.com/khulnasoft/mobsec-cli/blob/v1.2.2/dist/commands/user/index.ts)_

## `mobsec-cli user account`

Current user details

```
USAGE
  $ mobsec-cli user account [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json]

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Current user details

EXAMPLES
  $ mobsec-cli user account
```

## `mobsec-cli user groups`

Get the user's groups

```
USAGE
  $ mobsec-cli user groups [--token <value>] [--graphql <value>] [--rest <value>] [--ui <value>] [--profile <value>]
    [--config-file <value>] [--json]

GLOBAL FLAGS
  --config-file=<value>  Path to the config file
  --graphql=<value>      URL of the graphql server
  --json                 Format output as json.
  --profile=<value>      Profile to read from ~/.nsclirc
  --rest=<value>         URL of the REST server
  --token=<value>        Platform API token
  --ui=<value>           URL of the UI server

DESCRIPTION
  Get the user's groups

EXAMPLES
  $ mobsec-cli user groups
```
<!-- commandsstop -->
