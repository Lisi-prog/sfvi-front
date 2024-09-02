import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from './AppBar';
import SwitchDarkMode from './SwitchDarkMode';
import SelectLanguage from './SelectLanguage';
import { Ejemplo } from './views/Ejemplo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemporalDrawer from './components/TemporalDrawer';
import Layout from './components/Layout';

function App() {
  console.log(window.ipcRenderer);

  const [isOpen, setOpen] = useState(false);
  const [isSent, setSent] = useState(false);
  const [fromMain, setFromMain] = useState<string | null>(null);
  const { t } = useTranslation();

  const handleToggle = () => {
    if (isOpen) {
      setOpen(false);
      setSent(false);
    } else {
      setOpen(true);
      setFromMain(null);
    }
  };
  const sendMessageToElectron = () => {
    if (window.Main) {
      window.Main.sendMessage(t('common.helloElectron'));
    } else {
      setFromMain(t('common.helloBrowser'));
    }
    setSent(true);
  };

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
      
      <BrowserRouter>
      
        <Routes>
          <Route path='/'>
          <Route path='/' element={<Ejemplo />} />

          </Route>
                
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
