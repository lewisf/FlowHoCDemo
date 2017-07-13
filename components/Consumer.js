// @flow
import EnhancedComponent from './EnhancedComponent';

const a = (
  <div>
    <EnhancedComponent settingsLoaded={true} />  // Error: missing required prop
    <EnhancedComponent profileLoaded={true} />   // Error: missing required prop
    <EnhancedComponent settingsLoaded={true} profileLoaded={true} />
    <EnhancedComponent settingsLoaded={true} profileLoaded={true} fullyLoaded={true} />  // Error: passing in computed prop
  </div>
);