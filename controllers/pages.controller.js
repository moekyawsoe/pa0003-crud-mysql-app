var appModel = require('../models/tbl_customers');

exports.getIndexPage = (req, res) => {
    res.render('pages/index', {
        title : 'Ray App'
    });
}

exports.getCustomers = (req, res) => {
    appModel.getCustomers((err, results) => {
        if(err){
            res.status(404).json({
                "code" : 404,
                "message" : err
            });
        }else{
            res.status(200).json({
                "code" : 200,
                "message" : "Customer Lists",
                "data" : results
            });
        }
    });
}

exports.createCustomer = (req, res) => {
    var body = req.body;
    var dataSet = [
        body.customer_name,
        body.customer_phone,
        body.customer_address
    ]
    // var params = req.params;
    // var query = req.query;
    appModel.createCustomer(dataSet, (err, results) => {
        if(err){
            res.status(404).json({
                "code" : 404,
                "message" : err
            });
        }else{
            res.status(200).json({
                "code" : 200,
                "message" : "Successfully Created"
            });
        }
    });
}

exports.getCutomer = (req, res) => {
    var c_id = req.params.id;
    appModel.getCustomer(c_id, (err, results) => {
        if(err){
            res.status(404).json({
                "code" : 404,
                "message" : err
            });
        }else{
            res.status(200).json({
                "code" : 200,
                "message" : `${results.customer_name} Details`,
                "data" : results
            });
        }
    });
}

exports.updateCutomer = (req, res) => {
    var c_id = req.params.id;
    var body = req.body;
    // try{
    //     var results = await appModel.customerUpdate(body);
    //     res.status(200).json({
    //         "code" : 200,
    //         "message" : `${results.customer_name} Details`,
    //         "data" : results
    //     });
    // }catch(err){
    //     res.status(404).json({
    //         "code" : 404,
    //         "message" : err
    //     });
    // }
    appModel.customerUpdate(body, c_id).then((results) => {
        res.status(200).json({
            "code" : 200,
            "message" : `Updated Successfully!`
        });
    }).catch((err) => {
        res.status(404).json({
            "code" : 404,
            "message" : err
        });
    });

}

exports.deleteCustomer = (req, res) => {
    var c_id = req.params.id;
    appModel.deleteCustomer(c_id).then((results) => {
        res.status(200).json({
            "code" : 200,
            "message" : `Deleted Successfully!`
        });
    }).catch((err) => {
        res.status(404).json({
            "code" : 404,
            "message" : err
        });
    });
}
