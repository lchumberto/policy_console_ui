import { action, observable } from 'mobx';

import { RotationDirection } from './logo';

class LogoStore {
  @observable public rotationDirection = RotationDirection.Clockwise;
  @observable public paused = false;

  @action public toggleRotationDirection = () => {
    this.rotationDirection = (
      this.rotationDirection === RotationDirection.Clockwise
        ? RotationDirection.Counterclockwise
        : RotationDirection.Clockwise
    );
  }

  @action public pauseRotation = () => {
    this.paused = !this.paused;
  }
}

export default LogoStore;
