import React,{ Component } from 'react';

class List extends Component{
    render(){
        const data = this.props.data;
        return (
        <p>{data}</p>
        
        )
    }
}
export default List