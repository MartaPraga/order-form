import './ComplaintType.scss';
import { Section } from '../Section/Section';

export const ComplaintType = () => {
  return (
    <Section
      title={
        <>
          <img src="/img/squares_icon.svg" alt="squares icon" />
          <h2 id="ComplaintType">Typ reklamacji</h2>
        </>
      }
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
        mattis a quam. Integer vel egestas urna, quis blandit neque."
    >
      <div className="complaintType__selection">
        <div className="complaintType__selection--option" id="clicked">
          <div className="shield"></div>
          <span>gwarancyjna</span>
        </div>
        <div className="complaintType__selection--option" id="clicked">
          <div className="wallet"></div>
          <span>pogwarancyjna</span>
        </div>
      </div>
      <div className="complaintType__checkbox">
        <label for="checked" className="control control-checkbox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet
          ac,
          <input type="checkbox" id="checked"></input>
          <div className="control_indicator"></div>
        </label>
      </div>
    </Section>
  );
};
