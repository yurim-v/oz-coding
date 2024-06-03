// 2024. 06. 04 

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

// 4. 현재 화면에 표시된 강아지 사진 전부를 관리할 수 있는 배열 형성
const currentDogs = [];


// ------------------- 기능 추가 시작 ---------------------------


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

      let dogDiv =  document.createElement('div');
      main.append(dogDiv);

      dogDiv.setAttribute('class', 'flex')

      dogDiv.innerHTML=`<img src=${item}>`
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
