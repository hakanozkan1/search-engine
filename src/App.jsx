import Home from './Pages/Home';
import List from './Pages/List';
import AddToList from './Pages/AddToList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<AddToList />} />
      </Routes>
    </Router>
  );
};

export default App;
