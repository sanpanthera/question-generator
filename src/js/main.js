import jQuery from 'jquery';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { MDCTemporaryDrawer } from '@material/drawer';
import { MDCDialog, MDCDialogFoundation, util } from '@material/dialog';
import { Toast, configureToasts } from 'toaster-js';
import QuestionController from './controllers/questionController';
import UserService from './services/userService';
import 'popper.js';
import 'bootstrap';
import '../scss/main.scss';
import { loadScreenRoute } from './shared/routes';
import authEventListener from './authentication';
import reduxSubsCriber from './redux.subscribe';
import loginpageHtml from './views/loginForm';

require('./controllers/initController');

require('@material/top-app-bar/index');
require('./controllers/questionManagerController');
require('./fcm-notification.js');
require('./AjaxSetting');

const drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.querySelector('.menu').addEventListener('click', () => { drawer.open = true; });

// localStorage.setItem('accessToken' , 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJnTzllUUtKWWlzZTdJZ0NFR3ZnUmVqNmNra3IyIiwiZW1haWwiOiJ3aXRobG92a2FyYW5AZ21haWwuY29tIiwiZGlzcGxheU5hbWUiOiJNYWhlbmRyYSBLdW1hciBTYWhvbyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTUzMzU1NjU0MCwiZXhwIjoxNTY1MDkyNTQwfQ.3z_rbiTkEPRVm7UapbeY0dFGmTt9DTQlCaOUmKLHqps');

export function loadScreen(screen) {
  loadScreenRoute(screen);
}
jQuery(document).ready(() => {
  // jQuery('#mainContainer').html(loginpageHtml);
  jQuery('.navScreen').on('click', (e) => {
    const current = e.currentTarget;
    loadScreenRoute(jQuery(current).attr('data-screen'));
    drawer.open = false;
  });

  jQuery('.mdc-top-app-bar__title').on('click', (e) => {
    window.location.href = '/';
  });
  
  reduxSubsCriber();
  // Commented as it is showing duplicate initialization. Refer the Firebase config and initialize only once
  authEventListener();
});
