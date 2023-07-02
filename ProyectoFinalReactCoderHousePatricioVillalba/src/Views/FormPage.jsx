import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, AlertTitle } from "@mui/material";
import { CartContext } from "../contexts/CartContext ";
import { useContext } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerificado, setEmailVerificado] = useState("");
  const [nombreError, setNombreError] = useState(false);
  const [apellidoError, setApellidoError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [emailverificadoError, setEmailVerificadoError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const [showAlert, setShowAlert] = useState(false);
  const { cartItems, setCartItems } = useContext(CartContext);

  const isValidEmail = (email) => {
    if (email === "") {
      return true; // Permitir campo vacío
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Verificar si todos los campos están completos
  const areAllInputsFilled =
    nombre !== "" &&
    apellido !== "" &&
    email !== "" &&
    emailVerificado !== "" &&
    emailVerificado === email &&
    isValidEmail(email);

  if (email !== "" && emailVerificado !== "" && emailVerificado !== email) {
    // setShowAlert(true);
  }
  // Actualizar el estado del botón según si todos los campos están completos o no
  React.useEffect(() => {
    setIsButtonDisabled(!areAllInputsFilled);
  }, [areAllInputsFilled]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar los campos o realizar otras acciones
    console.log("Formulario enviado");
    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);
    console.log("Email:", email);
    console.log("Verificación de Email:", emailVerificado);
    console.log("Productos:", cartItems);
  };

  const handleChange = (event, setValue, setError) => {
    const value = event.target.value;
    setValue(value);
    setError(value.trim() === "");
    return;
  };

  // export default function Formulario() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "75ch" },
      }}
      noValidate
      autoComplete="on"
      onSubmit={handleSubmit}
    >
      <TextField
        id="nombre"
        label="nombre"
        variant="outlined"
        type="text"
        value={nombre}
        onChange={(event) => handleChange(event, setNombre, setNombreError)}
        error={nombreError}
        helperText={nombreError ? "El campo está vacío" : ""}
      />
      <TextField
        id="apellido"
        label="apellido"
        variant="outlined"
        type="text"
        value={apellido}
        onChange={(event) => handleChange(event, setApellido, setApellidoError)}
        error={apellidoError}
        helperText={apellidoError ? "El campo está vacío" : ""}
      />
      <TextField
        id="email"
        label="email"
        variant="outlined"
        type="email"
        value={email}
        onChange={(event) => handleChange(event, setEmail, setEmailError)}
        error={!isValidEmail(email)}
        helperText={
          isValidEmail(email) ? "" : "Ingrese un correo electrónico válido"
        }
        required
      />
      <TextField
        id="emailVerificado"
        label="email"
        variant="outlined"
        type="email"
        value={emailVerificado}
        onChange={(event) =>
          handleChange(event, setEmailVerificado, setEmailVerificadoError)
        }
        required
        error={!isValidEmail(emailVerificado)}
        helperText={
          isValidEmail(emailVerificado)
            ? ""
            : "Ingrese un correo electrónico válido"
        }
      />
      <button type="submit" disabled={isButtonDisabled}>
        Enviar
      </button>
    </Box>
  );
};

export default Formulario;
