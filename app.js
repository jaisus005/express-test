const express = require('express');
const app=express();
const root='E:/node/omnifoodexpress';
express.static(root);
app.use(express.static('omnifood'));
const port=8030;


const indexRoute=require('./routes');
app.use(indexRoute);





app.listen(port,()=>{
  console.log(`Server Started on Port ${port}`);
});
