const path = require('path');
function getHome(req, res) {
    const filePath = path.join(__dirname, '../views/Home');
    return filePath;
}
module.exports = {getHome}