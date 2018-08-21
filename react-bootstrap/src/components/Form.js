import React from "react";
import {
  FormGroup,
  Radio,
  ControlLabel,
  FormControl,
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";

const Form = () => (
  <div style={{ width: "70%", margin: "0 auto" }} className="text-center">
    <form>
      <FormGroup>
        <ControlLabel style={{ display: "block" }}>
          What type of idea do you have?
        </ControlLabel>
        <Radio name="radioGroup" inline>
          Innovation
        </Radio>
        <Radio name="radioGroup" inline>
          Innovation response campaign
        </Radio>
        <Radio name="radioGroup" inline>
          Campaign
        </Radio>
      </FormGroup>
      <FormGroup>
        <ControlLabel style={{ display: "block" }}>Idea title</ControlLabel>
        <FormControl type="text" placeholder="Idea title" />
      </FormGroup>
      <FormGroup>
        <ControlLabel style={{ display: "block" }}>
          Your elevator pitch
        </ControlLabel>
        <FormControl
          componentClass="textarea"
          placeholder="Your elevator pitch"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel style={{ display: "block" }}>
          Your idea summary
        </ControlLabel>
        <FormControl
          componentClass="textarea"
          placeholder="Your idea summary"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel style={{ display: "block" }}>
          Is your idea any of these
        </ControlLabel>
      <Grid style={{width: "100%"}}>
        <Row className="show-grid">
          <Col md={4} className="text-left">
            <p>Campaign</p>
            <h2>The innovation title is shown here</h2>
            <p>11 Apr 2016</p>
          </Col>
          <Col md={4} className="text-left">
            <p>Campaign</p>
            <h2>The innovation title is shown here</h2>
            <p>11 Apr 2016</p>
          </Col>
          <Col md={4} className="text-left">
            <p>Campaign</p>
            <h2>The innovation title is shown here</h2>
            <p>11 Apr 2016</p>
          </Col>
        </Row>
      </Grid>
      </FormGroup>
      <Button bsStyle="primary">My idea is different</Button>
    </form>
  </div>
);

export default Form;
