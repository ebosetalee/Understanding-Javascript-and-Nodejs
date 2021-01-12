function date(){
    let find_date = new Date();
    let daylist;
    daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return (daylist[find_date.getDay()]+ ", " + find_date.getHours()+ ":" + find_date.getMinutes());
}
exports.myDateTime = function(){
    return date();
}