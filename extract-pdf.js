const fs = require('fs');
const pdf = require('pdf-parse');

const pdfPath = './src/assets/RazanKhalidAlkhodhairCV 1.pdf';

fs.readFile(pdfPath, (err, data) => {
  if (err) {
    console.error('Error reading PDF:', err);
    return;
  }

  pdf(data).then(function(data) {
    console.log('PDF Text Content:');
    console.log('==================');
    console.log(data.text);
  }).catch(function(error) {
    console.error('Error parsing PDF:', error);
  });
});