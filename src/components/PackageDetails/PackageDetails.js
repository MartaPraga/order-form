import './PackageDetails.scss'

const PackageDetails = () => {
  return (
    <div className="container">
      <div className="title">
        <img src="/img/box_icon.svg" alt="box icon" />
        <h2>Odbiór przesyłki</h2>
      </div>
      <div className="title--description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis in nisl quis rutrum.
      </div>
      <p>Wybierz sposób nadania paczki:</p>
      <div className="PackageDetails">
        <div className="PackageDetails__option">
          <img src="/img/car_icon.svg" alt="car icon" />
          <div className="PackageDetails__option--text">wysyłam kurierem</div>
          </div>
        <div className="PackageDetails__option">
        <img src="/img/pointer_icon.svg" alt="pointer icon" />
          <div className="PackageDetails__option--text">paczkomat lub punkt odbioru</div>
          
        </div>
      </div>
      <p>Kategoria przesyłki:</p>
      <div className="packageSize">
        <div className="packageSize__option">
          <img src="img/small_box_icon.svg" alt="small box icon" />
          <div className="packageSize__option--title">mała</div>
          <div className="packageSize__option--weitgh">do 5 kg</div>
        </div>
        <div className="packageSize__option">
          <img src="img/small_box_icon.svg" alt="small box icon" />
          <div className="packageSize__option--title">średnia</div>
          <div className="packageSize__option--weitgh">do 10 kg</div>
        </div>
        <div className="packageSize__option">
          <img src="img/small_box_icon.svg" alt="small box icon" />
          <div className="packageSize__option--title">duza</div>
          <div className="packageSize__option--weitgh">do 20 kg</div>
        </div>
        <div className="packageSize__option">
          <img src="img/small_box_icon.svg" alt="small box icon" />
          <div className="packageSize__option--title">wielka</div>
          <div className="packageSize__option--weitgh">do 35 kg</div>
        </div>
        <div className="packageSize__option">
          <img src="img/small_box_icon.svg" alt="small box icon" />
          <div className="packageSize__option--title">paleta</div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
