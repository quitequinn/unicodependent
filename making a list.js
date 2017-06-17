
////////////////////////////
//FLIPTEXT
var flipLower = ['\u0250', 'q', '\u0254', 'p', '\u01DD', '\u025F', '\u0183', '\u0265', '\u0131', '\u027E', '\u029E', '\u05DF', '\u026F', 'u', 'd', 'b', '\u0279', '\u0287', 'n', '\u028C', '\u028D', '\u028E'];
var flipUpper = [ '∀','q','Ͻ','ᗡ','Ǝ','Ⅎ','ƃ','H','I','ſ','ʞ','˥','W','N','O','Ԁ','Ὁ','ᴚ','S','⊥','∩','Λ','M','X','ʎ','Z'];
var flipMisc = [
    '.' : '\u02D9',
    '[' : ']',
    '(' : ')',
    '{' : '}',
    '?' : '\u00BF',
    '!' : '\u00A1',
    '\'' : ',',
    '<' : '>',
    '_' : '\u203E',
    '\"' : '\u201E',
    ';' : '\u061B',
    '\u203F' : '\u2040',
    '\u2045' : '\u2046',
    '\u2234' : '\u2235',
];

function flipString(str) {
    var last = str.length - 1;
    var result = new Array(str.length)
    for (var i = last; i >= 0; --i) {
    var c = str.charAt(i)
    var r = flipTable[c]
    result[last - i] = r != undefined ? r : c
    }
    return result.join('')
}

}
for (i in flipTable) { 
    flipTable[flipTable[i]] = i; 
}

//Bubble text
function bubble(str) {
    var last = str.length - 1;
    var result = new Array(str.length)
    for (var i = 0; i <= last; i++) {
        var c = str.charAt(i)
        var r = flipTable[c]
        result[i] = r != undefined ? r : c

        var r = FlipTableInt[c];
        if( r != undefined ) result[i] =  r;
        
    }
    return result.join('')
}
function bubbleDark(str) {
    var last = str.length - 1;
    var result = new Array(str.length)
    for (var i = 0; i <= last; i++) {
        var c = str.charAt(i)
        var r = flipTable[c]
        result[i] = r != undefined ? r : c

        var r = FlipTableIntFilled[c];
        if( r != undefined ) result[i] =  r;

    }
    return result.join('')
}
function bubbleDouble(str) {
    var last = str.length - 1;
    var result = new Array(str.length)
    for (var i = 0; i <= last; i++) {
        var c = str.charAt(i)
        var r = flipTable[c]
        result[i] = r != undefined ? r : c

        var r = FlipTableIntDouble[c];
        if( r != undefined ) result[i] =  r;

    }
    return result.join('')
}
var bubbleLower = ['ⓐ','ⓑ','ⓒ','ⓓ','ⓔ','ⓕ','ⓖ','ⓗ','ⓘ','ⓙ','ⓚ','ⓛ','ⓜ','ⓝ','ⓞ','ⓟ','ⓠ','ⓡ','ⓢ','ⓣ','ⓤ','ⓥ','ⓦ','ⓧ','ⓨ','ⓩ'];
var bubbleUpper = ['Ⓐ','Ⓑ','Ⓒ','Ⓓ','Ⓔ','Ⓕ','Ⓖ','Ⓗ','Ⓘ','Ⓙ','Ⓚ','Ⓛ','Ⓜ','Ⓝ','Ⓞ','Ⓟ','Ⓠ','Ⓡ','Ⓢ','Ⓣ','Ⓤ','Ⓥ','Ⓦ','Ⓧ','Ⓨ','Ⓩ'];
var bubbleNumbers = ['◎','➀','➁','➂','➃','➄','➅','➆','➇','➈'];

var bubbleFillNumbers = ['⓿','➊','➋','➌','➍','➎','➏','➐','➑','➒','➓','⓫','⓬','⓭','⓮','⓯','⓰','⓱','⓲','⓳','⓴'];
var bubbleFillNumbersTwoDigit = ['➓','⓫','⓬','⓭','⓮','⓯','⓰','⓱','⓲','⓳','⓴'];

