// import Employee from "./Employee";
// import "./EmployeeList.css";


// export const EmployeeList = () => {
  //   return (
    //     <main>
    //       <h2>All Staff</h2>
    //       <section className="employee-list">
    //         <Employee />
    //       </section>
    //     </main>
    //   );
    // };
    
//     import React, {useState, useEffect} from "react";
//     import Employee from "./Employee";
//     import "./EmployeeList.css";
    
//     export const EmployeeList = () => {
      
//       const API = "https://vet-app-0obi.onrender.com/employees"

//   const [vets, setVets] = useState([]);

//   function getAllVets() {
//     fetch(API)
//       .then((data) => data.json())
//       .then((json) => {
//         setVets(json);
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   }

//   useEffect(() => {https://vet-app-0obi.onrender.com
//     getAllVets();
//   }, []);

//   return (
//     <main>
//       <h2>All Staff</h2>
//       <section className="employee-list">
//         {vets.map((vet) => (
//           <Employee key={vet.id} employee={vet} />
//         ))}
//       </section>
//     </main>
//   );

// export default EmployeeList;

// import React, { useState, useEffect } from "react";
// import Employee from "./Employee";
// import "./EmployeeList.css";

// export const EmployeeList = () => {
//   const API = "https://vet-app-0obi.onrender.com/api/employees";
//   const [vets, setVets] = useState([]);
//   const [error, setError] = useState(null); // State for error handling

//   const fetchVets = () => {
//     fetch(API)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((json) => {
//         setVets(json);
//       })
//       .catch((err) => {
//         console.error(err);
//         setError(err.message); // Set error message to state
//       });
//   };

//   useEffect(() => {
//     fetchVets();
//   }, []);

//   return (
//     <main>
//       <h2>All Staff</h2>
//       {error && <div className="error">Error: {error}</div>} {/* Display error if it exists */}
//       <section className="employee-list">
//         {vets.map((vet) => (
//           <Employee key={vet.id} employee={vet} />
//         ))}
//       </section>
//     </main>
//   );
// };

// export default EmployeeList;

import React, { useEffect, useState } from "react";
import Employee from "./Employee";
import "./EmployeeList.css";

export const EmployeeList = () => {

const [employeeData, setEmployeeData] = useState([])
const [petData, setPetData] = useState([])

function setEmployeeList() {
  fetch("https://vet-app-0obi.onrender.com/api/employees")
  .then((response) => response.json())
  .then((json) =>  setEmployeeData(json))
  .catch((err) => {console.log(err)})
}

function setPetDataList() {
  fetch("https://vet-app-0obi.onrender.com/api/pets")
  .then((response) => response.json())
  // .then((json) => console.log(json))
  .then((json) =>  setPetData(json))
  // .catch((err) => console.log(err))
}

function getEmployeePets(id) {
  console.log(petData)

  return petData.filter((pet) => {
    return pet.employeeId == id
  })
} 

useEffect(() => {
   setEmployeeList()
}, [])

useEffect(() => {
  setPetDataList() 
}, [])


  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employeeData.map((employee) => {
         return (
             <Employee
                employee={employee}
                getEmployeePets={getEmployeePets}
             />
             )
          })
        }
        {/* <Employee /> */}
      </section>
    </main>
  );
};
export default EmployeeList;