/* 2024. 05. 15 */
/*
 한계 -> 강의 보고 수정할 부분 + 아직 못한 내용 :
  1. 클릭하는 대상인 p를 구분할 수 있도록 해야함 
  -> p를 배열로 만들어서 idex로 구분하게 해야하나..?

  2. map()으로 삭제되지 않은 말풍선 -> 배열로 새로 만들기
  -> 로컬스토리지에다가 key는 myToDoList으로 value에는 할일 -> 객체 리터럴 -> JSON형식으로 저장 */


// 추가 버튼 누르면 할일 말풍선 생성

let add = document.querySelector('form');
let chat_content = document.getElementById('chat_content')

let div ;
let p ; 
let rm_bt ;

add.addEventListener('submit', function(event){
  event.preventDefault();

  Create_msg(event)

  // 생성된 말풍선 클릭 시, 회색
  p.setAttribute("onclick","Gray()");

   // x 버튼 눌렀을 떄, 말풍선 삭제
   Del_msg()

  // localStorage.setItem()

})

//  할일 말풍선 생성
function Create_msg(event){
  div = document.createElement('div')
  p = document.createElement('p')
  rm_bt = document.createElement('button')

  chat_content.append(div);
  div.append(rm_bt);
  div.append(p);


  div.classList.add('msg_set');
  div.classList.add('flex')
  rm_bt.classList.add('remove')
  p.classList.add('message')

  p.textContent = event.target.todo.value
  rm_bt.textContent = 'x'
}



//------------- 말풍선 회색으로 변하는 Handler

function Gray(){
  p.classList.add('msg_rem');
 }


// x 버튼 눌렀을 떄, 말풍선 삭제

function Del_msg(){
  rm_bt.addEventListener("click", function(){
    div.innerHTML=""
  })
}





