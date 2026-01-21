/**
 * VeraBot Commands Module
 * Entry point for the commands module
 *
 * @module commands
 */

const commandRegistry = require('./register-commands');

module.exports = {
  commands: commandRegistry,
  registerCommands: commandRegistry.registerCommands,
  getCommands: commandRegistry.getCommands,
};
