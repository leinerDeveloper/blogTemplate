import React from 'react';
import { styled } from '@mui/system';
import FormRegister from '../../components/Forms/FormRegister';

const CenteredContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#ffffff', // Fondo blanco
  maxHeight: '100%',
});

const Register = () => {
  return (
    <CenteredContainer>
      <FormRegister />
    </CenteredContainer>
  );
};

export default Register;
