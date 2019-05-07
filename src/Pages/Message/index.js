import React, { Component } from 'react'; 
import {connect} from "react-redux"; 
class Message extends Component {  
    render() { 
        const {list,removelist}=this.props;  
        return (
            <div>    
                  <button onClick={()=>this.addmsg()}>添加消息++</button>
                  {list.length?list.map((item,index)=>(
                    <li key={item.id}>
                    <div className="box"><h4 style={{display:"inline-block"}}>标题：{item.title}</h4><span>{new Date().toLocaleString()}</span> </div>
                    <div className="box"><h4 style={{display:"inline-block"}}>作者名：{item.usernames}</h4> 
                    <div>
                        <button>返回</button>
                        <button onClick={()=>this.amend(item,index,'xg')}>修改</button>
                        <button onClick={()=>removelist(item.id)}>删除</button> 
                    </div> 
                    </div> 
                    <div> 
                         <p style={{display:"inline-block", width:"80%",textAlign:"left",}}>内容为：{item.contenttext}</p> 
                    </div>
                    </li>
                )):null}

            </div>
        ); 
    }
    addmsg=()=>{ //点击添加控制input框是否显示
        let user=window.localStorage.getItem('names'); 
        if(user){
            console.log(this.props)
            this.props.history.push("/message/ipt"); 
        }else{
            alert('请先登录')
        } 
    }
    amend=(item,index,id)=>{//修改按钮
        this.props.history.push({
            pathname:'/message/ipt',
            params:{id:id}
        })
        this.props.xiugai(item,index,id)
    }
 
}
const mapState=state=>state;
const mapDispatch=dispatch=>({
    removelist(value){//删除
        dispatch({
         type:'REMOVE',
         value
        })
     },
     xiugai(item,index,id){//修改
         dispatch({
             type:'AMEND',
             index,
             item,
             id
         })
     }
})
export default connect(mapState,mapDispatch)(Message);