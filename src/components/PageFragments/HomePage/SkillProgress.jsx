import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2>Mis Habilidades</h2>

    <Row gutter={[20, 20]}>
      <Col xs={24} md={12} xl={12}>
        <Col xs={24}>
          <h2>Front End</h2>
          <ProgressBar percent={100} text="Bootstrap" />
          <ProgressBar percent={85} text="Materialize" />
          <ProgressBar percent={100} text="HTML , CSS" />
          <ProgressBar percent={90} text="JS es6 (Client)" />
          <ProgressBar percent={70} text="Axios" />
        </Col>
        <Col xs={24}>
          <h2>Frameworks Front End</h2>
          <ProgressBar percent={90} text="Gatsby" />
          <ProgressBar percent={85} text="React JS" />
        </Col>
        <Col xs={24}>
          <h2>Herramientas</h2>
          <ProgressBar percent={70} text="GitHub" />
          <ProgressBar percent={100} text="Figma" />
          <ProgressBar percent={60} text="Corel Draw" />
          <ProgressBar percent={75} text="ClickUP/Slack" />
          <ProgressBar percent={75} text="Canva" />
          <ProgressBar percent={90} text="Linux" />
          <ProgressBar percent={80} text="Windows" />
        </Col>

        <Col xs={24}>
          <h2>Desarrollo Moviles</h2>
          <ProgressBar percent={75} text="React Native" />
        </Col>

        <Col xs={24}>
          <h2>Desarrollo Escritorio</h2>
          <ProgressBar percent={60} text="Electron" />
        </Col>
        <Col xs={24}>
          <h2>Nivel Ingles</h2>
          <ProgressBar percent={80} text="Escrito" />
          <ProgressBar percent={60} text="Hablado" />
        </Col>
      </Col>
      {/*  */}
      <Col xs={24} md={12} xl={12}>
        <Col xs={24}>
          <h2>Back End</h2>
          <ProgressBar percent={70} text="PHP" />
          <ProgressBar percent={90} text="Javascript es6 (Server)" />
        </Col>
        <Col xs={24}>
          <h2>Frameworks Back End</h2>
          <ProgressBar percent={80} text="Node JS" />
          <ProgressBar percent={75} text="Express JS" />
          <ProgressBar percent={70} text="Laravel" />{" "}
          <ProgressBar percent={90} text="CodeIgniter" />{" "}
        </Col>
        <Col xs={24}>
          <h2>ORM para BD</h2>
          <ProgressBar percent={85} text="Mongoose" />
          <ProgressBar percent={80} text="GraphQL" />
          <ProgressBar percent={75} text="Eloquent" />
        </Col>
        <Col xs={24}>
          <h2>Base de Datos</h2>
          <ProgressBar percent={90} text="Firebase" />
          <ProgressBar percent={75} text="MongoDB" />
          <ProgressBar percent={85} text="PostreSQL" />
          <ProgressBar percent={90} text="MySQL" />
        </Col>
        <Col xs={24}>
          <h2>Otros conocimientos</h2>
          <ProgressBar percent={100} text="SEO" />
          <ProgressBar percent={90} text="UX,UI" />
          <ProgressBar percent={90} text="Facebook ADS" />
          <ProgressBar percent={50} text="Patrones de Diseño " />
          <ProgressBar percent={65} text="CMS Wordpress" />
          <ProgressBar percent={70} text="Arquitectura de microservicios" />
          <ProgressBar percent={80} text="Creacion de API REST" />
          <ProgressBar percent={100} text="Atomic Design " />
          <ProgressBar percent={80} text="Cloud functions fb" />
          <ProgressBar percent={70} text="Serverless,PWA,MPA" />
          <ProgressBar percent={80} text="Static Website " />
        </Col>
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
