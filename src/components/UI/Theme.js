import { createMuiTheme } from './node_modules/@material-ui/core/styles';
import purple from './node_modules/@material-ui/core/colors/purple';
import green from './node_modules/@material-ui/core/colors/green';

export default  createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});