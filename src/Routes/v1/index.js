const express = require("express")

const dataRoute = require("./data.routes")
const aRoute = require("./a.routes")
const bRoute = require("./b.routes")
const cRoute = require("./c.routes")
const dRoute = require("./d.routes")
const eRoute = require("./e.routes")
const fRoute = require("./f.routes")
const gRoute = require("./g.routes")


const router = express()


router.use("/data",dataRoute)
router.use("/a",aRoute)
router.use("/b",bRoute)
router.use("./c",cRoute)
router.use("./d",dRoute)
router.use("./e",eRoute)
router.use("./f",fRoute)
router.use("./g",gRoute)

module.exports = router
