import React, {Component} from "react";
import AnchorTag from "../Anchortag";
import InputFormGroup from "../input/InputFormGroup";
import TextAreaFormGroup from "../input/TextAreaFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";


class PurchaseForm extends Component{
    constructor(props){
        super(props);
        this.productName = [
            {
                "id": 1,
                "name": "Pressure Cooker"
            },
            {
                "id": 2,
                "name": "Induction Cooktop"
            },
            
            {
                "id": 3,
                "name": "Wiper"
            },
            {
                "id": 4,
                "name": "Water Bottle"
            }
        ]
        this.productVendor = [
            {
                "id": 1,
                "name": "ABC"
            },
            {
                "id": 2,
                "name": "XYZ"
            },
            
            {
                "id": 3,
                "name": "PQR"
            },
            {
                "id": 4,
                "name": "Add New"
            }
        ]
        this.productAddress = [
            {
                "id": 1,
                "name": "Delhi"
            },
            {
                "id": 2,
                "name": "Gurugram"
            },
            
            {
                "id": 3,
                "name": "Kolkata"
            },
            {
                "id": 4,
                "name": "Mumbai"
            }
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/app/shop/purchase/list" className="btn btn-primary float-right" itemValue="Cancel"></AnchorTag>
                    <h4>Create Purcahse Order</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="PO Number"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="PO Date"/>
                                </div>
                                <div className="col-6">
                                    <SelectFormGroup labelClassName="mb-2" label="Billing Address" selectClassName="custom-select my-1 mr-sm-2" selectData={this.productAddress}/>
                                </div>
                                <div className="col-6">
                                    <SelectFormGroup labelClassName="mb-2" label="Shipping Address" selectClassName="custom-select my-1 mr-sm-2" selectData={this.productAddress}/>
                                </div>
                                <div className="col-12">
                                    <SelectFormGroup labelClassName="mb-2" label="Vendor Name" selectClassName="custom-select my-1 mr-sm-2" selectData={this.productVendor}/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Vendor Mobile No"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Vendor GSTIN"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Payment Terms"/>
                                </div>
                                <div className="col-6">
                                    <InputFormGroup labelClassName="mb-2" inputClassName="form-control" label="Expiry Date"/>
                                </div>
                                <div className="col-12">
                                    <TextAreaFormGroup label="Vendor Address"/>
                                </div>
                                <div className="col-2">
                                    <SelectFormGroup labelClassName="mb-2" label="Product Name" selectClassName="custom-select my-1 mr-sm-2" selectData={this.productName}/>
                                </div>
                                
                                <div className="col-2">
                                    <InputFormGroup labelClassName="mb-2" label="SKU ID"/>
                                </div>
                                <div className="col-1">
                                    <InputFormGroup labelClassName="mb-2" label="Quantity"/>
                                </div>
                                <div className="col-2">
                                    <InputFormGroup labelClassName="mb-2" label="Price(Basic)"/>
                                </div>
                                <div className="col-1">
                                    <InputFormGroup labelClassName="mb-2" label="HSN"/>
                                </div>
                                <div className="col-1">
                                    <InputFormGroup labelClassName="mb-2" label="GST%"/>
                                </div>
                                <div className="col-2">
                                    <InputFormGroup labelClassName="mb-2" label="Final Price"/>
                                </div>
                                <div className="col-1">
                                <h3>+</h3>
                                </div>

                                <div className="col-12">
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" id="publicOnCreation"/>
                                        <label className="form-check-label" for="publicOnCreation">Include General T&C</label>
                                    </div>
                                </div>

                                <div className="col-12 mt-3">
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-success ml-3" value="Save Draft"/>
                                        <input type="submit" className="btn btn-success ml-3" value="Save & Create"/>
                                        <input type="submit" className="btn btn-success ml-3" value="Save & Download"/>
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

export default PurchaseForm;