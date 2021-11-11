const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

// Write Headers
writeStream.write(`Title,Link,Date \n`);

let contentLocation = "https://www.airtype.co/components/ui"

request(contentLocation, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    console.log(html)

    $('.div').each((i, el) => {
      const title = $(el)
        .find('.comp_message')
        .text()
        .replace(/\s\s+/g, '');      

      // Write Row To CSV
      console.log(`${title} \n`)
      //writeStream.write(`${title}, ${link}, ${date} \n`);
    });

    console.log('Scraping Done...');
  }
});






