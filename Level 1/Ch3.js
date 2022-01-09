function conv(str){
    str = str.toLowerCase();
    if(str === 'a')
        return "tiva";
    if(str === 'e')
        return "llia";
    if(str === 'i')
        return "mus";
    if(str === 'o')
        return "phylum";
    if(str === 'u')
        return "rea";
    return "";
}
function translatePlantLatin(message) {
    message = message.toLowerCase();
    var ans = "";
    for(var i=0;i<message.length;i++){
        ans = ans + message[i] + conv(message[i]);
    }
    return ans.toString();
}