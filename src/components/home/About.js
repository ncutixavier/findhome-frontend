import React from 'react'
import Title from './Title'
import styled from 'styled-components'
import { Row, Col } from 'reactstrap'
import house from '../../assets/img/house.png'

const About = () => {

    const Container = styled.section`
        background-color: #f3f3f3;
        margin: 0!important;
        padding: 5%;
        margin: auto 40%;
    `
    const AboutText = styled.p`
        line-height: 2;
        font-size: 1.6rem;
    `

    return (
        <Container name="about">
            <Title
                mainTitle="Who we are?🙄"  
                subTitle="About us"
            />

            <Row className="p-5">
                <Col
                    lg="6" sm="12"
                    className="about-image">
                    <img src={house} alt="house" width="50%"/>
                </Col>
                <Col lg="6" sm="12">
                    <AboutText>
                        Ahome is the platform launched in 2020.
                        It comes to help different people which are struggling in time they are looking for small price house also known as guetto.
                        If you are a landloard, we encourage you to contribute here because
                        we will provide you easy way to controll your property and linking with different client easily.
                    <br /> <br />
                    </AboutText>
                    <AboutText><i>Thank you🙏 for your contribution.</i></AboutText>
                </Col>
            </Row>
        </Container>
    )
}

export default About
