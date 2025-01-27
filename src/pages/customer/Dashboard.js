import React, {Component} from "react";
import PageHeader from "../../components/PageHeader";

class DashboardPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <PageHeader headerText="Welcome to XYZ Organization"/>
                <div className="w-75">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-3">
                                <div className="dash-summary-cell">
                                    <p><b>Total Orders</b></p>
                                    <p>120</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="dash-summary-cell">
                                    <p><b>Open Orders</b></p>
                                    <p>40</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="dash-summary-cell">
                                    <p><b>Total SKUs</b></p>
                                    <p>340</p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="dash-summary-cell">
                                    <p><b>Total Order Value</b></p>
                                    <p>123500</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        ) 
    }
}

export default DashboardPage;