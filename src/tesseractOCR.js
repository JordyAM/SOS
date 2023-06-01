import { createWorker } from "tesseract.js";
import Tesseract from "tesseract.js";


    export default function tesseractOCR() {
const worker = createWorker({
    workerPath: '/path/to/tesseract.js/worker.js',
    langPath: '/path/to/tesseract.js/langs/',
    corePath: '/path/to/tesseract.js/core.js',
});

async function initializeWorker() {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng'); 
}

async function recognizeImage(imageUrl) {
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng'); 
    const { data: { text } } = await worker.recognize('eng_bw.png');
    console.log(text); 
    await worker.terminate();
}
}