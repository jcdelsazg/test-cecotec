import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyAA1MN-TkgjWJAlA5uh1i_UISyyPQvJed0',
  authDomain: 'test-cecotec.firebaseapp.com',
  databaseURL: 'https://test-cecotec.firebaseio.com',
  projectId: 'test-cecotec',
  storageBucket: 'test-cecotec.appspot.com',
  messagingSenderId: '1037195693312',
  appId: '1:1037195693312:web:a685c1e857632f0f'
};
firebase.initializeApp(config);

export default firebase;
