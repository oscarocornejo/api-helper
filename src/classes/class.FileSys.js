const fs = require('fs');
const path = require('path');

class FileSys {
    // Pass in folder path, returns paths of files
    /**
     * 
     * @param {String} dirpath 
     * @returns {String[]}    
     */
    static ReadDir (dirpath, {
        error = new Error
    } = {}) {
        return new Promise((resolve, reject) => {
            fs.readdir(path.resolve(process.cwd(), dirpath)
            , (err, files) => {
                if(err) reject(err);
                if(files) resolve(files);
            });
        })
        .catch((err) => {
            error.message = err.message;
            throw error;
        });
    }
}

module.exports = FileSys;
