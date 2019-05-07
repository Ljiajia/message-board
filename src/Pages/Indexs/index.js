import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom"; 
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div> 
                <div style={{width:600,height:400}}>
                <h4>欢迎使用</h4>
                <button><Link to="/message/btn">前往留言板</Link></button>
                <button><Link to="/backlog">前往待办事项</Link></button> 
                </div>
            </div>
        );
    }
}
const mapState=state=>state;
const mapDispatch=dispatch=>({
    
})
export default connect(mapState,mapDispatch)(Index);