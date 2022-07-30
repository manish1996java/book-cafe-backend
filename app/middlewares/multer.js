const multer = require('multer');
const Mime_type_Map = require('../constansts/mime-type.js');

const destination = (req,file,cb) => {
    cb(null,'app/public/');
}
const filename = (req,file,cb) => {
    console.log('file',file);
    let fileType = Mime_type_Map[file.mimetype];
    let fullFileName = `image-${new Date().toISOString().replace(/:/g,'-')}.${fileType}`;
    cb(null,fullFileName);
    
}
const fileFilter = (req,file,cb) => {
    if(Mime_type_Map[file.mimetype]){
        cb(null,true);
    }else{
        cb(null,false);
    }
}


const storage = multer.diskStorage({destination,filename})

const upload = multer({storage,fileFilter});

module.exports = upload;