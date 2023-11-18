
import '../../components/HomeAnews/HomeAnews.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';


function HomeAnews() {

    return (

        <div className='row st-navv d-flex justify-content-center '>

            <div className='col-1 marr   ' >
                <Navbar bg="" data-bs-theme="light">
                    <Nav className="me-auto " variant="underline">
                        <NavLink className='text1 ' to="/">Home</NavLink>

                        <NavLink className='text1' to="/news">News</NavLink>

                    </Nav>

                </Navbar>

            </div>
           
        </div>

    )
}

export default HomeAnews;