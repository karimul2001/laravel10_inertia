import Frontlayout from "@/Layouts/Frontlayout";
import React from "react";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/style.css";

import "../../assets/lib/easing/easing.min.js";
import "../../assets/lib/waypoints/waypoints.min.js";
import "../../assets/lib/owlcarousel/owl.carousel.min.js";
import { usePage, Link } from "@inertiajs/react";

function Product(props) {
    const { products } = usePage().props;

    return (
        <>
            <Frontlayout>
                <div>
                    {/* Porduct List */}
                    <div className="container-fluid py-5">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-lg-12">
                                    <div className="mb-4">
                                        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-10">
                                            Prduct List
                                        </h5>
                                        <span className="float-end">
                                            <Link
                                                href="/create"
                                                className="btn btn-primary"
                                            >
                                                <i className="bi bi-plus-circle me-1"></i>
                                                New Product
                                            </Link>
                                        </span>
                                    </div>
                                    <table className="table table-bordered table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Details</th>
                                                <th>Stock</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map(
                                                ({
                                                    id,
                                                    name,
                                                    details,
                                                    stock,
                                                    price,
                                                }) => (
                                                    <tr key={id}>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{details}</td>
                                                        <td>{stock}</td>
                                                        <td>{price}</td>
                                                    </tr>
                                                ),
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Start */}
                    <div className="container-fluid py-5">
                        <div className="container"></div>
                    </div>
                    {/* Testimonial End */}
                </div>
            </Frontlayout>
        </>
    );
}

export default Product;
