var youbmark = youbmark || {};
(function () {
    //DataLayer(DataContext)
    dc = function () { };
    dc.prototype = {
        save: function (bookmark) {
            bookmark.date = bookmark.date.toJSON();
            localStorage.setItem(bookmark.url, JSON.stringify(bookmark));
        }
        , get: function (url) {
            var a = JSON.parse(localStorage.getItem(url));
            a.date = Date.parse(a.date);
            return a;
        }
        , getAll: function () {
            var result = [];
            for (var i = 0; i < localStorage.length; i++) {
                result.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
            return result;
        }
        , remove: function (url) { localStorage.removeItem(url); }
        , clear: function () { localStorage.clear(); }
    };

    youbmark.DataContext = dc;
})();
