$(document).ready(function () {
  fetchText();
  renderCurrentTime()
  renderQuote()
  clock();
  setInterval(clock, 500); // 0.5초마다 실행
  randomBackground();
});

async function fetchText() {
  let url = 'https://worldtimeapi.org/api/timezone/Asia/Seoul';
  try {
    let res = await fetch(url);
    return await res.json()
  } catch (error) {
    console.log(error);
  }
}

//현재 시간
function renderCurrentTime() {
  let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
  fetch(url)
    .then(res => res.json()).then((data) => {
      let datetime = data['datetime'].substr(11, 5)
    })
}

// 명언
function renderQuote() {
  let url = `https://korean-advice-open-api.vercel.app/api/advice`
  fetch(url)
    .then(res => res.json()).then((data) => {
      // console.log(data);
      let message = `" ${data['message']} "`
      let author = `- ${data['author']} - ${data['authorProfile']}`
      $('#content').text(message)
      $('#author').text(author)
    })
}

function clock() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  let AmPm ="AM";
  if(hours > 12){
    AmPm ="PM";
    hours %= 12;
  }
  $('#time').text(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${AmPm}`);
}

function randomBackground() {
  const backgrounds = ['bg01', 'bg02', 'bg03', 'bg04', 'bg05', 'bg06', 'bg07', 'bg08'];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  $('body').addClass(randomBackground);
}

