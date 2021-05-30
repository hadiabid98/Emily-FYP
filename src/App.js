import './Stylesheet.css'

// import Verification from './verify'
// import Profile from "./Components/UserProfile"
// import Signup from "./Components/Sign-up"
// import Verify from "./components/Verification"
// import Report from "./Components/Reports"
// import Settings from "./Components/Settings"
// import Header from './Components/Header'
// import Dashboard from './Components/Dashboard'
// import EOS from './Components/ReportTemplate'
// import Login from './components/Login';
import Main from './components/main'

import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors'
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
  typography: {
    fontFamily: 'Corporate Logo Rounded',
  }
});

//For changing the properties
emily.props = {
  MuiButton: {
    disableElevation: true,
  }
};

// For changing the CSS of material UI
emily.overrides = {
  MuiPaper: {
    root: {
      backgroundColor: '#2b3038',
      fontSize: '12px',
    }
  },



  MuiAutocomplete: {
    listbox: {
      backgroundColor: '#2b3038',
      fontSize: '12px'
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: '14px'
    },
  },
  MuiInput: {
    underline: {
      '&::before': {
        borderColor: "#343f4c",
      },
    },
  },
  MuiButton: {
    root: {
      borderRadius: '7cm',
      outline: 0,
      margin: '10px',
      width: '120px',
      height: '30px',
      fontSize: '12px',
    },
    contained: {
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#343f4c'
      }
    },
  },
  MuiFormHelperText: {
    root: {
      fontSize: '8px',
    },
  },
  MuiTypography: {
    h1: {
      fontSize: '2.87rem',
    },
  }

};

function App() {
  return (
    <ThemeProvider theme={emily}>
      <div className='div'>
        <Main />
      </div>
    </ThemeProvider>
  );
}
export default App;