#!/usr/bin/env node
var time = new Date();
console.log(time);
module.exports = {
    whatsTheTime: function(){
        return new Date();
    }
}
