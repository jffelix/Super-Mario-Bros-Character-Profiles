const controllers = require("../controllers/index.js");
const router = require("express").Router();

router.get("/title", controllers.getTitle);

module.exports = router;