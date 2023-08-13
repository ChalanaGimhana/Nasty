import { Event } from '../../structures/index.js';
import { EmbedBuilder } from 'discord.js';
export default class GuildCreate extends Event {
    constructor(client, file) {
        super(client, file, {
            name: 'guildCreate',
        });
    }
    async run(guild) {
        const owner = await guild.fetchOwner();
        const embed = new EmbedBuilder()
            .setColor(this.client.config.color.green)
            .setAuthor({ name: guild.name, iconURL: guild.iconURL({ extension: "jpeg" }) })
            .setDescription(`**${guild.name}** has been added to my guilds!`)
            .setThumbnail(guild.iconURL({ extension: "jpeg" }))
            .addFields({ name: "Owner", value: owner.user.tag, inline: true }, { name: "Members", value: guild.memberCount.toString(), inline: true }, { name: "Created At", value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:F>`, inline: true }, { name: "Joined At", value: `<t:${Math.floor(guild.joinedTimestamp / 1000)}:F>`, inline: true }, { name: "ID", value: guild.id, inline: true })
            .setTimestamp();
        const channel = await this.client.channels.fetch(this.client.config.logChannelId);
        if (!channel)
            return;
        return channel.send({ embeds: [embed] });
    }
}
//# sourceMappingURL=GuildCreate.js.map