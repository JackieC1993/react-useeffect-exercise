// import React, { useEffect, useState } from "react";
// import PetList from "./PetList";
// import "./Employee.css";

// export const Employee = ({ employee }) => {
//   const [showPets, setShowPet] = useState(false);

//   function toggleShowPets() {
//     setShowPet(!showPets);
//   }

//   return (
//     <article className="employee">
//       <h3>
//         {" "}
//         {employee.prefix ? employee.prefix : ""}
//         {employee.firstName} {employee.lastName}{" "}
//         {employee.postfix ? employee.postfix : ""}
//       </h3>
//       <h4>{employee.title ? employee.title : ""}</h4>
//       <button onClick={toggleShowPets}>Show Pets</button>
//       {showPets ? <PetList employeeid={employee.id} /> : '' }
//     </article>
//   );
// };
// export default Employee;
// import React, { useEffect, useState } from "react"; // Added a comma here
// import PetList from "./PetList";
// import "./Employee.css";

// export const Employee = ({ employee }) => {
//   const [showPets, setShowPets] = useState(false);
//   const [pets, setPets] = useState([]); // State to hold pets for the employee

//   useEffect(() => {
//     const fetchPets = async () => {
//       const response = await fetch(`/api/pets?employeeId=${employee.id}`);
//       const data = await response.json();
//       setPets(data);
//     };

//     if (showPets) {
//       fetchPets(); // Fetch pets only when showPets is true
//     }
//   }, [showPets, employee.id]); // Fetch pets when showPets changes or employee.id changes

//   const toggleShowPets = () => {
//     setShowPets(!showPets);
//   };

//   return (
//     <article className="employee">
//       <h3>
//         {employee.prefix ? employee.prefix + " " : ""}
//         {employee.firstName} {employee.lastName}{" "}
//         {employee.postfix ? ", " + employee.postfix : ""}
//       </h3>
//       <h4>{employee.title ? employee.title : ""}</h4>
//       <button onClick={toggleShowPets}>Show Pets</button>
//       {showPets && <PetList pets={pets} />} {/* Pass pets to PetList */}
//     </article>
//   );
// };

// export default Employee;

import PetList from "./PetList";
import "./Employee.css";
import { useState } from "react";


export const Employee = ({
    employee,
    getEmployeePets
  }) => {

 const [showPetList, setShowPetList] = useState(false)


  const fullName = [employee.prefix, employee.firstName, employee.lastName].join(' ')
  return (
    <article className="employee" key={employee.id}>
      <h3>{`${fullName}${employee.postfix != "" ? `, ${employee.postfix}` : ""}` || `$%Staff Member Name`}</h3>
      <h4>{employee.title || `Staff Member Title`}</h4>
      <button onClick={() => setShowPetList(!showPetList)}>{!showPetList ? `Show Pets` : `Hide Pets`}</button>

      {showPetList ? <PetList 
        getEmployeePets={getEmployeePets}
        employeeId={employee.id}
        /> : null }

    </article>
  );
};
export default Employee;