import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';
import '../../NavBars/NavBar.css'

function BottomNav() {

    return (

        <div className='row'>

            <div className='col-lg-10 col-md-8 col-sm-12  bg-dangar ' >
                <Navbar bg="" data-bs-theme="light">
                    <Nav className="me-auto " variant="underline">
                        <NavLink className='text1' to="/">Home</NavLink>
                        <NavLink className='text1' to="/features">Service</NavLink>
                        <NavLink className='text1' to="/news">News</NavLink>
                        <NavLink className='text1' to="/ConTact">Contact</NavLink>
                    </Nav>

                </Navbar>
            </div>
            <div className='col-lg-2 col-md-4 col-sm-12  '>

                <Button className='btn-1'>login</Button>

            </div>
        </div>



    )
}


export default BottomNav;
