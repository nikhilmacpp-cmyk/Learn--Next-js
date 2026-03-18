import React from 'react'
const Layout = ({children}:{children:React.ReactNode}) =>{
    return(<div>
        <div>Navbar Root</div>
        {children}
    </div>)
}
export default Layout