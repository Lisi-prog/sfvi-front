import React, { useState } from 'react';
export interface FilePath {
  getFilePath: (filePath: string) => void;
  id: string;
  extensions?: string;
}import axios, {isCancel, AxiosError, AxiosResponse} from 'axios';

const FileInput: React.FC<FilePath> = (props) => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //console.log('entra aqui')
      const filePath = await window.electron.getFilePath(file);
      console.log('Ruta del archivo seleccionado:', filePath);
      props.getFilePath(filePath);
      const datos = [
        {
          "ruta": filePath
        }
      ]

      // axios.post(`${import.meta.env.VITE_HTTP_URL}:${import.meta.env.VITE_HTTP_PORT}/ruta`, datos, 
      //     {
      //       headers: {
      //         Accept: 'application/json',
      //         'Content-Type': 'application/json;charset=UTF-8',
      //       }
      //     })
      //     .then(response => {
      //         console.log('La respuesta del servidor es: '+response.data)
      //     })
      //     .catch(function(error) {
      //         console.log(`Error: ${error}`);
      //     });

    }
  };

  return <input id={props.id} type="file" onChange={handleFileChange} style={{ display: 'none' }} accept={props.extensions}/>;
};

export default FileInput;