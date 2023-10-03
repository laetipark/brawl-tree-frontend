import { createContext } from 'react';

type User = {
  id: string;
  user: {
    USER_ID: string;
    USER_NM: string;
    USER_PRFL: string;
    USER_LST_BT: Date;
    USER_LST_CK: Date;
    USER_CR: string;
    USER_CR_NM: string;
  };
  setUser: (user: {
    USER_ID: string;
    USER_NM: string;
    USER_PRFL: string;
    USER_LST_BT: Date;
    USER_LST_CK: Date;
    USER_CR: string;
    USER_CR_NM: string;
  }) => void;
  setRetryCount: (retryCount: number) => void;
};

export default createContext<User | null>(null);