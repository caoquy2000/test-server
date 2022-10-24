const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    const data = `<?xml version="1.0" encoding="UTF-8"?>
    <document type="freeswitch/xml">
    <section name="directory">  
      <domain name="domain1.awesomevoipdomain.faketld">
        <params>
          <param name="dial-string" value=""/>
        </params>
        <variables>
          <variable name="example_var" value="example_value_1"/>
        </variables>
        <user id="default" />
      </domain>
      <domain name="domain2.awesomevoipdomain.faketld">
        <params>
          <param name="dial-string" value=""/>
        </params>
        <variables>
          <variable name="example_var" value="example_value_2"/>
        </variables>
        <user id="default" />
      </domain>
    </section>
  </document>`;
  res.header("Content-Type", "application/xml");
  res.status(200).send(data);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });