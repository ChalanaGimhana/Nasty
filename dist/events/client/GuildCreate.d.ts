import { Event, Lavamusic } from '../../structures/index.js';
import { Guild } from 'discord.js';
export default class GuildCreate extends Event {
    constructor(client: Lavamusic, file: string);
    run(guild: Guild): Promise<any>;
}
