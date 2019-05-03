import {One} from "./one";
import {Bhavesh} from "./bhavesh";
import  {SocialNetwrok} from "./socialNetwrok";
//import * as _ from  'lodash';


//import { timer } from 'rxjs/observable/timer';

/*const  source=timer(1000);
const subscribe=source.subscribe(val=>console.log(val));*/
new One();
new Bhavesh();
class App implements  SocialNetwrok{
    title="first interface";
    getUser() {
        return[{name:"bhavesh"}];
    }

    constructor(){

        console.log("hello world");
    }
}
new App();
//console.log( _.isArray(new App().getUser()));
/*another example*/
const person={name:'bhavesh'};
function  addAge(age) {
    return function (person) {
        return {
            age,
            name:person.name
        }
    }
}
const newPerosn=addAge(30)(person);
console.log(newPerosn);