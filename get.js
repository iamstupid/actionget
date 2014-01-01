(function(callback){
    function toChar(nch) {
        var f = parseInt(nch, 16);
        return String.fromCharCode(f);
    }
    window["$_GET"] = {};
    var k = location.href.split("?")[1].split("&");
    for (var i in k) {
        var f = k[i].split("=");
        $_GET[f[0]] = f[1].replace(/%[0-9A-Fa-f][0-9A-Fa-f]/g, toChar);
    }
})();
