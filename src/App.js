import React, { useEffect, useState } from 'react';
import './App.css';
import { createWorker } from 'tesseract.js';

function App() {
  
   
  const [ocr, setOcr] = useState('Recognizing text...');
  useEffect(() => {
    const { createWorker }  = require("tesseract.js");
    const worker = createWorker({
      logger: m => console.log(m)
    });
    const doOCR = async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng'); 
      const { data: { text } } = await worker.recognize('eng_bw.png');
      console.log(text); 
      await worker.terminate();
      setOcr(text);
    };
    doOCR();
  },[ocr] ) 
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default App;
