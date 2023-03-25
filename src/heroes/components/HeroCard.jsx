

import { Link } from "react-router-dom"


const CharachtersByHero = ( { alter_ego, characters } ) => {

    return ( alter_ego === characters )
        ? ( <></> )
        : <p>{characters}</p>

};

export const HeroCard = ( {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
} ) => {

    const heroImageUrl = `assets/heroes/${id}.jpg`

    return (
        <div className="col-sm-12 col-md-4 col-lg-3 animate__animated animate__fadeIn">
            <div className="card bg-dark">
                <div className="row no-gutters">

                    <div className="col-4 col-sm-12 ">
                        <img src={heroImageUrl} className="card-img" alt={superhero} />
                    </div>

                    <div className="col-8 col-sm-12">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>

                            <CharachtersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small></p>

                            <Link
                                to={`/hero/${id}`}
                            >
                                ver más...
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
