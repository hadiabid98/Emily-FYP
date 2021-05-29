import './Stylesheet.css'
// import Verification from './verify'
// import Profile from "./components/UserProfile"
// import Signup from "./components/Sign-up"
// import Verify from "./components/Verification"
// import Report from "./components/Reports"
// import Settings from "./components/Settings"
// import Header from './components/Header'
// import Dashboard from './components/Dashboard'
// import EOS from './components/ReportTemplate'
import Login from './components/Login';
import {ThemeProvider, createMuiTheme} from '@material-ui/core';
import {grey} from '@material-ui/core/colors'
const emily = createMuiTheme({
  palette: {
    primary: {
        main: '#546e7a'
    },
    text: {
        primary: '#fff',
        secondary: grey,
        disabled: "#b3becb",
        hint: '#2b3038',
    },
    divider: '#fff',
  },
  typography:{
      fontFamily: 'Corporate Logo Rounded',
  }
});

//For changing the properties
emily.props={
  MuiButton:{
    disableElevation: true,
  }
};

// For changing the CSS of material UI
emily.overrides={
  MuiAutocomplete:{
    listbox:{
      backgroundColor: '#2b3038',
      fontSize: '12px'
    }
  },
  MuiInputLabel:{
    root:{
      fontSize: '14px'
    },
  },
  MuiInput:{
    underline: {
      '&::before' : {
        borderColor: "#343f4c",  
      },
    },
  },
  MuiButton:{
    root:{
      borderRadius: '7cm',
      outline: 0,
      margin: '10px',
      width: '120px',
      height: '30px',
      fontSize: '12px',
    },
    contained: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color:'#fff',
      '&:hover': {
        backgroundColor: '#343f4c'
      }
    },
  },
  MuiFormHelperText:{
    root: {
      fontSize: '8px',
    },
  },
MuiTypography:{
  h1: {
    fontSize: '2.87rem',
  },
}

};

function App() {
  return (
    <ThemeProvider theme = {emily}>
    <div className='div'>
      <Login/>
    </div>
    </ThemeProvider>
  );
}

export default App;