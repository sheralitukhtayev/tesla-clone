import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
  return (
    <Container>
        <Section 
            title="Model S"
            description="Order Online for Touchless Delivery"
            backgroundImg="images/model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory" 
        
        />
        <Section 
            title="Model Y"
            description="Order Online for Touchless Delivery"
            backgroundImg="images/model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        /> 
        <Section 
            title="Model 3"
            description="Order Online for Touchless Delivery"
            backgroundImg="images/model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section 
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="images/model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing inventory"
        />
        <Section
            title="Lowest Cost Solar Panels in America"
            description="Money-back guarantee"
            backgroundImg="images/solar-panel.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Solar for New Roofs"
            description="Solar Roof Costs Less Than a New Roof"
            backgroundImg="images/solar-roof.jpg"
            leftBtnText="Order now"
            rightBtnText="Learn more"
        />
        <Section
            title="Accessories"
            description=""
            backgroundImg="images/accessories.jpg"
            leftBtnText="Shop now"
        />
    </Container>
  )
}

export default Home
const Container = styled.div`
    width: 100vh;
`