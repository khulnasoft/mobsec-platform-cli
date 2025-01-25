# MobSec CLI

## Overview

The MobSec CLI is a tool that allows users to interact with the MobSec Platform. It is a command line interface that allows users to perform a variety of tasks, including:

* Uploading Applications to MobSec Platform.
* Accessing assessment data.
* Managing your MobSec Organization including sending invitations.

## User's Guide

### Getting Started

### Prerequisites

The following is needed to use the mobsec-cli:

* A valid MobSec Platform account.
* A valid MobSec Platform API token.  Instructions on how to acquire this can be found in the MobSec support center document [Creating an API Bearer Token in Platform](https://support.khulnasoft.com/hc/en-us/articles/7499657262093-Creating-an-API-Bearer-Token-in-Platform) 
* If you are using a single tenant deployment of MobSec Platform, you will need to specify the URLs of your deployment during configuration.  Please be sure to have the following URLs available:
  * The URL of your MobSec Platform REST API.  This is the URL that you will use to access the MobSec Platform API.  This URL will be in the format of `lab-api.<tenant>.khulnasoft.com`.
  * The URL of your MobSec Graph API.  This is the URL that you will use to access the MobSec Graph API.  This URL will be in the format of `api.<tenant>.khulnasoft.com`.
  * The URL of your MobSec Platform UI.  This is the URL that you will use to access the MobSec Platform UI.  This URL will be in the format of `app.<tenant>.khulnasoft.com`.

### Install

The MobSec CLI currently supports macOS, Debian based Linux distributions (Ubuntu), and Microsoft Windows (beta).  Below are the steps to install on each operating system:

1. Navigate to the  [Releases](https://github.com/khulnasoft/mobsec-platform-cli/releases) page and download the appropriate binary for your operating system/architecture (32 or 64bit).
2. Install based on your operating system:
   1. MacOS: Right click the .pkg file and select `run`.
   2. Linux: `sudo dpkg -i mobsec-cli_<VERSION>.deb`
   3. Window: Double-click `mobsec-cli_<VERSION>.exe`

### Configure

1. After the `mobsec-cli` has been installed on your system, run `mobsec-cli configure` to configure the CLI with your MobSec Platform Account.
2. The first prompt will ask you to enter the profile you are using. Hit enter to select the default profile of `default`. 

   **Note:** Most users will only need to use the default profile.  
3. The next prompt will ask you to enter the Platform API token that you will be using.  Paste this into the field provided  and hit enter.
4. The next prompt will ask you to enter the Graphql endpoint for MobSec Platform.  You can just hit enter if you are using the CLI to interact with the default production instance of MobSec Platform.  If you are using a single tenant deployment of MobSec Platform, you will need to enter the URL of your Graphql endpoint.  This URL will be in the format of `api.<tenant>.khulnasoft.com`.
5. The next prompt will ask you to enter the REST endpoint for MobSec Platform.  You can just hit enter if you are using the CLI to interact with the default production instance of MobSec Platform.  If you are using a single tenant deployment of MobSec Platform, you will need to enter the URL of your REST endpoint.  This URL will be in the format of `lab-api.<tenant>.khulnasoft.com`.
6. The next prompt and final will ask you to enter the UI Server for MobSec platform.  You can just hit enter if you are using the CLI to interact with the default production instance of MobSec Platform.  If you are using a single tenant deployment of MobSec Platform, you will need to enter the URL of your UI Server.  This URL will be in the format of `app.<tenant>.khulnasoft.com`.

Once done, verify that the CLI functions as expected by running `mobsec-cli app list`.  A listing of the apps in your platform account will be displayed.  If desired, you can run `mobsec-cli app list --json` to return the results in json format.  Example:

```bash
✗ mobsec-cli app list
REF                                   TITLE                                       PLATFORM  PACKAGE                                                         GROUP
9fc8a97e-2044-11eb-80b5-snip          "Business Suite"                            ios       com.facebook.PageAdminApp                                       "Auto Group"
952801a2-2a96-11eb-80b5-snip          Disney+                                     android   com.disney.disneyplus                                           "Auto Group"
0f377a8a-2b51-11eb-b2b8-snip          Strava                                      ios       com.strava.stravaride                                           TriageGroup
dcf30d7a-2c16-11eb-80b5-snip          Facebook                                    ios       com.facebook.Facebook                                           "Cool Group"
9d691706-3181-11eb-80b5-snip          Darksky                                     ios       com.jackadam.darksky                                            "Auto Group"
```
#### Windows Configuration Note

In some cases, the `mobsec-cli configure` will return "Error: N ot a valid token" when using CTRL-V to paste a valid token into the Windows Command or Powershell Prompt.  If this occurs, paste the token into the command prompt by using right click from your mouse.  When you do this, you should see asterisks to represent the token that is being submitted.  If this does not work, we recommend manually creating the `.nsclirc` file via the steps in the following section.



#### Manual Configuration of .nsclirc file

The `.nsclirc` file holds the configuration for the mobsec-cli.  If you want to manually configure this file, it should be created in the root of the user's home directory and should be named `.nsclirc` with no extensions (.txt, .env, etc).  The contents of this file should be configured as follows:

* `[Profile]`:  The mobsec-cli supports multiple profiles with the default profile being aptly named `[default]`.
* `token`: The token that you are using.
* `graphql` (optional): The graphql API endpoint that will be used.  This parameter is optional if you are using the default, https://api.khulnasoft.com.
* `rest`: (optional): The rest API endpoint that will be used.  This parameter is optional if you are using the default, https://lab-api.khulnasoft.com.
* `ui`: (optional): The URL to the UI that will be used.  THis parameter is optional if you are using the default, https://app.khulnasoft.com

Example of an .nsclirc file supporting a single profile using the default endpoints: 

```
[default]
token=eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenwC
```
Example of an .nsclirc file supporting a single profile using single tenant endpoints:

```
[default]
token=eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenTokenwC
graphql=https://api.st1.khulnasoft.com
rest=https://lab-api.st1.khulnasoft.com
ui=https://rainier.st1.khulnasoft.com
```

### Usage

Running `mobsec-cli help` will provide a top level list of the options that are available via the CLI:

```
$ mobsec-cli help
VERSION
  @mobsec/cli/1.0.0-alpha.2 darwin-arm64 node-v16.19.1

USAGE
  $ mobsec-cli [COMMAND]

TOPICS
  app           Commands to manipulate applications for analysis
  assessment    Commands to retrieve assessment data
  organization  Commands for the user's organization
  plugins       List installed plugins.
  user          Commands for users & accounts

COMMANDS
  app           Commands to manipulate applications for analysis
  assessment    Commands to retrieve assessment data
  autocomplete  display autocomplete installation instructions
  configure
  help          Display help for mobsec-cli.
  organization  Commands for the user's organization
  plugins       List installed plugins.
  user          Commands for users & accounts
  ```
Options are as follows

#### app

App commands provide steps that can be used to manipulate application binaries for analysis.  The following commands are available:

* **app archive**  Allows you to Archive or Unarchive an application that has been uploaded to MobSec Platform.
* **app config** Retrieve the analysis configuration for an application that has been uploaded to MobSec Platform
* **app create** Create an app resource without a binary
* **app last-assessment**:  Show the details and findings of an assessment based on platform (`ios` or `android`) and package name (`com.facebook.katana`). If the app exists in multiple groups, provide the group reference using the `-g` or `--group` option.
* **app list** List available applications in your platform account.
* **app process** Upload and analyze an application binary.
* **app update**  Update the application's analysis configuration.
* **app upload** Upload an application binary.
* **app vulnerabilities** Show application vulnerabilities

You can use the `--help` option to get more details on each of the options above.


#### assessment

Assessment commands are used to interact with assessments created in in MobSec Platform.  The following commands are available: 

* **assessment cancel** Cancel a running assessment
* **assessment github-snapshot** Create a SARIF report from an assessment
* **assessment list** List assessments in your MobSec Platform account
* **assessment raw** Get the raw data for an assessment
* **assessment sarif** Create a SARIF report from an assessment
* **assessment show** Show the details and findings of an assessment
* **assessment start** Start an assessment

You can use the `--help` option to get more details on each of the options above.

#### autocomplete

Running `mobsec-cli autocomplete` will provide details on how to integrate the mobsec-cli into your `.zshrc` to perform autocomplete actions.  

**Note:** Autocomplete is not currently supported in Windows

#### configure

Configure is described above in the [Configure](#configure) section.

#### help

Help provides help for the mobsec-cli.

#### organization  

Organization commands provide steps that can be used to manipulate an organization within MobSec Platform.  The following commands are available:

* **organization groups** Returns the groups that have been configured in an MobSec Platform organization.
* **organization invitations** List invitations that have been created within your MobSec Platform organization.
* **organization invite** Create an invitiation to add someone to your MobSec Platform organization.
* **organization revoke-invitation** Revoke an invitation that has been created in your MobSec Platform organization.
* **organization users**  List the users that exist in your MobSec Platform organization.

You can use the `--help` option to get more details on each of the options above.

#### plugins

The Plugins options will list plugins that have been added to the mobsec-cli.
  
#### user

User commands provide steps that can be used to manipulate users within MobSec Platform.  The following commands are available:

* **user account** Get the user details from MobSec Platform for the user account that was used to create the token that the mobsec-cli has been configured to use.
* **user groups** Get the group membership from MobSec Platform for the user account that was used to create the token that the mobsec-cli has been configured 

You can use the `--help` option to get more details on each of the options above.



## Developer's Guide

This is a Monorepo containing the following items.
 - The [MobSec Sarif Conversion Module](./sarif/README.md)
 - The [MobSec GitHub Snapshot Module](./github-snapshot/README.md)
 - The [MobSec REST and GQL API Library](./lib/README.md)
 - The [MobSec CLI](./cli/README.md)

## Building

> Ensure you are using Node >= 16 and have `yarn` installed before proceeding.

If you are looking to build a specific library or tool, see
[Building specific tools](#building-specific-tools).

Run the following to build everything:
```sh
yarn run build
```

Run the following to clean up all build artifacts:
```sh
yarn run clean 
```

### Building specific tools

| Tool | Build Command | Clean Command |
|:--|:--|:--|
| [MobSec REST and GQL API Library](./lib/README.md) | `yarn run build:lib` | `yarn run clean:lib` |
| [MobSec Sarif Conversion Module](./sarif/README.md) | `yarn run build:sarif` | `yarn run clean:sarif` |
| [MobSec GitHub Snapshot Module](./github-snapshot/README.md) | `yarn run build:github-snapshot` | `yarn run clean:github-snapshot` |
| [MobSec CLI](./cli/README.md) | `yarn run build:cli` | `yarn run clean:cli` |

