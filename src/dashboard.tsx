import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface User {
    id: Number
    name : String
}

const Dashboard = ({id,name}:User) => {
    const [userData,setUserData] = useState([])

    useEffect(()=>{
         axios.get("https://api.postman.com/collections/20945399-f20f2cbe-0079-4d4e-932d-905793f9de5b?access_key=PMAT-01GJHM4C73YVP47S18YA6SG275").then((data)=>{
            console.log(data.data.collection.item)
            setUserData(data.data.collection.item)
        }).catch((err)=>{
            console.log(err)
        })
        // getData
    },[])

  return (
    <div>
        <div className='border w-full bg-[#eeeff1] h-[50px] my-auto flex text-center mx-auto'><p className='text-center justif-center mx-auto py-auto'>Admin Dashboard</p></div>
        <table className="table-fixed">
  <thead className='border bg-[grey]'>
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    {userData.map((e)=>{
        return(
            <>
            <tr>
      <td>1</td>
      {/* <td>{e.name}</td> */}
      <button>Delete</button>
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