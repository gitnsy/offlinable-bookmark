﻿var youbmark = youbmark || {};
(function () {
    var dc = function () { };
    dc.prototype = {
        save: function (bookmark) {
            /// <summary>save bookmark to Persistent storage</summary>
            /// <param name="json" type="String">bookmark object</param>

            localStorage.setItem(bookmark.url, bookmark.toJson());
        }

        , get: function (url) {
            /// <summary>get bookmark</summary>
            /// <param name="json" type="String">bookmark url</param>
            /// <returns type="Bookmark">Deserialized Bookmark</returns>

            var a = localStorage.getItem(url);
            return a && youbmark.Bookmark.parse(a);
        }

        , getAll: function () {
            /// <summary>get all bookmarks sorted by date</summary>
            /// <returns type="Bookmark">all bookmarks sorted by date</returns>
            
            var result = [];
            for (var i = 0; i < localStorage.length; i++) {
                var s = youbmark.Bookmark.parse(localStorage.getItem(localStorage.key(i)));
                if (s !== null && s.url ) {
                    result.push(s);
                }
            }
            return result.sort(function(a,b){return b.createDate - a.createDate;});
        }
        , remove: function (url) {
            /// <summary>remove bookmark from Persistent storage</summary>
            /// <param name="json" type="String">bookmark url</param>

            localStorage.removeItem(url);
        }
    };

    youbmark.DataContext = dc;
})();