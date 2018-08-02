import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util } from '@material/drawer';
import QuestionController from './controllers/questionController';

// import { callGoogleSignIn } from '../../firebase/firebase-signin';
import { getQuestions, getTopics } from '../../firebase/firebase-database';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/main.scss';
import './AjaxSetting';

require('./controllers/questionManagerController');
require('../scss/main.scss');
// require('./fcm-notification.js');

// Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);

const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => { drawer.open = true; });

const questionController = new QuestionController();
console.log(questionController);
// for login
// callGoogleSignIn();
function retriveData(responseData) {
  console.log(responseData);
}
getQuestions(null, retriveData);
getTopics(null, retriveData);
