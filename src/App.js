import Home from './Components/Home/Home';

import MobileComponent from './Components/Home_Mobile/MobileComponent';

function App() {
  const width = window.innerWidth;
  const breakpoint = 620;
  return (
    <div className="App">
     {width < breakpoint ? <MobileComponent /> : <Home />}
    </div>
  );
}

export default App;
