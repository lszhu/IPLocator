/* using ajax request text from remote server */
function getText(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            callback(request.responseText);
        }
    };
    request.send(null);
}

/* put data in a table */
function show(str, dst) {
    //console.log(data);
    var data = JSON.parse(str);
    var table = document.createElement('table');
    table.style.padding = '20px';
    var tr;
    dst.innerHTML = '';
    for (var attr in data) {
        if (data.hasOwnProperty(attr)) {
            tr = document.createElement('tr');
            tr.innerHTML = '<td>' + attr + '</td>' +
                '<td style="padding-left: 20%;">' + (data[attr] || 'undefined') + '</td>';
            table.appendChild(tr);
        }
    }
    dst.appendChild(table);
}

/* validate IP Address */
function validIp(ip) {
    if (!ip || ip.trim() == '') {
        return true;
    }
    var re = /(\d+)\.(\d+)\.(\d+)\.(\d+)/;
    var result = re.exec(ip);
    if (!result || result.length != 5) {
        return false;
    }
    for (var i = 1; i <= 4; i++) {
        if (result[i] > 255) {
            return false;
        }
    }
    return true;
}