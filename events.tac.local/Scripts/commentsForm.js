function createCommentItem(form, path) {
    var service = new ItemService({ url: '/sitecore/api/ssc/item' });
    var obj = {
        ItemName: 'comment - ' + form.name.value,
        TemplateId: '{A5D4F290-56B6-41F0-96AA-79F02E1541EA}',
        Name: form.name.value,
        Comment: form.comment.value
    };

    service.create(obj)
        .path(path)
        .execute()
        .then(function (item) {
            form.name.value = form.comment.value = '';
            window.alert('Thanks. Your message will show on the site shortly');

        })
        .fail(function (err) {
            window.alert(err);
        });
    event.preventDefault();
    return false;
}