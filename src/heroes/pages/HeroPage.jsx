

import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"

import { getHeroById } from "../helpers"


export const HeroPage = () => {

    const { id } = useParams();

    const hero = useMemo( () => getHeroById( id ), [ id ] );

    // const hero=getHeroById( id );

    const navigate = useNavigate();



    const onNavigateBack = () => {
        hero.publisher === 'Marvel Comics'
            ? navigate( '/marvel', {
                replace: true,
            } )
            : navigate( '/dc', {
                replace: true,
            } )
        // navigate(-1);
    };

    if ( !hero ) {
        return <Navigate to="/marvel" />
    }

    return (

        <div className="row mt-5">
            <div className="col-12 col-md-5 ">
                <img
                    src={`/assets/heroes/${id}.jpg`}
                    alt={`Imagen de ${hero.superhero}`}
                    className="img-thumbnail bg-danger border-danger animate__animated animate__fadeInLeft"
                />
            </div>
            <div className="col-12 col-md-7 ">
                <h3 className="mt-5 mt-md-0">{hero.superhero}</h3>
                <ul className="list-group list-group-flush ">
                    <li
                        className="list-group-item bg-dark text-white"
                    > <b>Alter ego:</b> {hero.alter_ego} </li>
                    <li
                        className="list-group-item bg-dark text-white"
                    > <b>Publisher:</b> {hero.publisher} </li>
                    <li
                        className="list-group-item bg-dark text-white"
                    > <b>First appearance:</b> {hero.first_appearance} </li>
                </ul>

                <h5 className="mt-3"> Characters </h5>
                <p>{hero.characters}</p>

                <button
                    className="btn btn-danger"
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>

            </div>

        </div >

    )
}



