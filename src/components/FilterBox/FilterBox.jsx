import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const FilterBox = props => {
  return (
    <Row>
      <Col md={4}>
        <Form.Control type='text' placeholder='Buscar...' onChange={props.onFilter} />
      </Col>
    </Row>
  )
}

export default FilterBox
