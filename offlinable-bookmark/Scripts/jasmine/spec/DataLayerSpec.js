describe("DataLayer", function () {
    var data = new youbmark.DataContext()
     , bm = youbmark.Bookmark
     , bookmark = [new bm("foo", { title: "bar", comment: "po", createDate: new Date(1) })
               , new bm("sense", { title: "of", comment: "wonder", createDate: new Date(10) })
               , new bm("dai", { title: "oh", comment: "jou", createDate: new Date(1000) })
     ];
    bookmark.forEach(function (item) {
        localStorage.removeItem(item.url);
    });

    if (localStorage.length > 0) {
        alert("this test has bug, will clear your this origin localStorage!\r\nyou has data from localStorage. cancel this test.");
        return 0;
    }

    it("Save Bookmark and Get All Bookmark", function () {
        bookmark.forEach(function (item) {
            data.save(item);
        });

        expect(data.getAll()).toEqual(bookmark);
    });

    it("After save, LocalStorage contains all bookmark", function () {
        bookmark.forEach(function (item) {
            expect(item).toEqual(data.get(item.url));
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
            expect(item).toEqual(bm.parse(localStorage.getItem(item.url)));
        });
    });

    //dropboxAPIがlocalStorageに同期用トークンを仕込むのでクリアはいったん作らない。伴い
    xit("Clear All Bookmark", function () {
        data.clear();
        expect(data.getAll()).toEqual([]);
    });

    xit("After Clear, LocalStorage not contains bookmark", function () {
        bookmark.forEach(function (item) {
            expect(localStorage.getItem(item.url)).toBeNull();
        });
    });
});
