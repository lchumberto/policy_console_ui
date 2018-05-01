import LogoStore from './common/logo/logo_store';

class RootStore {
  public logoStore: LogoStore = new LogoStore();
}

const rootStore = new RootStore();

export default rootStore;
