import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import CardSection from './CardSection';
import contents from './content/index';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <CardSection content={contents} />
      </MuiThemeProvider>
    );
  }
}

export default App;
