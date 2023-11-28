import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAbDLBr0jYyYdONjN9n17A5CkUsQXDssSU",
  authDomain: "tarefas-dd866.firebaseapp.com",
  projectId: "tarefas-dd866",
  storageBucket: "tarefas-dd866.appspot.com",
  messagingSenderId: "731584976585",
  appId: "1:731584976585:web:5ae0bd43796df7ecc71f18"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export { db }