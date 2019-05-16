import React from 'react';
import { connect } from 'react-redux';
import { fetchEmployee } from '../actions';
import FindEmployee from './FindEmployee';
import { PrimaryButton } from 'office-ui-fabric-react';






const heightSelect = {
    height: '30px'
}

var deps = [{ name: "HR" }, { name: "ENGINEERING" }];
var employeeId = {
    HR: ["Select Employee ID", "1", "2", "3", "4", "5"],
    ENGINEERING: ["Select Employee ID", "6", "7", "8", "9", "10"]
};

class Dashboard extends React.Component {
    state = {
        depChosen: '',
        userId: false
    }

    onSelectChange = event => {
        //console.log(event.target.value);
        this.setState({ [event.target.name]: event.target.value });
    }

    getEmployeeData = () => {
        if (this.state.userId) {
            this.props.fetchEmployee(this.state.userId);
            //console.log(this.state.userId);
        }
    };

    cleardetails = () => {
        this.setState({ depChosen: '', userId: false })
        this.props.fetchEmployee();
    }

    render() {
        const { depChosen, userId } = this.state;

        return (
            <div className="ms-Grid-row">

                <div className="ms-Grid-col ms-sm1 ms-md2 ms-lg2 block"></div>

                <div className="ms-Grid-col ms-sm10 ms-md8 ms-lg8 block">
                
                <h1 style={{textAlign: 'center'}}>Employees Dashboard</h1>
                <hr />
                <br></br>
                <div className="ms-Grid-row">
                    
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 textAlignCenter">
                        <label className="label-align FullWidth" htmlFor="department">DEPARTMENT</label>

                        <select 
                            style={heightSelect}
                            className="ms-sm12"
                            id="department"
                            value={depChosen}
                            onChange={this.onSelectChange}
                            name="depChosen"
                        >
                            <option value="" disabled>Select Department</option>
                            {deps.map(val => (
                                <option style={heightSelect} key={val.name} value={val.name}>{val.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 textAlignCenter">                    
                        <label className="label-align" htmlFor="userId">EMPLOYEE ID</label>
                        <select 
                            className="ms-sm12"
                            style={heightSelect}
                            id="userId"
                            value={userId}
                            name="userId"
                            onChange={this.onSelectChange}
                        >
                            {depChosen &&
                                employeeId[depChosen].map((Id, i) => (
                                    <option style={heightSelect} key={i} value={Id}>{Id}</option>
                                ))}
                        </select>                 
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 textAlignCenter">   
                    <label className="label-align" htmlFor="userId"></label>                 
                        <PrimaryButton  className="ms-sm12" onClick={this.getEmployeeData} value="Get Details" style={{ marginTop: '14px'}}>Get Details</PrimaryButton>
                    </div>
                    <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg3 textAlignCenter">
                        <label className="label-align" htmlFor="userId"></label>  

                        <PrimaryButton  className="ms-sm12" style={{backgroundColor: 'grey', marginTop: '14px'}} onClick={this.cleardetails} value="Clear">Clear</PrimaryButton>
                    </div>

                    
                    
                </div>
                <hr />

                <FindEmployee />

                </div>
                <div className="ms-Grid-col ms-sm1 ms-md2 ms-lg2 block"></div>
            </div>
            
        );
    }
};

const mapStateToProps = state => {
  return { data: state.employees };
}


export default connect(mapStateToProps, { fetchEmployee })(Dashboard);


