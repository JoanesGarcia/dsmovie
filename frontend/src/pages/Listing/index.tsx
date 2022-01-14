import axios from "axios";
import MoviewCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {

    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
            });
    }, [])


    return (
        <>

            <p>
                {pageNumber}
            </p>

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