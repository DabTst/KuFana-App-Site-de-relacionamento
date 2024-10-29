import React, { useState } from "react";

const Questions = () => {
  const [responses, setresponses] = useState({});

  const questions = [
    {
      id: 1,
      question: "O que GOSTA de assitir?",
      options: ["Filmes", "Seriados"],
    },
    {
      id: 1,
      question: "Prefere SAIR ou fica em CASA?",
      options: ["Sair", "Em Casa"],
    },
    {
      id: 1,
      question: "Prefere HAMBURGUER ou PIZZA?",
      options: ["Pizza", "Hamburgeur"],
    },
    {
      id: 1,
      question: "Gosta de DOCES ou SALGADOS?",
      options: ["Doces", "Salgados"],
    },
    { id: 1, question: "Gosta de COZINHAR?", options: ["Não", "Sim"] },
    {
      id: 1,
      question: "Estilo de MUSICA favorito?",
      options: ["Todos", "Nenhum"],
    },
    { id: 1, question: "Gosta de LER ?", options: ["Não", "Sim"] },
    { id: 1, question: "Perfere FRIO ou CALOR?", options: ["Calor", "Frio"] },
    {
      id: 1,
      question: "Gosta de VISITAR ou SER VISITADO?",
      options: ["Visitar", "Ser Visitado"],
    },
  ];

  const handleResponse = (questionId, answer) => {
    setresponses({
      ...responses,
      [questionId]: answer,
    });
  };

  const handleSubmit = () => {
    console.log("User Response:", responses);
  };

  return (
    <div>
      <h2>Questionário</h2>

      <h5>
        Responda o questionário abaixo com suas preferências para que possamos
        criar as melhores ligações para voçê!
      </h5>
      {questions.map((q) => (
        <div key={q.id}>
          <p>{q.question} </p>
          {q.options.map((option) => (
            <label>
              <input
                type="radio"
                name={`question - ${q.id}`}
                value={option}
                checked={responses[q.id] === option}
                onChange={() => handleResponse(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}> Enviar Respostas</button>
    </div>
  );
};

export default Questions;
