/**
 * Command Registration Module
 * Centralized registry for all Discord commands
 */

const fs = require('fs');
const path = require('path');

class CommandRegistry {
  constructor() {
    this.commands = new Map();
    this.categorizedCommands = {};
  }

  /**
   * Register a command
   * @param {string} category - Command category (e.g., 'misc', 'quote-discovery')
   * @param {Object} command - Command object with name and execute method
   */
  registerCommand(category, command) {
    if (!this.commands.has(command.name)) {
      this.commands.set(command.name, { ...command, category });
      
      if (!this.categorizedCommands[category]) {
        this.categorizedCommands[category] = [];
      }
      this.categorizedCommands[category].push(command.name);
    }
  }

  /**
   * Get a command by name
   * @param {string} name - Command name
   * @returns {Object|null} Command object or null if not found
   */
  getCommand(name) {
    return this.commands.get(name) || null;
  }

  /**
   * Get all commands
   * @returns {Map} Map of all commands
   */
  getAllCommands() {
    return new Map(this.commands);
  }

  /**
   * Get commands by category
   * @param {string} category - Category name
   * @returns {Array<string>} Array of command names in category
   */
  getCommandsByCategory(category) {
    return this.categorizedCommands[category] || [];
  }

  /**
   * Get all categories
   * @returns {Array<string>} Array of category names
   */
  getCategories() {
    return Object.keys(this.categorizedCommands);
  }

  /**
   * Get command count
   * @returns {number} Total number of registered commands
   */
  getCommandCount() {
    return this.commands.size;
  }

  /**
   * Load commands from a directory
   * @param {string} directory - Directory path
   * @param {string} category - Category name
   */
  loadCommandsFromDirectory(directory, category) {
    try {
      if (!fs.existsSync(directory)) {
        console.warn(`Command directory not found: ${directory}`);
        return;
      }

      const files = fs.readdirSync(directory).filter(file => file.endsWith('.js'));
      
      files.forEach(file => {
        const filePath = path.join(directory, file);
        try {
          // eslint-disable-next-line global-require, import/no-dynamic-require
          const command = require(filePath);
          if (command && command.name) {
            this.registerCommand(category, command);
          }
        } catch (error) {
          console.error(`Error loading command ${file}: ${error.message}`);
        }
      });
    } catch (error) {
      console.error(`Error loading commands from ${directory}: ${error.message}`);
    }
  }

  /**
   * Load all commands from default structure
   */
  loadAllCommands() {
    const categories = [
      { path: 'misc', name: 'misc' },
      { path: 'quote-discovery', name: 'quote-discovery' },
      { path: 'quote-management', name: 'quote-management' },
      { path: 'quote-social', name: 'quote-social' },
      { path: 'quote-export', name: 'quote-export' },
    ];

    const commandsDir = path.join(__dirname, 'commands');
    
    categories.forEach(({ path: categoryPath, name }) => {
      this.loadCommandsFromDirectory(path.join(commandsDir, categoryPath), name);
    });
  }
}

// Create singleton instance
const registry = new CommandRegistry();

module.exports = {
  registry,
  registerCommands: () => registry.loadAllCommands(),
  getCommands: () => registry.getAllCommands(),
  registerCommand: (category, command) => registry.registerCommand(category, command),
  getCommand: (name) => registry.getCommand(name),
  getCommandsByCategory: (category) => registry.getCommandsByCategory(category),
  getCategories: () => registry.getCategories(),
};
