import React from 'react';
import Swal from 'sweetalert2';

const Confirm = ({ title, subtitle, icon, confirmButtonText, cancelButtonText }) => {
  const handleConfirm = () => {
    console.log('Acción confirmada');
  };

  const handleCancel = () => {
    console.log('Acción cancelada');
  };

  const showAlert = () => {
    Swal.fire({
      title: title,
      text: subtitle,
      icon: icon,
      showCancelButton: true,
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
    }).then((result) => {
      if (result.isConfirmed) {
        handleConfirm();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        handleCancel();
      }
    });
  };

  return (
    <div>
      <button onClick={showAlert}>Mostrar alerta</button>
    </div>
  );
};

export default Confirm;
