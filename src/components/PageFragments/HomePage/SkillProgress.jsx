import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>Mis Habilidades</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={85} text="ReactNative" />
        <ProgressBar percent={85} text="ReactJS" />
        <ProgressBar percent={90} text="Bootstrap 4" />
        <ProgressBar percent={90} text="PHP" />
        <ProgressBar percent={50} text="Python" />
        <ProgressBar percent={50} text="API" />
      </Col>

      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={70} text="Gatsby" />
        <ProgressBar percent={90} text="Mysql" />
        <ProgressBar percent={60} text="NodeJS" />
        <ProgressBar percent={50} text="MongoDB" />
        <ProgressBar percent={80} text="Firebase" />
        <ProgressBar percent={50} text="Wordpress" />
      </Col>
      <Col xs={8}>
        <ProgressBar percent={90} text="Prototipado en Figma" />
      </Col>

      <Col xs={8}>
        <ProgressBar percent={80} text="Facebook ADS" />
      </Col>
      <Col xs={8}>
        <ProgressBar percent={80} text="Diseño en Corel y Photoshop" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
