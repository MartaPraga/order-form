import { Section } from '../Section';
import './ToolDetails.scss';

export const ToolDetails = () => {
  return (
    <Section
      title={
        <>
          <img src="/img/drill_icon.svg" alt="drill icon" />
          <h2 id="ToolDetails">Narzędzie</h2>
        </>
      }
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
    facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
    mattis a quam. Integer vel egestas urna, quis blandit neque."
    >
      <div className="toolDetails">
        <div className="line">
          <input
            className="long"
            type="text"
            id="toolName"
            name="toolName"
            placeholder="Nazwa urządzenia"
            required
          ></input>
          <input
            className="long"
            type="text"
            id="toolModel"
            name="toolModel"
            placeholder="Model"
            required
          ></input>
        </div>
        <div className="line">
          <input
            className="verylong"
            type="text"
            id="SerialNr"
            name="SerialNr"
            placeholder="Numer seryjny (opcjonalnie)"
          ></input>
          <div className="popup">gdzie znaleźć numer?</div>
        </div>

        <div className="description">
          <label className="description__title" for="description">
            Opis usterki
          </label>
          <textarea
            className="description__data"
            type="text"
            id="description"
            name="description"
          ></textarea>
        </div>
      </div>
    </Section>
  );
};