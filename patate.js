let answer = prompt("Hey mon ami ! Tu aimes ça les patates ?");
let sacApatate = '';
if (answer == "oui" || answer == "yes" || answer == "o")
{
    for (let i = 0; i < 7; i++) {
        console.log(sacApatate += '#');
    }
    alert('Tu as un cadeau dans ta console');
} else if (answer == "non" || answer == "no" | answer == "n")
{
    alert ("La mort ou le tchétché?");
} else
{
    alert ("Je vous sens comme tiraillé");
} 