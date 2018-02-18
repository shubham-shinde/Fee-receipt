import React,{Component} from 'react';
import jsPDF from 'jspdf';
import ReceiptComp from './../component/ReceiptComp.js';


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
            case "Tuesday" :
            case "Wednesday":
            case "Thursday":
            case "Friday" :
            case "Saturday":
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
            <ReceiptComp makePdf={this.makePdf} update={this.update}/>
        );
    }
}

export default ReceiptForm;