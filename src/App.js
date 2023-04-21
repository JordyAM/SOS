import React, { useEffect, useState } from 'react';
import './App.css';
import { createWorker } from 'tesseract.js';

function App() {
  const worker = createWorker({
    logger: m => console.log(m)
  });
   const doOCR = async () => {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng'); 
    const { data: { text } } = await worker.recognize('https://tesseract.projectnaptha.com/img/eng_bw.png');
    await worker.terminate();
    setOcr(text);
  };
  const [ocr, setOcr] = useState('Recognizing text...');
  useEffect(() => {
    doOCR();
  }, [ocr]) 
  return (
    <div className="App">
      <p>{ocr}</p>
    </div>
  );
}

export default App;
