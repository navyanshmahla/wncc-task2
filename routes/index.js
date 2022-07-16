var express = require('express');
var router = express.Router();



module.exports=router;

router.get("/",(req,res)=>{
    console.log(req.oidc.isAuthenticated());
    res.render("index",{
        title:"WnCC Authentication", 
        isAuthenticated:req.oidc.isAuthenticated(),
        user: req.oidc.user,
    });

});

