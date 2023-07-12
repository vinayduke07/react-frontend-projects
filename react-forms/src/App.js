import './App.css';

import { ContactFrom } from './components/ContactFrom/ContactFrom';
import ContactHeader from './components/ContactHeader/ContactHeader';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <ContactHeader />
      <ContactFrom />
    </div>
  );
}

export default App;
