export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailRegex.test(email);
    const maxLengthExceeded = email.length > 35;
  
    const errors = {};
  
    if (!validEmail) {
      errors.email = 'No es un email válido';
    }
  
    if (maxLengthExceeded) {
      errors.email = 'El email debe tener como máximo 35 caracteres';
    }
  
    return errors;
  };
  
  export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[0-9])[a-zA-Z0-9]{6,10}$/;
    const validPassword = passwordRegex.test(password);
  
    const errors = {};
  
    if (!validPassword) {
      errors.password = 'La contraseña debe tener al menos un número y una longitud entre 6 y 10 caracteres';
    }
  
    return errors;
  };
  
  