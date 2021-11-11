const express = require('express');
const app = express();
const port = 3000;





var components = require('./js/getcomponents')
//var got = require('./js/got')


app.get('/', (req, res) => {
  //res.send('<h1>Express Demo App</h1> <h4>XXXMessage: Success sortof</h4> <p>Version 2.1</p>' );
  res.send(require('./js/got').response)
  //res.send(global.testing)
  

})


app.listen(port, ()=> {
  console.log(`Demo app is up and listening to port: ${port}`);
})
 

//console.log(got.main())


