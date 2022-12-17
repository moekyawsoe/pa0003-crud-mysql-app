var pagesController = require('../controllers/pages.controller');

module.exports = (app) => {
    app.get('/', pagesController.getIndexPage);
    app.get('/customers/list', pagesController.getCustomers);
    app.get('/customer/details/:id', pagesController.getCutomer);
    app.post('/customer/create', pagesController.createCustomer);
    app.put('/customer/update/:id', pagesController.updateCutomer);
    app.delete('/customer/delete/:id', pagesController.deleteCustomer);
}