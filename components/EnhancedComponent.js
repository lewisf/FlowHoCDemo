// @flow
import React from 'react';
import { withProps } from 'recompose';
import type { HOC } from 'recompose';

type RequiredProps = {|
  profileLoaded: boolean,
  settingsLoaded: boolean,
|}

type ComputedProps = {
  fullyLoaded: boolean,
}

type TotalProps = {
  ...RequiredProps,
  ...ComputedProps
}

class BaseComponent extends React.Component<void, TotalProps, void> {
  render() {
  }
}

const EnhancedComponent: HOC<RequiredProps> = withProps((props) => {
  return {
    fullyLoaded: props.profileLoaded && props.settingsLoaded
  };
})(BaseComponent);

export default EnhancedComponent;
