const fs = require('fs');

module.exports = function writeDataToFile(filename, content) {
    // Shouldn't block main thread with writeFileSync, use writeFile
    fs.writeFileSync(filename, JSON.stringify(content), (err) => {
        if (err)
            console.log(err)
    });
}
