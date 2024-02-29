import { useState } from "react";
import action from "../assets/action.png";
import drama from "../assets/drama.png";
import fantasy from "../assets/fantasy.png";
import fiction from "../assets/fiction.png";
import horror from "../assets/horror.png";
import music from "../assets/music.png";
import romance from "../assets/romance.png";
import thriller from "../assets/thriller.png";
import western from "../assets/western.png";
import vector from "../assets/Vector.png";
import MovieOptions from "../components/MovieOptions";
import MovieChip from "../components/MovieChip";
import { useNavigate } from "react-router-dom";

const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: <img style={{ width: "160px"}} src={action} />,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: <img style={{ width: "160px"}} src={drama} />,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: <img style={{ width: "160px"}} src={fantasy} />,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: <img style={{ width: "160px" }} src={fiction} />,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: <img style={{ width: "160px" }} src={horror} />,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: <img style={{ width: "160px" }} src={music} />,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: <img style={{ width: "160px"}} src={romance} />,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: <img style={{ width: "160px"}} src={thriller} />,
  },
  {
    id: "Western",
    color: "#912500",
    image: <img style={{ width: "160px"}} src={western} />,
  },
];
export default function Movies() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    if (selected.length < 3) {
      return;
    } else {
      localStorage.setItem("movies", JSON.stringify(selected));
      navigate("/display");
    }
  };
  return (
    <main style={{display:"flex", justifyContent:"center",alignItems:"center",backgroundColor:"#000000",height:"100vh", width:"100vw"}}>
      <section style={{display:"flex",flexDirection:"column",gap:"20px"}}>
        <h1 style={{color: "#72DB73",fontFamily:"Single Day, cursive",fontWeight: "400",fontSize:"40px"}}>Super app</h1>
        <p style={{color:"#FFFFFF",fontSize:"40px",width:"30vw",lineHeight:"50px",fontFamily: "Roboto, sans-serif"}}>Choose your entertainment category</p>
        <div
          style={{
            display: "flex",
            flexWrap:"wrap",
            maxWidth:"30vw",
            gap: "12px"
          }}
        >
          {selected.map((item) => {
            return (
              <MovieChip
                key={item}
                data={item}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
        {selected.length < 3 ? <p style={{color:"#FF0000"}}><img style={{width:"20px"}} src={vector} alt="error_symbol"/>&nbsp;&nbsp;Minimum 3 categories required</p> : <></>}
      </section>

      <section style={{display:"flex",flexDirection:"column",gap:"12px"}}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "16px",
          }}
        >
          {genres.map((genre) => {
            return (
              <MovieOptions
                key={genre.id}
                data={genre}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
        <div style={{display:"flex",justifyContent:"end"}}>
          <button style={{height:"7vh",width:"10vw",color:"#FFFFFF",backgroundColor:"#148b09",fontFamily: "DM Sans",fontSize: "16px",fontWeight: "500",letterSpacing: "0.02em",textAlign: "center",border:"none",borderRadius:"20px"}} onClick={handleClick}>Next Page</button>
        </div>
        
      </section>
    </main>
  );
}