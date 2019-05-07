import React, { Component } from 'react';
import {connect} from "react-redux"
class Backlog extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>Backlog</div>
        );
    }
}
const mapState=state=>state;
const mapDispatch=dispatch=>({
    
})
export default connect(mapState,mapDispatch)(Backlog);