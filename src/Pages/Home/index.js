import React, { Component } from 'react';
import {connect} from "react-redux";
import {NavLink,Route,Switch} from "react-router-dom";
import Message from "../Message"
import Backlog from "../Backlog";
import Index from "../Indexs";
import Subvalue from "../Values";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'',  
        };
    }
    render() { 
        let names=window.localStorage.getItem('names')?window.localStorage.getItem('names'):null; 
        return (
            <div> 
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h3>HOME</h3> 
                {!names?<p>
                <input style={{width:100}} type="text" placeholder="请输入作者" onChange={this.setval} value={this.state.value}/>
                <button onClick={()=>this.login(this.state.value,names)}>登录</button> 
                </p> :null} 
                {names?<p> 
                    欢迎您 <span>{names}</span>
                </p>:null} 
                </div>
                <ol style={{display:"flex"}}>
                    <li><NavLink to="/home">欢迎页</NavLink></li>
                    <li><NavLink to="/message/btn">留言板</NavLink></li>
                    <li><NavLink to="/backlog">待办事项</NavLink></li>  
                </ol> 
                <div style={{width:"100%"}}>  
                <Switch>  
                    <Route path="/home" component={Index}></Route> 
                    <Route path="/message/btn" component={Message}></Route>
                    <Route path="/message/ipt" component={Subvalue}></Route>   
                    <Route path="/backlog" component={Backlog}></Route> 
                </Switch> 
                </div>
            </div>
        );
    }
    setval=e=>{//设置作者名 
        this.setState({
            value:e.target.value
        })
    }
    login=(value)=>{
        if(value){
            window.localStorage.setItem('names',value) //存储用户名
            this.props.logins(value)
        }else{
            alert('用户名不能为空')
        }
        
    }
}
const mapState=state=>state;
const mapDispatch=dispatch=>({
    logins(value){
        dispatch({
            type:'LOGIN',
            value
        })
    }
})
export default connect(mapState,mapDispatch)(Home);