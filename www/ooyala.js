var exec = require('cordova/exec');
var channel = require('cordova/channel');

module.exports = {

    createPlayer: function (code, ecode, url, title, success, error) {
        exec(success, error, "Ooyala", "createPlayer", [code, ecode, url, title]);
    },

};