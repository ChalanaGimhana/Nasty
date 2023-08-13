import { Command, Lavamusic, Context } from '../../structures/index.js';

export default class Reset extends Command {
  constructor(client: Lavamusic) {
    super(client, {
      name: 'reset',
      description: {
        content: 'Resets the active filters',
        examples: ['reset'],
        usage: 'reset',
      },
      category: 'filters',
      aliases: ['reset'],
      cooldown: 3,
      args: false,
      player: {
        voice: false,
        dj: true,
        active: false,
        djPerm: null,
      },
      permissions: {
        dev: false,
        client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
        user: ['ManageGuild'],
      },
      slashCommand: true,
      options: [],
    });
  }
  public async run(client: Lavamusic, ctx: Context, args: string[]): Promise<void> {
    const player = client.queue.get(ctx.guild.id);

    player.player.clearFilters();
    player.filters = [];
    return ctx.sendMessage({
      embeds: [
        {
          description: 'Filters have been reset',
          color: client.color.main,
        },
      ],
    });
  }
}
