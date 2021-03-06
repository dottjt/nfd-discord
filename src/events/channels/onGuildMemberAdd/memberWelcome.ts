import { Client, ClientUser, Message, TextChannel, User, GuildMember, PartialGuildMember } from 'discord.js';

import { DBUser, NFDChannelType } from '../../../types';

import logger from '../../../util/logger';
import { getChannel } from '../../../util/util';

const welcomeMessageUser = (accountabilityChannel: TextChannel) => `Thank you for joining the NeverFap Deluxe Discord Channel!\n
Before participating it is mandatory that you read the NeverFap Deluxe website! The homepage and guide should explain 90% of what this server is about! https://neverfapdeluxe.com/\n
Next up is our <#${accountabilityChannel}> program which is most likely why you're here! Please enter \`!accountability\` into this direct chat to understand the rules of how it all works! :heart:\n
Lastly, feel free to send \`Julius Reade\` a private message to as he is the creator of this program, and is MORE THAN HAPPY to help you with your journey! :peach: :grapes: :cherries:\n
...aaaaaand that's about it! Have fun and enjoy your stay ^^.\n
In order to join this server, please type in \`!accept\` and press enter/send message!\n
`;

const welcomeMessageChannel = (member: GuildMember | PartialGuildMember, newNeverFapperChannel: TextChannel) =>
`Welcome to the server, <@${member}>! :confetti_ball::tada::confetti_ball:\n
Feel free to introduce yourself to everyone here in <#${newNeverFapperChannel}>, I promise we're all a super receptive and friendly bunch! :sweat_smile:\n
- Who you are?
- How long have you been an addict for?
- What are your main difficulties/triggers?
- How can we best help you?

Also please don't forget to visit the website! Because it's the first thing I'll ask you to do if you ask for help. https://neverfapdeluxe.com/
`;

// YO
// DUDE
// WELCOME TO NEVERFAP
// HERE WE NEVERFAP (HENCE THE TITLE)
// IF YOU DO
// WE KILL YOU
// Jk
// !accountability

// TODO A variety of different Welcome Messages for users.
// TODO Exposing users to

const memberWelcome = async (client: Client, member: GuildMember | PartialGuildMember) => {
  try {
    const newNeverFapperChannel: TextChannel = await getChannel(client, NFDChannelType.StartHere_NewNeverFappers);
    const accountabilityRulesChannel: TextChannel = await getChannel(client, NFDChannelType.Accountability_AccountabilityRules);
    const generalChatChannel: TextChannel = await getChannel(client, NFDChannelType.RecoveryChat_GeneralChat);
    // TODO Direct users to these channels in the thing.

    if (member) {
      await member.roles.remove(process.env.INITIATE_ROLE_ID as string);
      await member.roles.add(process.env.NEW_NEVERFAPPER_ID as string);

      const msg = await newNeverFapperChannel.send(welcomeMessageChannel(member, newNeverFapperChannel));
      logger.info(`Sent channel message: ${msg.id} - onGuildMemberAdd - welcome channel message`);
      // const msg2 = await member.send(welcomeMessageUser(accountabilityChannel));
      // logger.info(`Sent channel message: ${msg2.id} - onGuildMemberAdd - welcome user message`);

      // await knex('db_users').where('id', db_user.id).update({has_accepted: true});
      // await discordUser.send('thank you'); // TODO
      // logger.info(`${discordUser.user} just accepted the terms and conditions!`);
      // await juliusReade.send(`${discordUser.user} just accepted the terms and conditions!`);
      // TODO
    }
  } catch(error) {
    const juliusReade: ClientUser | null = client.user;
    // await juliusReade?.send(`send message - ${error} - onGuildMemberAdd`)
    logger.error(`send message - ${error} - onGuildMemberAdd`);
    throw new Error(`send message - ${error} - onGuildMemberAdd`);
  }
}

export default memberWelcome;
