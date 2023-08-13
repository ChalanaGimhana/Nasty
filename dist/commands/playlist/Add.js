import { ApplicationCommandOptionType } from "discord.js";
import { Command } from "../../structures/index.js";
export default class Add extends Command {
    constructor(client) {
        super(client, {
            name: "add",
            description: {
                content: "Adds a song to the playlist",
                examples: ["add <playlist> <song>"],
                usage: "add <playlist> <song>"
            },
            category: "playlist",
            aliases: ["add"],
            cooldown: 3,
            args: true,
            player: {
                voice: false,
                dj: false,
                active: false,
                djPerm: null
            },
            permissions: {
                dev: false,
                client: ["SendMessages", "ViewChannel", "EmbedLinks"],
                user: []
            },
            slashCommand: true,
            options: [
                {
                    name: "playlist",
                    description: "The playlist you want to add",
                    type: ApplicationCommandOptionType.String,
                    required: true
                },
                {
                    name: "song",
                    description: "The song you want to add",
                    type: ApplicationCommandOptionType.String,
                    required: true
                }
            ]
        });
    }
    async run(client, ctx, args) {
        const playlist = args[0];
        const song = args[1];
        if (!playlist)
            return ctx.sendMessage({
                embeds: [{
                        description: "Please provide a playlist",
                        color: client.color.red
                    }]
            });
        if (!song)
            return ctx.sendMessage({
                embeds: [{
                        description: "Please provide a song",
                        color: client.color.red
                    }]
            });
        const playlistData = await client.prisma.playlist.findFirst({
            where: {
                name: playlist,
                userId: ctx.author.id
            }
        });
        if (!playlistData)
            return ctx.sendMessage({
                embeds: [{
                        description: "That playlist doesn't exist",
                        color: client.color.red
                    }]
            });
        const res = await client.queue.search(song);
        if (!res)
            return ctx.sendMessage({
                embeds: [{
                        description: "No songs found",
                        color: client.color.red
                    }]
            });
        const trackStrings = res.tracks.map(track => JSON.stringify(track));
        await client.prisma.playlist.update({
            where: {
                id: playlistData.id
            },
            data: {
                songs: [...playlistData.songs, ...trackStrings]
            },
        });
        ctx.sendMessage({
            embeds: [{
                    description: `Added ${res.tracks.length} to ${playlistData.name}`,
                    color: client.color.green
                }]
        });
    }
}
//# sourceMappingURL=Add.js.map