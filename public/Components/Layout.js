import AppProvider from "./AppProvider"
import Header from "./Header"


const Layout =(props)=>{
    return(
        <AppProvider>
            <Header/>
            {props.children}
        </AppProvider>
    )
}
export default Layout;