import React, { useState, useEffect, useContext } from "react";
import firebase from "./../config/firebase";
import Messages from "../components/Messages";
import { AuthContext } from "../AuthService";

const Room = () => {
  //ここでuserの情報を扱えるようにcontextを使って書く
  const user = useContext(AuthContext);
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.firestore().collection("messages").add({
      content: value,
      user: user.displayName,
      castedDate: new Date().toLocaleString(),
    });
    setValue("");
  };
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    //APIにはuseEffectを使う？
    firebase
      .firestore()
      .collection("messages")
      .orderBy("castedDate", "asc")
      .onSnapshot((snapshot) => {
        const messages = snapshot.docs.map((doc) => {
          return doc.data();
        });
        setMessages(messages);
      });
  }, []);
  return (
    <>
      <h1>Room</h1>
      <ul>
        <Messages messages={messages} />
      </ul>
      <form>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          送信
        </button>
      </form>
      <button onClick={() => firebase.auth().signOut()}>SignOut</button>
    </>
  );
};

export default Room;
