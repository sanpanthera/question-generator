import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import '../scss/main.scss';
import './AjaxSetting';

require('./controllers/questionManagerController');
require('../scss/main.scss');

jQuery(document).ready(() => {
  /* jQuery.ajax({
    type: "post",
    contentType: 'application/json',
    dataType: "json",
    url: "/firebase/api/topics",
    data: JSON.stringify(topic)
  }).done(function (response) {
    console.log(response)
  }).fail(function (jqXhr) {
    console.log(jqXhr);
  }); */
  jQuery.ajax({
    type: 'get',
    contentType: 'application/json',
    dataType: 'json',
    url: '/firebase/api/topics',
  }).done((response) => {
    console.log(response);
  }).fail((jqXhr) => {
    console.log(jqXhr);
  });
});
