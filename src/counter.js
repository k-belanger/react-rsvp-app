import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => 
    <table className="counter">
        <tbody>
            <tr>
                <td>Attending:</td>
                <td>{props.totalAttending}</td>
            </tr>
            <tr>
                <td>Unconfirmed:</td>
                <td>{props.totalUnconfirmed}</td>
            </tr>
            <tr>
                <td>Total:</td>
                <td>{props.totalInvited}</td>
            </tr>
        </tbody>
    </table>
;

Counter.propTypes = {
    totalAttending: PropTypes.number,
    totalUnconfirmed: PropTypes.number,
    totalInvited: PropTypes.number
}

export default Counter;