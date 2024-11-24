
// components
import Header from './components/Header';
import Home from './components/Home/Home';
import { Box } from '@mui/material';


function App() {
  return (
    <div >

      <Box style={{marginTop:55}} k> 
        <Header/>
      </Box>
      
      <Home /> 
    </div>
  );
}

export default App;
