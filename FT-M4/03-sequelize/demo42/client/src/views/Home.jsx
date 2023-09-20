import CardList from "../components/CardList/CardList";
import Nav from "../components/Nav/Nav";
import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCharacters} from "../redux/actions";

const homeStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles = {
  marginTop: "75",
  marginBottom: "50",
  fontSize: "76",
  color: "#0ccac4",
  fontFamily: "Bigelow Rules",
};

function Home() {
  // const [characters, setCharacters] = useState([]);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  // const coleguillas = useSelector (state=>state.coleguillas)

  useEffect(() => {
    dispatch(getCharacters());
    // return () => {
    //   alert("Me voy a desmontar coleguillas");
    // };
  }, []);

  return (
    <div style={homeStyle}>
      <h1 style={titleStyles}>Mi app de Harry Potaaah ⚡</h1>
      <Nav />
      <CardList props={characters} />
    </div>
  );
}

export default Home;

//Componente de clase

// import CardList from "../components/CardList";
// import {Component} from "react";
// import {connect} from "react-redux";
// import {getCharacters} from "../redux/actions";

// class Home extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount() {
//     // dispatch (cargue a los personajes de la store)
//     this.props.getCharacters();
//   }

//   render() {
//     return (
//       <div>
//         <CardList props={this.props.characters} />
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getCharacters: () => {
//       dispatch(getCharacters());
//     },
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters,
//     // coleguillas:state.coleguillas
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Home);
