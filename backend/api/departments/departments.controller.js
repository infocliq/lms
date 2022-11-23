const {
    create,
    update,
    getAll,
    deleteById,
} = require("./departments.service");

module.exports = {
    createDepartments: (req, res) => {
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
                message: 'Department created successfully'
            });
        });
    },

    getDepartments: (req, res) => {
        getAll((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                categories: results
            });
        });
    },

    updateDepartments: (req, res) => {
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

    deleteDepartments: (req, res) => {
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
    }
};
