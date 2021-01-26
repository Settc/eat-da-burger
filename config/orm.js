const connection = require("./connection.js")

const orm = 
{
    selectAll: function() 
        {
            const queryString = "SELECT * FROM burgers"
            connection.query(queryString, function(err, res) 
            {
                if (err) throw err
                console.log(result)
            })
        }
}

module.exports = orm