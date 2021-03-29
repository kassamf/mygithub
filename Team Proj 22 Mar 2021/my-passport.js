// Authors: David McDonald, Farid Kassam, Shefqet Zyko, Irshaad Sardiwalla, Srinivasan Sivalingam
//Courtesy of Mostafa Mohamed
//- Grp1 Team 2
//- Date: 20 Mar 2021

//- Description: authentication of user

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
  const packages = require('./models/packages');
  passport.use(
    new LocalStrategy(function (username, password, done) {
      User.findOne({ userid: username }, function (err, user) {
        if (err) {
          return done(err);
        } // Error loading user from DB
        if (!user) {
          return done(null, false);
        } // No user
        bcrypt.compare(password, user.passwd, (err, res) => {
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
    //when using passport, you can access information about the user. In general (.js) use req.user; for pug use currentUser
      res.render("welcome",{userwelcome:req.user.CustFirstName});
    }
  );

  app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    if(req.query.headermessage) res.locals.headermessage = req.query.headermessage; 
    next();
  });
  app.get("/log-out", (req, res) => {
    req.logout();
    res.redirect("/");
  });
};
