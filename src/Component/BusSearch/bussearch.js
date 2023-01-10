import React, { Component, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './busSearch.scss'
// export default class bussearch extends Component {

//     constructor() {
//         super();
//         this.state = {
//             busList: [],
//             msg: ''
//         }
//     }

//     componentDidMount() {
//         const { source, destination } = this.props.match.params;

//         axios.get(`http://localhost:8081/list/${source}/${destination}`)
//             .then(response => this.setState({
//                 busList: response.data
//             }))
//     }

//     handleBook = async (bus) => {
//         const resp = await axios.post('http://localhost:8081/book', { // synchronuos way of execution
//             body: bus
//         })
//         console.log(resp);

//         if (resp.status == 200) {
//             this.setState({
//                 msg: resp.data.msg
//             })
//         } else {
//             this.setState({
//                 msg: 'Unable to book ticket'
//             })

//         }

//         console.log('ticket called');
//     }

//     render() {
//         console.log(this.props.match.params)
//         const { source, destination, date } = this.props.match.params;
//         const { busList, msg } = this.state;
//         return (
//             <div>
//                 <h2 className="text-center">Search Route: {source} - {destination}</h2>
//                 <h3 className="text-success text-center">{msg}</h3>
//                 {busList.map(bus => {
//                     return (
//                         <div className="busItem">
//                             <h4>{bus.type}</h4>
//                             <p>Timings:{bus.time}</p>
//                             <b>Price:{bus.price}</b>
//                             <button type="button" onClick={() => this.handleBook(bus)}>Book Ticket</button>
//                         </div>
//                     )
//                 })
//                 }
//             </div>
//         )
//     }
// }



export default function Bussearch() {
    const [busList, setBusData] = useState([]);
    const [msg, setMsg] = useState('');

    const { source, destination } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8081/list/${source}/${destination}`)
            .then(response =>
                setBusData(response.data)
            )
    }, []) // componentDidMount

    useEffect(() => {
        alert('message value changed')
    }, [msg]) // componentDidUpdate

    useEffect(() => {
        return () => {
            console.log('componentWillUnmount')
        }
    })// componentWillUnmount

    const handleBook = async (bus) => {
        const resp = await axios.post('http://localhost:8081/book', { // synchronuos way of execution
            body: bus
        })
        if (resp.status == 200) {
            setMsg(resp.data.msg);
        } else {
            setMsg('Unable to book ticket');
        }
    }

    return (
        <div>
            <h2 className="text-center">Search Route: {source} - {destination}</h2>
            <h3 className="text-success text-center">{msg}</h3>
            {busList.map(bus => {
                return (
                    <div className="busItem">
                        <h4>{bus.type}</h4>
                        <p>Timings:{bus.time}</p>
                        <b>Price:{bus.price}</b>
                        <button type="button" onClick={() => handleBook(bus)}>Book Ticket</button>
                    </div>
                )
            })
            }
        </div>
    )
}

