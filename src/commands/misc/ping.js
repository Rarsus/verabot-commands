const Command = require('verabot-core/core/CommandBase');
const buildCommandOptions = require('verabot-core/core/CommandOptions');
const { sendSuccess } = require('verabot-core/helpers/response-helpers');

const { data, options } = buildCommandOptions('ping', 'Simple ping command', []);

class PingCommand extends Command {
  constructor() {
    super({
      name: 'ping',
      description: 'Simple ping command',
      data,
      options,
      permissions: {
        minTier: 0, // Guest tier (everyone can use)
        visible: true, // Visible to everyone
      },
    });
  }

  async execute(message) {
    if (message.channel && typeof message.channel.send === 'function') {
      await message.channel.send('Pong!');
    } else if (message.reply) {
      await message.reply('Pong!');
    }
  }

  async executeInteraction(interaction) {
    const latency = interaction.client.ws.ping;
    await sendSuccess(interaction, `Pong! (${latency}ms)`);
  }
}

module.exports = new PingCommand().register();
