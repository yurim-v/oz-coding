/* 2024. 05. 15 , 05. 19 */
/*
 map()으로 삭제되지 않은 말풍선 -> 배열로 새로 만들기
  -> 로컬스토리지에다가 key는 myToDoList으로 value에는 할일 -> 객체 리터럴 -> JSON형식으로 저장 */

// 변수 선언
let add = document.querySelector('form');
let chat_content = document.getElementById('chat_content')

let div ;
let p ; 
let rm_bt ;
let p_arr = [];
let Data = [];
let i ;



// ----------------------------------------------------------------------

add.addEventListener('submit', function(event){
  event.preventDefault();

  // 할일 데이터 생성
  let todo_data ={
    todo : event.target.todo.value,
    todoId : new Date().getTime(), // 객체 데이터 시간을 숫자로 반환 -> 식별자로 사용하기 위함
    todoDone : false
  }
  Data.push(todo_data);
  console.log(Data);

  localStorage.setItem('myToDo', JSON.stringify(p_arr));

  //  할일 말풍선 화면에 생성
  Create_msg(event);

  event.target.todo.value= ""; // 할일 추가 후 텍스트 창 비우기 -> name으로 접근

  // 말풍선 클릭 시, 말풍선 색깔 변함
  Done()

  // X 버튼 클릭 시, 말풍선 삭제
  rm_bt.addEventListener("click", function(e){
    e.target.parentNode.innerHTML="" // 부모요소 div 선택

  })
})

//------------------------------ 할일 말풍선 화면에 생성
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

  p.textContent = event.target.todo.value;
  rm_bt.textContent = 'x'

  p_arr.push(p)
}

// 클릭 시, 말풍선 색 변함 + 데이터 값 true 로 바뀜
function Done(){

  p.addEventListener('click', function(event){
    // 말풍선 색깔 회색으로 바뀜
    event.target.style.backgroundColor = 'lightgray';

    // 데이터 값 변경
  
  })


}


