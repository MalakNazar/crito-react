import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logotype.svg'
import TopNav from "../NavBars/Top/TopNav";
import BottomNav from "../NavBars/Bottom/BottomNav";
import '../Header/Header.css'



class Header extends Component {
    render() {
        return (
            <div className="firstSec">
                <Navbar bg="" data-bs-theme="light">
                    <Container>
                        <div className="row  w-100 p-3   ">
                            <div className="col-md-2 col-sm-12 logo">
                                <Navbar.Brand href="#home">
                                    <img src={logo}></img>
                                </Navbar.Brand>
                            </div>
                            <div className="col-md-10 col-sm-12 ">
                                <div className="row   border-bottom ">
                                    <TopNav />
                                </div>

                                <div className="row ">
                                    <BottomNav />
                                </div>
                            </div>
                        </div>

                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header;
