import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import FormContainer from './containers/Form/Form.container'
import Button from 'react-bootstrap/Button'
import CardsContainer from './containers/Cards/Cards.container'

function App () {
  const [viewForm, setViewForm] = useState(false)

  return (
    <Container>
      <Row>
        <Col md={12}>
          <Jumbotron className='text-center'>
            <h2>Cabildo electrónico</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <p>Ingresa tus temas para abordarlos en una discusión ciudadana</p>
        </Col>
      </Row>
      {!viewForm && (
        <>
          <Row>
            <Col>
              <Button variant='primary' onClick={() => setViewForm(true)}>
                Ingresar comentarios
              </Button>
            </Col>
          </Row>
          <br />
          <CardsContainer toggleViewForm={setViewForm} />
        </>
      )}
      {viewForm && <FormContainer onVisibleForm={setViewForm} />}
    </Container>
  )
}

export default App
