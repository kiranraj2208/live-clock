let milli = false;
let m = false;
const callLiveClock = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date(Date.now());
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    let ml = now.getMilliseconds();
    let dd = now.getDate().toString().padStart(2, '0');
    let month = now.getMonth();
    month = (m) ? months[month]: (month+1).toString().padStart(2, '0');
    let year = now.getFullYear();
    hh = hh.toString().padStart(2, '0');
    mm = mm.toString().padStart(2, '0');
    ss = ss.toString().padStart(2, '0');
    const s = (milli) ? ':' + ml.toString().padStart(3, '0') : '';
    let str = `${hh}:${mm}:${ss}` + s; 
    document.getElementById('time').innerHTML = str;
    document.getElementById('date').innerHTML = `${dd} - ${month} - ${year}`;

    setTimeout(callLiveClock, 1);
}