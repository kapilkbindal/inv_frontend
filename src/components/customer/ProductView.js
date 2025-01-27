import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";


class ProductView extends Component{
    constructor(props){
        super(props);
        this.productDetails = "Product Description"
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Product Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="mb-2">Name</label>
                                        <input type="text" className="form-control" value="Product Name" readOnly/>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                        <label className="mb-2">Description</label>
                                        <textarea className="form-control" value={this.productDetails} rows="10" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Category</label>
                                        <input type="text" className="form-control" value="Product Category" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Purchase Price</label>
                                        <input type="text" className="form-control" value="1000" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Selling Price</label>
                                        <input type="text" className="form-control" value="1200" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Stock Amount</label>
                                        <input type="text" className="form-control" value="234" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Product Visibilty Status</label>
                                        <input type="text" className="form-control" value="Public" readOnly/>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back to List" link="/app/shop/product/list"/>
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

export default ProductView;