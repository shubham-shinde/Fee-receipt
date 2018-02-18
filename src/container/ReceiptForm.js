import React,{Component} from 'react';
import jsPDF from 'jspdf';


class ReceiptForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : 'shubham shinde',
            college: 'galgotias college of eng. and tech.',
            feePaid: 3000,
            schedule: [],
            Mode: "cash"
        }
    }

    update = (event) => {
        const state = Object.assign({},this.state);
        switch (event.target.getAttribute('name')) {
            case "name":
                state.name = event.target.value;
                this.setState(Object.assign({},state));   
            break;
            case "college":
                state.college = event.target.value;
                this.setState(Object.assign({},state));
            break;
            case "Monday":
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Tuesday" :
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Wednesday":
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Thursday":
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Friday" :
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Saturday":
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "Sunday":
                if (event.target.checked) {
                    state.schedule = [...state.schedule,event.target.getAttribute('name')];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule);
                }
                if (!event.target.checked) {
                    const index = Number(state.schedule.findIndex(function(data) {
                        return data===this;
                    },event.target.getAttribute('name')));
                    state.schedule = [...state.schedule.slice(0,index),...state.schedule.slice(index+1,state.schedule.length)];
                    this.setState(Object.assign({},state));
                    console.log(state.schedule)
                }
            break;
            case "feePaid":
                state.feePaid = event.target.value;
                this.setState(Object.assign({},state));
            break;
            case "paymentMode":
                state.Mode = event.target.value;
                this.setState(Object.assign({},state));
            break;
        }
    }

    makePdf = () => {
        const schedule = [...this.state.schedule];
        console.log(schedule);

        var doc = new jsPDF()
        doc.text('Name: '+this.state.name, 10, 10)
        doc.text('College: '+this.state.college, 10, 30)
        doc.text('Schedule: '+schedule.toString(), 10, 50)
        doc.text('Fee Paid: '+String(this.state.feePaid), 10, 70)
        doc.text('Mode of payment: '+this.state.Mode, 10, 90)
        doc.save(this.state.name+'.pdf')
    }
    render() {
        return (
            <div>
                <form onChange={this.update} >
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
                <button onClick={this.makePdf}>submit</button>
            </div>
        );
    }
}

export default ReceiptForm;