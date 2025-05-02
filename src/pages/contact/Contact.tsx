import { useState } from "react";
import "./Contact.scss";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Formulaire soumis :", formData);
    alert(
      "Merci pour votre message ! (Et non, on n'enverra rien, c'est une démo.)"
    );
    // Ici tu pourrais faire un fetch vers une API ou utiliser EmailJS par exemple.
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Vous avez un projet ? Discutons-en !</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
};
