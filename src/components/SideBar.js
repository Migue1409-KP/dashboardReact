import React from 'react';
import image from '../assets/images/logoTO.png';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import LastUser from './lastUser';
import Totals from './Totals';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="TruequeOnline"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>TruequeOnline</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/Categorias">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorias</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Totales">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Totales</span></Link>
                </li>

                {/* <li className="nav-item nav-link">
                <Link className="nav-link" to="/TotalesUsers">
                        <span>- Listado Usuario</span></Link>
                </li>
                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/TotalesProducts">
                        <span>- Listado Productos</span></Link>
                </li> */}


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/Categorias">
                    <GenresInDb lg = "10"/>
                </Route>
                <Route path="/UltimoProducto">
                    <LastMovieInDb />
                </Route>
                <Route path="/UltimoUsuario">
                    <LastUser />
                </Route>
                <Route path="/Totales">
                    <Totals />
                </Route>
                {/* <Route path="/TotalesUsers">
                    <Totals name = "users"/>
                </Route>
                <Route path="/TotalesProducts">
                    <Totals name = "products"/>
                </Route> */}
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;