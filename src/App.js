
import './App.css';
import DropZone from './Components/DropZone/DropZone';
import ReactSelect from './Components/ReactSelect/FavColor';

import YourHobby from './Components/ReactSelect/YourHobby';

function App() {
  return (
    <div className="App">
      <h1 style={{color: 'red'}}>Person's Profile</h1>
      <ul>
        <li><strong>Favourite color :</strong> <ReactSelect /> </li>
        <li><strong> Favourite Hobbies(multiple entry valid) :</strong> <YourHobby /></li>
        <li><strong> Upload Your photo :</strong> <DropZone /></li>
      </ul>
    </div>
  );
}

export default App;
