var youbmark = youbmark || {};
(function () {
    Bookmark = function Bookmark(url, opts) {
        /// <summary>Bookmark</summary>
        /// <param name="url" type="String">Bookmarks URL</param>
        /// <param name="opts" type="Object">title,comment,createDate</param>

        this.url = url;
        if (opts) {
            this.comment = opts.comment;
            this.title = opts.title;
            this.createDate = opts.createDate || new Date();
        } else {
            this.createDate = new Date();
        }
    }

    Bookmark.parse = function (json) {
        /// <summary>JSON to Bookmark</summary>
        /// <param name="json" type="String">json string</param>
        /// <returns type="Bookmark">Deserealized Bookmark</returns>

        var a = JSON.parse(json),
        b = new Bookmark(a.url, { title: a.title, comment: a.comment });
        b.createDate = new Date(a.createDate);
        return b;
    }

    Bookmark.prototype = {
        /// <summary>JSON to Bookmark</summary>
        /// <param name="json" type="String">json string</param>
        /// <returns type="Bookmark">Deserialized Bookmark</returns>

        toJson: function () {
            return JSON.stringify(new Bookmark(this.url, { title: this.title, comment: this.comment,createDate:+this.createDate }));
        }
    }
    youbmark.Bookmark = Bookmark;
})();