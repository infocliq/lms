const {
    create,
    update,
    getAll,
    deleteById,
} = require("./categories.service");

module.exports = {
    createCategory: (req, res) => {
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
                message: 'Category created successfully'
            });
        });
    },

    getCategories: (req, res) => {
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

    updateCategory: (req, res) => {
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

    deleteCategory: (req, res) => {
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
