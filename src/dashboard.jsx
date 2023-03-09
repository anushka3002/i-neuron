import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addUser, deleteUser, getUserData, loadUsers } from './redux/action'
// import { loadUsers } from './redux/action'

// interface User {
//   id: Number
//   name: String
// }

const Dashboard = ()=> {

  // const [userData, setUserData] = useState<User[]>([])
  const [userData, setUserData] = useState([])
  const state = useSelector((state) => state.userReducer) || []
  console.log(state, "statee")
  // const [name,setName] = useState("")
  const [newState,setNewState] = useState({
    name:""
  })

  const {name} = newState;
  const [error,setError] = useState("")
  // const {name} = state;

  const handleChange =(e)=>{
    let {name,value} = e.target
    setNewState({...newState , [name]:value})
    // setName(e.target.value)
  }

  const handleSubmit= (e) =>{
    e.preventDefault();
    dispatch(addUser(newState))
    if(!state.name){
      setError("Incorrent pattern")
    }
    else{
      console.log("dispat ADD USER")
      dispatch(addUser(newState))
    }
    console.log(newState,"new")
  }

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadUsers())
  }, []);

  // useEffect(() => {
  //   axios.get("https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275").then((data) => {
  //     console.log(data.data.collection.item)
  //     setUserData(data.data.collection.item)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  //   // getData
  // }, [])

  const handleDelete = (id) =>{
    // if(window.confirm("Are you sure")){
      dispatch(deleteUser(id))
    // }
  }

  return (
    <div>
      <div className='border w-full bg-[#eeeff1] h-[50px] my-auto flex text-center mx-auto'><p className='text-center justif-center mx-auto py-auto'>Admin Dashboard</p></div>
      <input onChange={(e)=>handleChange(e)} className='border border-[black]' type="text"></input>
      <button onClick={handleSubmit} className='border'>Add user</button>
      <table className="table-fixed">
        <thead className='border bg-[grey]'>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.users.collection.item.length>0 && state.users.collection.item?.map((e) => {
            return (
              <>
                <tr key={e.id}>
                  <td>1</td>
                  <td>{e.name}</td>
                  <button onClick={()=>handleDelete(e.id)}>Delete</button>
                </tr>
              </>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}

export default Dashboard