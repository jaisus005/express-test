const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
res.sendFile('index.html');
});

router.post('/',(req,res)=>{

});

module.exports = router;
