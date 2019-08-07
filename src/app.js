console.log('Inside app JSX')

let app = {
  title: 'Make ToDo',
  subtitle: 'Put your life in the hands of computer!'
}

let template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
)

let user = {
  name: 'Mustafa',
  age: 20,
  location: ''
}

function getLocation(location) {
  if (location) return <p>Location: {location}</p>
}

let templateTwo = (
  <div>
    <h1>{app.title}</h1>
    <p>{user.name ? user.name : 'Anonymous'}</p>
    {user.age >= 18 && <p>{user.age}</p>}
    <p>{getLocation(user.location)}</p>
  </div>
)

let appRoute = document.getElementById('app')
ReactDOM.render(templateTwo, appRoute)
