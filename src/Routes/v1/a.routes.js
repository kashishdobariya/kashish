const express = require ("express")
const { a_Controller } = require("../../Controllers")
const a = require("../../Model/a.model")

const router = express.Router()

router.post(

    "/create-a",
    a_Controller.create_a
)
router.get(
    "/list",
    a_Controller.get_a
)
router.delete(
    "/delete/:id",
    a_Controller.delete_a
)
router.put(
    "/update-a/:a_id",
    a_Controller.update_a
)

module.exports = router