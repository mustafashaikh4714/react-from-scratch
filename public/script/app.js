'use strict';

console.log('Inside app JSX');

var app = {
  title: 'Make ToDo',
  subtitle: 'Put your life in the hands of computer!'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    app.subtitle
  )
);

var user = {
  name: 'Mustafa',
  age: 20,
  location: ''
};

function getLocation(location) {
  if (location) return React.createElement(
    'p',
    null,
    'Location: ',
    location
  );
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  React.createElement(
    'p',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    user.age
  ),
  React.createElement(
    'p',
    null,
    getLocation(user.location)
  )
);

var appRoute = document.getElementById('app');
ReactDOM.render(templateTwo, appRoute);
