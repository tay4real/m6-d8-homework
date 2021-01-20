const router = require("express").Router();

const Model = require("../../utils/model");

const Authors = new Model("authors");

router.get("/", async (req, res, next) => {
  try {
    const response = await Authors.findOne();
    res.send(JSON.parse(JSON.stringify(response.rows)));
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { rows } = await Authors.findById(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const response = await Authors.save(req.body);
    res.send(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const response = await Authors.findByIdAndUpdate(req.params.id, req.body);
    res.send(response);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { rows } = await Authors.findByIdAndDelete(req.params.id);
    res.send(rows);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
});

module.exports = router;
