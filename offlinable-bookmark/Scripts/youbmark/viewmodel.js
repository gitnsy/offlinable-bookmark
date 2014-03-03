/// <reference path="../knockout-3.0.0.debug.js" />
/// <reference path="./bookmark.js" />
/// <reference path="./datacontext.js" />

var youbmark = youbmark || {};
(function () {
    youbmark.ViewModel = function (dataContext) {
        /// <summary>Mainpage ViewModel</summary>
        /// <param name="dataContext" type="DataContext">Datasource</param>

        var self = this
        , bm = youbmark.Bookmark
        , oo = ko.observable
        //, data = dataContext;
        , data = dataContext || new youbmark.DataContext(); //for debug

        self.newBookmark = {
          title:oo()
         ,url:oo()
         ,comment:oo()
        };

        self.bookmarks = ko.observableArray(
            data.getAll()
             //[new bm("foo", {title:"bar", comment:"po" ,createDate:new Date(1)})
             //  , new bm("sense", {title:"of", comment:"wonder", createDate: new Date(10) })
             //  , new bm("dai", {title: "oh", comment: "jou", createDate: new Date(1000) })]
        );
        
        self.saveBookmark = function () {
            var s = new youbmark.Bookmark(self.newBookmark.url()
            ,{title:self.newBookmark.title(),comment:self.newBookmark.comment()});
            
            self.bookmarks.unshift(s);
            data.save(s);
        };
        
        self.removeBookmark = function (index) {
            /// <summary>Remove bookmark at UI and Datasource</summary>
            /// <param name="index" type="Int">Index of remove bookmark</param>

            data.remove(self.bookmarks.splice(index, 1)[0].url);
        };

        self.clearBookmark = function () {
            
        };
    };
})();