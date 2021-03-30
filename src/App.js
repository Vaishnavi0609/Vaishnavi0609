import React, { Component } from 'react';
import SeasonDisplay from "./seasonDisplay";
import Spinner from "./Spinner";

export class App extends Component {
  state = {Lat:null , errorMessage:null}
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      pos =>{
        this.setState({ lat : pos.coords.latitude})
      },
      err =>{
        this.setState({ errorMessage:err.message})
      }
    );
  }

  renderContent() {
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat = {this.state.lat}/>
    }
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>
    }
    return <Spinner message = "Please allow to access your location"/>
  }
  
  render() {
    return(
      <div>
        {this.renderContent()}
      </div>
    ); 

  }  
}

export default App
