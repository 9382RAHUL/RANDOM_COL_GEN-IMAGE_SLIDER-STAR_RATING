
import './App.css';
import Imageslider from './components/image-slider/Imageslider';
// import Randomcom from './components/Randomcom';
// import Rating from './components/star_rating/Rating';

function App() {
  return (
    < >
      {/* <Randomcom/> */}
      {/* <Rating noofstar={10}/> */}
      <Imageslider url={"https://picsum.photos/v2/list"}page={'1'} limit={'10'}/>
    </>

  );
}

export default App;
