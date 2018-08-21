import React from "react";

import {Jumbotron, Grid, Row, Col} from "react-bootstrap"

const spanStyle = {
    padding: "0 10px",
    fontWeight: "bold"
}
const Footer = () => (
  <div>
        <Jumbotron style={{ margin: "10px 0 0 0" }}>
      <Grid>
        <Row className="show-grid text-center">
          <Col md={2}>
            <p className="font-weight-bold">EAHSN</p>
          </Col>
          <Col md={8}>
            <span style={spanStyle}>Privacy Policy</span>
            <span style={spanStyle}>Terms & Conditions</span>
            <span style={spanStyle}>GDPR</span>
            <span style={spanStyle}>About</span>
          </Col>
          <Col md={2}>
            <span style={spanStyle}>G</span>
            <span style={spanStyle}>F</span>
            <span style={spanStyle}>T</span>
          </Col>
        </Row>
        <p className="text-center"> {String.fromCharCode(169)} EAHSN. All right reserved.</p>
      </Grid>
    </Jumbotron>
  </div>
);

export default Footer;