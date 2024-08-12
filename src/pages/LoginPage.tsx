import * as S from '@/styles/login/LoginPageStyle';
import { useState } from 'react';
//import { useNavigate } from 'react-router-dom';
import LoginButton from '@/components/login/LoginButton';
import LoginInput from '@/components/login/LoginInput';

const LoginPage = () => {
  //const navigate = useNavigate();
  const savedUserId = localStorage.getItem('userId') || '';
  const [loginText, setLoginText] = useState(savedUserId); //아이디 글자
  const [passwordText, setPasswordText] = useState(''); //비밀번호 글자

  //로그인 함수
  const handleLogin = async () => {
    // const response = await postSignin({
    //   username: loginText,
    //   password: passwordText,
    // });
    // if (response) {
    //   //로그인 성공 시 토큰 저장 및 로그인 최초 요청 페이지로 이동
    //   localStorage.setItem('accessToken', response.accessToken);
    //   localStorage.setItem('refreshToken', response.refreshToken);
    //   navigate('/');
    // } else {
    //   //로그인 실패
    //   if (!isCheckSaveId) {
    //     setLoginText('');
    //   }
    //   setPasswordText('');
    // }
  };

  //Enter 키 처리 함수
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (!loginText) {
        document.getElementById('login-id-input')?.focus();
      } else if (!passwordText) {
        document.getElementById('login-password-input')?.focus();
      } else {
        handleLogin();
      }
    }
  };

  return (
    <S.Container onKeyDown={handleKeyDown} tabIndex={-1}>
      <h1>로그인</h1>
      <S.LoginWrap>
        <LoginInput
          id="login-id-input"
          type="text"
          text={loginText}
          setText={setLoginText}
          placeholder="아이디"
        />
        <LoginInput
          id="login-password-input"
          type="password"
          text={passwordText}
          setText={setPasswordText}
          placeholder="비밀번호"
        />
        <LoginButton
          isDisabled={!loginText || !passwordText}
          onClick={handleLogin}
        />
      </S.LoginWrap>
    </S.Container>
  );
};

export default LoginPage;
