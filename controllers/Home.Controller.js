const homeModel = require('../models/Home.Model');
const getHome = (req, res) => {
    const home = homeModel.getHome();
    res.render(home, { home: home })
}
module.exports = {
    getHome
}