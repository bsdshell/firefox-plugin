/*
Just draw a border round the document.body.
*/
document.body.style.border = "2px solid red";
var s = document.createElement('script');
s.type = 'text/javascript';
s.src='https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js';
document.body.appendChild(s);

const pre = document.getElementsByTagName('pre');
const elementArray = Array.from(pre);
elementArray.forEach(el => el.className = 'prettyprint');
