/*
 * Copyright © 2023 KhulnaSoft Ltd.
 *
 * SPDX-License-Identifier: MIT
 */

import { Command } from "@oclif/core";

/**
 * A minimal subset of command functions used in the utils
 */
export type CommandCore = Pick<Command, "error" | "log" | "warn">;
