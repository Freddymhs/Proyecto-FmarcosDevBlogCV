import React from "react"
import { Layout, Row, Col } from "antd"
import Header from "../../components/PageLayout/Header"
import SidebarWrapper from "../../components/PageLayout/Sidebar"
import ContactForm from "../../components/PageFragments/ContactForm"
import SEO from "../../components/Seo"

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contacto"
        description="
        Hola Mundo  soy Freddy Huaylla y pueden contactarme con este formulario , no dude en poner ne contacto no sean timidos al hablar sobre sus ideas para una startup o para insertarse al mundo digital :)"
        path="/contact"
        keywords={[
          "Freddy",
          "Huaylla",
          "FmarcosDev",
          "Desarrollador Web y Movil",
          "Javascript",
          "ReactJS",
          "NodeJS",
          "Gatsby",
          "technology",
          "Startup",
          "Arica Programador",
        ]}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">Contacto</h1>
        </div>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
)

export default Contact
