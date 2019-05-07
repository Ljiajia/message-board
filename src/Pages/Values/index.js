import React, { Component } from 'react';
import {connect} from "react-redux"; 
class Home extends Component {
    constructor(props) {
        super(props);
        const {curobj}=this.props; 
        this.state = {
            value:curobj.title?curobj.title:'',
            contenttext:curobj.contenttext?curobj.contenttext:''
        };
    }
    render() {   
        let id=this.props.location.params?this.props.location.params.id:null; 
        const {usernames}=this.props;
        return (
            <div>  
                <input type="text" value={this.state.value} onChange={this.changetit} placeholder="请输入标题" />
                <textarea value={this.state.contenttext} onChange={this.changecontent} placeholder="请输入内容"></textarea>
                <button style={{width:100,height:45}}>取消</button>
                <button style={{width:100,height:45}} onClick={()=>this.submit(this.state.value,this.state.contenttext,id,usernames)}>提交</button> 
            </div>
        );
    }
    changetit=e=>{//设置标题value
        this.setState({
            value:e.target.value
        })
    }
    changecontent=e=>{//设置内容的value 
        this.setState({
            contenttext:e.target.value
        })
    }
    submit=(title,contenttext,id,usernames)=>{//提交的时候清空input框内容
        if(title!==''&&contenttext!==''){
            if(id){//如果有id是要修改
                this.props.history.push("/message/btn"); 
                this.props.setvalue(title,contenttext,id,usernames)
                
            }else{//提交内容
                this.setState({  
                    value:'',
                    contenttext:''
                })
                this.props.history.push("/message/btn");
                this.props.submitvalue(title,contenttext,usernames)
            }
        }else{
            alert('不能为空')
        } 
    } 
}
const mapState=state=>state;
const mapDispatch=dispatch=>({
    submitvalue(value,contenttext,usernames){
        if(value!==''&&contenttext!==''){//提交内容
            dispatch({
                type:'SUBMIT',
                value:{
                    value,contenttext,usernames
                }
            })
        } 
    },
    setvalue(title,contenttext,id,usernames){//提交的是修改内容
        dispatch({
            type:'XIUGAI',
            value:{
                title,contenttext,id,usernames
            }
        })
    }

})
export default connect(mapState,mapDispatch)(Home);