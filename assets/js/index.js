// this page will have the counter javascript code for the index.html page


//   CountDown

var due = new Date("April 01, 2021 1:00:00").getTime();


 var counter = setInterval(function(){
    var now = new Date().getTime(); 

    var dif = due - now;

    var days = Math.floor(dif/ (1000*60*60*24));

    var hours = Math.floor((dif % (1000* 60 * 60 *24) / (1000* 60* 60)));
    
    var mins =  Math.floor((dif % (1000* 60 * 60) / (1000* 60)));
    
    var secs =  Math.floor((dif % (1000* 60 ) / 1000));

    document.querySelector('.showCounter').innerHTML = days +'d: ' +hours +'h: ' + mins +'m: ' + secs+'s';
 }, 1000);

 document.querySelector('.btn').addEventListener('click', ()=>{
    clearInterval(counter);
})

// 1day = 24hrs
// 1hr = 60mins
// 1min = 60secs