export const isValidName = (name) => {
    if (!name) return "Name is required";
    if (name.length < 3) return "Name must be at least 3 characters";
    return "";
  };
  
  export const isValidEmail = (email) => {
    if (!email) return "Email is required";
  
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!re.test(String(email).toLowerCase())) return "Invalid email format";
    return "";
  };
  
  export const isValidPassword = (password) => {
    if (!password) return "Password is required";
    if (password.length < 6) return "Password must be at least 6 characters";
    return "";
  };
  