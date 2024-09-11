const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			devCharacters: [
			],
			devCharacter: {},
			devPlanets:[
				
			],devPlanet:{},
			favorites:[],
			devship: {},
			devShips: [
			],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacterData: (uid) => {
				fetch("https://swapi.dev/api/people/"+uid)
				.then(response => response.json())
				.then(data => {
					setStore({ devCharacter: data });
					console.log("data de dev");
					console.log(data);
				})
				.catch(error => console.error("Error fetching dev characters:", error));
			},
			getdevData: () => {
				fetch("https://swapi.dev/api/people")
					.then(response => response.json())
					.then(data => {
						setStore({ devCharacters: data.results });
						console.log("data de dev");
						console.log(data.results);
					})
					.catch(error => console.error("Error fetching dev characters:", error));
			
			},
			getdevplanetsData: () => {
				fetch("https://swapi.dev/api/planets")
					.then(response => response.json())
					.then(data => {
						setStore({ devPlanets: data.results });
						console.log("data de dev");
						console.log(data.results);
					})
					.catch(error => console.error("Error fetching dev characters:", error));
			
			},
			getdevShipsData: () => {
				fetch("https://swapi.dev/api/starships")
					.then(response => response.json())
					.then(data => {
						setStore({ devShips: data.results });
						console.log("data de dev");
						console.log(data.results);
					})
					.catch(error => console.error("Error fetching dev characters:", error));
			
			},
			getShipData: (uid) => {
				fetch("https://swapi.dev/api/starships/"+uid)
				.then(response => response.json())
				.then(data => {
					setStore({ devship: data });
					console.log("data de dev");
					console.log(data);
				})
				.catch(error => console.error("Error fetching dev characters:", error));
			},
			getPlanetData: (uid) => {
				fetch("https://swapi.dev/api/planets/"+uid)
				.then(response => response.json())
				.then(data => {
					setStore({ devPlanet: data });
					console.log("data de dev");
					console.log(data);
				})
				.catch(error => console.error("Error fetching dev characters:", error));
			},
			addfav: (props) => {
				const store = getStore();
				if(store.favorites.includes(props)){
				setStore({ favorites: store.favorites.filter((pedro)=>pedro !=props)  });
				}else{
				setStore({ favorites: [...store.favorites,props]  });}
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
