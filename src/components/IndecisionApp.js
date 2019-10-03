import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
export default class IndecisionApp extends React.Component {
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
