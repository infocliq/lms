const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");
const { isAdmin } = require("../../auth/admin_validation");

const {
    getLetters,
    createLetters,
    updateLetters,
    deleteLetters,
    createReply,
    getReplyByLetterId
} = require("./letters.controller");

router.get("/", checkToken, isAdmin, getLetters);
router.post("/create", checkToken, isAdmin, createLetters);
router.patch("/", checkToken, isAdmin, updateLetters);
router.delete("/", checkToken, isAdmin, deleteLetters);

router.post("/reply/create", checkToken, createReply);
router.get("/reply/:id", checkToken, getReplyByLetterId);

module.exports = router;
