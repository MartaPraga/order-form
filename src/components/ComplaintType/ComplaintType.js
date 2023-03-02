import './ComplaintType.scss' 


const ComplaintType = () => {

  const addClasses = () => {
    document.querySelector("#clicked").classList.add('clickedBorder, clicked');
  }

  return (
    <div className="container">
      <div className="title">
        <img src="/img/squares_icon.svg" alt="squares icon" />
        <h2 id='ComplaintType'>Typ reklamacji</h2>
      </div>
      <div className="title--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet ac,
        mattis a quam. Integer vel egestas urna, quis blandit neque.
      </div>
      <div className="complaintType__selection">
        <div className="complaintType__selection--option" id='clicked' onClick={addClasses}>
          <div className='shield'></div>
          <span>gwarancyjna</span>
        </div>
        <div className="complaintType__selection--option" id='clicked' onClick={addClasses}>
          <div className="wallet"></div>
          <span>pogwarancyjna</span>
        </div>
      </div>
      <div className='complaintType__checkbox'>
      

        <label for='checked' className='control control-checkbox'>
         
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          facilisis in nisl quis rutrum. Ut ligula diam, ullamcorper a aliquet
          ac,
          <input type="checkbox" id='checked'></input>
          <div class="control_indicator"></div>

        </label>

      </div>

    </div>
  );
};

export default ComplaintType;
