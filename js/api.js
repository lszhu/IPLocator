function show(str, dst) {
    //console.log(data);
    var data = JSON.parse(str);
    var table = document.createElement('table');
    var tr;
    dst.innerHTML = '';
    for (var attr in data) {
        if (data.hasOwnProperty(attr)) {
            tr = document.createElement('tr');
            tr.innerHTML = '<td>' + attr + '</td>' +
                '<td>' + (data[attr] || 'undefined') + '</td>';
            table.appendChild(tr);
        }
    }
    dst.appendChild(table);
}
var srcUrl = 'https://freegeoip.net/json/';
var button = document.querySelector('a.button');
button.addEventListener('click', function() {
    var ip = document.getElementsByTagName('input')[0].value;
    getText(srcUrl + ip, function(data) {
        var dst = document.querySelector('div.container.ip');
        show(data, dst);
    });
});