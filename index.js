setInterval(() => {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let second = document.getElementById('second');
  let ampm = document.getElementById('ampm');


  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let hr_dot = document.querySelector('.hr_dot')
  let min_dot = document.querySelector('.min_dot')
  let sec_dot = document.querySelector('.sec_dot')

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "pm" : "am";

  //convert 24hr clock to 12hr clock 
  if (h > 12) {
    h = h - 12;
  }
  /*h = (h < 10) ? "0" + h : h;
  m = (h < 10) ? "0" + m : m;
  s = (h < 10) ? "0" + s : s;*/

  hours.innerHTML = h + "<br> <span>Hours<span>";
  minutes.innerHTML = m + "<br> <span>Minutes<span>";
  second.innerHTML = s + "<br> <span>Seconds<span>";
  ampm.innerHTML = am;
  
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  //12 hrs clock
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  //60 minutes
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  //60 second
  hr_dot.style.transform = "rotate(${h * 30}deg)";
  // 360 / 12 = 30
  min_dot.style.transform = "rotate(${m * 6}deg)";
  // 360 / 60 = 60
  sec_dot.style.transform = "rotate(${s * 6}deg)";
  // 360 / 60 = 60
  

  

  

})
