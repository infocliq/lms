const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {

        pool.query(
            `insert into letters(letterFrom, issuedDate, subject, registerPostId, department, status, priority, description, createdAt, updatedAt) 
                values(?,?,?,?,?,?,?,?,?,?)`,
            [
                data.letterFrom,
                data.issuedDate,
                data.subject,
                data.registerPostId,
                data.department,
                data.status,
                data.priority,
                data.description,
                data.createdAt,
                data.updatedAt
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    getAll: callBack => {
        pool.query(
            `SELECT * FROM letters ORDER BY id DESC, priority DESC`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    update: (data, callBack) => {
        pool.query(
            `UPDATE letters SET letterFrom=?, issuedDate=?, subject=?, registerPostId=?, department=?, status=?, priority=?, description=?, updatedAt=? WHERE id = ?`,
            [
                data.letterFrom,
                data.issuedDate,
                data.subject,
                data.registerPostId,
                data.department,
                data.status,
                data.priority,
                data.description,
                data.updatedAt,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    deleteById: (data, callBack) => {
        pool.query(
            `DELETE FROM letters WHERE id = ?`,
            [
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },

    // REPLY

    getReplyByLetterID: (id, callBack) => {
        pool.query(
            `SELECT * FROM replies WHERE letterId = ? ORDER BY id DESC`,

            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    createReply: (data, callBack) => {
        pool.query(
            `insert into replies(status, department, reply, letterId, user, createdAt, updatedAt) 
                values(?,?,?,?,?,?,?)`,
            [
                data.status,
                data.department,
                data.reply,
                data.letterId,
                data.user,
                data.createdAt,
                data.updatedAt
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
        const id = data.letterId;
        pool.query(
            `UPDATE letters SET status=? WHERE id = ?`,
            [
                data.status,
                id,
            ],
        );
    },
};
