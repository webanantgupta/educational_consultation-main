// import React from 'react'
// import { useState } from 'react'
// import { Input, Label } from 'reactstrap';

// const SortDate = ({ date }) => {

//     const [sort, setSort] = useState("ascending");

//     const handleChange = (e) => {
//         setSort(e.target.value)
//     }
//     const dataarr = [
//         { value: "13-10-2025" },
//         { value: "16-10-2025" },
//         { value: "15-10-2025" },
//         { value: "14-10-2025" },
//     ]
//     const sortedData = [3, 5, 2, 1].sort((a, b) => {
//         console.log(a - b,'dhfgdsh')
//         if (sort === "ascending") {
//             return a - b
//         } else {
//             return b - a
//         }
//     })
 

//     console.log(sortedData, 'sortedData')
//     return (
//         <div className='sort_container'>
//             <Label>Sort By Date</Label>
//             <Input type="select" value={sort} onChange={() => handleChange()}>
//                 <option value={"ascending"}>Ascending</option>
//                 <option value={"descending"}>Descending</option>

//             </Input>
//         </div>
//     )
// }

// export default SortDate


// const date = grid.map((obj)=>{
//   console.log("Date with string", obj.date);
  
//   const newDate = (obj.date);
//   console.log(newDate);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      const date = grid.map((obj)=>({
//   ...obj,
//   stringDate : Number(obj.date)
// }));
// console.log(date);                                 
  
// });
// console.log(date);

// const sortedData = date.stringDate.sort((a,b)=> a-b)
// console.log(sortedData);