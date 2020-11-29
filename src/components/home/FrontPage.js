import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import { Link } from "react-scroll";

class FrontPage extends Component {

    render() {
        return (
            <Row sm="12" className="frontpage m-0" lg="12">
                <Col className="front" lg="6" sm="12">
                    <h1>Hello🤚, Welcome!</h1>
                    <p>Are you looking for house 🏡 or Guetto to rent? Feel free to choose the one you like.</p>

                    <Link to="houses" spy={true} smooth={true} offset={-90} duration={500}>
                        <button type="submit" className="mt-5 border-none">Get More</button>
                    </Link>
                </Col>
                <Col lg="6" sm="12" className="d-flex justify-content-end align-items-center none">
                    <img src="https://img.freepik.com/free-vector/flat-design-house-sale_23-2148643475.jpg?size=626&ext=jpg" alt="house" className="" />
                </Col>
            </Row>
        );
    }
}

export default FrontPage;
