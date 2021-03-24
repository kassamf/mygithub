var express = require('express');
var router = express.Router();
const {User} = require('../models/user');
const bcrypt = require("bcryptjs");

const pageRegister = {
  pagetitle:'Sign-Up',
  pageheading:'Create a new account',
  pagemessage:'Please enter the required information to create a new account.'};


/* Sign-up page. */
router.get('/', function(req, res, next) {
  res.render('sign-up');
});


router.post('/', function(req, res, next) {
    bcrypt.hash(req.body.userpassword, 10, (err, hashedPassword) => {
        if(err) throw err;
        // Replace the plain password with the hashed password
        req.body.userpassword = hashedPassword;
        // Create a new user object from the User Model
        const user = new User(req.body);        
        // Store the use object in the DB
        user.save((err, result)=> {
            if(err) // If there are errors from the Model schema
            {   const errorArray = [];
                const errorKeys = Object.keys(err.errors);
                errorKeys.forEach(key => errorArray.push(err.errors[key].message));
                return res.render("sign-up", 
                { ...pageRegister,
                    errors: errorArray,
                    ...req.body,
                });     
            }
            //console.log(result);
            const headermessage = `Account created ${result.fname}`;
            res.redirect('/register?headermessage=' + headermessage);
            
        }) 
    })
});

module.exports.passport = null;

// Login
// router.post('/login', 
//     //console.log(req._passport);
//     module.exports.passport.authenticate('local', { failureRedirect: '/' }),
//         function(req, res) {
//             const headermessage = `Welcome `;
//             res.redirect('/?headermessage=' + headermessage);
//         }
// );

module.exports = router;