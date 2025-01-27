import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "../../style/admin.css";
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import DashboardPage from "../../pages/customer/Dashboard";
import CustomerShopPage from "../customer/shop/CustomerShopePage";
import ProfileBasePage from "../customer/profile/ProfileBasePage";


class CustomerRootPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "owner";
    }


    render(){
        return (
                <div>
                    <HeaderNavBar></HeaderNavBar>
                    <div className="admin-page mx-auto mt-1">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-1.5">
                                    <div className="list-group side-navigation">
                                        <AnchorTag link={`${this.props.match.path}/dashboard`} liClassName="" className="list-group-item list-group-item-action" itemValue="Home Page"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/purchase/list`} liClassName="" className="list-group-item list-group-item-action" itemValue="Purchase Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/`} liClassName="" className="list-group-item list-group-item-action" itemValue="Warehouse Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/product/list`} className="list-group-item list-group-item-action" itemValue="Inventory Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/`} liClassName="" className="list-group-item list-group-item-action" itemValue="Order Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/invoice/list`} className="list-group-item list-group-item-action" itemValue="Sales Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/`} className="list-group-item list-group-item-action" itemValue="Ledger Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/`} className="list-group-item list-group-item-action" itemValue="Payment Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/`} className="list-group-item list-group-item-action" itemValue="Vendor Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/employee/list`} liClassName="" className="list-group-item list-group-item-action" itemValue="User Management"></AnchorTag>
                                        <AnchorTag link={`${this.props.match.path}/shop/view`} liClassName="" className="list-group-item list-group-item-action" itemValue="Business Profile"></AnchorTag>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <Switch>
                                        <Route path={`${this.props.match.path}/dashboard`} component={DashboardPage}/>
                                        <Route path={`${this.props.match.path}/shop`} component={CustomerShopPage}/>
                                        <Route path={`${this.props.match.path}/profile`} component={ProfileBasePage}/>
                                    </Switch>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ) 
    }
}

export default CustomerRootPage;