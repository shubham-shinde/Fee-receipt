import React from 'react';
import propTypes from 'proptypes';

const ReceiptComp = ({update, makePdf}) => (
    <div>
        <form onChange={update} >
            <h1>Name</h1>
            <input type="text" name="name" />
            <h1>College</h1>
            <select name="college" id="collegeName" >
                <option value="Galgotias College of Eng. and Tech.">Galgotias College of Eng. and Tech.</option>
                <option value="GL bajaj">GL bajaj</option>
                <option value="Galgotia University">Galgotia University</option>
                <option value="Noida institute of technology">Noida institute of technology</option>
                <option value="Greater Noida institute of technology">Greater Noida institute of technology</option>
            </select>
            <h1>Fee paid</h1>
            <input type="text" name="feePaid" />
            <h1>Schedule</h1>
            <div>
                <input type="checkbox" name="Monday"/> Monday
                <input type="checkbox" name="Tuesday"/> Tuesday
                <input type="checkbox" name="Wednesday"/> Wednesday
                <input type="checkbox" name="Thursday"/> Thursday
                <input type="checkbox" name="Friday"/> Friday
                <input type="checkbox" name="Saturday"/> Saturday
                <input type="checkbox" name="Sunday"/> Sunday
            </div>
            <h1>Mode of payment</h1>
            <select name="paymentMode" id="paymentMode">
                <option value="By Cash">By Cash</option>
                <option value="Cheque">Cheque</option>
                <option value="Net Banking">Net Banking</option>
                <option value="paytm">paytm</option>
                <option value="tez">tez</option>
                <option value="phonepe">phonepe</option>
            </select>
        </form>
        <button onClick={makePdf}>submit</button>
    </div>
);

ReceiptComp.propTypes = {
    makePdf: propTypes.func.isRequired,
    update: propTypes.func.isRequired
};

export default ReceiptComp;