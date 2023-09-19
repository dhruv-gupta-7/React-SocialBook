import Sidebar from "./Components/Sidebar";
import Rightbar from "./Components/Rightbar";
import { Box, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import AddPosts from "./Components/AddPosts";
import './App.css'

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box id='app' bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        
        <Box
          display="flex"
          flexDirection="column"
          margin={0}
          padding={0}
          p={2}
          sx={{marginTop: 'auto'}}
        >
          <Sidebar setMode={setMode} mode={mode} />
          <Box id="addPosts" sx={{ margin: 'auto', marginBottom: '-15px', position: 'relative',
        left: '-5%'}}>
          <AddPosts />
          </Box>

          <Rightbar />
          
        </Box>
        
      </Box>
    </ThemeProvider>
  );
}

export default App;
