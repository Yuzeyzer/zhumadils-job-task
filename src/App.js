import './style.scss';
import Header from './components/header';
import Filter from './components/filter';
import Table from './components/table';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Filter />
      <Table />
    </div>
  );
};

export default App;
