import { useStaticRendering } from 'mobx-react';
import ChatService from '../service/ChatService';
import AuthStore, { IAuth, initialAuth, IToken } from './AuthStore';
import ChatStore from './ChatStore';
import MatchStore, { initialMatch } from './MatchStore';
import PageStore, { initialPage } from './PageStore';
import PostStore, { initialPost } from './PostStore';

const isServer = typeof window === 'undefined';

useStaticRendering(isServer);

export interface IEnvironments {
  [key: string]: string;
}

let store: RootStore | null = null;

export class RootStore {
  authStore: AuthStore;
  pageStore: PageStore;
  postStore: PostStore;
  chatStore: ChatStore;
  matchStore: MatchStore;

  constructor(initialData?: any) {
    this.authStore = new AuthStore(this, initialData ? initialData.authStore : null);
    this.pageStore = new PageStore(this, initialData ? initialData.pageStore : null);
    this.postStore = new PostStore(this, initialData ? initialData.postStore : null);
    this.chatStore = new ChatStore(new ChatService(), this);
    this.matchStore = new MatchStore(this, initialData ? initialData.matchStore : null);
  }
}

export default function initializeStore() {
  if (isServer) {
    return new RootStore();
  }
  if (store === null) {
    store = new RootStore();
  }
  return store;
}
