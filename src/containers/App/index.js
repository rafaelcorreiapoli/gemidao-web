import React from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Routes from '../../components/Routes';

const myTheme = getMuiTheme({
  palette: {
    // primary1Color: '#0A2E36',
    primary1Color: '#27ae60',
    secondary1Color: '#2ecc71',
    accent1Color: '#27ae60',
    // textColor: '#FFF',
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={myTheme}>
        <Provider store={this.props.store}>
          <Routes />
          {/* <div>
            <Login />
            <Users />
            <RaisedButton
              label="Exportar para CSV"
              secondary
              onClick={() => { console.log('hi'); }}
            />
          </div> */}
        </Provider>
      </MuiThemeProvider>
    );
  }
}
App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
