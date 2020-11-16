import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: '180',
    saturation: '50',
    lightness: '50',
  }

  updateRange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    const currentColor = `HSL(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return (
      <div>
        <div
          className="wallpaper"
          style={{ backgroundColor: currentColor }}
        ></div>

        <h1>Pick A Color, Any Color</h1>

        <p>{`${currentColor}`}</p>

        <p></p>
        <p></p>
        <p></p>

        <section>
          Hue:{' '}
          <input
            type="range"
            name="hue"
            min="0"
            max="360"
            value={this.state.hue}
            onChange={this.updateRange}
          />
          Saturation:{' '}
          <input
            type="range"
            name="saturation"
            min="0"
            max="100"
            value={this.state.saturation}
            onChange={this.updateRange}
          />
          Lightness:{' '}
          <input
            type="range"
            name="lightness"
            min="0"
            max="100"
            value={this.state.lightness}
            onChange={this.updateRange}
          />
        </section>

        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>

        <p>
          Here you can select a color and see it's Hue, Saturation and Lightness
          rating.
        </p>
      </div>
    )
  }
}

export default App
