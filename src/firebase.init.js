import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCyS2B6z_xclELKyh2uUBp44rz0wcMAPWc",
    authDomain: "warehouse-84aea.firebaseapp.com",
    projectId: "warehouse-84aea",
    storageBucket: "warehouse-84aea.appspot.com",
    messagingSenderId: "432094167840",
    appId: "1:432094167840:web:6b1b049ff985cdbd0ccd45"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth