var youbmark = youbmark || {};
(function () {
    //DataLayer(DataContext)
    dc = function () { };
    dc.prototype = {
        save: function (bookmark) {
            localStorage.setItem(bookmark.url, bookmark.toJson());
        }
        , get: function (url) {
            var a = localStorage.getItem(url);
            return a && youbmark.Bookmark.parse(a);
        }
        , getAll: function () {
            var result = [];
            for (var i = 0; i < localStorage.length; i++) {
                result.push(youbmark.Bookmark.parse(localStorage.getItem(localStorage.key(i))));
            }
            return result.sort(function(a,b){return a.createDate > b.createDate;});
        }
        , remove: function (url) { localStorage.removeItem(url); }
        , clear: function () { localStorage.clear(); }
    };

    youbmark.DataContext = dc;
})();
