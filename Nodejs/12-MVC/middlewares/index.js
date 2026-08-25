const fs = require("fs");
function logReqRes (fileName){
  return (req, res , next)=> {
     fs.appendFile( fileName, `${Date.now()}, ${req.ip}, ${req.path}, ${req.method} \n`,
    (err) => {
      next();
    },
  );
  }
}

module.exports = logReqRes;