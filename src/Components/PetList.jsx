// export const PetList = () => {
//     return (
//       <aside className="pets-list">
//         <p>No pets listed for this employee.</p>
//       </aside>
//     );
//   };
  
//   export default PetList;

// import React, { useState, useEffect} from "react";

// export const PetList = ({employeeid}) => {

//   const petsApi = 'https://vet-app-0obi.onrender.com/api/pets'
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     fetch(petsApi)
//       .then((data) => data.json())
//       .then((json) => {
//         const employeePets = json.filter((pet) => pet.employeeId === employeeid)
//         setPets(employeePets);
//       })
//       .catch((err) => {
//         console.error(err);
//       });;
//   }, [])

//   return (
//     <aside className="pets-list">
//      {pets.length > 0 ? (<p>{pets.map((pet) => pet.name).join(', ')}</p>) : <p>{pets}</p>}
//     </aside>
//   );
// };

// export default PetList;

// import React, { useState, useEffect } from "react";

// export const PetList = ({ employeeid }) => {
//   const petsApi = 'https://vet-app-0obi.onrender.com/api/pets';
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await fetch(petsApi);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const json = await response.json();
//         const employeePets = json.filter((pet) => pet.employeeId === employeeid);
//         setPets(employeePets);
//       } catch (err) {
//         console.error(err);
//       }
//     };

//     fetchPets();
//   }, [employeeid]); // Add employeeid to the dependency array

//   return (
//     <aside className="pets-list">
//       {pets.length > 0 ? (
//         <p>{pets.map((pet) => pet.name).join(', ')}</p>
//       ) : (
//         <p>No pets found</p> // Display a message if there are no pets
//       )}
//     </aside>
//   );
// };

// export default PetList;

// import React, { useState, useEffect } from "react";

// export const PetList = ({ employeeid }) => {
//   const petsApi = 'https://vet-app-0obi.onrender.com/api/pets';
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true); // State for loading
//   const [error, setError] = useState(null); // State for error handling

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await fetch(petsApi);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const json = await response.json();
//         const employeePets = json.filter((pet) => pet.employeeId === employeeid);
//         setPets(employeePets);
//       } catch (err) {
//         console.error(err);
//         setError(err.message); // Set error message
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPets();
//   }, [employeeid]);

//   if (loading) return <p>Loading pets...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <aside className="pets-list">
//       {pets.length > 0 ? (
//         <p>{pets.map((pet) => pet.name).join(', ')}</p>
//       ) : (
//         <p>{pets}</p>
//       )}
//     </aside>
//   );
// };

// export default PetList;

export const PetList = ({
  getEmployeePets,
  employeeId
}) => {

  let theirPets = getEmployeePets(employeeId)

  theirPets != [] ? theirPets = theirPets.map((pet) => pet.name).join(", ") : null

  console.log(theirPets)
  return (
    <aside className="pets-list">
      {theirPets != "" ? (<span>{theirPets}</span>) : <p>No pets listed for this employee.</p>}

    </aside>
  );
};
export default PetList;