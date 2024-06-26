const express = require ("express")
const { e_Controller } = require("../../Controllers")
const e = require("../../Model/e.model")

const router = express.Router()

router.post(

    "/create-e",
    e_Controller.create_e
)
router.get(
    "/list",
    e_Controller.get_e
)
router.delete(
    "/delete/:id",
    e_Controller.delete_e
)
router.put(
    "/update-e/:e_id",
    e_Controller.update_e
)

module.exports = router