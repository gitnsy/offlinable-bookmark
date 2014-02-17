/// <reference path="../knockout-3.0.0.debug.js" />
/// <reference path="./youbmark.js" />
/// <reference path="./DataContext.js" />

var youbmark = youbmark || {};
(function () {
    youbmark.ViewModel = function (dataContext) {
        /// <summary>Mainpage ViewModel</summary>
        /// <param name="dataContext" type="DataContext">Datasource</param>

        var self = this, data = dataContext;
        self.data = new youbmark.DataContext(); //for debug

        self.bookmarks = ko.observableArray([new youbmark.Bookmark("sense",{title:"of",comment:"wonder"})]);

        self.putBookmark = function (bookmark) {
            self.bookmarks.add(bookmark);
            data.save(bookmark);
        };
        self.removeBookmark = function (index) {
            /// <summary>remove bookmark at UI and Datasource</summary>
            /// <param name="index" type="Int">Index of remove bookmark</param>

            data.remove(self.bookmarks.splice(index, 1)[0].url);
        };

        self.clearBookmark = function () {
            
        };
    };
})();