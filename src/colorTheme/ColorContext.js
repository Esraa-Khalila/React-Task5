import React, { Component } from 'react'
const ColorContext = React.createContext({

});
 export const ColorConsumer = ColorContext.Consumer;
export class ColorProvider extends Component {
  constructor() {
    super();
  }
  state = {
    theme: 'esraa'
    
  }

  changen = () => {
   
    this.setState({theme:'Esraa Alkhalilah'});
  };

  render() {
    
    const { changen } = this;
    const { theme } = this.state;
    return (
      <ColorContext.Provider value={{ theme, changen }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}
export default ColorContext;