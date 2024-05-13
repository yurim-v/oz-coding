// 2024. 05. 12 ~ 2024.05.13


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

let li ;

function Create_num(){ // 랜덤 번호 생성 후 화면에 추가하는 함수
  while(num.length < 6){
    let ran = Math.floor(Math.random()* 45 + 1);

    if(num.indexOf(ran) === -1){
      num.push(ran);
      li =  document.createElement('li')
      li.textContent = ran;
      ul.append(li)
    }
  }
}

start.onclick = function(){

  if(num.length < 6){
    Create_num();
  }
  else{ // 추첨 후 다시 추첨 버튼을 눌렀을 때에도 랜덤 함수 생성
    Reset_num()
    Create_num()
  }
}

  // 다시 버튼 눌렀을 때, 초기화 -> 배열 비워주고 -> 화면 지워주기

    function Reset_num(){
        num.splice(0,6);
        ul.textContent =""
    }

    retry.addEventListener('click', Reset_num());