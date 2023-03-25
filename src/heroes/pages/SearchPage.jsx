

import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { HeroCard } from "../components";
import { useForm } from "../../hooks";
import { getHeroesByName } from "../helpers";


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );
    const heroes = getHeroesByName( q );

    const showSearch = ( q.length === 0 );
    const showError = ( q.length > 0 ) && heroes.length === 0;

    const { searchText, onInputChange } = useForm( {
        searchText: q
    } );

    const onSearchSubmit = ( e ) => {

        e.preventDefault();
        // if ( searchText.trim().length <= 1 ) return;
        navigate( `?q=${searchText}` )

    };


    return (
        <>
            <h1>Search Hero</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Searching</h4>
                    <hr />

                    <form onSubmit={onSearchSubmit}>
                        <input type="text"
                            placeholder="Search a hero..."
                            className="form-control danger"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />

                        <button className="btn btn-danger mt-1">Serch</button>

                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    <div
                        className="alert alert-primary animate__animated animate__fadeIn"
                        style={{ display: showSearch ? '' : 'none' }}
                    >
                        Search a hero
                    </div>

                    <div
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{ display: showError ? '' : 'none' }}
                    >
                        No hero found with <b>{q}</b>
                    </div>

                    {
                        heroes.map( hero => (
                            < HeroCard key={hero.id}{...hero} />
                        ) )
                    }

                </div>
            </div>
        </>
    )
}



