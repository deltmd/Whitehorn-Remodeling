var app = require('../index')
var db = app.get('db')

module.exports = {
  read: function (req,res) {
    db.run("select * from test", function(err, response) {

      if (err) {
          res.status(500).send(err)
      }
      else if (response.length < 1) {
          res.status(400).send('No such agreement.')
      }
      else(
        res.status(200).send(response)
      )
    });
  }
}
