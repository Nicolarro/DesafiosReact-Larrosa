import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDi1DbM4XKOkUMVwmYcnjM9NoQUmI0R-r0",
    authDomain: "miproyectoecommerce-81a91.firebaseapp.com",
    projectId: "miproyectoecommerce-81a91",
    storageBucket: "miproyectoecommerce-81a91.appspot.com",
    messagingSenderId: "191278753208",
    appId: "1:191278753208:web:dec39427516e4d01205b4d"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)

  console.log(db)