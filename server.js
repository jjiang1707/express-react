const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors')

const app = express();

app.use(helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", 'https://fonts.googleapis.com'],
      connectSrc: ["'self'", 'https://cors-anywhere.herokuapp.com'], // only allow app to connect to the set domains. Request temp access here: https://cors-anywhere.herokuapp.com/corsdemo
      imgSrc: ["'self'", 'https://*.yelpcdn.com'], // only allow app to load images from set domains
      frameSrc: ["'self'" ] // only allow the loading of iframes from self origin. Prevents someone embedding another html document in app code if their are vulnerabilities
    }
   }));


app.use(cors({
    origin: 'http://localhost:3000'
})); 


app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
 res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`App listening on port ${port}!`);
});

