import React, { useState } from 'react';
export interface FilePath {
  getFilePath: (filePath: string) => void;
}
const FileInput: React.FC<FilePath> = (props) => {
  const [selectedFilePath, setSelectedFilePath] = useState<string | null>(null);
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //console.log('entra aqui')
      const filePath = await window.electron.getFilePath(file);
      console.log('Ruta desde el hijo:', filePath);
      setSelectedFilePath(filePath);
      props.getFilePath(filePath);
    }
  };

  return <input id="file-opener" type="file" onChange={handleFileChange} style={{ display: 'none' }} />;
};

export default FileInput;