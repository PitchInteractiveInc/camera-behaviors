import React from 'react'

export default class Selector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedName: props.behaviors[0].name
    }
  }

  _onClick(behavior) {
    return () => {
      this.props.onSelect(behavior)
      this.setState({selectedName: behavior.name})
    }
  }

  render() {
    const behaviors = this.props.behaviors.map(behavior => {
      return (
        <a key={behavior.name}
           onClick={this._onClick(behavior)}
           className={behavior.name == this.state.selectedName ? 'selected' : ''}>
          {behavior.name}
        </a>
      )
    })
    return (
      <div className="selector">
        {behaviors}
      </div>
    )
  }
}
