const controlller = require('../controllers/methods');

module.exports = function (app) {
    
    app.get('/', controlller.index) // call index method from Controller

    // add more routes here 
}