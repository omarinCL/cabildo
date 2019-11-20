import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { onSetIdToEdit } from './Cards.actions'
import { onRemove, onFilter } from '../Form/Form.actions'
import FilterBox from '../../components/FilterBox/FilterBox'

const CardsContainer = props => {
  const [filtering, setFiltering] = useState(false)

  const handleOnEdit = id => () => {
    console.log(id)
    props.onSetIdToEdit(id)
    props.toggleViewForm(true)
  }

  const handleOnRemove = id => () => {
    console.log(id)
    props.onRemove(id)
  }

  const handleOnFilter = e => {
    const searchTerm = e.target.value
    props.onFilter(searchTerm)
    if (searchTerm) setFiltering(true)
    else setFiltering(false)
    console.log(searchTerm)
  }

  return (
    <>
      <FilterBox onFilter={handleOnFilter} />
      <br />
      <Row>
        {props.filteredList.length === 0 && !filtering &&
          props.list.length > 0 &&
          props.list.map(item => (
            <Col key={item.id} md={4} className='mb-4'>
              <Card>
                <Card.Body>
                  <Card.Title>{item.nombre + ' ' + item.apellido}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>{item.edad + ' años, ' + item.email}</Card.Subtitle>
                  <Card.Text>{item.comentarios}</Card.Text>
                  <Row>
                    <Col xs='auto'>
                      <Button variant='outline-primary' onClick={handleOnEdit(item.id)}>
                        Editar
                      </Button>
                    </Col>
                    <Col xs='auto'>
                      <Button variant='outline-danger' onClick={handleOnRemove(item.id)}>
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        {filtering &&
          props.filteredList.map(item => (
            <Col key={item.id} md={4} className='mb-4'>
              <Card>
                <Card.Body>
                  <Card.Title>{item.nombre + ' ' + item.apellido}</Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>{item.edad + ' años, ' + item.email}</Card.Subtitle>
                  <Card.Text>{item.comentarios}</Card.Text>
                  <Row>
                    <Col xs='auto'>
                      <Button variant='outline-primary' onClick={handleOnEdit(item.id)}>
                        Editar
                      </Button>
                    </Col>
                    <Col xs='auto'>
                      <Button variant='outline-danger' onClick={handleOnRemove(item.id)}>
                        Eliminar
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </>
  )
}

const mstp = state => ({
  list: state.formReducer.list,
  filteredList: state.formReducer.filteredList
})

export default connect(mstp, { onSetIdToEdit, onRemove, onFilter })(CardsContainer)
