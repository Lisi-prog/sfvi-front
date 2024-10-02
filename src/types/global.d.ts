interface Window {
    electron: {
      getFilePath: (file: File) => Promise<string>;
    };
  }