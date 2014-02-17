(function () {
    var s = document.createElement("iframe")
    , f = function (a) { window.removeEventListener("message", f); console.log(a); document.body.removeChild(s); };
    s.src = ""; //
    s.style.height = 0;
    s.style.width = 0;
    s.style.opacity = 0;
    window.addEventListener("message", f);
    s.addEventListener("load", function ()
    { s.contentWindow.postMessage(JSON.stringify({ url: location.href, title: document.title }), "*") });
    document.body.appendChild(s);
})();
