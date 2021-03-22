const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

module.exports.init = function (app) {
  app.use(
    require("express-session")({
      secret: "sdfgfgjhfygjhy",
      resave: true,
      saveUninitialized: true,
    })
  );
  const { User } = require("./models/user");

  passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne({ useremail: username }, function (err, user) {
        if (err) {
          return done(err);
        } // Error loading user from DB
        if (!user) {
          return done(null, false);
        } // No user
        bcrypt.compare(password, user.userpassword, (err, res) => {
          if (res) {
            // passwords match! log user in
            return done(null, user);
          } else {
            // passwords do not match!
            return done(null, false, { msg: "Incorrect password" });
          }
        });
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

  app.use(passport.initialize());
  app.use(passport.session());

  app.post(
    "/login",
    passport.authenticate("local", { failureRedirect: "/" }),
    function (req, res) {
      console.log(req.body);
      res.render("welcome",{userwelcome:req.body.username});
    }
  );

  app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
  });
  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
