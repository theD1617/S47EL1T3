import React, { Component } from 'react';
import { Button, Navbar } from 'reactstrap';
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <Navbar className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <Button className="navbar-toggler position-absolute d-md-none collapsed col-1" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>
                
                <div className="container-fluid mt-0 mb-2">
                <div className="col-2 m-0 p-0">&nbsp;</div>
                    <div className="btn-dark btn-sm col-2 m-0 p-0">III6 :: ELI73</div>
                    <div className="col-6 p-2"><input className="form-control form-control-dark" type="text" placeholder="Suche Hier Eintippen ..." aria-label="Search" /></div>
                    <div className="btn-dark btn-sm col-1 m-0 p-0">SUCHEN</div>
                    
                </div>
            </Navbar>
         );
    }
}
 
export default Header;