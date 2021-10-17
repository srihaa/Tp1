import React,{Component} from 'react';
class Exercice1 extends Component{
  
    constructor(){
        super();
        this.state={
            counter:0,
            plus:0,
            min:0
        }
        
        this.addClickHandler= this.addClickHandler.bind(this);
        this.subClickHandler= this.subClickHandler.bind(this);
        
    }
  
    addClickHandler(){
        
        this.setState(prevState=>{
            return {
                counter: prevState.counter + 1 }  
        })

        this.setState(prevState=>{
            return {
                plus: prevState.plus + 1 }  
        })

    }

    subClickHandler(){
       
        if(this.state.counter>0){

        this.setState(prevState=>{ 
            return {counter: prevState.counter - 1}
            
        })

        this.setState(prevState=>{
            return {
                min: prevState.min + 1 }  
        })
    }
    }

    


  
  
    render()
    {
     return (
       
        <div>
            <h2>Exercice1</h2> <br/><br/>
            <h1>Counter:  {this.state.counter}</h1> 
            <button onClick={this.addClickHandler}>{`+(${this.state.plus}) Clicks`}</button>
            <button onClick={this.subClickHandler}>{`-(${this.state.min}) Clicks`}</button>
        </div>
    );
}
}
export default Exercice1;