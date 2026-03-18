import Link from 'next/link'
const Users = () =>{
    const userDetails = [{id:101,name:'Nikhil'},{id:102,name:'Nivya'},{id:103,name:'Thrishya'},{id:104,name:'Adith'},{id:105,name:'shriya'}]
  return (
     <div>
        <h1>Dashboard</h1>
        <ul className="mt-10">
            {userDetails.map((item,id)=> <li key={id}><Link href={`/dashboard/users/${item.id}`}>{item.name}</Link></li>)}
        </ul>
     </div>
  )
}

export default Users