
import './App.css';
import Countries from './component/Countries/Countries';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>
    </div>
  );
}





// function LoadCountries(){
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  // }, [])
  // return(
  //   <div>
  //     <h1>Lets Visit The World!!!</h1>
//       <h4>Available Countries: {countries.length}</h4>
//       {
//         countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
//       }
//     </div>
//   )
// }

// function Country(props){
//   return(
//     <div>
//       <h1>Name: {props.name}</h1>
//       <h4>Population: {props.population}</h4>
//     </div>
//   )
// }

export default App;
