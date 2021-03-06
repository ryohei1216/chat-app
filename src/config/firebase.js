import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBprRgpu1Cx4sRvlUV1mAg-3vTjHGMrpJU",
  authDomain: "chat-app-b5eb9.firebaseapp.com",
  projectId: "chat-app-b5eb9",
  storageBucket: "chat-app-b5eb9.appspot.com",
  messagingSenderId: "113612525469",
  appId: "1:113612525469:web:8bed2d32624a1ca8c4e974"
}

firebase.initializeApp(firebaseConfig)

export default firebase