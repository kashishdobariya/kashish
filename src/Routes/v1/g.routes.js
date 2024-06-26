const express = require ("express")
const { g_Controller } = require("../../Controllers")
const g = require("../../Model/g.model")

const router = express.Router()

router.post(

    "/create-g",
    g_Controller.create_g
)
router.get(
    "/list",
    g_Controller.get_g
)
router.delete(
    "/delete/:id",
    g_Controller.delete_g
)
router.put(
    "/update-g/:g_id",
    g_Controller.update_g
)

module.exports = router