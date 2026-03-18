import React from 'react'
const Layout = ({children}:{children:React.ReactNode}) =>{
    return(<div>
        <div>Navbar</div>
        {children}
    </div>)
}
export default Layout