import React, { Component } from 'react'

// export default class List extends Component {
//     render() {
//         const { cars } = this.props;
//         return (
//             <div>
//                 {cars.map((car, index) => {
//                     return <div className="card" key={index}>
//                         <h1>{car.name}</h1>
//                         <p>{car.price}</p>
//                     </div>
//                 })}
//             </div>
//         )
//     }
// }



export default function List(props) {
    const { cars } = props;
    return (
        <div>
            {cars.map((car, index) => {
                return <div className="card" key={index}>
                    <h1>{car.name}</h1>
                    <p>{car.price}</p>
                </div>
            })}
        </div>
    )
}
