const Tesseract = require('tesseract.js');

function recognize_text(linktoimg){
    let text_glob;
    Tesseract.recognize(
        linktoimg,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        console.log(text);
        text_glob = text;
      });
      console.log(text_glob);
      return text_glob;
}

// Tesseract.recognize(
//   'https://tesseract.projectnaptha.com/img/eng_bw.png',
//   'eng',
//   { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//   console.log(text);
//   text_glob = text;
//   console.log(text_glob);
// });

console.log("here");
text_found = recognize_text('https://tesseract.projectnaptha.com/img/eng_bw.png');
console.log("here2");

// console.log(text_glob)
// console.log("here")
// console.log(text_glob)