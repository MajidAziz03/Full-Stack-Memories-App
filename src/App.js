import './App.css';
import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts.js';
import Navbar from './Components/Navbar.js'
import memories from './images/memories.png'

function App() {
  return (
    <>
      < Navbar /> 
      <div className="container">
        <div className="card">
          <div className="card-container">
          <div><h1> Memories </h1></div>
          <div><img className='img-thumbnail card-img' src={memories} alt="memoriespic" /></div>
        </div>
        </div>
      </div>
      <div className="container">
        <div className="combine">
          <div className="left-posts">
            < Posts />
          </div>
          <div className="right-form">
            < Form />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;


