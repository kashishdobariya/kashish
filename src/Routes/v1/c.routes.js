const express = require ("express")
const { c_Controller } = require("../../Controllers")
const c = require("../../Model/c.model")

const router = express.Router()

router.post(

    "/create-c",
    c_Controller.create_c
)
router.get(
    "/list",
    c_Controller.get_c
)
router.delete(
    "/delete/:id",
    c_Controller.delete_c
)
router.put(
    "/update-c/:c_id",
    c_Controller.update_c
)

module.exports = router