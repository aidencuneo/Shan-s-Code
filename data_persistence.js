var cookies = document.cookie.split(';');

for (var i = 0; i < cookies; i++) {
    var c = cookies[i];

    if (c.split('=')[0] == 'page') {
        var value = c.split('=')[1];
        break;
    }
}
