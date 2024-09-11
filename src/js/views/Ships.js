import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import starwars from "../../img/starwars.png";
export const Ships = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
useEffect(()=>{
actions.getShipData(params.ships_id)
},[])

	return (
		<>
		<div>
			<h1 className="display-4">This will show the demo element: {params.ships_id}</h1>
		</div>

		<div className="card m-5">
  <div className="row g-0">
    <div className="col-md-4">
	<img className="img-fluid rounded-start" src={starwars} style={{height:"100px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{store.devship.name}</h5>
        <p className="card-text">Luke Skywalker was a Tatooine farmboy who rose from humble beginnings to become one of the greatest Jedi the galaxy has ever known. Along with his friends Princess Leia and Han Solo, Luke battled the evil Empire, discovered the truth of his parentage, and ended the tyranny of the Sith. A generation later, the location of the famed Jedi master was one of the galaxy’s greatest mysteries. Haunted by Ben Solo’s fall to evil and convinced the Jedi had to end, Luke sought exile on a distant world, ignoring the galaxy’s pleas for help. But his solitude would be interrupted  and Luke Skywalker had one final, momentous role to play in the struggle between good and evil.
		</p>
      </div>
    </div>
  </div>
</div>
<div className="row">
<div className="col-2 text-center">
<h2 className="text-danger">Name</h2>
<h3 className="text-danger">{store.devship.name}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">model</h2>
<h3 className="text-danger">{store.devship.model}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">manufacturer</h2>
<h3 className="text-danger">{store.devship.manufacturer}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">cost in credits</h2>
<h3 className="text-danger">{store.devship.cost_in_credits}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">crew</h2>
<h3 className="text-danger">{store.devship.crew}</h3>
</div>
<div className="col-2 text-center">
<h2 className="text-danger">passengers</h2>
<h3 className="text-danger">{store.devship.passengers}</h3>
</div>
</div>
		</>
	);
};

Ships.propTypes = {
	match: PropTypes.object
};
