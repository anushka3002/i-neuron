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
  // const [name,setName] = useState("")
  const [newState,setNewState] = useState({
    name:""
  })

  const {name} = newState;
  const [error,setError] = useState("")
  // const {name} = state;

  const handleChange =(e)=>{
    let {name,value} = e.target
    setNewState({...newState , "name":e.target.value})
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

  const handleDelete = (id) =>{
    // if(window.confirm("Are you sure")){
      dispatch(deleteUser(id))
    // }
  }

  return (
    <>
    <div>
      <div className='border w-full bg-[#eeeff1] my-auto flex text-center mx-auto'><h1 className='text-center justif-center mx-auto py-4 text-[24px]'>Admin Dashboard</h1></div>
      <input onChange={(e)=>handleChange(e)} className='border border-[black] mt-4' type="text"></input>
      <button onClick={handleSubmit} className='border ml-4 bg-[#307a93] text-[white] rounded-[7px] py-1 px-2'>Add user</button>
    </div>
    <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-[70%] border mx-auto text-center text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
              {/* <th scope="col" class="px-6 py-4">S.No</th> */}
              <th scope="col" class="px-6 py-4">Name</th>
            </tr>
          </thead>
          <tbody>
          {state?.users?.collection?.item?.length>0 && state.users.collection.item?.map((e,index) => {
            return (
              <>
                <tr class="border-b dark:border-neutral-500" key={e.id}>
                  {/* <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td> */}
                  <td class="whitespace-nowrap px-6 py-4 font-medium">{e.name}</td>
                  <button class="btn btn-blue border bg-[#6d9ebc] text-[white] rounded-[7px] px-4 py-3" onClick={()=>handleDelete(e.id)}>Delete</button>
                </tr>
              </>
            )
          })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Dashboard