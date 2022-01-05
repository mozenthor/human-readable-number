module.exports = function toReadable (number) {
    switch(String(number).length) {
        case 1:
            if (number == 0)
            return "zero";
            else return a[number];
        case 2:
            if (String(number)[0] == 1)
            return a[number];
            if (String(number)[1] == 0)
            return b[String(number)[0]];
            else return b[String(number)[0]]+' '+a[String(number)[1]];
        case 3:
            if (String(number)[1] == 0 && String(number)[2] == 0)
            return a[String(number)[0]]+ ' hundred'
            if (String(number)[1] == 0)
            return a[String(number)[0]]+ ' hundred '+a[String(number)[2]];
            if (String(number)[1] == 1)
            return a[String(number)[0]]+ ' hundred '+a[String(number).slice(1)];
            if (String(number)[2] == 0)
            return a[String(number)[0]]+ ' hundred '+b[String(number)[1]];
            else return a[String(number)[0]]+ ' hundred '+b[String(number)[1]]+' '+a[String(number)[2]];
            }
}
let a=["", 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let b=["", "", 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];