const { poolPromise } = require('../Services/poolConfig');
const colors = require('colors');

module.exports = async function (context) {

    try {

        var pool = await poolPromise;
        var result = await pool.request().query('select * from [BikeStores].[production].[brands]');
        context.res = {
          status: 200,
          body: result.recordsets,
        };

    } catch (error) {
        context.res = {
           status: 500,
           body: error.message,
        };
    }

}