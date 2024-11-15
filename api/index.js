const express = require('express');
const cors = require('cors')
const app =express();

app.get('/api/test',(req, res)=>{
    res.json({body: 'test ok'});
});

app.post('/api/transaction', (req,res)=>{
    res.json(req.body)
})

app.listen(4040, ()=>{
    console.log('Server is running on port 4040')
});
