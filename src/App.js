import React, { Component } from 'react';
import logo from './logo.svg';
import { Div, Img, H2 } from 'glamorous'
import { css } from 'glamor'
import 'react-dates/lib/css/_datepicker.css';

// import { DATA } from './mockData'
import DataGrid from './containers/DataGrid';


const logoSpin = css.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const styles = {
  root: {
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#222',
    color: '#fff',
    flex: '0 0 auto',
    height: '150px',
    padding: '20px',
  },
  logo: {
    animation: `${logoSpin} infinite 20s linear`,
    height: '80px',
  },
  table: {
    display: 'flex',
    flex: '1 0 auto',
  },

}

class App extends Component {
  render() {
    
    // console.log("DATA", DATA);

    return (
      <Div css={ styles.root } className="App">
        <Div css={ styles.header } className="App-header">
          <Img css={ styles.logo } src={logo} className="App-logo" alt="logo" />
          <H2>Project Dashboard</H2>
        </Div>

        <DataGrid />

      </Div>
    );
  }
}

export default App;
