import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../../hooks/useForm";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [values, handleInputChange] = useForm({
    name: "Aydin bb",
    email: "aydinhermosa@gmail.com",
    password: "123123",
    password2: "123123",
  });
  const { name, email, password, password2 } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      Swal.fire("Error", "Name is requiered", "error");
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire("Error", "Email is not valid", "error");
      return false;
    } else if (password.length < 5) {
      Swal.fire("Error", "Password should be at least 6 characters", "error");
      return false;
    } else if (password.trim() !== password2.trim()) {
      Swal.fire("Error", "Password should and match to other", "error");
      return false;
    }
    return true;
  };
  return (
    <div>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError ? <div className="auth__alert-error">{msgError}</div> : null}
        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          onChange={handleInputChange}
          value={name}
        />
        <input
          onChange={handleInputChange}
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
        />
        <input
          onChange={handleInputChange}
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
        />
        <input
          onChange={handleInputChange}
          className="auth__input"
          type="password"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </div>
  );
};

export default RegisterScreen;
