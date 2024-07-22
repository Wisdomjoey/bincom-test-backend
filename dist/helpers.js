export var generateId = function (length) {
    var chars = '0123456789';
    var id = '';
    for (var i = 0; i < length; i++) {
        id += chars[Math.floor(Math.random() * chars.length)];
    }
    return id;
};
