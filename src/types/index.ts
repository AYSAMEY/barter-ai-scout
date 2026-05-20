export type User = {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  password?: string;
};

export type AssetType = 'skill' | 'item';

export type Asset = {
  id: string;
  userId: string;
  type: AssetType;
  name: string;
  description: string;
  category: string;
  image?: string;
};

export type Need = {
  id: string;
  userId: string;
  category: string;
  description: string;
};

export type MatchStatus = 'pending' | 'active' | 'completed' | 'cancelled';

export type Match = {
  id: string;
  userIds: string[];
  status: MatchStatus;
  chain: {
    fromUserId: string;
    toUserId: string;
    assetId: string;
    assetName: string;
  }[];
  createdAt: string;
};

export type Message = {
  id: string;
  matchId: string;
  senderId: string;
  text: string;
  timestamp: string;
};