import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { Button, Form, FormGroup, Label, Input, NavbarBrand } from 'reactstrap';
import './Login.scss'

class Login extends Component {
    render() {
        return (
            <div className="login d-flex justify-content-center align-items-center">
                {/* <div className="login__title">
                    <div className="close d-flex justify-content-between align-items-center">
                        <h1 className="logo">ahome</h1>
                        <Link to="/"><CloseIcon className="closeBtn" /></Link>
                    </div>
                    <div className="title"><h1>Sign In</h1></div>
                </div>
                <Form className="col-md-4 col-sm-6 col-xs-10 shadow-lg mb-5 bg-white rounded pad3"> */}
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" class="form-control" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Password">Password</Label>
                        <Input type="password" class="form-control" name="password" id="Passsword" placeholder="Password" />
                    </FormGroup>
                <Button color="primary" size="lg" block>Login</Button>
                </Form>
            </div>
        )
    }
}

export default Login
