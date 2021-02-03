import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      clients:[],
      items:[],
      orders:[],
      todos:[],
      logs:[],
      isLoaded:false
     }
  }

  componentDidMount(){

    fetch('https://eli73.herokuapp.com/items').then(res => res.json())
    .then(json => {
      this.setState({isLoaded:true, items: json})
    })

  }

  render() { 
    
    let { isLoaded ,items } = this.state; 
    if(!isLoaded) return <div> :: Loading ::</div>   
    return ( <div className="App">

      <ul className="list-group">
        {items.map(item => (
          <li key={item._id}  className="list-group-item">
            {item.code+" | "+item.prod+" - "+item.name+' :: '+item._id}
          </li>
        ))}
      </ul>

    </div> );
  }
}
 
export default App;