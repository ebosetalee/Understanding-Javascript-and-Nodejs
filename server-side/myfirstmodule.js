function date(){
    let findDate = new Date();
    let daylist;
    daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (daylist[findDate.getDay()]+ ", " + findDate.getHours()+ ":" + findDate.getMinutes());
}
exports.myDateTime = function(){
    return date();
}