var bubbleDoubleNumbers = ['◎','⓵','⓶','⓷','⓸','⓹','⓺','⓻','⓼','⓽'];


//SMALL CAPS

function SCString(str) {
    var last = str.length - 1;
    var result = new Array(str.length)
    for (var i = 0; i <= last; i++) {
        var c = str.charAt(i)
        var r = SCTable[c]
        result[i] = r != undefined ? r : c
    }
    return result.join('')
}
var SCTable = ['ᴀ','ʙ','ᴄ','ᴅ','ᴇ','ғ','ɢ','ʜ','ɪ','ᴊ','ᴋ','ʟ','ᴍ','ɴ','ᴏ','ᴘ','ǫ','ʀ','s','ᴛ','ᴜ','ᴠ','ᴡ','x','ʏ','ᴢ'];

//blackLetter

var captitals = ["120068","120069","8493","120071","120072","120073","120074","8460","8465","120077","120078","120079","120080","120081","120082","120083","120084","8476","120086","120087","120088","120089","120090","120091","120092","8488"];
    
function toBlackletter(ascii)
{
    var result = "";
    
    for (var i = 0; i < ascii.length; i++)
    {
        var c = ascii.charCodeAt(i);
        
        if ((c >= 65) && (c <= 90))
        {
            c = c - 65;
            result = result.concat("&#" + captitals[c].toString() + ";");
        }
        else if ((c >= 97) && (c <= 122))
        {
            c = c - 97;
            result = result.concat("&#" + (c + 120094).toString() + ";");
        }
        else if (c == 10)
        {
            result = result.concat("<br/>");
        }
        else
        {
            result = result.concat(ascii[i]);
        }
    }
    return result;
}   

var bracketLowercase = ['⒜','⒝','⒞','⒟','⒠','⒡','⒢','⒣','⒤','⒥','⒦','⒧','⒨','⒩','⒪','⒫','⒬','⒭','⒮','⒯','⒰','⒱','⒲','⒳','⒴','⒵'];
var bracketNumerals = ['0','⑴','⑵','⑶','⑷','⑸','⑹','⑺','⑻','⑼','⑽','⑾','⑿','⒀','⒁','⒂','⒃','⒄','⒅','⒆'];
var bracketNumeralsTwoDigit = ['⑽','⑾','⑿','⒀','⒁','⒂','⒃','⒄','⒅','⒆'];

var periodNumerals = ['⒈','⒉','⒊','⒋','⒌','⒍','⒎','⒏','⒐']
var periodNumeralsTwoDigit = ['⒑','⒒','⒓','⒔','⒕','⒖','⒗','⒘','⒙','⒚','⒛']

