import axios from "axios"
import { Dispatch } from "redux"

const getUsers = (users) =>({
    type: "GET_USERS",
    payload: users,
})

const userDeleted = () =>({
    type : "DELETE_USER"
})

const userAdded = () =>({
    type : "ADD_USER"
})

export const loadUsers = () =>{
    return function (dispatch){
        axios.get("https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275").then((response)=>{
            console.log(response.data,"loadUsers")
            dispatch(getUsers(response.data))
        }).catch((err)=>console.log(err))
    }
}

export const deleteUser = (id) => {
    console.log(id,"id in delete user action")
    return function (dispatch){
        axios.delete(`https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275/${id}`).then((response)=>{
            console.log("del res",response.data)
            dispatch(userDeleted())
            dispatch(loadUsers())
        }).catch((err)=>console.log(err,"this is delete err"))
    }
}

export const addUser = (user) => {
    console.log("calling adduser")
    return function (dispatch){
        axios.post("https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275",user).then((response)=>{
            console.log("add res",response)
            dispatch(userAdded())
            dispatch(loadUsers())
        }).catch((err)=>console.log(err))
    }
}



