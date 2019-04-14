const _ = require('lodash');
const { RichEmbed } = require('discord.js');

const {
  generateRandomNumber,
  sendMessageHelper,
} = require('../../util/util');

const generalMessage1  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Just a friendly reminder from the NeverFap Deluxe Bot to stay positive! Otherwise, I may have to kill you ^^. :smile:`);
const generalMessage2  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Empathy, love, kindness and gratitude are your friends. Treat yourself as you would others and beautiful things will follow. :dancer:`);
const generalMessage3  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your commitment to the process is the only thing that matters. Once you lose that commitment, you lose absolutely everything and that's how people find themselves back into a cycle of relapse. :information_desk_person:`);
const generalMessage4  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `The process truly is your best friend. It will always be there to assist you, even if you abuse it or neglect it, and you won't realise how special it was until you lost it. :hatching_chick:`);
const generalMessage5  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Wondering what the NeverFap Deluxe Bot can do for you? Type \`!commands\` into the channel and press enter to learn what functions I can perform. :keyboard:`);
const generalMessage6  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Meditation allows you to develop control over your emotions, and you are not effective unless if you have control over your emotions. Otherwise, you are effectively leaving your porn addiction to chance. :pensive:`);
const generalMessage7  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Wanting to learn more about the whole porn addiction recovery process? Please check out the NeverFap Deluxe website! https://neverfapdeluxe.com/ :rainbow:`);
const generalMessage8  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Have you been craving the taste of some additional mental health practices? Thankfully, there's a whole section of them at https://neverfapdeluxe.com/practices :watermelon:`);
const generalMessage9  = () => new RichEmbed().setTitle("#general advice").setDescription(
  `New to the whole porn recovery thing? Check out the NeverFap Deluxe 7 Day Kickstarter! https://neverfapdeluxe.com/seven-day-neverfap-deluxe-kickstarter :boom:`);
