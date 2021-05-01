import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleyTimeChange, breakConnection } from '../actions';
import { changeConnectSymbol, connect } from '../services';

const StockConfiguration = () => {
    const dispatch = useDispatch();

    const [deleyTime, setDelayTime] = useState(5000);
    const [stockSymbol, setStockSymbol] = useState('AAPL');

    const handleChangeDelay = (e) => {
        e.preventDefault();
        dispatch(deleyTimeChange(deleyTime));
        breakConnection(dispatch);
        changeConnectSymbol(dispatch, stockSymbol);
    };

    useEffect(() => {
        connect(dispatch, stockSymbol);
    }, []);

    return (
        <div className="stock-configuration">
            <form onSubmit={(e) => handleChangeDelay(e)}>
                <select value={deleyTime} onChange={(e) => setDelayTime(e.target.value)}>
                    <option value="500">0.5 sec</option>
                    <option value="2000">2 sec</option>
                    <option value="5000">5 sec</option>
                    <option value="10000">10 sec</option>
                </select>
                <input type="text" onChange={(e) => setStockSymbol(e.target.value)} placeholder="Enter stock symbol" />
                <button type="submit" data-testid="time-change-submit">Submit</button>
            </form>
        </div>
    );
};

export default StockConfiguration;
