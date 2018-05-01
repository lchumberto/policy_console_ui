import * as React from 'react';

import { inject } from 'mobx-react';

import styled from 'styled-components';
import styledTs from 'styled-components-ts';

import { spin } from '../../utils/style';

export enum RotationDirection {
  Clockwise = 'normal',
  Counterclockwise = 'reverse',
}

interface ILogoProps {
  rotationDirection?: RotationDirection;
  paused?: boolean;
  onPrimaryClick?(): void;
  onSecondaryClick?(): void;
}

interface IImageProps {
  onClick?(event: React.MouseEvent<HTMLImageElement>): void;
  onContextMenu?(event: React.MouseEvent<HTMLImageElement>): void;
}

const withHandleClick = function withHandleClickFunction<T extends IImageProps>(
  Image: React.ComponentType<T>,
) {
  return (
    class extends React.Component<T & ILogoProps> {
      public render() {
        return <Image
          {...this.props}
          onClick={this.handleClick}
          onContextMenu={this.handleContextMenu}
        />;
      }

      private handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
        const { onPrimaryClick } = this.props;
        if (onPrimaryClick) {
          onPrimaryClick();
        }
      }

      private handleContextMenu = (
        event: React.MouseEvent<HTMLImageElement>,
      ) => {
        event.preventDefault();
        const { onSecondaryClick } = this.props;
        if (onSecondaryClick) {
          onSecondaryClick();
        }
      }
    }
  );
};

const Logo = inject(
  ({
    logoStore: {
      paused,
      pauseRotation,
      rotationDirection,
      toggleRotationDirection,
    },
  }) => ({
    paused,
    rotationDirection,

    onPrimaryClick: toggleRotationDirection,
    onSecondaryClick: pauseRotation,
  }),
)(withHandleClick(
  styledTs<ILogoProps>(styled.img)`
    animation: ${spin} infinite 20s linear;
    animation-direction: ${
      props => props.rotationDirection || RotationDirection.Clockwise
    };
    animation-play-state: ${props => props.paused ? 'paused' : 'running'}
    height: 80px;
  `,
));

export default Logo;
