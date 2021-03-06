// SignUp.js
import React, { useState } from "react";
import firebase from "./../config/firebase";

const SignUp = () => {
  // 変数emailとpasswordで入力値を管理できるようにする
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // nameを管理するstateの追加
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName: name,
        });
        // Signed in
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        {/* onSubmitが実行されると再読み込みされる */}
        <div>
          <label htmlFor="email">E-mail</label>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="Email"
            // 変更があったらsetEmail関数を使ってemailの値を更新
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="name">name</label>
          <input
            name="name"
            type="text"
            id="name"
            placeholder="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
