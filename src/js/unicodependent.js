////////////////////////////
//Character Table
var uppercase=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numbers=['0','1','2','3','4','5','6','7','8','9'];
var numbersTwoDigit=['10','11','12','13','14','15','16','17','18','19','20'];

////////////////////////////
//STRIKE THROUGH
function strikeThrough(text) {
    var result = '';
    $.each(text.split(''), function() {
        result += this + '\u0336';
    });
    return result;
}

////////////////////////////
//Black Letter

var BlackletterUpper=['120068','120069','8493','120071','120072','120073','120074','8460','8465','120077','120078','120079','120080','120081','120082','120083','120084','8476','120086','120087','120088','120089','120090','120091','120092','8488'];

function toBlackletter(text) {
    var result = '';
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if ((c >= 65) && (c <= 90)) {
            c = c - 65;
            result = result.concat('&#' + BlackletterUpper[c].toString() + ';');
        }
        else if ((c >= 97) && (c <= 122)) {
            c = c - 97;
            result = result.concat('&#' + (c + 120094).toString() + ';');
        }
        else if (c == 10) {
            result = result.concat('<br/>');
        }
        else {
            result = result.concat(text[i]);
        }
    }
    return result;
}
