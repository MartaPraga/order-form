import './SelectionDataAndTime.scss';

const SelectionDataAndTime = () => {
  return (
    <div className="SelectionDataAndTime">
      <div className="SelectionDataAndTime__date">
        <input
          type="date"
          placeholder="Data odbioru"
          id="data"
          name="data"
        ></input>
      </div>
      <div className="SelectionDataAndTime__time">
        <img  className="SelectionDataAndTime__time--img" src="/img/clock_icon.svg" alt="clock icon" />
        <select className="SelectionDataAndTime__time__select">
          <option className="SelectionDataAndTime__time__select--option" value="choose" selected="true" disabled="disabled">Wybierz godziny odbioru:</option>
          <option className="SelectionDataAndTime__time__select--option" value="rano">08:00-10:00</option>
          <option className="SelectionDataAndTime__time__select--option" value="popołudnie">10:00-13:00</option>
          <option className="SelectionDataAndTime__time__select--option" value="wieczór">13:00-16:00</option>
        </select>
      </div>
    </div>
  );
};

export default SelectionDataAndTime;
