import { ImagePlus, Plus, Upload } from "lucide-react";
import React, { useState } from "react";

export default function Store() {
  const [inputValue, setinputValue] = useState({
    pName: "",
    pDesciption: "",
    pPrice: "",
    pImage: null,
  });
  const [products, setproducts] = useState([]);
  const [productimagePreview, setproductimagePreview] = useState(null);
  const [showForm, setshowForm]=useState(false)

  function getValue(e) {
    const { name, value } = e.target;
    setinputValue({ ...inputValue, [name]: value });
  }
  function getImage(e) {
    const { files } = e.target;
    const [imageData] = files;
    const url = URL.createObjectURL(imageData);
    setinputValue({ ...inputValue, pImage: url });
    setproductimagePreview(url);
  }
  function storeProduct() {
    setproducts([...products, inputValue]);
    setshowForm(false)
    console.log(products);
  }

  return (
    <>
      {products.length === 0 ? (
        <div className="flex mt-20 flex-col space-y-3 justify-center m-8 items-center">
          <p className="text-5xl text-center font-bold">Product Catalog is empty</p>
          <button
            className="bg-cyan-600 flex justify-center space-x-3 p-2 rounded-full cursor-pointer text-white text-xl"
            onClick={()=>setshowForm(true)}
          >
            <p>Add Product</p> <Plus className="mt-1" />
          </button>
        </div>
      ) : (
        <div className="grid mt-20 p-3 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="max-w-sm w-full bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <img
                src={product.pImage}
                alt="Product Name"
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-5 space-y-2">
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.pName}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {product.pDesciption}
                </p>

                {/* Price & Button */}
                <div className="flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-blue-600">
                    {product.pPrice}
                  </span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showForm ? (
        
      <div className="w-full flex justify-center items-center">
      <div className="flex bg-black rounded-xl mt-4 p-10 space-y-2 flex-col mb-5">
        <h1 className="text-4xl text-white text-center">Add New Product</h1>
        <label htmlFor="" className="text-white">
          Product Name
        </label>
        <input
          name="pName"
          onChange={getValue}
          type="text"
          placeholder="products name"
          className="bg-white outline-cyan-600 rounded-3xl w-[350px] px-4 py-3"
        />
        <label className="text-white" htmlFor="">
          Product Description
        </label>
        <textarea
          name="pDesciption"
          onChange={getValue}
          placeholder="products description"
          className="bg-white outline-cyan-600 rounded-xs w-[350px] px-4 py-3"
        ></textarea>

        {/* product image */}
        <img
          src={<ImagePlus size={28} color="#fffafa" strokeWidth={0.75} /> || productimagePreview}
          className="size-29"
        />
        <label
          className="text-white bg-cyan-600 p-2 justify-center rounded-xl flex space-x-2"
          htmlFor="image"
        >
          <p>Upload Product Image</p> <Upload />
          <input
            id="image"
            accept="png, jpeg, jpg"
            onChange={getImage}
            className="text-white"
            type="file"
            hidden
          />
        </label>

        <label className="text-white mt-7" htmlFor="">
          Product Price
        </label>
        <input
          name="pPrice"
          onChange={getValue}
          type="text"
          placeholder="price"
          className="bg-white rounded-xl w-[150px] px-4 py-3"
        />
        <button
          className="bg-cyan-600 flex justify-center space-x-3 py-5 rounded cursor-pointer text-white text-xl"
          onClick={storeProduct}
        >
          <p>Add Product</p> <Plus className="mt-1" />
        </button>
      </div>
    </div>
      ): products.length>0 ? (
        <div className="flex flex-col space-y-3 justify-center m-8 items-center">
              <p className="text-5xl font-bold text-center">Add more Product</p>
              <button
                className="bg-cyan-600 flex justify-center space-x-3 p-2 rounded-full cursor-pointer text-white text-xl"
                onClick={()=>setshowForm(true)}
              >
                <p>Add Product</p> <Plus className="mt-1" />
              </button>
            </div>) : null}
    </>
  );
}
