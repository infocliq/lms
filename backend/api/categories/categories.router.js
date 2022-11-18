const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { isAdmin } = require("../../auth/admin_validation");

const {
    // getCategories,
    createCategory,
    // updateCategory,
    // deleteCategory,
    // getCategoriesById,
} = require("./categories.controller");

// router.get("/", checkToken, getCategories);
router.post("/create", checkToken, isAdmin, createCategory);
// router.patch("/", checkToken, isAdmin, updateCategory);
// router.get("/:id", checkToken, isAdmin, getCategoriesById);
// router.delete("/", checkToken, isAdmin, deleteCategory);

module.exports = router;
