const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `insert into category(categoryName, status) 
                values(?,?)`,
            [
                data.categoryName,
                data.status,
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    // getAddresses: (id, callBack) => {
    //     pool.query(
    //         `SELECT * FROM address WHERE userId = ?`,
    //         [id],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results);
    //         }
    //     );
    // },

    // update: (data, callBack) => {
    //     pool.query(
    //         `UPDATE address SET fullName=?, address=?, city=?, postCode=?, country=?, phoneNumber=? WHERE userId = ? AND id = ?`,
    //         [
    //             data.fullName,
    //             data.address,
    //             data.city,
    //             data.postCode,
    //             data.country,
    //             data.phoneNumber,
    //             data.userId,
    //             data.id
    //         ],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results[0]);
    //         }
    //     );
    // },

    // deleteAddress: (data, callBack) => {
    //     pool.query(
    //         `DELETE FROM address WHERE userId = ? AND id = ?`,
    //         [
    //             data.userId,
    //             data.id
    //         ],
    //         (error, results, fields) => {
    //             if (error) {
    //                 callBack(error);
    //             }
    //             return callBack(null, results[0]);
    //         }
    //     );
    // }
};
