

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../auth';


export const NavBar = () => {

    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        logout();

        navigate( '/login', {
            replace: true
        } );
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={( { isActive } ) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={( { isActive } ) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={( { isActive } ) => `nav-item nav-link  ${isActive ? 'active' : ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-danger">
                        {user?.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={onLogout}
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}

// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { useState } from 'react';


// export const NavBar = () => {
//     const navigate = useNavigate();

//     const onLogout = () => {
//         navigate( '/login', {
//             replace: true,
//         } );
//     };

//     const [ showMenu, setShowMenu ] = useState( false );

//     const toggleMenu = () => {
//         setShowMenu( !showMenu );
//     };

//     return (
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark p-2">
//             <div className="container-fluid">
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     onClick={toggleMenu}
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 {/* <div className={`navbar-collapse ${showMenu ? 'show' : ''}`}> */}

//                 <div
//                     className={`navbar-collapse collapse w-100 order-3 dual-collapse2 ${showMenu ? 'show' : ''
//                         }`}
//                 >
//                     <div className="navbar-nav">

//                         <NavLink className="nav-item nav-link d-none d-md-block"
//                             to="/"
//                         >
//                             Asociaciones
//                         </NavLink>

//                         <NavLink
//                             className="nav-item nav-link d-none d-md-block"
//                             to="/marvel"
//                         >
//                             Marvel
//                         </NavLink>

//                         <NavLink
//                             className="nav-item nav-link d-none d-md-block"
//                             to="/dc"
//                         >
//                             DC
//                         </NavLink>

//                         <NavLink
//                             className="nav-item nav-link d-none d-md-block"
//                             to="/search"
//                         >
//                             Search
//                         </NavLink>
//                     </div>
//                 </div>

//                 <div
//                     className={`navbar-collapse collapse w-100 order-3 dual-collapse2 ${showMenu ? 'show' : ''
//                         }`}
//                 >
//                     <ul className="navbar-nav ms-auto">
//                         <span className="nav-item nav-link text-info">Fernanda</span>
//                         <button className="nav-item nav-link btn" onClick={onLogout}>
//                             Logout
//                         </button>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };


