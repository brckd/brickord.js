import { CommandInteraction } from "discord.js";
import { EventData, ChatCommand } from "..";
declare const _default: EventData<"interactionCreate">;
export default _default;
export declare function sendDefaultMessage(func: CommandInteraction['reply'], object: Object, command: ChatCommand): (options: Parameters<CommandInteraction['reply']>[0]) => Promise<void>;
