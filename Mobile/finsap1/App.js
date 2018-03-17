import React from 'react';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import InnerApp from './components/InnerApp';

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

const App = () => (
  <ThemeProvider uiTheme={uiTheme}>
    <InnerApp />
  </ThemeProvider>
);

export default App;
