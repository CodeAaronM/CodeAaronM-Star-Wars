import React, {useContext} from "react";
import { Link } from "react-router-dom";
import starwars from "../../img/starwars.png";
import { Context } from "../store/appContext";
export const Navbar = () => {

	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src={starwars} style={{height:"100px"}}/>
			</Link>
			<div className="ml-auto">
			<div className="dropdown" style={{marginRight:"150px"}}>
  <a className="btn btn-secondary dropdown-toggle btn-warning" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </a>
  <ul className="dropdown-menu">
	{store.favorites.map((favorite, index)=><li key={index}><p className="dropdown-item mb-1" href="#">{favorite}<button type="button" className="btn" onClick={()=>actions.addfav(favorite)}><i className="fa-solid fa-trash"></i></button></p></li>)}
  </ul>
</div>
			</div>
		</nav>
	);
};
