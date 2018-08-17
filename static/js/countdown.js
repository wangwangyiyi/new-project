window.onload = function(){
 var day = document.getElementById('day');
 var hour = document.getElementById('hour');
 var min = document.getElementById('min');
 var miao = document.getElementById('miao');
 var dayday = document.getElementById('day-day');

 var oDate = new Date();//获取当前时间;
 oDate.setFullYear(2019,7,6);//自动进位；
 oDate.setHours(0,0,0,0);
 function countDown(){
  //未来时间戳减去现在时间的时间戳;
  var ms = oDate.getTime() - new Date().getTime();
  //毫秒转换成秒
  var oSec = parseInt(ms/1000);
  //秒转换成天
  var oDay = parseInt(oSec/86400);
  //不到一天剩下的秒数;
  oSec%=86400;
  //转换成小时
  var oHour = parseInt(oSec/3600);
  //不到一小时剩下的秒数;
  oSec%=3600;
  //转换成分钟
  var oMin = parseInt(oSec/60);
  //不到一分钟剩下的秒数;
  oSec%=60;
  dayday.innerHTML = oDay

  day.innerHTML = oDay
  hour.innerHTML = oHour
  min.innerHTML = oMin
  miao.innerHTML = oSec

 } 
 countDown();
 setInterval(countDown,1000);
}