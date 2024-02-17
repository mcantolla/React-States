import { Button } from "react-bootstrap"
import { Form } from "react-bootstrap"
import { useState } from "react"
import Alerta from "./Alerta"

function Formulario() {
    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [contraseñaConfirm, setContraseñaConfirm] = useState("")
    const [alerta, setAlerta] = useState(false)
    const [mensajeAlerta, setMensajeAlerta] = useState("Rellena todos los campos")

    const changeName = (event) => {
        setNombre(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changeContraseña = (event) => {
        setContraseña(event.target.value)
    }
    const changeContraseñaConfirm = (event) => {
        setContraseñaConfirm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (nombre == "" || email == "" || contraseña == "" || contraseñaConfirm == "") {
            setMensajeAlerta("Rellena todos los campos")
            setAlerta(true)
            return
        }
        
        if (contraseña !== contraseñaConfirm) {
            setMensajeAlerta("Las contraseñas deben ser iguales")
            setAlerta(true)
            return
        } 
        else {
            setMensajeAlerta("Registrado con exito")
            setAlerta(true)
            setNombre("")
            setEmail("")
            setContraseña("")
            setContraseñaConfirm("")
        }
      }

    return (
      <>
      <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
            type="name" 
            placeholder="Nombre" 
            value={nombre}
            onChange={changeName} 
            />
      </Form.Group>
      <Form.Group>
        <Form.Control 
            type="email" 
            placeholder="tuemail@ejemplo.com" 
            value={email}
            onChange={changeEmail}
            />
      </Form.Group>
      <Form.Group>
        <Form.Control 
            type="password" 
            placeholder="Contraseña" 
            value={contraseña}
            onChange={changeContraseña}
            />
      </Form.Group>
      <Form.Group>
        <Form.Control 
            type="password" 
            placeholder="Confirma tu contraseña" 
            value={contraseñaConfirm}
            onChange={changeContraseñaConfirm}
            />
      </Form.Group>
      <Button variant="success" type="submit">Registrarse</Button>{' '}
    </Form>
    {alerta && (
        <Alerta color="danger"
                mensaje={mensajeAlerta}
        >
        </Alerta>
      )}
    </>
    )
  }
  
  export default Formulario