'use strict';

var count = 0;
var addOne = function addOne() {
  count++;
  renderConterApp();
};
var removeOne = function removeOne() {
  count--;
  renderConterApp();
};
var reset = function reset() {
  count = 0;
  renderConterApp();
};

var appRoute = document.getElementById('app');

var renderConterApp = function renderConterApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: removeOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );
  ReactDOM.render(template, appRoute);
};

renderConterApp();
