const {
    create,
    update,
    getAll,
    deleteById,
    getReplyByLetterID,
    createReply
} = require("./letters.service");

module.exports = {
    createLetters: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Letter created successfully'
            });
        });
    },

    getLetters: (req, res) => {
        getAll((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                letters: results
            });
        });
    },

    updateLetters: (req, res) => {
        const body = req.body;
        update(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Updated successfully"
            });
        });
    },

    deleteLetters: (req, res) => {
        const data = req.body;
        deleteById(data, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            // if (!results) {
            //   return res.json({
            //     success: 0,
            //     message: "record not found"
            //   });
            // }
            return res.json({
                success: 1,
                message: "Deleted successfully"
            });
        });
    },

    //   REPLY

    getReplyByLetterId: (req, res) => {
        const id = req.params.id;
        getReplyByLetterID(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                replies: results
            });
        });
    },

    createReply: (req, res) => {
        const body = req.body;
        createReply(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: 'Replied successfully'
            });
        });
    },
};