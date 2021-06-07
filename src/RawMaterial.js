import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Nav, Navbar } from 'react-bootstrap'

class RawMaterial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputvalues: {},
            errors: {}
        }
        this.submitForm = this.submitForm.bind(this);
    }

    handleValidation() {
        let inputvalues = this.state.inputvalues;
        let errors = {};
        let validForm = true;

        if (!inputvalues["rawmaterialname"]) {
            validForm = false;
            errors["rawmaterialname"] = "Required field";
        }

        if (!inputvalues["vendorname"]) {
            validForm = false;
            errors["vendorname"] = "Required field";
        }

        if (!inputvalues["unitcost"]) {
            validForm = false;
            errors["unitcost"] = "Required field";
        }

        if (!inputvalues["unitmeasurement"]) {
            validForm = false;
            errors["unitmeasurement"] = "Required field";
        }
        this.setState({ errors: errors })
        return validForm;
    }

    submitForm(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            alert("Raw Material added successfully!")
        }
        else {
            alert("Please check for errors in the form.")
        }
    }

    handleChange(inputvalue, e) {
        let inputvalues = this.state.inputvalues;
        inputvalues[inputvalue] = e.target.value;
        this.setState({ inputvalues });
    }
    render() {
        const size = {
            height: 55,
            width: 55,
            padding: 5
        }
        return (
            <body>
                <div className="App">
                    <form className="form" onSubmit={this.submitForm}>
                        <div className="heading">
                            <img style={size} src='/images/logo.jpg' alt="logo" />
                            <br />
                            <h1>Express Eats</h1>
                        </div>
                        <Navbar bg='voilet' variant='dark'>
                            <Nav>
                                <nav class="navbar navbar-expand-sm">
                                    <ul class="navbar-nav">
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Vendors</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Purchase Orders</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Sales Orders</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Manufacturing Order</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#">Raw Materials</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Food Items</a>
                                        </li>
                                    </ul>
                                    <div>
                                        <button className="button" type="submit" > Sign Out </button>
                                    </div>
                                </nav>
                            </Nav>
                        </Navbar>

                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Add Raw Material</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Edit Raw Material</a>
                            </li>
                        </ul>
                        <br />

                        <div className="form-content">
                            <div>
                                <label className="label"> Raw Material Name  </label>
                                <input name="rawmaterialname" id="rawmaterialname" type="text" className="input-text"></input>
                                <div style={{ color: "red" }}>{this.state.errors["rawmaterialname"]}</div>

                                <label className="label"> Vendor Name  </label>
                                <input name="vendorname" id="vendorname" type="text" className="input-text"></input>
                                <div style={{ color: "red" }}>{this.state.errors["vendorname"]}</div>

                                <label className="label"> Unit Cost  </label>
                                <input name="unitcost" id="unitcost" type="text" className="input-text"></input>
                                <div style={{ color: "red" }}>{this.state.errors["unitcost"]}</div>

                                <label className="label"> Unit Measurement  </label>
                                <br />
                                <input name="unitmeasurement" id="unitmeasurement" type="text" className="input-text-um"></input>
                                <div style={{ color: "red" }}>{this.state.errors["unitmeasurement"]}</div>

                                <Form.Group className="dropdown">
                                    <Form.Control as="select">
                                        <option>gms</option>
                                        <option>mL</option>
                                        <option>L</option>
                                        <option>gal</option>
                                        <option>lb</option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </div>
                        <div class="flex-parent jc-center">
                            <button type="submit" class="submit margin-right">Submit</button>
                            <button type="submit" class="cancel">Cancel</button>
                        </div>
                    </form>
                </div>
            </body >
        )
    }
}
export default (RawMaterial)