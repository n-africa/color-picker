import React, { Component } from 'react'

class App extends Component {
  state={
    hue: '180',
    saturation: '50',
    lightness:'50',
  }

  updateRange = event => {
    switch(event.target.name){
      case 'hue':
      this.setState({ hue: event.target.value })
      break

      case 'saturation':
        this.setState({ saturation: event.target.value})
        break

        case 'lightness':
          this.setState({ lightness: event.target.value})
          break
    }
  }

  render() {
    const currentColor= `HSL (${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return(

<div>
  <h1 style= {{backgroundColor: currentColor}}>Pick A Color, Any Color</h1>

<figure style={ { backgroundColor: currentColor  } } ></figure>
    <p>{`${currentColor}`}</p>

<section>

Hue: <input type= "range" name="hue" min="0" max="360" value={this.state.hue} onChange={this.updateRange}/>

Saturation: <input type= "range" name="saturation" min="0" max="100" value={this.state.saturation} onChange={this.updateRange} />

Lightness: <input type= "range" name="lightness" min="0" max="100" value={this.state.lightness} onChange={this.updateRange} />

</section>

</div>
)
}
}

export default App
