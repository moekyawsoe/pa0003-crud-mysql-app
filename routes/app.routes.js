var pagesController = require('../controllers/pages.controller');

module.exports = (app) => {
    app.get('/', pagesController.getIndexPage);
    app.get('/customers/list', pagesController.getCustomers);
}