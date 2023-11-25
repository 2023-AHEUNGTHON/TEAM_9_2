import useInput from "../hooks/useInput";
import React, { useState } from "react";
import {
  Button,
  Error,
  Form,
  Header,
  Input,
  Label,
  LinkContainer,
} from "../styles/login_styles";
import { Link, useNavigate } from "react-router-dom";
import LogInLogos from "../assets/images/LogInLogos.png";
import axios from "axios";
import { BASE_URL } from "../static";

const LogIn = () => {
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!email || !password ) {
        setLogInError(true);
        return;
      }

      const userData = {
        email : email, 
        password : password,
      };


    await axios.post(`${BASE_URL}/user/login`, userData)
        .then((res) => {
          sessionStorage.setItem("token", res.data);
          setLogInError(false);
          console.log(res);
          navigate('/today');
        })
        .catch((err) => {
          setLogInError(true);
          console.log(err);
        });
      } catch (error) {
      // 등록 오류 처리
      setLogInError(true);
    }
  };

  return ( 
    <div
      id="container"
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -mt-24"
    >
      <img
        src={LogInLogos}
        alt="LogInLogos"
        className="mx-auto my-auto"
      />
      <Header>로그인</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <div>
            <Input
              placeholder="이메일"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
        </Label>
        <Label id="password-label">
          <div>
            <Input
              placeholder="비밀번호"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </Label>
        <Button type="submit">로그인 하기</Button>
        {logInError && <Error>로그인에 실패했습니다.</Error>}
      </Form>
      <LinkContainer>
        <Link to="/signup" className="black mt-7">
          회원가입하기
        </Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
