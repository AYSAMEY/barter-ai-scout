import { User, Asset, Need, Match, Message } from '../types';

const KEYS = {
  USERS: 'barter_users',
  ASSETS: 'barter_assets',
  NEEDS: 'barter_needs',
  MATCHES: 'barter_matches',
  MESSAGES: 'barter_messages',
  CURRENT_USER: 'barter_current_user',
};

const get = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
};

const set = <T>(key: string, data: T): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const MockDB = {
  getUsers: () => get<User[]>(KEYS.USERS, []),
  saveUser: (user: User) => {
    const users = MockDB.getUsers();
    set(KEYS.USERS, [...users, user]);
  },
  
  getAssets: () => get<Asset[]>(KEYS.ASSETS, []),
  saveAsset: (asset: Asset) => {
    const assets = MockDB.getAssets();
    set(KEYS.ASSETS, [...assets, asset]);
  },
  
  getNeeds: () => get<Need[]>(KEYS.NEEDS, []),
  saveNeed: (need: Need) => {
    const needs = MockDB.getNeeds();
    set(KEYS.NEEDS, [...needs, need]);
  },
  
  getMatches: () => get<Match[]>(KEYS.MATCHES, []),
  saveMatch: (match: Match) => {
    const matches = MockDB.getMatches();
    set(KEYS.MATCHES, [...matches, match]);
  },
  
  getMessages: (matchId: string) => {
    const messages = get<Message[]>(KEYS.MESSAGES, []);
    return messages.filter(m => m.matchId === matchId);
  },
  saveMessage: (message: Message) => {
    const messages = get<Message[]>(KEYS.MESSAGES, []);
    set(KEYS.MESSAGES, [...messages, message]);
  },
  
  getCurrentUser: () => get<User | null>(KEYS.CURRENT_USER, null),
  setCurrentUser: (user: User | null) => set(KEYS.CURRENT_USER, user),
};