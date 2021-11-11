
const app = require("../app.js")

const http = require("http")



const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { window } = new JSDOM(`...`);
// or even
const { document } = (new JSDOM(`...`)).window;


require('dotenv').config()

//process.env. 


const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));




var test = {

    testing: function  (){
        console.log("it works!")
    }

}



module.exports = {
    "main": test

}



