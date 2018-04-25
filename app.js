var express = require('express');
var axios = require('axios');
var app = express();
 
app.get('/api/search', (req, res) => {
   var query = req.query.q;
   var limit = req.query.limit;
    var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&limit=' + limit + '&namespace=0&search=' + query;
    console.log(searchUrl);
   return axios.get(searchUrl)
    .then((response) => {
        return res.status(200)
            .json(response.data)
    })
    .catch((error) => {
        return res.status(500)
            .json({
                success: false,
                error: error.message
            })
    });
});

app.listen(3000, () => console.log('server is running'));