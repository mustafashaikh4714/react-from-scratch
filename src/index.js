import * as React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.handlePickOption = this.handlePickOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: props.options
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options')
      const options = JSON.parse(json)
      // We only want to set values options has some values otherwise not
      if (options) {
        this.setState({ options })
      }
    } catch (error) {}
  }

  componentDidUpdate(prevProps, prevState) {
    // this life cycle gets call with every change detected by the component.
    // We only want it to get fired on options array length gets changed.
    // We use localStorage to persist the data
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handlePickOption() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[randomNumber]
    alert(option)
  }
  handleAddOption(option) {
    if (!option) {
      return 'Error: Please enter valid value'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Error: This option already exists!'
    }
    this.setState({ options: this.state.options.concat(option) })
  }

  handleDeleteOptions() {
    this.setState({ options: [] })
  }
  handleDeleteOption(option) {
    this.setState({ options: this.state.options.filter(O => option !== O) })
  }

  render() {
    const title = 'Indecision '
    const subTitle = 'Put your life in the hands of computer'
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action
          hasOptions={this.state.options.length}
          handlePickOption={this.handlePickOption}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

IndecisionApp.defaultProps = {
  options: []
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subTitle}</h2>
    </div>
  )
}

Header.defaultProps = {
  title: 'Indecision App'
}

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePickOption}>
        What should i do?
      </button>
    </div>
  )
}

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  )
}

const Option = props => {
  return (
    <div>
      {props.optionText}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        Remove
      </button>
    </div>
  )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = { error: '' }
  }

  handleAddOption(e) {
    e.preventDefault()
    const option = e.target.elements.option.value.trim()
    const error = this.props.handleAddOption(option)
    this.setState({ error })
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button type="submit">Add Option</button>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'))
