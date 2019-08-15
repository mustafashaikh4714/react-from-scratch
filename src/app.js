let count = 0
const addOne = () => {
  count++
  renderConterApp()
}
const removeOne = () => {
  count--
  renderConterApp()
}
const reset = () => {
  count = 0
  renderConterApp()
}

let appRoute = document.getElementById('app')

const renderConterApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={removeOne}>-1</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
  ReactDOM.render(template, appRoute)
}

renderConterApp()
