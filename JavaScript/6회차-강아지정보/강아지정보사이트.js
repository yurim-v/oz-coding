// 2024. 06. 03 / 06.04

/*
요청 내용
1. 강아지 사진 여러장 한 번에 받아오기 -> https://dog.ceo/api/breeds/image/random/42
2. 견종에 대한 정보 받아오기 -> https://dog.ceo/api/breeds/list/all

Dog API : https://dog.ceo/dog-api/documentation/
*/


// 1. API 정의
const apiRandomDogs = "https://dog.ceo/api/breeds/image/random/42";
const apiAllBreeds = "https://dog.ceo/api/breeds/list/all";

// 2. 각각의 API에 요청을 전달할 XML 객체 2개 정의
const request1 = new XMLHttpRequest();
const request2 = new XMLHttpRequest();

// 3. 태그 선택
let header = document.getElementById("header");
let input = document.getElementById("filter_text");
let button = document.getElementById("filter_button");
let select = document.getElementById("filter_select");
let more = document.getElementById('more');
let topbt = document.getElementById('top');
let reset = document.getElementById('reset');



// 4. 현재 화면에 표시된 강아지 사진 전부를 관리할 수 있는 배열 형성
const currentDogs = [];

//-------------사용될 함수 -----------

function displayDogs(item){
  let dogDiv =  document.createElement('div');
  main.append(dogDiv);
  dogDiv.setAttribute('class', 'flex');
  dogDiv.innerHTML=`<img src=${item}>` ; 
}

// ------------------- 기능 추가 시작 --------------------------


/* 1. 페이지가 처음에 딱 랜더링되어 나타났을 때, 웹페이지의 동작 정의
   -> windouw 가 load 되었을 때 나타나는 이벤트 핸들러 정의 
   
   ** window 객체의 load 이벤트와 XMLHttpRequest 객체의 load 이벤트는 다름 */
window.addEventListener('load', function(){

  // request 1 :  강아지 사진 42장 불러오기
  request1.open("GET", apiRandomDogs);
  request1.addEventListener('load', function(){
    const response1 = JSON.parse(request1.response);

    response1.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    })
  })
  request1.send();


  // request 2 : 강아지 종에 대한 select의 option 만들기 
  request2.open("get",apiAllBreeds );
  request2.addEventListener('load', function(){
    const response2 = JSON.parse(request2.response);
    
    // Object.keys() : 객체의 key만 모아서 배열로 반환
    let dogList = Object.keys(response2.message);
    dogList.forEach(function(value){
      const option = document.createElement('option');
      select.append(option);
      option.textContent = value;
      option.value = value;
    })
  })
  request2.send();
})



//--------- 필터링 기능 구현 --------------

// 1. 버튼 눌렀을 때 필터링
button.addEventListener('click', function(){

  /*
  페이지가 켜졌을 때, 로딩된 강아지들을 다 지우고,
  필터링된 강아지 사진만 화면에 표시 */

  // 화면에 있던 강아지 삭제
  main.innerHTML="";

  // 표시된 강아지 중에 입력창에 입력한 내용과 일치하는 강아지만 남긴다 -> 필터 기능 구현
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(input.value) !== -1
    /*
    배열의 indexOf(value) : value와 완전히 일치하는 배열 요소가 있을 때, index 번호 반환
    문자열의 indexOf(value) : 문자열 중 value를 포함하고 있는 첫번째 위치를 index 번호로 반환
      ex )
        let a = "가나다라마다바사" -> a.indexOf('다) : 2  
    indexOf 공통 특징 : 공백에 대해서 포함 여부를 확인할 때에는 무조건 0 반환
    -> 아무것도 입력하지 않고 필터링 버튼 클릭 시, 모든 요소가 0이 반환되면서 페이지가 필터링 전으로 돌아감    */
  })

  input.value="" 
  
  filteredDogs.forEach(function(item){
    displayDogs(item);
  })
})

// 2. 셀렉트에서 골랐을 때 필터링 
select.addEventListener('change', function(){
  // 입력 값(선택 값)이 변할 때 -> change 이벤트

  main.innerHTML="";
  let filteredDogs = currentDogs.filter(function(item){
    return item.indexOf(select.value) !== -1
  })
  
  filteredDogs.forEach(function(item){
    displayDogs(item);
  })
})

// 3. 리셋 버튼 클릭 시, 초기 상태로 되돌아감
reset.addEventListener('click',function(){
  request1.open("GET", apiRandomDogs);
  request1.addEventListener('load', function(){
    const response1 = JSON.parse(request1.response);

    main.innerHTML=""

    response1.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    })
  })
  request1.send();

})



//--------부가 기능 추가 ------------------
// 1. more 버튼 클릭 시, 사진 42장 추가
more.addEventListener('click', function(){
  request1.open("GET", apiRandomDogs);
  request1.addEventListener('load', function(){
    const response1 = JSON.parse(request1.response);

    response1.message.forEach(function(item){
      currentDogs.push(item);
      displayDogs(item);
    })
  })
  request1.send();  
})

// 2. top 버튼 클릭 시, 스크롤 업
topbt.addEventListener('click',function(){

  /* 브라우저 창의 스크롤에 접근
    ㄴ scrollTo() : 주어진 위치로 스크롤 이동
        ㄴ 자바 스크립트에서의 위치 지정 -> 객체 리터럴 형식으로 { } 안에 위치 지정
        ㄴ y축 -> top / x 축 -> left
      ㄴ 다른 방법 : scrollTo( x좌표, y좌표) 
  */
  window.scrollTo({top : 0})  // window.scrollTo(0,0) 과 같음
})