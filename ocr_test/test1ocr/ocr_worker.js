const { async } = require('regenerator-runtime');
const {createWorker} = require('tesseract.js');

async function recognize_text(linktoimg) {
const worker = await createWorker({
  logger: m => console.log(m)
});
  await worker.loadLanguage('eng');
  await worker.initialize('eng');
  const { data: { text } } = await worker.recognize(linktoimg);
  console.log(text);
  await worker.terminate();
  return text;
};

console.log("here2");
let text_found;
const recog = async() =>{
text_found = await recognize_text('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log(text_found);
}
recog();
console.log("here");

console.log(text_found);

// function recognize_text(linktoimg){
//     let text_glob;
//     Tesseract.recognize(
//         linktoimg,
//         'eng',
//         { logger: m => console.log(m) }
//       ).then(({ data: { text } }) => {
//         console.log(text);
//         text_glob = text;
//       });
//       console.log(text_glob);
//       return text_glob;
// }

// // Tesseract.recognize(
// //   'https://tesseract.projectnaptha.com/img/eng_bw.png',
// //   'eng',
// //   { logger: m => console.log(m) }
// // ).then(({ data: { text } }) => {
// //   console.log(text);
// //   text_glob = text;
// //   console.log(text_glob);
// // });

// console.log("here");
// text_found = recognize_text('https://tesseract.projectnaptha.com/img/eng_bw.png');
// console.log("here2");

// // console.log(text_glob)
// // console.log("here")
// // console.log(text_glob)