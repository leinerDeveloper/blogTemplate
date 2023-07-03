import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const RoundedPillButton = styled(Button)(({ theme, hoverColor }) => ({
  borderRadius: '9999px',
  padding: theme.spacing(1, 3),
  '&:hover': {
    backgroundColor: hoverColor,
  },
}));

const ButtonGeneral = ({
  hoverColor,
  children,
  type = 'button',
  variant = 'contained',
  color = 'primary',
  disabled = false,
}) => {
  return (
    <RoundedPillButton
      color={color}
      hoverColor={hoverColor}
      type={type}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </RoundedPillButton>
  );
};

export default ButtonGeneral;
