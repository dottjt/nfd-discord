import { Client, Channel, TextChannel } from 'discord.js';
import { NFDChannelType } from '../types';

export const generateRandomNumber = (min: number, max: number): number => {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(Math.random() * (newMax - newMin + 1)) + newMin;
}

export const getNFDBotId = (): string => process.env.NEVERFAP_DELUXE_BOT_ID as string;

export const generateDelayValues = (): {
  onIntervalTenMinutesDelay: number;
  onIntervalOneHourDelay: number;
  onIntervalFourHoursDelay: number;
  onIntervalFiveHoursDelay: number;
  onIntervalDayHalfDelay: number;
} => {
  if (process.env.NODE_ENV !== 'production') {
    return {
      onIntervalTenMinutesDelay: 1000 * 2, // every 2 seconds
      onIntervalOneHourDelay: 1000 * 3, // every 3 seconds
      onIntervalFourHoursDelay: 1000 * 5, // every 5 seconds
      onIntervalFiveHoursDelay: 1000 * 6, // every 6 seconds
      onIntervalDayHalfDelay: 1000 * 10, // every 10 seconds
      // onIntervalDayDelay: 1000 * 10, // every 10 seconds
      // onIntervalWeekDelay: 1000 * 10, // every 10 seconds
    }
  }
  return {
    onIntervalTenMinutesDelay: 1000 * 60 * 10 * 1, // every ten minutes
    onIntervalOneHourDelay: 1000 * 60 * 60 * 1, // every one hour
    onIntervalFourHoursDelay: 1000 * 60 * 60 * 4, // every four hours
    onIntervalFiveHoursDelay: 1000 * 60 * 60 * 5, // every five hours
    onIntervalDayHalfDelay: 1000 * 60 * 60 * 12, // every 12 hours
    // onIntervalDayDelay: 1000 * 60 * 60 * 24, // every 24 hours
    // onIntervalWeekDelay: 1000 * 60 * 60 * 24 * 7, // every week
  }
}

export const isAccountabilityMessage = (content: string): boolean => content.includes("/") || content.includes("20") || content.includes("21") || content.includes("#accountability");

export const getChannel = async (client: Client, channelType: NFDChannelType): Promise<TextChannel> => {
  switch(channelType) {
    case NFDChannelType.StartHere_Welcome: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_WELCOME as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_ServerGuide: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_SERVERGUIDE as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_WebsiteGuide: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_WEBSITEGUIDE as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_HelpfulNeverFappers: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_HELPFULNEVERFAPPERS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.StartHere_Announcements: {
      const channel: Channel = await client.channels.fetch(process.env.STARTHERE_ANNOUNCEMENTS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_DailyMilestones: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_DAILYMILESTONES as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_AccountabilityRules: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_ACCOUNTABILITYRULES as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_Accountability: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_ACCOUNTABILITY as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_MeditationJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_MEDITATIONJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_ExerciseJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_EXERCISEJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Accountability_GratitudeJournal: {
      const channel: Channel = await client.channels.fetch(process.env.ACCOUNTABILITY_GRATITUDEJOURNAL as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_NewNeverFappers: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_NEWNEVERFAPPERS as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_LetsAskJuliusAQuestion: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_LETSASKJULIUSAQUESTION as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_ArtChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_ARTCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_RecoveryChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_RECOVERYCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_GeneralChat: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_GENERALCHAT as string);
      return channel as TextChannel;
    }
    case NFDChannelType.RecoveryChat_NeverFapDeluxePodcast: {
      const channel: Channel = await client.channels.fetch(process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST as string);
      return channel as TextChannel;
    }
    case NFDChannelType.Administration_HelpfulNeverFappersUnite: {
      const channel: Channel = await client.channels.fetch(process.env.ADMINISTRATION_HELPFULNEVERFAPPERSUNITE as string);
      return channel as TextChannel;
    }
    default: throw new Error(`Incorrect channel type provided: ${channelType}`);
  }
}

export const getChannelId = (channelType: NFDChannelType): string => {
  switch(channelType) {
    case NFDChannelType.StartHere_Welcome: {
      return process.env.STARTHERE_WELCOME as string;
    }
    case NFDChannelType.StartHere_ServerGuide: {
      return process.env.STARTHERE_SERVERGUIDE as string;
    }
    case NFDChannelType.StartHere_WebsiteGuide: {
      return process.env.STARTHERE_WEBSITEGUIDE as string;
    }
    case NFDChannelType.StartHere_HelpfulNeverFappers: {
      return process.env.STARTHERE_HELPFULNEVERFAPPERS as string;
    }
    case NFDChannelType.StartHere_Announcements: {
      return process.env.STARTHERE_ANNOUNCEMENTS as string;
    }
    case NFDChannelType.Accountability_DailyMilestones: {
      return process.env.ACCOUNTABILITY_DAILYMILESTONES as string;
    }
    case NFDChannelType.Accountability_AccountabilityRules: {
      return process.env.ACCOUNTABILITY_ACCOUNTABILITYRULES as string;
    }
    case NFDChannelType.Accountability_Accountability: {
      return process.env.ACCOUNTABILITY_ACCOUNTABILITY as string;
    }
    case NFDChannelType.Accountability_MeditationJournal: {
      return process.env.ACCOUNTABILITY_MEDITATIONJOURNAL as string;
    }
    case NFDChannelType.Accountability_ExerciseJournal: {
      return process.env.ACCOUNTABILITY_EXERCISEJOURNAL as string;
    }
    case NFDChannelType.Accountability_GratitudeJournal: {
      return process.env.ACCOUNTABILITY_GRATITUDEJOURNAL as string;
    }
    case NFDChannelType.RecoveryChat_NewNeverFappers: {
      return process.env.RECOVERYCHAT_NEWNEVERFAPPERS as string;
    }
    case NFDChannelType.RecoveryChat_LetsAskJuliusAQuestion: {
      return process.env.RECOVERYCHAT_LETSASKJULIUSAQUESTION as string;
    }
    case NFDChannelType.RecoveryChat_ArtChat: {
      return process.env.RECOVERYCHAT_ARTCHAT as string;
    }
    case NFDChannelType.RecoveryChat_RecoveryChat: {
      return process.env.RECOVERYCHAT_RECOVERYCHAT as string;
    }
    case NFDChannelType.RecoveryChat_GeneralChat: {
      return process.env.RECOVERYCHAT_GENERALCHAT as string;
    }
    case NFDChannelType.RecoveryChat_NeverFapDeluxePodcast: {
      return process.env.RECOVERYCHAT_NEVERFAPDELUXEPODCAST as string;
    }
    case NFDChannelType.Administration_HelpfulNeverFappersUnite: {
      return process.env.ADMINISTRATION_HELPFULNEVERFAPPERSUNITE as string;
    }
    default: throw new Error(`Incorrect channel type provided: ${channelType}`);
  }
}