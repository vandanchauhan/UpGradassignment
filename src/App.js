import React, { Component } from 'react';
import empt from './empt.png';
import usr from './user.png';
import './App.css';



class App extends Component {

  state = {
    bla : [],
    home : true,
    count : 0,
    input_name : '',
    input_num : ''
  }

  addsubscriber = () => {
    this.setState({home: false});
  }

  deletesubscriber = (c) => {
    const dcount = c.target.value;
    console.log(dcount);
    this.state.bla.splice(dcount, 1);
    console.log(this.state.bla);
    this.setState({home: true});
  }

  addtodata = () => {
    if(!this.state.input_name || !this.state.input_num || this.state.input_num.toString().length != 10 ){
      alert("Please Enter a valid Name and Number");
    }
    else{
      const dummy = [{'count' : this.state.count ,'name' : this.state.input_name ,'num' : this.state.input_num}];
      this.setState({bla: this.state.bla.concat(dummy)});
      this.setState({count: this.state.count += 1});
    }
    this.setState({home: true});
  }

  change = (e) => {
    this.setState({input_name: e.target.value});

  }

  change1 = (e) => {
    this.setState({input_num: e.target.value});
  }

  render() {
    if(!this.state.home){
      return (
        <div className="App">
          <h2 id="head"> ADD SUBSCRIBER </h2>
          <div id="sub-form" >
            <span class="label" >Name :</span><br/><input type="text" class="usr-input" onChange={(e) => this.change(e)} required /><br/>
            <span class="label" >Phone Number :</span><br/><input type="tel" class="usr-input" onChange={(e) => this.change1(e)} required /><br/><br/>
            <h5 class="bla1"><b>Subscriber to be added:</b></h5>
            <img class="profile-img" src={usr} />
            <p class="bla2">Name: {this.state.input_name}</p>
            <p class="bla2">Phone: {this.state.input_num}</p>  
          </div>
          <button class="add-btn" onClick={this.addtodata}><b>ADD</b></button>
        </div>  
      );
    }
    else if(this.state.home && !this.state.bla[0]){
      return (
        <div className="App">
          <h2 id="head">PHONE DIRECTORY </h2>
          <div class="display">
            <h4 class="emptdir">Directory Empty!!</h4><span><img class="empt-img" src={empt}/></span>
          </div>
          <button class="add-btn" onClick={this.addsubscriber}> <b> Add Subscriber</b> </button>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <h2 id="head">PHONE DIRECTORY </h2>
          <div class="display">
            <div class="subscriber1"><p class="nme">Name</p><p class="phno">Phone Number</p></div>
            {this.state.bla.map((BLA, index) => {
              return <div class="subscriber" key={index}><p class="nme">{BLA.name}</p><p class="phno">{BLA.num} <button class="del-btn" value={index} onClick={(c) => this.deletesubscriber(c)}> DELETE </button></p></div>
            })}
          </div>
          <button class="add-btn" onClick={this.addsubscriber}> <b> Add Subscriber</b> </button>
        </div>
      );
    }
  }
}

export default App;
