import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { Box } from '@mui/material';
import { CameraConfiguration } from './views/CameraConfiguration';
import { GeneralConfiguration } from './views/GeneralConfiguration';
import { SelectProgram } from './views/SelectProgram';
import { ProgrammingInterface } from './views/ProgrammingInterface';
import { Counters } from './views/Counters';
import { MonitorMain } from './views/MonitorMain';
import { ClasicProgram } from './views/ClasicProgram';
function App() {
  console.log(window.ipcRenderer);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);
  const { t } = useTranslation();
  
  useEffect(() => {
    window.Main.removeLoading();
  }, []);

  useEffect(() => {
    if (isSent && window.Main)
      window.Main.on('message', (message: string) => {
        setFromMain(message);
      });
  }, [fromMain, isSent]);

  return (
    <div className="flex flex-col">
      {window.Main && (
        <div className="flex-none">
          {/* <AppBar /> */}
          <Layout></Layout>
        </div>
      )}
      <Box sx={{width: '84vw', alignSelf: 'flex-end', mr:1}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MonitorMain imgUrl='fetch'/>} />
              <Route path='/GeneralConfiguration' element={<GeneralConfiguration/>} />
              <Route path='/CameraConfiguration' element={<CameraConfiguration />} />
              <Route path='/SelectProgram' element={<SelectProgram />} />
              <Route path='/Counters' element={<Counters />} />
              <Route path='/ProgrammingInterface' element={<ProgrammingInterface />} />
              <Route path='/ClasicProgram' element={<ClasicProgram />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
