import { useState } from 'react';
import dayjs from 'dayjs';

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-fields">
        <label htmlFor="dateFrom" className="field-label">Od:</label>
        <input id="dateFrom" className="field-input" type="date" />

        <label htmlFor="dateTo" className="field-label">Do:</label>
        <input id="dateTo" className="field-input" type="date" />

        <label htmlFor="numberOfPeople" className="field-label">Počet osob:</label>
        <input id="numberOfPeople" className="field-input" type="text" />

        <label htmlFor="dining" className="field-label">Stravování:</label>
        <select id="dining" className="field-input">
          <option>Žádné</option>
          <option>Snídaně</option>
          <option>Polopenze</option>
          <option>Plná penze</option>
        </select>

        <label htmlFor="pet" className="field-label">Domácí mazlíček:</label>
        <input id="pet" className="field-input" type="checkbox" />

        <label htmlFor="child" className="field-label">Přístýlka pro dítě:</label>
        <input id="child" className="field-input" type="checkbox" />

        <label htmlFor="access" className="field-label">Bezbariérový přístup:</label>
        <input id="access" className="field-input" type="checkbox" />

        <label htmlFor="email" className="field-label">E-mail:</label>
        <input id="email" className="field-input" type="e-mail" />

        <label htmlFor="phone" className="field-label">Telefon:</label>
        <input id="phone" className="field-input" type="phone" />
      </div>

      <button className="wide" type="submit">Odeslat poptávku</button>

      {submitted && <p className="success-message">Formulář byl úspěšně odeslán.</p>}
    </form>
  );
};