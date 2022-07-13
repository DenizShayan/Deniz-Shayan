import './App.css';
import Buttonn from './Component/Button';

function App() {
  return (
    <div className="App">
      {/* In Button.js it is Butonn instead of Button */}
      <Buttonn varient='contained' color='warning'>kh...</Buttonn>
      <Buttonn varient='outlined' color='secondary'>kh...</Buttonn>  
    </div>
  );
}

export default App;
