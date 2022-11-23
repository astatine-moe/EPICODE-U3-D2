import React from "react";
import logo from "../logo.svg";
import { Nav } from "react-bootstrap";

class MyFooter extends React.Component {
    render() {
        return (
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">
                    &copy; {this.props.name}
                </p>
                <a
                    href="#"
                    className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
                >
                    <img src={logo} />
                </a>
                <ul className="nav col-md-4 justify-content-end">
                    <Nav.Link href="#">Blah</Nav.Link>
                    <Nav.Link href="#">Blah</Nav.Link>
                    <Nav.Link href="#">Blah</Nav.Link>
                </ul>
            </footer>
        );
    }
}

export default MyFooter;
