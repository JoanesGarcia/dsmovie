import axios from "axios";
import MoviewCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {

    //TESTE
    axios.get(`${BASE_URL}/movies?size=12&page=0`)
        .then(response => {
            console.log(response.data);
        });

    return (
        <>
            <Pagination />

            <div className="conteiner">
               
               <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MoviewCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MoviewCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MoviewCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MoviewCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-3">
                        <MoviewCard />
                    </div>
                   
                </div>              
            </div>
        </>
    );
}

export default Listing;