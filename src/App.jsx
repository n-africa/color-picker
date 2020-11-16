import React, { Component } from 'react'

class App extends Component {
  state={
    hue: '50',
    saturation: '8',
    lightness:'20',
  }

  updateHue= event => {
    this.setState({
      hue: event.target.value,
    })
  }
//   state = {
//     title: 'Color Picker',
//     color: '',
//   }
// updateColor = event =>{
//   this.setState({
//     color: event.target.value,
//   })
// }
  render() {
    const currentColor= `hsl(${this.state.hue},${this.state.saturation},${this.state.lightness})`

    return(
//       <main>
//         <h1>{this.state.title}</h1>
//   <div style={ { backgroundColor: `${this.state.color}`  } } >
//     <input type='range' onChange ={this.updateColor}/>

// </div>  
// </main>
<div>
  <h1>Pick A Color, Any Color</h1>

<div style={ { backgroundColor: currentColor  } } ></div>

<section>

Hue: <input type= "range" min="0" max="360" value={this.state.hue} onChange={this.updateHue}/>

Saturation: <input type= "range" min="0" max="100" value={this.state.saturation} />

Lightness: <input type= "range" min="0" max="100" value={this.state.lightness} />

</section>

</div>
)
}
}

export default App
