'use strict';
var current = document.getElementById('_unistr');
if (current)
    current.parentNode.removeChild(current);
var script = document.createElement('script');
script.id = '_unistr';
var str = String.raw`


var encodings = {
    cp1252: '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u20ac\ufffd\u201a\u0192\u201e\u2026\u2020\u2021\u02c6\u2030\u0160\u2039\u0152\ufffd\u017d\ufffd\ufffd\u2018\u2019\u201c\u201d\u2022\u2013\u2014\u02dc\u2122\u0161\u203a\u0153\ufffd\u017e\u0178\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff',

    cp1251: '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u0402\u0403\u201a\u0453\u201e\u2026\u2020\u2021\u20ac\u2030\u0409\u2039\u040a\u040c\u040b\u040f\u0452\u2018\u2019\u201c\u201d\u2022\u2013\u2014\ufffd\u2122\u0459\u203a\u045a\u045c\u045b\u045f\xa0\u040e\u045e\u0408\xa4\u0490\xa6\xa7\u0401\xa9\u0404\xab\xac\xad\xae\u0407\xb0\xb1\u0406\u0456\u0491\xb5\xb6\xb7\u0451\u2116\u0454\xbb\u0458\u0405\u0455\u0457\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f'
};

//var str = convert('äàëåå', 'cp1252', 'cp1251');

function convert(str, from, to)
{
    var src = encodings[from];
    var dest = encodings[to];

    var s = '';
    for (var i = 0; i < str.length; i++)
    {
        //console.log(dest.charAt(src.indexOf(str[i])));
        s += dest.charAt(src.indexOf(str[i])).toString();
    }
    return s;
}



var KEY_MAP = {
    12: 'Clear',
    14: 'Enter',
    33: 'PgUp',
    34: 'PgDown',
    35: 'End',
    36: 'Home',
    37: 'Left',
    38: 'Up',
    39: 'Right',
    40: 'Down',
    45: 'Insert',
    46: 'Delete',
    96: 'Numpad0',
    97: 'Numpad1',
    98: 'Numpad2',
    99: 'Numpad3',
    100: 'Numpad4',
    101: 'Numpad5',
    102: 'Numpad6',
    103: 'Numpad7',
    104: 'Numpad8',
    105: 'Numpad9',
    106: '*',
    107: 'Plus',
    108: '_',
    109: '-',
    111: '/',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    124: 'F13',
    125: 'F14',
    126: 'F15',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '\`',
    219: '[',
    221: ']'
};

var isMac = (navigator.appVersion.indexOf("Mac") != -1);

function keyEventToString(evt) {
    var tokens = [];
    if (evt.ctrlKey) {
        tokens.push('Control');
    }
    if (evt.altKey) {
        tokens.push(isMac ? 'Option' : 'Alt');
    }
    if (evt.metaKey) {
        tokens.push(isMac ? 'Command' : 'Meta');
    }
    if (evt.shiftKey) {
        tokens.push('Shift');
    }
    if (evt.keyCode >= 48 && evt.keyCode <= 90) {
        tokens.push(String.fromCharCode(evt.keyCode));
    } else if (KEY_MAP[evt.keyCode]) {
        tokens.push(KEY_MAP[evt.keyCode]);
    } else {
        return '';
    }
    return tokens.join('+');
}

function getDefaultKeyString() {
    return keyEventToString({
        keyCode: 83,  // 's'
        shiftKey: true,
        altKey: true,
        ctrlKey: true,
        metaKey: false});
}


document.addEventListener('keydown', function(evt) {
    if (!document.hasFocus()) {
        return true;
    }
    var keyStr = keyEventToString(evt);

    //console.log('key: ' + keyStr);
    if (keyStr == 'Control+\`')
    {
        var tinyMCE = window.parent.tinyMCE;

        console.log(tinyMCE.activeEditor.selection.getContent());
        var rus = convert(tinyMCE.activeEditor.selection.getContent(), 'cp1252', 'cp1251');
        //console.log(rus);
        tinyMCE.activeEditor.selection.setContent(rus);

        evt.stopPropagation();
        evt.preventDefault();
        return false;
    }
    return true;
}, false);

`;
script.innerHTML = str;
document.body.appendChild(script);

