import Frontlayout from "@/Layouts/Frontlayout";
import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { useForm } from "@inertiajs/react";



function ProductEntry() {
    const { data, setData, errors, post } = useForm({
        name: "",
        details: "",
        sku: "",
        stoke: "",
        price: "",
        image: "",
        category_id: ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        //alert ('hello')
       // console.log(data);

        post(route("product.store"));
    }
    return (
        <>
            <Frontlayout>
                <div className="container-fluid py-12">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-lg-12">
                                <div className="mb-4">
                                    <h5 className="d-inline-block text-primary text-uppercase border-bottom border-10">
                                        Prduct Entry
                                    </h5>
                                </div>
                                <form action="" onSubmit={handleSubmit}>
                                    <label htmlFor="">Name:</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Product Name"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="">Details:</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="details"
                                        placeholder="Enter Product Details"
                                        value={data.details}
                                        onChange={(e) => setData("details", e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="">SKU:</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="sku"
                                        placeholder="Enter Product SKU"
                                        value={data.sku}
                                        onChange={(e) => setData("sku", e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="">Stoke:</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="stock"
                                        placeholder="Enter Product Stoke"
                                        value={data.stock}
                                        onChange={(e) => setData("stock", e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="">Price:</label>
                                    <br />
                                    <input
                                        type="number"
                                        name="price"
                                        placeholder="Enter Product Price"
                                        value={data.price}
                                        onChange={(e) => setData("price", e.target.value)}
                                    />
                                    <br />
                                    <label htmlFor="">Image:</label>
                                    <br />
                                    <input
                                        type="file"
                                        name="image"
                                        placeholder=""
                                    />
                                    <br />
                                    <label htmlFor="">Categroy:</label>
                                    <br />
                                    <select name="category_id" id="" value={data.category_id}
                                        onChange={(e) => setData("category_id", e.target.value)}>
                                        <option value="">Select One</option>
                                        <option value="1">Samsung</option>
                                        <option value="2">Iphone</option>
                                    </select>
                                    <br />
                                    <button type="" className="btn btn-primary">
                                        SAVE
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Frontlayout>
        </>
    );
}

export default ProductEntry;
