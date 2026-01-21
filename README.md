# VeraBot Commands Module

**Part of the [VeraBot2.0](https://github.com/Rarsus/verabot2.0) submodule architecture**

Discord bot commands module - Centralized repository for all Discord command implementations.

## Overview

This is a dedicated Git submodule containing all Discord commands for VeraBot2.0. As part of the Phase 2.5 restructuring, all commands have been extracted into an independent module to improve modularity, maintainability, and development workflows.

## Architecture

```
verabot-commands/
├── src/
│   ├── commands/
│   │   ├── misc/                    # General utility commands
│   │   ├── quote-discovery/         # Quote search & discovery commands
│   │   ├── quote-management/        # Quote CRUD commands
│   │   ├── quote-social/            # Social/interactive commands
│   │   └── quote-export/            # Export functionality commands
│   ├── register-commands.js         # Command registry & loader
│   └── index.js                     # Module entry point
├── tests/
│   ├── unit/                        # Unit tests
│   └── integration/                 # Integration tests
└── package.json                     # Module dependencies
```

## Command Categories

### 1. **misc/** - General Utilities
- `hi.js` - Greeting command
- `ping.js` - Bot latency check
- `help.js` - Command help system
- `poem.js` - AI poem generation

### 2. **quote-discovery/** - Search & Discovery
- `random-quote.js` - Get random quote
- `search-quotes.js` - Search quotes by text/author
- `quote-stats.js` - Quote statistics

### 3. **quote-management/** - CRUD Operations
- `add-quote.js` - Create new quote
- `delete-quote.js` - Remove quote
- `update-quote.js` - Modify existing quote
- `list-quotes.js` - List all quotes
- `quote.js` - Get quote by ID

### 4. **quote-social/** - Social Features
- `rate-quote.js` - Rate quotes
- `tag-quote.js` - Tag quotes

### 5. **quote-export/** - Data Export
- `export-quotes.js` - Export quotes to various formats

## Installation

### As a Submodule

In the main repository (`verabot2.0`):

```bash
# Add as submodule
git submodule add https://github.com/Rarsus/verabot-commands.git repos/verabot-commands

# Initialize submodule
git submodule update --init --recursive

# Install dependencies
cd repos/verabot-commands
npm install
```

### Standalone Development

```bash
# Clone the repository
git clone https://github.com/Rarsus/verabot-commands.git
cd verabot-commands

# Install dependencies
npm install

# Run tests
npm test

# Lint code
npm run lint
```

## Usage

### Loading Commands

```javascript
const { registerCommands, getCommands } = require('verabot-commands');

// Load all commands
registerCommands();

// Get all commands
const allCommands = getCommands();

// Get command by name
const command = allCommands.get('ping');
```

### Adding a New Command

1. Create command file in appropriate category:
```javascript
// src/commands/misc/hello.js
module.exports = {
  name: 'hello',
  description: 'Say hello',
  category: 'misc',
  
  async execute(message, args) {
    await message.reply('Hello!');
  },

  async executeInteraction(interaction) {
    await interaction.reply('Hello!');
  },
};
```

2. Command is automatically loaded via registry system

3. Add tests in `tests/unit/commands/misc/test-hello.js`

## Development

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Code Style

```bash
# Lint code
npm run lint

# Auto-fix linting issues
npm run lint:fix
```

## Version History

- **v1.0.0** - Initial commands module extraction (Phase 2.5, Jan 21, 2026)

## Related Projects

- [VeraBot2.0](https://github.com/Rarsus/verabot2.0) - Main repository
- [verabot-core](https://github.com/Rarsus/verabot-core) - Bot engine
- [verabot-utils](https://github.com/Rarsus/verabot-utils) - Shared utilities
- [verabot-dashboard](https://github.com/Rarsus/verabot-dashboard) - Web dashboard

## Documentation

- [Submodule Setup Guide](https://github.com/Rarsus/verabot2.0/blob/main/SUBMODULE-SETUP-GUIDE.md)
- [Submodule-Aware Development](https://github.com/Rarsus/verabot2.0/blob/main/SUBMODULE-AWARE-DEVELOPMENT-STRATEGY.md)
- [Copilot Instructions](https://github.com/Rarsus/verabot2.0/blob/main/.github/copilot-instructions.md)

## Contributing

Follow the guidelines in the main repository's [CONTRIBUTING.md](https://github.com/Rarsus/verabot2.0/blob/main/CONTRIBUTING.md).

### Submodule Code Placement Rules

✅ **Commands MUST go here** - All Discord commands belong in this module  
✅ **Category organization** - Use existing category folders  
✅ **Tests co-located** - Put tests in same category in `tests/`  
✅ **Follow patterns** - Use existing commands as templates  

❌ **Services don't go here** - Use verabot-utils for shared services  
❌ **Middleware don't go here** - Use verabot-core for middleware  
❌ **Dashboard code doesn't go here** - Use verabot-dashboard  

## License

MIT License - See [LICENSE](./LICENSE) file for details

## Support

- GitHub Issues: [verabot2.0/issues](https://github.com/Rarsus/verabot2.0/issues)
- Discussions: [verabot2.0/discussions](https://github.com/Rarsus/verabot2.0/discussions)

---

**Status:** ✅ Phase 2.5 In Progress  
**Last Updated:** January 21, 2026  
**Maintainer:** @Rarsus
# Test PR for PHASE 3.1 workflow verification - 73 test suite
