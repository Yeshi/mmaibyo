
function update(url){
    console.log(url);
    var elm = $("<li></li>");
    var thumb = $("<img src='"+ url.media[0] + "'>");
    elm.append(thumb);
    $("#debug").prepend(elm);
}

var socket = io.connect('http://nodejs-maibyo.rhcloud.com:8000');
socket.on('message', function(t) {
    update(t);
});


