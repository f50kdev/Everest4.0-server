import xpress = require('xpress');
// Create a new express app instance
const app: express.Application = xpress();
app.get('/', function (req, res) {
    res.send('Everes 4.0 - sc!');
});
app.listen(3000, function () {
    console.log('Everest4.0 -server side is listening on port 3000!');
});
