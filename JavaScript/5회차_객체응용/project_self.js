/* 2024. 05. 15 , 05. 19, 22, 28 */

// 변수 선언
let add = document.querySelector('form');
let chat_content = document.getElementById('chat_content')

let div ;
let p ; 
let rm_bt ;
let Data = [];
let i ;
let todo_data ;


// ----------------------------------------------------------------------------------

add.addEventListener('submit', function(event){
  event.preventDefault();

  // 할일 데이터 생성
  todo_data ={
    todo : event.target.todo.value,
    todoId : new Date().getTime(), // 객체 데이터 시간을 숫자로 반환 -> 식별자로 사용하기 위함
    todoDone : false
  }
  Data.push(todo_data);

  // 로컬스토리지에 data 저장
  Save();

  //  할일 말풍선 화면에 생성
  Create_msg(event);

  event.target.todo.value= ""; // 할일 추가 후 텍스트 창 비우기 -> name으로 접근

  // 말풍선 클릭 시, 말풍선 색깔 변함 
  Done()

  // X 버튼 클릭 시, 말풍선 삭제
  Remove();
})

// -----------------------------------------------------------------------------------

//할일 말풍선 화면에 생성 + 생성되는 p태그에 timeID 부여
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

  // timeID 매칭
  p.id = todo_data.todoId;
  rm_bt.id = todo_data.todoId;
}

// 로컬스토리지에 저장
function Save(){ localStorage.setItem('myToDo', JSON.stringify(Data));}


// 클릭 시, 말풍선 색 변함 + 데이터 값 바뀜
function Done(){

  p.addEventListener('click', function(event){
    // 말풍선 노랑 -> 회색
    Data.forEach(function(value){
      if(value.todoId == event.target.id && value.todoDone == false){
        event.target.style.backgroundColor = 'lightgray';
        value.todoDone = true;
      }
      // 말풍선 회색 -> 노랑
      else if(value.todoId == event.target.id && value.todoDone !== false){
        event.target.style.backgroundColor = 'rgb(255, 227, 71)';
        value.todoDone = false;
      }
    })
    Save();
  })
}

// X 버튼 클릭 시, 말풍선 삭제
function Remove(){
  rm_bt.addEventListener("click", function(e){
    e.target.parentNode.innerHTML="" // 부모요소 div 선택해서 콘텐츠 코드(button, p 태그)삭제

    Data = Data.filter(function(value){

      if(value.todoId != e.target.id){
        return value
      }
    })
    Save();
  })
}
  