const generalMessage10 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Looking for a comprehensive guide on how to overcome porn addiction? Well, I wrote one! Check it out https://neverfapdeluxe.com/guide :earth_asia:`);
const generalMessage11 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Life only ever gets harder. So the more we can focus on preparing for the future, the easier it's going to be moving forward. :male_dancer:`);
const generalMessage12 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Porn is not a solution to your problems. It never has been and it never will be. :fearful:`);
const generalMessage13 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `It takes people five years on average to overcome porn addiction, not because it is a long process but because they spend a good four and a half of those years not committing. :disappointed:`);
const generalMessage14 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Tip: The porn recovery process takes approximately 90 days. Everytime you give up your commitment, you extend your recovery process by 90 days, so please don't forget that consistency really does matter! :slight_smile:`);
const generalMessage15 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Ultimately, you make your life as difficult or as easy as you want it. There are processes there for you to make it easy, just as there are processes for you to make it difficult. :station:`);
const generalMessage16 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Porn isn't the reason why you're an addict. You're an addict because you haven't developed control over your mind. Until you learn to develop that control via healthy coping mechanisms such as meditation, you're more-or-less leaving your recovery to chance. :squid:`);
const generalMessage17 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your mind will always believe and seek what it wants to. That is, unless if you learn to actively relax and calm it down. Make it your mission throughout the day to remain calm and collected. :innocent:`);
const generalMessage18 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Your brain doesn’t know what it wants. It only knows what it feels, and if you're always feeling nervous and anxious, then it will pursue those kinds of behaviours. That is why it's important to develop control over your mind, so you can teach your brain what it actually needs. :comet:`);
const generalMessage19 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `You can't force self-control, however you can make it very easy to be in-control by letting go and remaining calm. :smile:`);
const generalMessage20 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Don't focus on the days. Focus on the actions that are going to help you get through those days. They're the things that matter at the end of the day. :construction_worker:`);
const generalMessage21 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Relapse isn't about PMO. Relapse is anything you do that negatively impacts your mental health, whether it be choosing to neglect the process or choosing to neglect yourself. :heart:`);
const generalMessage22 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `When you neglect the process, you neglect yourself. You distrust the process, you lose. It's that simple. :bread:`);
const generalMessage23 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `The more time you spend doing something, the better you're going to get at it. Arnold Schwarzenegger didn't get ripped within a day. It takes months of practice to reach a point of fluency, but only if you commit each and every day. :lifter:`);
const generalMessage24 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Blame isn’t a constructive method of self-improvement. Processes on the other hand are. Focus your efforts on developing processes, as opposed to rationalisations which only serve to paralyze you. :date:`);
const generalMessage25 = () => new RichEmbed().setTitle("#general advice").setDescription(
  `Cravings don’t just happen out of nowhere. Cravings are the result of an uncalm mind. When your mind is uncalm, you lose focus, which results in losing balance, which inevitably results in relapse. :sweat:`);


const automatedGeneralMessages = async (client) => {
  const generalChannel = client.channels.get(process.env.GENERAL_CHANNEL_ID);
  const lastMessageID = _.get(generalChannel, 'lastMessageID');
  if (lastMessageID) {
    const lastMessage = await generalChannel.fetchMessage(lastMessageID);
    if (_.get(lastMessage, 'author.id') !== process.env.NEVERFAP_DELUXE_BOT_ID) {
      const randomNumber = generateRandomNumber(1, 25);
      
      switch(randomNumber) {
        case 1:  sendMessageHelper(generalChannel, generalMessage1(), 'automatedGeneralMessages'); break;
        case 2:  sendMessageHelper(generalChannel, generalMessage2(), 'automatedGeneralMessages'); break;
        case 3:  sendMessageHelper(generalChannel, generalMessage3(), 'automatedGeneralMessages'); break;
        case 4:  sendMessageHelper(generalChannel, generalMessage4(), 'automatedGeneralMessages'); break;
        case 5:  sendMessageHelper(generalChannel, generalMessage5(), 'automatedGeneralMessages'); break;
        case 6:  sendMessageHelper(generalChannel, generalMessage6(), 'automatedGeneralMessages'); break;
        case 7:  sendMessageHelper(generalChannel, generalMessage7(), 'automatedGeneralMessages'); break;
        case 8:  sendMessageHelper(generalChannel, generalMessage8(), 'automatedGeneralMessages'); break;
        case 9:  sendMessageHelper(generalChannel, generalMessage9(), 'automatedGeneralMessages'); break;
        case 10: sendMessageHelper(generalChannel, generalMessage10(), 'automatedGeneralMessages'); break;
        case 11: sendMessageHelper(generalChannel, generalMessage11(), 'automatedGeneralMessages'); break;
        case 12: sendMessageHelper(generalChannel, generalMessage12(), 'automatedGeneralMessages'); break;
        case 13: sendMessageHelper(generalChannel, generalMessage13(), 'automatedGeneralMessages'); break;
        case 14: sendMessageHelper(generalChannel, generalMessage14(), 'automatedGeneralMessages'); break;
        case 15: sendMessageHelper(generalChannel, generalMessage15(), 'automatedGeneralMessages'); break;
        case 16: sendMessageHelper(generalChannel, generalMessage16(), 'automatedGeneralMessages'); break;
        case 17: sendMessageHelper(generalChannel, generalMessage17(), 'automatedGeneralMessages'); break;
        case 18: sendMessageHelper(generalChannel, generalMessage18(), 'automatedGeneralMessages'); break;
        case 19: sendMessageHelper(generalChannel, generalMessage19(), 'automatedGeneralMessages'); break;
        case 20: sendMessageHelper(generalChannel, generalMessage20(), 'automatedGeneralMessages'); break;
        case 21: sendMessageHelper(generalChannel, generalMessage21(), 'automatedGeneralMessages'); break;
        case 22: sendMessageHelper(generalChannel, generalMessage22(), 'automatedGeneralMessages'); break;
        case 23: sendMessageHelper(generalChannel, generalMessage23(), 'automatedGeneralMessages'); break;
        case 24: sendMessageHelper(generalChannel, generalMessage24(), 'automatedGeneralMessages'); break;
        case 25: sendMessageHelper(generalChannel, generalMessage25(), 'automatedGeneralMessages'); break;
        default: throw new Error(`automatedGeneralMessages - generateRandomNumber - created an incorrect generator number - ${randomNumber}`);
      }
    }
  }
}


module.exports = automatedGeneralMessages;