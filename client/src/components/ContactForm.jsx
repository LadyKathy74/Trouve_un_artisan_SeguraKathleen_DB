import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/ContactForm.scss";

export default function ContactForm() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    object: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!fields.name.trim()) newErrors.name = "Champ incorrect";
    if (!fields.email.match(/^[^@]+@[^@]+\.[^@]+$/))
      newErrors.email = "Champ incorrect";
    if (!fields.object.trim()) newErrors.object = "Champ incorrect";
    if (fields.message.trim().length < 5)
      newErrors.message = "Champ incorrect";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    validate();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Formulaire envoyé !");
    }
  };

  const getStatus = (field) => {
    if (!touched[field]) return "default";
    if (errors[field]) return "error";
    return "success";
  };

  return (
    <form className="contact-card" onSubmit={handleSubmit}>
      <h2>Contactez l’artisan</h2>
      <p className="subtitle">Les champs marqués d’un astérisque (*) sont requis.</p>

      {/* NOM */}
      <div className={`field ${getStatus("name")}`}>
        <label>Nom*</label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
        />
        {errors.name && <span className="msg error">*Champ incorrect</span>}
        {!errors.name && touched.name && (
          <span className="msg success">*Champ validé</span>
        )}
      </div>

      {/* EMAIL */}
      <div className={`field ${getStatus("email")}`}>
        <label>Email*</label>
        <input
          type="text"
          name="email"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
        />
        {errors.email && <span className="msg error">*Champ incorrect</span>}
        {!errors.email && touched.email && (
          <span className="msg success">*Champ validé</span>
        )}
      </div>

      {/* OBJET */}
      <div className={`field ${getStatus("object")}`}>
        <label>Objet*</label>
        <input
          type="text"
          name="object"
          value={fields.object}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder=" "
        />
        {errors.object && <span className="msg error">*Champ incorrect</span>}
        {!errors.object && touched.object && (
          <span className="msg success">*Champ validé</span>
        )}
      </div>

      {/* MESSAGE */}
      <div className={`field textarea ${getStatus("message")}`}>
        <label>Message*</label>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Écrivez votre message ici..."
        />
        {errors.message && <span className="msg error">*Champ incorrect</span>}
        {!errors.message && touched.message && (
          <span className="msg success">*Message validé</span>
        )}
      </div>

      <p className="info">
        Les informations recueillies sont nécessaires aux services de la Région.
      </p>

      <div className="buttons">
        <button type="button" className="back">Retour</button>
        <button type="submit" className="send">Envoyer</button>
      </div>
    </form>
  );
}
