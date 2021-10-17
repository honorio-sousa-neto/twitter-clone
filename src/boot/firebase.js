import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeBnT4nbG_oqtZAwyREy9LRjapnNSca_w",
  authDomain: "qwiitter.firebaseapp.com",
  projectId: "qwiitter",
  storageBucket: "qwiitter.appspot.com",
  messagingSenderId: "193818398909",
  appId: "1:193818398909:web:c68873e8dcc171465a67d4"

}

const app = initializeApp(firebaseConfig);
let db = getFirestore()

export default db