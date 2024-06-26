const express = require ("express")
const { b_Controller } = require("../../Controllers")
const b = require("../../Model/b.model")

const router = express.Router()

router.post(

    "/create-b",
    b_Controller.create_b
)
router.get(
    "/list",
    b_Controller.get_b
)
router.delete(
    "/delete/:id",
    b_Controller.delete_b
)
router.put(
    "/update-b/:b_id",
    b_Controller.update_b
)

module.exports = router