import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";

class Profile extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                <AnchorTag link="/app/profile/password-reset" className="btn btn-sm btn-warning float-right" itemValue="Change Password"></AnchorTag>
                    <h4>Personal Profile</h4>
                    
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="mb-2">First Name</label>
                                        <input type="text" className="form-control form-control-sm"value="Kapil" readOnly/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control form-control-sm" value="Bindal" readOnly/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control form-control-sm" value="test@gmail.com" readOnly/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="mb-2">Role</label>
                                        <input type="text" className="form-control form-control-sm" value="Admin" readOnly/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="form-group">
                                        <label className="mb-2">Joined</label>
                                        <input type="text" className="form-control form-control-sm" value="25th December, 2024" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-sm btn-warning" value="Update"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default Profile;