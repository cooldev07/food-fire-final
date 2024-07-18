import {Component} from "react";

class UserClass extends Component{
    constructor(props){
        super(props);
    console.log("constructor is called child",this.props.name)
        this.state={
            count:0,
            count2:2,
            text:""
        }
    }



async componentDidMount(){
    console.log("children mounted",this.props.name)
    // setTimeout(()=>{
    //     console.log("hello for settime out")
    // },5000)
        let data=await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let json=await data.json();
        this.setState({
            text:json.title,
        })
}
 
componentDidUpdate(prevProps,prevState){
  console.log(prevProps,prevState)
}    
    
    render() {
    console.log("rendered is called child",this.props.name)

        const {name,location}=this.props;
        const {count,count2,text}=this.state;
      return (
        <div className="user-class-card">
          <h1>I am a class based component</h1>
          <h2>my name is {name},i am from {location}</h2>
          <h3>Count:{count}</h3>
          <h2>{text}</h2>
          <button
          onClick={(e)=>{
            this.setState({
                count:this.state.count+1,
            })
          }}
          >increase</button>
          <button
          onClick={(e)=>{
            if(count >0){
            this.setState({
                count:this.state.count-1
            })
          }}
        }>
            decrease
          </button>
        </div>
      )
    }
}
export default UserClass;