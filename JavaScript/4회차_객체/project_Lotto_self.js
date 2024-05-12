// 2024. 05. 12


// 날짜 설정
let lotto_title = document.getElementById('lotto_date');
let now = new Date();

let year = now.getFullYear();
let month = now.getMonth() + 1;
let date = now.getDate();


lotto_title.textContent = `${year}년 ${month}월 ${date}일 로또 번호 추첨`


// 추첨 눌렀을 때 난수 6개 발생

let start = document.getElementById('start');
let retry = document.getElementById('retry');


let ul = document.querySelector('ul'); 

let num = []

start.onclick = function(){
  while(num.length < 6){
    let ran = Math.floor(Math.random()* 45 + 1);

    if(num.indexOf(ran) === -1){
      num.push(ran);
      let li =  document.createElement('li')
      li.textContent = ran;
      ul.append(li)
    }
  
  }
  
}
