describe("DataLayer", function () {
    function Bookmark(url, title, comment) {
        this.url = url;
        this.title = title;
        this.comment = comment;
    };

    function desirializeBookmark(json) {
        var a = JSON.parse(json);
        a.date = Date.parse(a.date);
        return a;
    }

    var data = new youbmark.DataContext()
     , bookmark = [{url:"foo", title:"bar", comment:"po",date:new Date()}
     , { url: "sense", title: "of", comment: "wonder", date: new Date() }
     , { url: "dai", title: "oh", comment: "jou", date: new Date() }];

    //setup localStorage
    bookmark.forEach(function (item) {
        localStorage.removeItem(item.url);
    });

    it("Save Bookmark and Get All Bookmark", function () {
        bookmark.forEach(function (item) {
            data.save(item);
        });

        expect(data.getAll()).toEqual(bookmark);
    });

    it("After save, LocalStorage contains all bookmark", function () {
        bookmark.forEach(function (item) {
            expect(item).toEqual(desirializeBookmark(data.get(item.url)));
        });
    });

    it("Get Bookmark by URL", function () {
        var getted = data.get(bookmark[1].url);

        expect(getted).toEqual(bookmark[1]);
    });

    it("Remove Bookmark by URL", function () {
        data.remove(bookmark[0].url);
        var getted = data.get(bookmark[0].url);

        expect(getted).toBeNull();
    });

    it("After remove, LocalStorage not contains removed bookmark", function () {
        expect(localStorage.getItem(bookmark[0].url)).toBeNull();

        bookmark.slice(1).forEach(function (item) {
            expect(item).toEqual(localStorage.getItem(item.url));
        });
    });

    it("Clear All Bookmark", function () {
        data.clear();
        expect(data.getAll()).toEqual([]);
    });

    it("After Clear, LocalStorage not contains bookmark", function () {
        bookmark.forEach(function (item) {
            expect(localStorage.getItem(item.url)).toBeNull();
        });
    });

});
