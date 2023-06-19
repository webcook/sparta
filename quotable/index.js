$(document).ready(function () {
    fetchText();
    renderCurrentTime()
    renderQuote()
    clock();
    setInterval(clock, 1000); // 1초마다 실행


});

async function fetchText() {
    //let response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Seoul');
    //let data = await response.text();
    //return data;

    let url = 'https://worldtimeapi.org/api/timezone/Asia/Seoul';
    try {
        let res = await fetch(url);
        // console.log(res);
        //{type: 'cors', url: 'https://worldtimeapi.org/api/timezone/Asia/Seoul', redirected: false, status: 200, ok: true, …}

        return await res.json()
        //[[PromiseResult]]:Object  datetime: "2022-11-08T11:20:26.201687+09:00"

    } catch (error) {
        console.log(error);
    }



}





//현재 시간
function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
    fetch(url)
        .then(res => res.json()).then((data) => {
            // console.log(data['datetime']);
            let datetime = data['datetime'].substr(11, 5)
            // $('#time').text(datetime)
        })
}
// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            console.log(data);
            let content = `" ${data['content']} "`
            let author = `- ${data['author']} -`
            $('#content').text(content)
            $('#author').text(author)
        })
}

function clock() {
    var time = new Date();
    console.log(time);
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var AmPm ="AM";
    if(hours > 12){
        var AmPm ="PM";
        hours %= 12;
    }

    $('#time').text(`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} ${AmPm}`);

    //Target.innerText =
    //`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

    //Target_apm.innerText = `${AmPm}`;

}

