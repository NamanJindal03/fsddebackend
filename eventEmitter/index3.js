class UrlShortener {
  constructor() {
    this.usersData = {};

    // this.baseUrl = "https://namansir/";
    this.baseUrl = "https://localhost:3000/shorturl/"

    this.count = 1;
  }

  shortenUrl(originalUrl) {
    const shortCode = this.generateShortCode();

    const shortUrl = this.baseUrl + shortCode;

    this.usersData[shortCode] = originalUrl;

    return shortUrl;
  }

  expandUrl(shortUrl) {
    const shortCode = shortUrl.replace(this.baseUrl, "");

    const originalUrl = this.usersData[shortCode];

    return originalUrl;
  }

  generateShortCode() {
    const shortCode = this.count + "";//count -> 

    this.count++;

    return shortCode;
  }
}

/* 
    /sh
    



    app.get('shorturl/:shortcode', (req, res) => {
        //find the info inside my object
        if(no exist ) return error
        res.redirect(originalUrl)
    })

*/


