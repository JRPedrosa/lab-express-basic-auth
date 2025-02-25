const router = require("express").Router();

function requireLogin(req, res, next) {
  if (req.session.currentUser) {
      next();
  } else {
      res.redirect("login");
  }
}


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


router.get("/main", requireLogin, (req, res, next) => {
  res.render("main");
})

router.get("/private", requireLogin, (req, res, next) => {
  res.render("private");
})





module.exports = router;
