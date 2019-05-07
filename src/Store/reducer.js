const defaultState={
    list:[],
    curobj:{},
    usernames:''
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case "LOGIN":
        return {...state,usernames:action.value}
        case "SUBMIT": //提交
        let obj={title:action.value.value,contenttext:action.value.contenttext,id:action.value.value,usernames:action.value.usernames};
        state.list.push(obj)
        return {...state,list:[...state.list]};
        case "REMOVE"://删除
        let ind=state.list.findIndex(item=>item.id===action.value);
        if(ind!==-1){
            state.list.splice(ind,1)
        }
        return {...state,list:[...state.list]}
        case "AMEND"://把要修改的对象找到，并且传递给页面value值显示出来
        state.curobj=state.list[action.index] 
        return {...state}
        case "XIUGAI":
        let objs=state.list.findIndex(item=>item.id===action.value.id); 
        console.log(action.value)
        state.list.splice(objs,1,action.value); 
        return {...state}
        default:
        return state
    } 
}
export default reducer;