

function check(form)
{
    if(form.user_id.value=="admin"&&form.userpassword.value=="admin")
    {
        alert('로그인 성공')
    }else{
        alert("Error: 아이디 또는 비밀번호가 잘못되었습니다.")
    }
}