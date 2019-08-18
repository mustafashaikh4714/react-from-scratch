import * as React from 'react'
import ReactDOM from 'react-dom'

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    this.handlePickOption = this.handlePickOption.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      options: ['option one', 'option two', 'option three']
    }
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
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    )
  }
}
class Action extends React.Component {
  render() {
    return (
      <div>
        <button
          disabled={!this.props.hasOptions}
          onClick={this.props.handlePickOption}
        >
          What should i do?
        </button>
      </div>
    )
  }
}
class Options extends React.Component {
  // handleRemoveAll = () => {
  //   console.log(this.props.options)
  // }

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {this.props.options.map(option => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    )
  }
}
class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>
  }
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
