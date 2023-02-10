import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ClaimantPersonalDetails from './components/ClaimantPersonalDetails/ClaimantPersonalDetails';
import ComplaintType from './components/ComplaintType/ComplaintType';
import Header from './components/Header/Header';
import ToolDetails from './components/ToolDetails/ToolDetails';
import PackageDetails from './components/PackageDetails/PackageDetails';
import Confirmation from './components/Confirmation/Confirmation';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <NavBar />
        <div className='textArea'>
          <ClaimantPersonalDetails />
          <ComplaintType />
          <ToolDetails />
          <PackageDetails />
          <Confirmation />
        </div>
      </div>
    </div>
  );
}

export default App;
