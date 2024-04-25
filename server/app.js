const express = require('express')
const app = express()
const port = 7080
app.use(express.json())

let ads =  require('./data');


app.post('/search-item', (req, res) => {

  let result = ads.filter((ad)=>{
      return ad.title.toLowerCase().includes(req.body.query.toLowerCase());
  });
  res.json(result);

})

app.get('/collect-item', (req, res) => {

  let result = ads.filter(item=>item.category===req.query.category );
  res.json(result);

})

app.get('/product-detail', (req, res) => {

  let result = ads.find(item=>item.url===req.query.url );
  res.json(result);

})


app.listen(port, () => {
    
  console.log(`Example app listening on port ${port}`)
})