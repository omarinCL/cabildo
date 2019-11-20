import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import useInput, { validateAll } from '../../hooks/useInput'
import { connect } from 'react-redux'
import { onAdd, onEdit } from './Form.actions'
import { onSetIdToEdit } from '../Cards/Cards.actions'

const FormContainer = props => {
  const { nombreField } = useInput('nombre', { required: true }, '')
  const { apellidoField } = useInput('apellido', { required: true }, '')
  const { emailField } = useInput('email', { required: true, email: true }, '')
  const { edadField } = useInput('edad', { required: true }, '')
  const { comentariosField } = useInput('comentarios', { required: true }, '')

  const handleSave = () => {
    if (validateAll([nombreField, apellidoField, emailField, edadField, comentariosField])) {
      if (props.idToEdit) {
        props.onEdit({
          id: props.idToEdit,
          nombre: nombreField.value,
          apellido: apellidoField.value,
          email: emailField.value,
          edad: edadField.value,
          comentarios: comentariosField.value
        })
        props.onSetIdToEdit(null)
      } else {
        props.onAdd({
          nombre: nombreField.value,
          apellido: apellidoField.value,
          email: emailField.value,
          edad: edadField.value,
          comentarios: comentariosField.value
        })
      }
      props.onVisibleForm(false)
    }
  }

  useEffect(() => {
    if (props.idToEdit) {
      const item = props.list.find(item => item.id === props.idToEdit)
      nombreField.setValue(item.nombre)
      apellidoField.setValue(item.apellido)
      emailField.setValue(item.email)
      edadField.setValue(item.edad)
      comentariosField.setValue(item.comentarios)
    }
    // eslint-disable-next-line
  }, [props.idToEdit])

  return (
    <>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId='fname'>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu nombre'
              name='nombre'
              onChange={nombreField.handleOnChange}
              value={nombreField.value}
              isInvalid={nombreField.isValid !== null ? !nombreField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(nombreField.errors)}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId='fapellido'>
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu apellido'
              name='apellido'
              onChange={apellidoField.handleOnChange}
              value={apellidoField.value}
              isInvalid={apellidoField.isValid !== null ? !apellidoField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(apellidoField.errors)}</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='femail'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu e-mail'
              name='email'
              value={emailField.value}
              onChange={emailField.handleOnChange}
              isInvalid={emailField.isValid !== null ? !emailField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(emailField.errors)}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} controlId='fedad'>
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ingresa tu edad'
              name='edad'
              value={edadField.value}
              onChange={edadField.handleOnChange}
              isInvalid={edadField.isValid !== null ? !edadField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(edadField.errors)}</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId='fcomentarios'>
            <Form.Label>Comentarios</Form.Label>
            <Form.Control
              as='textarea'
              rows='4'
              name='comentarios'
              value={comentariosField.value}
              onChange={comentariosField.handleOnChange}
              isInvalid={comentariosField.isValid !== null ? !comentariosField.isValid : null}
            />
            <Form.Control.Feedback type='invalid'>{Object.values(comentariosField.errors)}</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Button variant='success' onClick={handleSave}>
          Guardar
        </Button>
      </Form>
    </>
  )
}

const mapStateToProps = state => ({
  list: state.formReducer.list,
  idToEdit: state.idToEdit
})

export default connect(mapStateToProps, { onAdd, onEdit, onSetIdToEdit })(FormContainer)
