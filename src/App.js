import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import PieDashboard from './components/PieDashboard';
import StackedDashboard from './components/StackedDashboard';
import Toast from 'react-bootstrap/Toast';
import NavbarComponent from './components/NavbarComponent';
import RainFall from './components/RainFall';
import './style.css'

function App() {
  return (
    <div className='container'>
      <NavbarComponent />
      <div className='row'>
        <div className='col'>
          <Toast className="d-inline-block m-1"
            variant='Warning'>
            <Toast.Header className='bg-info'>
              <strong className="me-auto">WeekData</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body><Dashboard /></Toast.Body>
          </Toast>
        </div>
        <div className='col'>
          <Toast className="d-inline-block m-1"
            variant='primary'>
            <Toast.Header className='bg-info'>
              <strong className="me-auto">Sales Data</strong>
              <small>25 mins ago</small>
            </Toast.Header>
            <Toast.Body><PieDashboard /></Toast.Body>
          </Toast>
        </div>
        <div className='col'>
          <Toast className="d-inline-block m-1"
            variant='Warning'>
            <Toast.Header className='bg-info'>
              <strong className="me-auto">Customer Data</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body><StackedDashboard /></Toast.Body>
          </Toast>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        {/* <div className='col'>
      <Toast variant='Warning'>
            <Toast.Header className='bg-info'>
              <strong className="me-auto">Customer Data</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body><RainFall /></Toast.Body>
          </Toast>

        
      </div> */}
        <div class="shadow p-3 mb-5 bg-white rounded">
      
            <p className="paragraph-text">Customer Data</p>
     
          <RainFall />

        </div>


      </div>



    </div>



  );
}

export default App;
