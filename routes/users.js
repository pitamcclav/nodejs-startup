const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("GET /users");
});
router.get("/new", (req, res) => {
  res.render("users/new", { firstname: "John" });
});

router.post("/", (req, res) => {
  const valid = true;
  if (valid) {
    users.push({ firstname: req.body.firstname });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("error");
    res.render("users/new", { firstname: req.body.firstname });
  }
  console.log(req.body.firstname);
  // res.send("POST /users");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`GET /users/${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`PUT /users/${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`DELETE /users/${req.params.id}`);
  });
//////////////////////////or//////////////////////////
// router.get("/:id", (req, res) => {
//   res.send(`GET /users/${req.params.id}`);
// });
// router.put("/:id", (req, res) => {
//   res.send(`PUT /users/${req.params.id}`);
// });
// router.delete("/:id", (req, res) => {
//   res.send(`DELETE /users/${req.params.id}`);
// });
const users = [{ name: "Kyle" }, { name: "Sally" }];
router.param("id", (req, res, next, id) => {
  req.user = users[id];
  next();
});
module.exports = router;
