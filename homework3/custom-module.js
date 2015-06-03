/**
 * Created by Ivan_Kauryshchanka on 6/3/2015.
 */
var fs = require('fs'),
    path = require("path");

module.exports = function(){
  this.save = function(filename){
      fs.createReadStream(filename).pipe(fs.createWriteStream(filename + '_new' + '.txt'));
  };
  this.delete = function(filename){
      fs.unlink(filename);
  };
  this.index = function(){
      fs.readdir(__dirname, function(err, files){
          if(err) throw err;
          files.forEach(function (file) {
              if(path.extname(file) === '.txt'){
                  console.log(file);
              }
          });
      });
  };
};