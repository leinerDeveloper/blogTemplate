import React, { useState, useRef } from 'react';
import SelectOptions from '../Selects/SelectOptions';
import ButtonGeneral from '../Buttons/Button';
// import swal from 'sweetalert2';

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  LinearProgress,
  styled,
  Container,
} from '@mui/material';

const FormContainer = styled('div')(({ theme }) => ({
  background: '#ffffff',
  padding: theme.spacing(2),
  borderRadius: theme.spacing(1),
  border: '1px solid #000000',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  width: '700px', // Modificar el ancho del contenedor según tus necesidades
  margin: '0 auto', // Centrar horizontalmente el contenedor
}));

const InputField = styled(TextField)(({ theme }) => ({
  width: '100%',
}));

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

const RegistrationForm = () => {
  const nameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const roleRef = useRef(null);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role_id, setRole_id] = useState('');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    calculatePasswordStrength(newPassword);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole_id(event.target.value);
  };

  const calculatePasswordStrength = (password) => {
    // Implementa tu propia lógica de cálculo de fortaleza de contraseña aquí
    // Actualiza el estado de passwordStrength en función del valor calculado
    if (password.length > 5) setPasswordStrength(3);
    else if (password.length > 3) setPasswordStrength(2);
    else setPasswordStrength(1);
  };

  const handleSubmit = () => {
    // Accede a los valores de los campos utilizando las referencias
    const nameValue = nameRef.current.value;
    const lastNameValue = lastNameRef.current.value;
    const ageValue = ageRef.current.value;
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;
    const confirmPasswordValue = confirmPasswordRef.current.value;
    const roleValue = roleRef.current.value;

    // swal.fire({
    //   title: 'Alerta personalizada',
    //   text: 'Esta es una alerta con SweetAlert2',
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Confirmar',
    //   cancelButtonText: 'Cancelar',
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     console.log('Confirmado');
    //   } else {
    //     console.log('Cancelado');
    //   }
    // });

    // Agrega aquí la lógica para enviar el formulario
    // Utiliza los valores de los campos (nameValue, lastNameValue, ageValue, emailValue, passwordValue, confirmPasswordValue, roleValue)
  };

  const isPasswordValid = password === confirmPassword && passwordStrength >= 3;
  const arrOptionsUsers = ['Admin', 'User'];

  return (
    <Container maxWidth="sm" className={CenteredContainer}>
      <form onSubmit={handleSubmit}>
        <FormContainer>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <InputField
                label="Name"
                inputRef={nameRef}
                value={name}
                onChange={handleNameChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Last Name"
                inputRef={lastNameRef}
                value={lastName}
                onChange={handleLastNameChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Age"
                inputRef={ageRef}
                value={age}
                onChange={handleAgeChange}
                fullWidth
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Email"
                inputRef={emailRef}
                value={email}
                onChange={handleEmailChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Password"
                inputRef={passwordRef}
                value={password}
                onChange={handlePasswordChange}
                type="password"
                fullWidth
                required
              />
              <LinearProgress variant="determinate" value={passwordStrength * 33.33} />
            </Grid>
            <Grid item xs={12}>
              <InputField
                label="Confirm Password"
                inputRef={confirmPasswordRef}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                type="password"
                fullWidth
                required
                error={!isPasswordValid}
                helperText={!isPasswordValid && 'Passwords do not match or password strength is too weak.'}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth required>
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role-select"
                  value={role_id}
                  onChange={handleRoleChange}
                  inputRef={roleRef}
                >
                  {arrOptionsUsers.map((option, index) => (
                    <MenuItem key={index} value={index + 1}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <ButtonGeneral onClick={handleSubmit} color="primary" hoverColor="#f0f0f0" children="Register" type="button" disabled={!isPasswordValid} />
            </Grid>
          </Grid>
        </FormContainer>
      </form>
    </Container>
  );
};

export default RegistrationForm;
