/*
회원가입 양식
정보를 입력하지 않고 가입 시도 > 입력 요구하는 경고창
입력하다가 리셋 버튼을 누르면 > 입력이 모두 리셋
정보를 모두 입력하고 가입을 누르면 > 환영한다는 화면으로 전환 */

/*

1. 이벤트 : 가입 버튼 눌렀을 때, -> form태그 submit 
ㄴ 핸들러 : if 조건문 사용 
    ㄴ 내용이 모두 입력되지 않고 가입 > 경고창
    ㄴ 내용 모두 입력된 후 가입 > 환영합니다 화면으로 이동*/ 


const form = document.querySelector('form');

const Handler = function(event){
  const userID = event.target.id.value ;
  const userpw = event.target.password.value ;
  const userpw_ckeck = event.target.password_check.value ;
  const userName = event.target.user_name.value ;
  const phone = event.target.phone.value ;
  const email = event.target.email.value ;
  const intro = event.target.intro.value ;
  const position = event.target.position.value ;

  event.preventDefault();

  if(userID.length==0){
    alert('아이디를 입력해 주세요.');
  }
  else if(userID.length<6){
    alert('아이디를 6자리 이상 입력해 주세요.')
  }
  else if(userpw.length==0){
    alert('비밀번호를 입력해 주세요.')
  }
  else if(userpw!=userpw_ckeck){
    alert('비밀번호가 일치하지 않습니다.')
  }
  else if(userName.length==0){
    alert('이름을 입력해 주세요.')
  }
  else if(phone.length==0){
    alert('휴대폰 번호를 입력해 주세요.')
  }
  else if(email.length==0){
    alert('이메일을 입력해 주세요.')
  }
  else if(intro.length==0){
    alert('자기소개를 입력해 주세요.')
  }
  else{
    document.body.innerHTML=""
    document.write(
      `<p>${userID}님 가입을 축하드립니다!!</p>
      <p>회원 가입 시, 입력하신 내용은 다음과 같습니다.</p>
      <p>아이디 : ${userID}</p>
      <p>이름 : ${userName}</p>
      <p>전화번호 : ${phone}</p>
      <p>원하는 직무 : ${position}</p>`)
  }
}

form.addEventListener('submit', Handler);