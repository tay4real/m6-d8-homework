/** put all routes together here and export out  */

const router = require("express").Router();

const categoriesRouter = require("./categories");

const articlesRouter = require("./articles");

const authorsRouter = require("./authors");

const reviewsRouter = require("./reviews");

router.use("/authors", authorsRouter);

router.use("/categories", categoriesRouter);

router.use("/reviews", reviewsRouter);

router.use("/articles", articlesRouter);

module.exports = router;