var bold = {
    

}
var sans = {
"Ａ","Ｂ","Ｃ","Ｄ","Ｅ","Ｆ","Ｇ","Ｈ","Ｉ","Ｊ","Ｋ","Ｌ","Ｍ","Ｎ","Ｏ","Ｐ","Ｑ","Ｒ","Ｓ","Ｔ","Ｕ","Ｖ","Ｗ","Ｘ","Ｙ","Ｚ","ａ","ｂ","ｃ","ｄ","ｅ","ｆ","ｇ","ｈ","ｉ","ｊ","ｋ","ｌ","ｍ","ｎ","ｏ","ｐ","ｑ","ｒ","ｓ","ｔ","ｕ","ｖ","ｗ","ｘ","ｙ","ｚ","０","１","２","３","４","５","６","７","８","９"

Old Italic 
    𐌀𐌁𐌂𐌃𐌄𐌅𐌆𐌇𐌈𐌉𐌊𐌋𐌌𐌍𐌎𐌏𐌐𐌑𐌒𐌓𐌔𐌕𐌖𐌗𐌘𐌙𐌚𐌛𐌜𐌝𐌞𐌟𐌠𐌡𐌢𐌣

var boldSerif = {
𝐀𝐁𝐂𝐃𝐄This is multiple cursors

<p>𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌</p> 





𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳
𝐴𝐵𝐶𝐷𝐸This is multiple cursors

<p>𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀</p> 





𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍𝑎𝑏𝑐𝑑𝑒𝑓𝑔𝑕𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧
𝑨𝑩𝑪𝑫𝑬This is multiple cursors

<p>𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴</p> 





𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛
𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗

𝒜𝒝𝒞𝒟𝒠This is multiple cursors

<p>𝒡𝒢𝒣𝒤𝒥𝒦𝒧𝒨</p> 





𝒩𝒪𝒫𝒬𝒭𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝒺𝒻𝒼𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝓄𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏
𝓐𝓑𝓒𝓓𝓔This is multiple cursors

<p>𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜</p> 





𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃

𝔄𝔅𝔆𝔇𝔈This is multiple cursors

<p>𝔉𝔊𝔋𝔌𝔍𝔎𝔏𝔐</p> 





𝔑𝔒𝔓𝔔𝔕𝔖𝔗𝔘𝔙𝔚𝔛𝔜𝔝𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷
𝕬𝕭𝕮𝕯𝕰This is multiple cursors

<p>𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸</p> 





𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟

𝔸𝔹𝔺𝔻𝔼𝔽𝔾𝔿𝕀𝕁𝕂𝕃𝕄𝕅𝕆𝕇𝕈𝕉𝕊𝕋𝕌𝕍𝕎𝕏𝕐𝕑𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫
𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡

𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓
𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇
𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫

𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻
𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯
𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵

𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣
𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿

🄐🄑🄒🄓🄔🄕🄖🄗🄘🄙🄚🄛🄜🄝🄞🄟🄠🄡🄢🄣🄤🄥🄦🄧🄨🄩
🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉
🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩
🅰🅱🅲🅳🅴🅵🅶🅷🅸🅹🅺🅻🅼🅽🅾🅿🆀🆁🆂🆃🆄🆅🆆🆇🆈🆉

🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿

}       
























//SETUP

function makeRows(where, functions){
    $.each( functions, function( key, value ) {
        $(where).append('
            <section class="container">     
                <p class="h3 strikeThrough same"></p>
            </section>
        ');
        same(functions);
    });
}

var functions = {
    'strikeThrough'

}

makeRows('.list', funtions);




function setup(){
    $('.same').text('Welcome');
    same();
}

function same(functions){
    text = $('.input').text();
    $('.'+functions).html(functions(text));
}

$(".input").keyup(function() {
    same();
});

setup();

var uppercase={
	'A' : i,
    'B' : i,
    'C' : i,
    'D' : i,
    'E' : i,
    'F' : i,
    'G' : i,
    'H' : i,
    'I' : i,
    'J' : i,
    'K' : i,
    'L' : i,
    'M' : i,
    'N' : i,
    'O' : i,
    'P' : i,
    'Q' : i,
    'R' : i,
    'S' : i,
    'T' : i,
    'U' : i,
    'V' : i,
    'W' : i,
    'X' : i,
    'Y' : i,
    'Z' : i
}
var lowercase={
    'a' : i,
    'b' : i,
    'c' : i,
    'd' : i,
    'e' : i,
    'f' : i,
    'g' : i,
    'h' : i,
    'i' : i,
    'j' : i,
    'k' : i,
    'l' : i,
    'm' : i,
    'n' : i,
    'o' : i,
    'p' : i,
    'q' : i,
    'r' : i,
    's' : i,
    't' : i,
    'u' : i,
    'v' : i,
    'w' : i,
    'x' : i,
    'y' : i,
    'z' : i
}
var numbers {
    '0' : i,
    '1' : i,
    '2' : i,
    '3' : i,
    '4' : i,
    '5' : i,
    '6' : i,
    '7' : i,
    '8' : i,
    '9' : i
}

var numbers {
    '0' : i,
    '1' : i,
    '2' : i,
    '3' : i,
    '4' : i,
    '5' : i,
    '6' : i,
    '7' : i,
    '8' : i,
    '9' : i
}
var numbersTwoDigit {
    '10' : '⒑',
    '11' : '⒒',
    '12' : '⒓',
    '13' : '⒔',
    '14' : '⒕',
    '15' : '⒖',
    '16' : '⒗',
    '17' : '⒘',
    '18' : '⒙',
    '19' : '⒚',
    '20' : '⒛'
}