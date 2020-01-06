import React from 'react';
import './App.css';
import './components/list';
import List from './components/list';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      data:null,
      isLoaded: false

    }
   
  }
  componentDidMount(){
    //API call here
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(data => this.setState({
          data:data,
          isLoaded: true
      }))
   
  }
  render(){
    let item= null;
    if(this.state.isLoaded){
       item = this.state.data.map(item => {
         console.log(item)
        return <List key={item} data={item}/>
      })
   
    
    }else{
      console.log("is loading");
    }
    
    
    return (
<div>
  {item}
</div>
        

    )
  }
}

export default App;
