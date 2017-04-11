// @flow
import React from 'react';
import { withProps } from 'recompose';

type Props = {
  +fullyLoaded: boolean,
  +profileLoaded: boolean,
  +settingsLoaded: boolean,
}

class BaseComponent extends React.Component<*, Props, void> {
  render() {
    return (
      <div></div>
    )
  }
}

const EnhancedComponent = withProps((props) => ({
  ...props,
  fullyLoaded: props.profileLoaded && props.settingsLoaded,
}))(BaseComponent);

// Playground below
/*
<EnhancedComponent
  profileLoaded={true}
  settingsLoaded={3}
 />*/
