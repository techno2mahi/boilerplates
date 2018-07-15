
import { Greeter } from './greeter.js';
import { DataService } from './services/dataService';
//require('./src/css/styles.css');

document.write("Hello from Javascript");

var greeterObj = new Greeter("from Index hello");
//var greeterObj = new Greeter1("from greeter1 hello");
document.write('<h1>Hello World from the server'+ greeterObj.greet() +' </h1>');

var dataService = new DataService('POST', 'd9ccd37d2d650e0f24917ab3ea4126be');
//dataService.logJSON('https://developers.zomato.com/api/v2.1/search');
dataService.getJSON('https://developers.zomato.com/api/v2.1/search')
.then(data => {
    console.log(data);
})
.catch(err => { 
    console.log(err);
});

//alert("hi");