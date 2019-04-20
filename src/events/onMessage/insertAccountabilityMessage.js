const knex = require('../../db/knex');
const uuidv4 = require('uuid/v4');

const automatedCommitmentTallyMessages = require('./automatedCommitmentTallyMessages');
// const automatedUpvotePost = require('./automatedUpvotePost');

const insertAccountabilityMessage = async (client, logger, db_user, discordUser, message, twitterClient, redditClient, juliusReade) => {
  try {
    if (db_user.sent36HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent36HourMessage: false});
    }
    if (db_user.sent72HourMessage) {
      await knex('db_users').where('id', db_user.id).update({sent72HourMessage: false});
    }
    if (db_user.sentYesterdayPostMessage) {
      await knex('db_users').where('id', db_user.id).update({sentYesterdayPostMessage: false});
    }
    
    const primary_id = uuidv4();
    const accountabilityObject = {
      id: primary_id,
      message_id: message.id,
      db_users_id: db_user.id,
      content: message.content,
      username: discordUser.username,
    };

    await knex('accountability_messages').returning('content').insert(accountabilityObject);
    logger.info(`accountabilityMessage added to database - ${discordUser.username}`);
    // await juliusReade.send(`accountabilityMessage added to database - ${discordUser.username}`);

    automatedCommitmentTallyMessages(client, logger, db_user, discordUser, juliusReade);
    // automatedUpvotePost

    // TODO: On key milestones of people posting, post in the other channels!


    // TODO: A function which:
    // twitterClient, redditClient
    // - Check total messages of the user.
    // - If total messages is a certain number, create a post. 
    // - Send update on my personal Twitter!
    // - Create Reddit Post All the stuff there.
  } catch(error) {
    await juliusReade.send(`accountabilityMessage failed to add to database - ${discordUser.username} - ${error}`);
    logger.error(`insertAccountabilityMessage - ${error}`);
    throw new Error(`insertAccountabilityMessage - ${error}`);
  }
}

module.exports = insertAccountabilityMessage;