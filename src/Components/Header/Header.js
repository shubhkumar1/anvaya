import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "white",
            boxShadow: "0px 0px 5px"
        }}>

            <Link to='/'>
                <h1 style={{
                    margin: ".3rem",
                    textDecoration: 'none',
                    color: 'black'
                }}><u>anvaya</u></h1>
            </Link>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "30%"
            }}>
                <NavLink to='/' style={({isActive}) => ({
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: isActive ? '#079EF6' : 'grey'
                })}>
                    Home
                </NavLink>
                <NavLink to='/pricing' style={({isActive}) => ({
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: isActive ? '#079EF6' : 'grey'
                })}>
                    Pricing
                </NavLink>
                {/* <NavLink to='/contact' style={ ({isActive}) => ({
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: isActive ? '#079EF6' : 'grey'
                })}>
                    Contact
                </NavLink> */}
                <NavLink to='/editor' style={({isActive}) => ({
                    color: isActive ? '#079EF6' : 'grey',
                    textDecoration: "none",
                    fontWeight: "bold",
                })}>
                    Editor
                </NavLink>
                <NavLink to='/about' style={({isActive}) => ({
                    textDecoration: "none",
                    fontWeight: "bold",
                    color: isActive ? '#079EF6' : 'grey'
                })}>
                    About us
                </NavLink>
                
            </div>

            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "15%"
            }}>
                <Link to='/log' style={{textDecoration: "none", color: "grey", fontWeight: "bold"}}>Log in</Link>
                <Link to='/sign' style={{
                    backgroundColor: "#079EF6",
                    padding: "5px",
                    borderRadius: "5px",
                    color: "white",
                    textDecoration: "none", 
                    fontWeight: "bold"
                }}>Sign up</Link>
            </div>

        </div>
    )
}