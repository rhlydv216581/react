import Card from "./components/Card";
import  HADLLING  from './components/HADLLING'
import Hello from './components/Hello'
import "./App.scss"
const App = () => {
  return (
    <div className="components">
  <Card />
  {/* <Card username = " rahull" /> */}
  <HADLLING/>
  <Hello/>
</div>

  );
};

export default App;