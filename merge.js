const PDFMerger = require('pdf-merger-js');
// const multer  = require('multer')
// const upload = multer({ dest: 'uploads/' })
const path = require('path')

var merger = new PDFMerger();

const mergePdf = async (p1,p2) => {
    console.log("in merge.js")
    console.log(p1,p2)
    await merger.add(p1);  //merge all pages. parameter is the path to file and filename.
    await merger.add(p2);  //merge all pages. parameter is the path to file and filename.
    
    console.log("added in merge.js")
      let d = new Date().getTime();
    await merger.save(path.join(__dirname,`uploads/${d}.pdf`)); //save under given name and reset the internal document
    console.log("saved in merge.js")
//   console.log("merging")
return d;

};

module.exports = {mergePdf};
