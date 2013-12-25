window.getRegisteredCallbacks=function(m){
            return window['~reg~callbacks~'+m];
}
window.defineModule=function(m){
            window['~reg~callbacks~'+m]={};
}
defineModule("module$_GET")
window.registerCallback=function(m,f){
            if(window['~status~done~'+m]){
                        f();
            }else{
                        if(window['~reg~callbacks~'+m]===undefined){
                                    window['~reg~callbacks~'+m]=[f];
                                    window['~status~done~'+m]=false;
                        }else{
                                    window['~reg~callbacks~'+m].push(f);
                        }
            }
}
window.clearRegisteredCallbacks=function(m){
            delete window['~reg~callbacks~'+m];
            delete window['~status~done~'+m];
}
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
            window["~status~done~module$_GET"]=true;
            window.clearRegisteredCallbacks("module$_GET");
            for(var i in callback){
                        callback[i]($_GET);
            }
})(window.getRegisteredCallbacks("module$_GET"));
