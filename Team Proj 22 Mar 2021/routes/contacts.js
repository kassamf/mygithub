// Authors:

var express = require("express");
var router = express.Router();
const Contact = require("../models/contactMongo");
//console.log(Contact);
// const pageCreatePost = {
//   pagetitle: "Blog post",
//   pageheading: "Create a new post",
//   pagemessage: "This is where you can create a new post.",
// };
const pageShowContacts = {
  pagetitle: "Contact us",
 // pageheading: "A collection of all blog posts.",
 // pagemessage: "Write your own inspiring tale to capture the memories of past travels.",
};

// Get all contacts page for agencies part
const query = ({});
router.get('/', function(req, res, next) {
   //Contact.find((err, agencies) => {
    Contact.getContacts(query, (err, agencies)=>{
      if(err) return res.send(err);
      if (agencies) {
        Contact.getAgents({AgencyId:1}, (err, agents1)=>{
          if(err) return res.send(err);
          if (agents1) {
            Contact.getAgents({AgencyId:2}, (err, agents2)=>{
              if(err) return res.send(err);
              if (agents2) {
                console.log(agents2)
                res.render("viewContacts", { contactAgency:agencies, contactAgents1:agents1, contactAgents2: agents2});
              }
            })
            
          }
        })

        
      }
    })
    });

// Get all contacts page for agents part
// router.get('/', function(req, res, next) {
    
//     });

// middleware that is specific to this router,
// checks that the user must be logged in
//router.use((req, res, next) => {
  //console.log('Time: ', Date.now());
//   if (!req.user) res.status(403).send("Not allowed");
//   else next();
// });

/* GET Post create page. */
// router.get("/", function (req, res, next) {
//   //res.render("myNewBlog", pageCreatePost);
//   res.render("myContact", pageCreatePost);
// });

//router.post("/post", function (req, res, next) {
  //const myAgencies = new Contact(req.body);
 //agencies=res.locals.currentUser._id;
 //console.log(agencies, res.locals.currentUser._id)}),
  //console.log(Post);
//   myAgencies.save((err, result) => {
//     if (err) {
//       //res.send(err);
//       const errorArray = [];
//       const errorKeys = Object.keys(err.errors);
//       errorKeys.forEach((key) => errorArray.push(err.errors[key].message));
//       return res.render("myNewBlog", {
//         ...pageCreatePost,
//         errors: errorArray,
//         title: req.body.title,
//         url: req.body.url,
//         post: req.body.post,
//       });
//     }
//     console.log(result);
//     res.send(`<h2>Data saved: ${result.title}</h2>`);
//     //create a render to thank user for blog and redirect to blog create page
//     res.render('myNewBlog', {title: 'my travel blog'});
//   });
// });


// router.get("/contact", function (req, res, next) {
//   //Post.find((err, posts) => {
//     //res.render("viewAllBlogs", { ...pageShowPosts, blogPosts: posts });
//     Contact.find()
//       .populate("agencies")
//       .exec(function (err, agencies) {
//       if (err) throw err;
//       res.render("viewContacts", { ...pageShowContacts, contactus: agencies });
//   });
// });

module.exports = router;
