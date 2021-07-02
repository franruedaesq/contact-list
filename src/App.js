import './App.css';
import Tab from './components/Tab';
import TabBar from './components/TabBar';

function App() {
  return (
    <div className='App'>
      <TabBar>
        <div label='Gator'>
          See ya later, <em>Alligator</em>!
        </div>
        <div label='Croc'>
          After 'while, <em>Crocodile</em>!
        </div>
        <div label='Sarcosuchus'>
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </TabBar>
    </div>
  );
}

export default App;
