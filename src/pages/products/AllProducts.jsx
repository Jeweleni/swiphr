import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { BiPackage } from "react-icons/bi";
import { BsCreditCard } from "react-icons/bs";
import { RiStackLine } from "react-icons/ri";
import { TbGiftCard } from "react-icons/tb";
import { BsImageFill } from "react-icons/bs";

const AllProducts = () => {
  return (
    <div className="items-center justify-center ">
      <Link
        to="/"
        className="flex items-center bg-gray-200 text-gray-700 rounded-lg hover:bg-green-400 mt-10 lg:mt-0 lg:mb-4 md:ml-0 lg:ml-0 px-2 py-1 w-[65px] "
      >
        <FaArrowLeft className="mr-2" />
        Back
      </Link>
      <div className="flex items-center justify-between mb-4 mt-4 ">
        <h2 className="text-3xl font-medium ">New products</h2>
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center gap-2">
          Save Product
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4 mt-8 ">
  <div className="w-3/4">
    <label htmlFor="productName" className="font-semibold">
      Product Name
    </label>
    <input
      type="text"
      id="productName"
      className="lg:w-full md:w-full w-full md:flex-row rounded-lg h-12 border-grey-400 outline-none border-2 p-2"
      />
  </div>
  <div className="w-1/4">
    <label htmlFor="productName" className="font-semibold">
      Product Name
    </label>
    <input
      type="text"
      id="optional"
      placeholder="Optional"
      className="lg:w-full md:w-full w-full md:flex-row rounded-lg h-12 border-grey-400  outline-none border-2 p-2"
    />
  </div>
</div>



      {/* <div className="flex-col mb-4 mt-4 ">
        <div className="flex-col">
          <h4 className="text-xl">Product name</h4>
          <input
            type="text"
            className=" lg:w-2/3 gap-0 md:w-full w-full rounded-lg h-12 border-grey-400 outline-none border-2 p-2"
          />
        </div>
        <div className="flex-col">
          <h4 className="text-xl">Product name</h4>
          <input
            type="text"
            placeholder="Optional"
            className="lg:w-1/4 gap-0 md:w-full w-full rounded-lg h-12 border-grey-400  border-2 p-2"
          />
        </div>
      </div> */}

      <div>
        <h4 className="font-semibold">Type</h4>
      </div>
      <div className="flex md:flex-row lg:flex-row flex-col md:gap-1 gap-5 box-border hover:box-content">
        <div className="bg-white w-full md:w-1/4 lg:w-1/4 h-fit rounded-lg shadow-md p-4 border-2 border-grey-200 hover:border-2 hover:border-green-500 hover:rounded-lg">
          <div className="flex items-center">
            <div>
              <div className="flex gap-2 hover:green-500">
                <BiPackage className="mt-1  hover:text-green-500" />
                <h4 className="font-bold hover:text-green-500">Physical</h4>
              </div>
              <p className="item-center text-sm">
                Item has weight and needs shipping or customer pickup.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-1/4 lg:w-1/4 h-fit rounded-lg shadow-md p-4 border-2 border-grey-200 hover:border-2 hover:border-green-500 hover:rounded-lg">
          <div className="flex items-center">
            <div>
              <div className="flex gap-2 hover:green-500">
                <BsCreditCard className="mt-1  hover:text-green-500" />
                <h4 className="font-bold hover:text-green-500">Digital</h4>
              </div>
              <p className="item-center text-sm">
                Item is delivered digitally or provided as a service.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white w-full md:w-1/4 lg:w-1/4 h-fit rounded-lg shadow-md p-4 border-2 border-grey-200 hover:border-2 hover:border-green-500 hover:rounded-lg">
          <div className="flex items-center">
            <div>
              <div className="flex gap-2 hover:green-500">
                <RiStackLine className="mt-1  hover:text-green-500" />
                <h4 className="font-bold hover:text-green-500">Bundle</h4>
              </div>
              <p className="item-center text-sm">
                Items are grouped into several physical or digital products
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full md:w-1/4 lg:w-1/4 h-fit rounded-lg shadow-md p-4 border-2 border-grey-200 hover:border-2 hover:border-green-500 hover:rounded-lg">
          <div className="flex items-center">
            <div>
              <div className="flex gap-2 hover:green-500">
                <TbGiftCard className="mt-1  hover:text-green-500" />

                <h4 className="font-bold hover:text-green-500">Gift Card</h4>
              </div>

              <p className="item-center text-sm">
                Generate a unique code for store credit when purchased
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-8">
            <h4>Type</h4>
            <h4 className="text-lg item-center">Add Image:</h4>
            <div className="mt-2"> */}
      <div className="mt-8">
        <h4 className="font-semibold">Type</h4>
      </div>
      <div className="w-full bg-white flex flex-col items-center h-[255px] content-center relative justify-center rounded-lg border-grey-400 outline-none border-2 p-2">
        <div className="justify-center items-center">
      <BsImageFill  className="text-3xl ml-24 mt-8 font-bold" />
      <h4 className="font-medium mt-3 ml-20">Add Image</h4>
      <div className=" justify-center items-center">
        
        <input className=" text-white content-center items-center ml-20 justify-center bg-white hidden " type="file" />
        <p className="text-gray-500 ml-16 mt-0">Drag &amp; drop upload</p>
        </div>
      </div>
    </div>

      <div className="flex flex-col  mt-8">
        <div className="flex flex-col">
          <h4 className="font-semibold">Categories</h4>
          <input
            type="text"
            className=" w-full rounded-lg h-12 border-grey-400 outline-none border-2 p-2"
          />
        </div>

      </div>
    </div>
  );
};

export default AllProducts;
