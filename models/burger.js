// Import orm.js into burger.js
var orm = require("../config/orm.js");

// calls the ORM functions using burger specific input for the ORM.
var burger = {

    all: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export
module.exports = burger;