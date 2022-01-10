import MovieScore from "components/MovieScore";
import { Link } from "react-router-dom";

function MoviewCard() {

    const movie = {
        id: 1,
        //image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uzERcfV2rSHNhW5eViQiO9hNiA7.jpg",
        //title: "Duna",
        image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/63O5iixxXSmyOaBas7ek1tkeVra.jpg",
        title: "Homem Aranha 3",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary dsmovie-btn">Avaliar</div>
                </Link>

            </div>
        </div>
    )
}

export default MoviewCard;