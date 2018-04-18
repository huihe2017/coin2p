export function setTime(time) {
    let currentTime = Date.parse(new Date());
    let dateTime = time;//后台传递来的时间
    let d_day = Date.parse(new Date(dateTime-0));
    let day = Math.abs(parseInt((d_day - currentTime) / 1000 / 3600 / 24));//计算日期
    let hour = Math.abs(parseInt((d_day - currentTime) / 1000 / 3600));//计算小时
    let minutes = Math.abs(parseInt((d_day - currentTime) / 1000 / 60));//计算分钟
    let seconds = Math.abs(parseInt((d_day - currentTime) / 1000));//计算秒
    if (day >= 2) {
        return (parseInt(day) + "天前").toString();
    } else if (day > 0 && day < 2) {
        return ("昨天").toString();
    } else if (hour > 0 && hour < 24) {
        return (parseInt(hour) + "小时前").toString();
    } else if (minutes > 0 && minutes < 60) {
        return (parseInt(minutes) + "分钟前").toString();
    } else if (seconds > 0 && seconds < 60) {
        return (parseInt(seconds) + "秒前").toString();
    }
}