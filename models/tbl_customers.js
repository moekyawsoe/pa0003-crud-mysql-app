var mysql = require('../helpers/database');

//get customer list
exports.getCustomers = (cb) => {
    //SQL QUERY
    var q = `SELECT * FROM tbl_customers`;

    //Execute QUERY and GET RESULTS
    mysql.query(q, (err, results) => {
        if(err){
            console.log(err);
            cb(err, null);
        }else{
            cb(null, results);
        }
    });
}

//create customer
exports.createCustomer = (data, cb) => {
    var query = `
    INSERT INTO tbl_customers
        (customer_name,
        customer_phone,
        customer_address,
        createdAt,
        updatedAt)
        VALUES
        (?, ?, ?, now(), now());
    `;

    mysql.query_filter(query, data, (err, results) => {
        if(err){
            cb(err, null);
        }else{
            cb(null, 'Done');
        }
    });
}

//customer details
exports.getCustomer = (id, cb) => {
    var dataSet = [id];
    var query = `SELECT * FROM tbl_customers WHERE customer_id = ?`;
    mysql.query_filter(query, dataSet, (err, results) => {
        if(err){
            cb(err, null);
        }else{
            cb(null, results[0]);
        }
    });
}

//customer update
exports.customerUpdate = (data, id) => {
    return new Promise((resolve, reject) => {
        var dataSet = [data, id];
        var query = `UPDATE tbl_customers SET ?, updatedAt = now() WHERE customer_id = ?`;
        mysql.query_filter(query, dataSet, (err, results) => {
            if(err){
                reject(err);
            }else{
                resolve('updated');
            }
        });
    });
}

//customer delete
exports.deleteCustomer = (id) => {
    return new Promise((resolve, reject) => {
        var query = `DELETE FROM tbl_customers WHERE customer_id = ?`;
        mysql.query_filter(query, [id], (err, results) => {
            if(err){
                reject('err');
            }else{
                resolve('Successfully Deleted');
            }
        });
    });
}
