import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ButtonSubscribe = () => {
  const [subcribe, setSubcribe] = useState(false);
  return (
    <>
      <button
        onClick={() => {
          setSubcribe(!subcribe);
          toast.success('Subscrito con exito');
        }}
        className="btn btn-primary"
      >
        {subcribe ? 'Subscrito' : 'Subcribete'}
      </button>
      <ToastContainer />
    </>
  );
};

export default ButtonSubscribe;
