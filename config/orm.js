const connection = require("./connection.js")

const orm = 
{
    selectAll: function(tableInput, cb) {
        let queryString = "SELECT * FROM " + tableInput + ";"
        connection.query(queryString, function(err, result) {
            if (err) throw err
            cb(result)
        })
    }
    
}

module.exports = orm