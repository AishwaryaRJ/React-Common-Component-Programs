import React, { useState, useEffect } from "react";

// Mock API function to simulate API responses
const fetchProducts1 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, name: "Product 1" }, { id: 2, name: "Product 2" }]), 1000);
    });
};

const fetchProducts2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 3, name: "Product 3" }, { id: 4, name: "Product 4" }]), 1000);
    });
};

const fetchProductDetails = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, description: `Details of Product ${id}`, price: 100 + id }), 1000);
    });
};

const fetchProds = async () => {
    return new Promise((resolve) => {
        setTimeout(() => ([{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]), 1000);
    });
}



function Products() {
    const [combinedProducts, setCombinedProducts] = useState([]);
    const [productDetails, setProductDetails] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const product1 = await fetchProducts1();
            const product2 = await fetchProducts2();

            const allProducts = [...product1, ...product2];
            setCombinedProducts(allProducts);

            if (allProducts.length > 0) {
                const detailsPromises = allProducts.map((product) => fetchProductDetails(product.id));
                const allDetails = await Promise.all(detailsPromises);
                setProductDetails(allDetails); // Set the fetched details
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Product Management</h1>
            <h2>Combined Products</h2>
            <ul>
                {combinedProducts.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>

            <h2>Product Details</h2>
            <ul>
                {/* {productDetails?.map((detail) => (
                    <li key={detail.id}>
                        Name: {detail.name}, Description: {detail.description}, Price: {detail.price}
                    </li>
                ))} */}
            </ul>

        </div>
    )

}

export default Products;