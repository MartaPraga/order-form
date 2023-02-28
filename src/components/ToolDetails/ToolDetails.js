import './ToolDetails.scss';

const ToolDetails = () => {
  return (
    <div className="container">
      <div className="title">
        <img src="/img/drill_icon.svg" alt="drill icon" />
        <h2>Narzędzie</h2>
      </div>
      <div className="title--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
        mattis a quam. Integer vel egestas urna, quis blandit neque.
      </div>
      <div className="toolDetails">
        <div className="line">
          <input
            className="long"
            type="text"
            id="toolName"
            name="toolName"
            placeholder="Nazwa urządzenia"
          ></input>
          <input
            className="long"
            type="text"
            id="toolModel"
            name="toolModel"
            placeholder="Model"
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
          <label 
          className='description__title'
          for="description"
          >Opis usterki</label>
          <textarea
            className="description__data"
            type="text"
            id="description"
            name="description"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;
