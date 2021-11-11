const got = require('got')
app = require('../app')
const jsdom = require('jsdom')
const {JSDOM} = jsdom
let contentLocation = "https://www.airtype.co/components/ui"



module.exports = {
    "response":  
    got(contentLocation)
        .then(res=>{
        const eventsPageDom = new JSDOM(res.body.toString()).window.document;
        //global.parentElement = eventsPageDom.querySelector('.presetmessage')
     
    })
    

}