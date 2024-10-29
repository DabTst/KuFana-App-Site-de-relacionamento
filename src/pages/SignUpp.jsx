import React, { useState } from "react";

const SignUpp = () => {
  const [formData, setformData] = useState({
    name: "",
    surname: "",
    age: "",
    dateOfBirth: "",
    gender: "",
    email: " ",
    city: "",
    password: "",
    confirmPassword: "",
    agree: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    //password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Senhas diferentes";
      return;
    }

    setErrors(newErrors);

    // If there no error
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Backend requests
    if (validateForm()) {
      console.log("Formulário Submetido", formData);
    } else {
      console.log("Formulário contém erros", errors);
    }
  };
  return (
    <div className="formSignUp">
      <h2>Crie sua conta</h2>
      <form className="signUpForm" onSubmit={handleSubmit}>
        <h4>Preencha o formulário abaixo para criar sua conta.</h4>
        <div className="personalInfo">
          <input
            className="input1"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nome"
            required
          />

          <input
            className="input2"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Apelido"
            required
          />

          <input
            className="input3"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Idade"
            min={18}
            required
          />
        </div>

        <div className="personal2">
          <p>Idade:</p>
          <input
            className="input4"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            placeholder="Idade"
            onChange={handleChange}
            required
          />
          <select
            className="input5"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Escolha Género
            </option>
            <option value="male">Masculino</option>
            <option value="female">Feminino</option>
            <option value="other">Outro</option>
          </select>
        </div>

        <div className="location">
          <input
            className="input6"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Sua cidade"
          />

          <input
            className="input7"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Seu email"
          />
        </div>

        <div className="passwords">
          <input
            className="input8"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Sua Senha"
            required
            min={8}
            max={20}
          />

          <input
            className="input9"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="Confirme Senha"
            onChange={handleChange}
            required
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <div className="full-box">
          <input
            type="checkbox"
            name="agree"
            id="agree"
            className="input10"
            value={formData.agree}
            required
            onChange={handleChange}
          />
          <label for="agree" id="agree-label">
            Eu li e aceito <a href="www.google.com">os termos de uso</a>
          </label>
        </div>
        <button className="btnSignup" type="submit">
          Criar Conta
        </button>
      </form>
    </div>
  );
};

export default SignUpp;
