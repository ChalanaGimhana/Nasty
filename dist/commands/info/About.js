import { Command } from '../../structures/index.js';
import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
export default class About extends Command {
    constructor(client) {
        super(client, {
            name: 'about',
            description: {
                content: 'Shows information about the bot',
                examples: ['about'],
                usage: 'about',
            },
            category: 'info',
            aliases: ['ab'],
            cooldown: 3,
            args: false,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null,
            },
            permissions: {
                dev: false,
                client: ['SendMessages', 'ViewChannel', 'EmbedLinks'],
                user: [],
            },
            slashCommand: true,
            options: [],
        });
    }
    async run(client, ctx, args) {
        const row = new ActionRowBuilder().addComponents(new ButtonBuilder()
            .setLabel('Invite Nasty')
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=1066741689085075557&permissions=18123704290112&scope=bot`), new ButtonBuilder().setLabel('Support Server').setStyle(ButtonStyle.Link).setURL('https://discord.gg/sTyrpzrh'));
        const embed = this.client
            .embed()
            .setAuthor({
            name: 'Nasty',
            iconURL: 'https://cdn.discordapp.com/attachments/994900710539931668/1088330495256956989/Untitled-2.jpg',
        })
            .setThumbnail('https://cdn.discordapp.com/attachments/994900710539931668/1088330495256956989/Untitled-2.jpg')
            .setColor(this.client.color.main)
            .addFields([
            {
                name: 'Creator',
                value: '[chAlanA#1010](https://github.com/)',
                inline: true,
            },
            {
                name: 'Repository',
                value: '[Here](https://github.com/)',
                inline: true,
            },
            {
                name: 'Support',
                value: '[Here](https://discord.gg/sTyrpzrh)',
                inline: true,
            },
            {
                name: '\u200b',
                value: `Simple Music Bot!`,
                inline: true,
            },
        ]);
        return await ctx.sendMessage({
            content: '',
            embeds: [embed],
            components: [row],
        });
    }
}
/**
 * Project: lavamusic
 * Author: Blacky
 * Company: Coders
 * Copyright (c) 2023. All rights reserved.
 * This code is the property of Coder and may not be reproduced or
 * modified without permission. For more information, contact us at
 * https://discord.gg/ns8CTk9J3e
 */
//# sourceMappingURL=About.js.map