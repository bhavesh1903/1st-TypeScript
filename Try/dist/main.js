"use strict";
var one_1 = require("./one");
var bhavesh_1 = require("./bhavesh");
//import * as _ from  'lodash';
//import { timer } from 'rxjs/observable/timer';
/*const  source=timer(1000);
const subscribe=source.subscribe(val=>console.log(val));*/
new one_1.One();
new bhavesh_1.Bhavesh();
var App = (function () {
    function App() {
        this.title = "first interface";
        console.log("hello world");
    }
    App.prototype.getUser = function () {
        return [{ name: "bhavesh" }];
    };
    return App;
}());
new App();
//console.log( _.isArray(new App().getUser()));
/*another example*/
var person = { name: 'bhavesh' };
function addAge(age) {
    return function (person) {
        return {
            age: age,
            name: person.name
        };
    };
}
var newPerosn = addAge(30)(person);
console.log(newPerosn);
