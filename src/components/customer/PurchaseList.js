import React, {Component} from "react";
import AnchorTag from "../Anchortag";
import Table from "../table/Table";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";


class PurchaseList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["PO_ID", "PO_Date", "Vendor Name", "No of SKUs", "Total Qty", "Total Value", "Warehouse", "Status", "Action"];
        this.tableData = [
            {"id": 1, "date": "10th January. 2025" , "vendor": "V1", "#SKUs": 4, "total_qty": 150, "total_value": 50000, "warehouse": "Delhi", "status": "Closed"},
            {"id": 2, "date": "12th January. 2025" , "vendor": "V2", "#SKUs": 10, "total_qty": 200, "total_value": 50000, "warehouse": "Delhi", "status": "Active"},
            {"id": 3, "date": "14th January. 2025" , "vendor": "V1", "#SKUs": 20, "total_qty": 300, "total_value": 50000, "warehouse": "Gurugram", "status": "In-Draft"},
            {"id": 4, "date": "17th January. 2025" , "vendor": "V2", "#SKUs": 12, "total_qty": 500, "total_value": 50000, "warehouse": "Kolkata", "status": "Cancelled"},
        ]

        this.purchaseStatus = [
            {"id": 1, "name": "In-Draft"},
            {"id": 2, "name": "Active"},
            {"id": 3, "name": "Closed"},
            {"id": 4, "name": "Cancelled"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                <AnchorTag link="/app/shop/purchase/create" className="btn btn-sm btn-warning float-right" itemValue="Create PO"></AnchorTag>
                    <h4>Purchase Orders</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-12">
                        <p><b>Search Box</b></p>
                    </div>
                    <div className="col-1">
                        <InputFormGroup labelClassName="mb-2" label="" inputClassName="form-control form-control-sm" placeholder="PO ID"/>
                    </div>
                    <div className="col-2">
                        <SelectFormGroup labelClassName="mb-2" label="" selectClassName="custom-select custom-select-sm" selectData={this.purchaseStatus}/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Vendor Name"/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Date Range"/>
                    </div>
                    <div className="col-2">
                        <InputFormGroup labelClassName="mb-2" inputClassName="form-control form-control-sm" placeholder="Warehouse"/>
                    </div>
                    <div className="col-1">
                        <div className="form-group">
                            <input type="submit" className="w-100 btn btn-sm btn-success" value="Search"/>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-group">
                            <input type="submit" className="w-100 btn btn-sm btn-success" value="Download CSV"/>
                        </div>
                    </div>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix=""></Table>
            </div>
        ) 
    }
}

export default PurchaseList;