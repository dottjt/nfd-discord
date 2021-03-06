export enum NFDChannelType {
  StartHere_Welcome = 'StartHere_Welcome',
  StartHere_ServerGuide = 'StartHere_ServerGuide',
  StartHere_WebsiteGuide = 'StartHere_WebsiteGuide',
  StartHere_Announcements = 'StartHere_Announcements',
  StartHere_NeverFapDeluxePodcast = 'StartHere_NeverFapDeluxePodcast',
  StartHere_HelpfulNeverFappers = 'StartHere_HelpfulNeverFappers',
  StartHere_NewNeverFappers = 'StartHere_NewNeverFappers',

  RecoveryChat_GeneralChat = 'RecoveryChat_GeneralChat',
  RecoveryChat_LetsAskJuliusAQuestion = 'RecoveryChat_LetsAskJuliusAQuestion',
  RecoveryChat_MentalHealthChat = 'RecoveryChat_MentalHealthChat',
  RecoveryChat_PhilosophyChat = 'RecoveryChat_PhilosophyChat',
  RecoveryChat_RecoveryChat = 'RecoveryChat_RecoveryChat',
  RecoveryChat_MemeChat = 'RecoveryChat_MemeChat',
  RecoveryChat_MusicChat = 'RecoveryChat_MusicChat',
  RecoveryChat_RantChat = 'RecoveryChat_RantChat',
  RecoveryChat_ArtChat = 'RecoveryChat_ArtChat',

  Accountability_Accountability = 'Accountability_Accountability',
  Accountability_AccountabilityRules = 'Accountability_AccountabilityRules',
  Accountability_FindAnAccountabilityPartner = 'Accountability_FindAnAccountabilityPartner',
  Accountability_VideoAccountability = 'Accountability_VideoAccountability',
  Accountability_MeditationJournal = 'Accountability_MeditationJournal',
  Accountability_ExerciseJournal = 'Accountability_ExerciseJournal',
  Accountability_HealthyEatingJournal = 'Accountability_HealthyEatingJournal',
  Accountability_ReadingJournal = 'Accountability_ReadingJournal',
  Accountability_RelapseJournal = 'Accountability_RelapseJournal',
  Accountability_GratitudeJournal = 'Accountability_GratitudeJournal',
  Accountability_DailyMilestones = 'Accountability_DailyMilestones',

  Administration_ServerSuggestions = 'Administration_ServerSuggestions',
  Administration_HelpfulNeverFappersUnite = 'Administration_HelpfulNeverFappersUnite',
  Administration_BotCommands = 'Administration_BotCommands',
}

export interface DBUser {
  id: string;
  email: string;
  username: string;
  created_at: string;
  updated_at: string;
  discord_id: string;
  sent36HourMessage: boolean;
  sent72HourMessage: boolean;
  sentYesterdayPostMessage: boolean;
  has_accepted: boolean;
  is_team_leader: boolean;
  neverfap_team_id: string;
};

export interface AccountabilityMessage {
  id: string;
  username: string;
  content: string;
  db_user: DBUser;
  created_at: string;
  message_id: string;
  db_users_id: string;
  updated_at: string;
}

export interface AccountabilityReact {
  id: string;
  username: string;
  emoji_id: string;
  emoji_name: string;
  created_at: string;
  db_user: DBUser;
  db_user_reacted_to: DBUser;
  accountability_message: AccountabilityMessage;
  db_users_id: string;
  db_users_id_reacted_to: string;
  accountability_messages_id: string;
  updated_at: string;
}

export interface RedditAccountabilitySubmission {
  id: string;
  submission_id: string;
  submission_date: string;
  created_at: string;
  updated_at: string;
}

export interface RedditAccountabilityComment {
  id: string;
  comment_id: string;
  username: string;
  content: string;
  db_users_id: string;
  parent_submission_id: string;
}

export interface Journal {
  id: string;
  db_users_id: string;
  message_id: string;
  journal_type: string;
  content: string;
  is_valid: boolean;
  created_at: string;
  updated_at: string;
}
