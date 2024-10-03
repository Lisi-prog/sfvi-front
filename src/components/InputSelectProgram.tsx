import React from 'react';

const FileInput: React.FC = () => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
        console.log('entra aqui')
      const filePath = await window.electron.getFilePath(file);
      console.log('Ruta del archivo seleccionado:', filePath);
    }
  };

  return <input id="file-opener" type="file" onChange={handleFileChange} style={{ display: 'none' }} />;
};

export default FileInput;