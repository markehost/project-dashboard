import React, { Component } from 'react';
import logo from './logo.svg';
import { Div, Img, H2, Button } from 'glamorous'
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
  buttons: {
    cursor: 'pointer',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: '1rem',
  },
  button: {
    backgroundColor: '#6AB6F9',
    border: 'none',
    borderRadiu: '0',
    color: '#fff',
    fontSize: '1.3rem',
    padding: '0.5rem 1rem',
    width: '25%',
  },
  // 'button:hover': {
  //   backgroundColor: 'red',
  // },

}

class App extends Component {
  render() {
    
    return (
      <Div css={ styles.root } className="App">
        <Div css={ styles.header } className="App-header">
          <Img css={ styles.logo } src={logo} className="App-logo" alt="logo" />
          <H2>Project Dashboard</H2>
        </Div>

        <DataGrid />

        <Div css={ styles.buttons }>
          <Button css={ styles.button } >Add New Record</Button>
          <Button css={ styles.button } >Export to Excel</Button>
        </Div>


      </Div>
    );
  }
}

export default App;
