javascript:(function () {
    var s = document.createElement("iframe")
    , f = function (a) { window.removeEventListener("message", f); document.body.removeChild(s); };
    s.src = "http://gitnsy.github.io/offlinable-bookmark/receiver.html";
    s.setAttribute("style", "width:0;height:0;opacity:0;");
    window.addEventListener("message", f);
    s.addEventListener("load", function ()
    { s.contentWindow.postMessage(JSON.stringify({ url: location.href, title: document.title }), "*") });
    document.body.appendChild(s);
})();
