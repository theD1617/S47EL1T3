import React, { Component } from 'react';
import {  } from 'reactstrap';
import { Provider } from 'react-redux';
import store from './store.js'
import Header from './addons/nav/header';
import Sidebar from './addons/nav/sidebar';
import Toolbar from './addons/nav/toolbar';
import Action from './addons/rooms/action';
import Charts from './addons/rooms/charts';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      clients:[],
      items:[],
      orders:[],
      todos:[],
      logs:[],
      isLogged:false,
      role: "",
      auth:"",
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
    
    let { isLoaded, items, isLogged, auth, role } = this.state; 
    if(!isLoaded) return <div> :: Loading ::</div>   
    return ( 
          <Provider store={store}>
            <div className="App">
              <Header flux={this.state} />
              <div className="container-fluid">
                <div className="row">
                    <Sidebar flux={this.state} />        
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                    <Toolbar flux={this.state} />
                    <Charts flux={this.state} />
                    <Action flux={this.state} />
                  </main>
                </div>
              </div>
            </div> 
            </Provider>
            );
  }
}
 
export default App;