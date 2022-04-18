import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Container, Table, Row, Col } from "reactstrap"

const Coin = () => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false")
            .then(res => {
                setCoins(res.data)
                console.log(res.data)
            })
            .catch(error => console.log("Error"))
    }, [])

    return (
        <div className='Coin'>
            <Container className='w-100%'>
                <Row>
                    <Col md='12' >
                        <Table>
                            <thead>
                                <tr className='text-white'>
                                    <th>Crypto Name</th>
                                    <th>Current price</th>
                                    <th>Market cap Change</th>
                                    <th>Market cap rank</th>
                                </tr>
                            </thead>
                            {coins.map(coin => {
                                return (
                                    <tbody>
                                        <tr>
                                            <th>
                                                <img className='cryptoImage' src={coin.image} />
                                                {coin.name}</th>
                                            <td>{coin.current_price}</td>
                                            {coin.market_cap_change_percentage_24h < 0 ? (
                                                <td className='red'>{coin.market_cap_change_percentage_24h.toFixed(2)}%</td>
                                            ) : (
                                                <td className='green'>
                                                    {coin.market_cap_change_percentage_24h.toFixed(2)}%
                                                </td>
                                            )}
                                            <td>{coin.market_cap_rank}</td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )

}
export default Coin;