<div align="center">

# Brickord
A command framework for Discord.JS Bots
</div>

---

# Getting started
This will be a quick guide on how to setup your own Brickord bot in minutes.
I recommend using TypeScript, since it will give you hints and help you prevent bugs before even running the bot.
You might find it easier to use JavaScript when getting started tho.

## Installation
To use Brickord, you need to install `brickord.js` ontop of `discord.js` and `@discordjs/builders`
```bash
npm i discord.js @discordjs/builders brickord.js
```

## Setting up the bot
Setting up the bot is quite similar to how you would do in discord.js.
Create a file called `index.ts` and create a client object. Additionally, you need to specify the command prefix.
```js
import { Client } from 'brickord.js'

const client = new Client({
  intents: ['GUILDS', 'GUILD_MESSAGES'],
  prefix: '!'
})

client.login(TOKEN) // your token goes here
```
Replace `TOKEN` with the bot token that you got when [creating your bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot).

The bot will search for commands in the `./commands` directory and events in the `./events` directory.
Create those folders and provide the main file in your `package.json`
```json
{
  "name": "my-epok-bot",
  "main": "index.ts"
}
```

Your project should now look similar to this:
```
├── commands/
├── events/
├── node_modules/
├── index.ts
└── package.json
```

Now you can open the terminal and run your new bot!
```bash
ts-node index.ts
```
