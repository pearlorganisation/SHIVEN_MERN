import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { CircleLoader } from "react-spinners";
import Select from "react-select";

const UpdateQuotationInvoice = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
    setFocus,
  } = useForm({
    defaultValues: {
      additionalRows: [
        { description: "", quantitiy: 0, unitPrice: 0, amount: 0 },
      ], // Array of objects with multiple fields
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalRows",
  });

  const onSubmit = (data) => {
    setIsLoading(true); // Simulate loading
    setTimeout(() => {
      console.log(data);
      setIsLoading(false); // Stop loading after submission
    }, 2000); // Simulate form processing delay
  };

  const handleEditClick = () => {
    setIsDisabled(false); // Enable the input fields
    setTimeout(() => {
      setFocus("companyName"); // Focus on the first field after enabling
    }, 10); // Delay to allow the re-render to complete
  };

  return (
    <div className="min-h-screen text-gray-900 flex justify-center">
      <div className="w-full p-4 m-0 sm:m-5 bg-white shadow sm:rounded-lg">
        <div className="w-full flex justify-between">
          <h1 className="font-bold text-blue-600 text-sm sm:text-lg md:text-xl">
            Update Quotation / Invoice
          </h1>
          {/* {isDisabled && (
            <button
              className="text-white text-lg bg-blue-500 hover:bg-blue-700 p-1 px-4 rounded-md transition duration-300"
              onClick={handleEditClick}
            >
              Edit
            </button>
          )} */}
        </div>

        <div className="w-full flex-1 mt-8">
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-2 col-span-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Invoice No."
                  disabled={isDisabled}
                  {...register("invoiceNo", {
                    required: {
                      value: true,
                      message: "Invoice No. is a required field",
                    },
                  })}
                />
                {errors.invoiceNo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.invoiceNo?.message ||
                      "Invoice No. is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="invoiceDate" className="text-xs">
                  Invoice Date:
                </label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="date"
                  placeholder="Invoice Date."
                  disabled={isDisabled}
                  {...register("invoiceDate", {
                    required: {
                      value: true,
                      message: "Invoice Date. is a required field",
                    },
                  })}
                />
                {errors.invoiceDate && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.invoiceDate?.message ||
                      "Invoice Date. is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="dueDate" className="text-xs">
                  Due Date:
                </label>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="date"
                  placeholder="Due Date."
                  disabled={isDisabled}
                  {...register("dueDate", {
                    required: {
                      value: true,
                      message: "Due Date. is a required field",
                    },
                  })}
                />
                {errors.dueDate && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.dueDate?.message ||
                      "Due Date. is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Bill To."
                  disabled={isDisabled}
                  {...register("billTo", {
                    required: {
                      value: true,
                      message: "Bill To. is a required field",
                    },
                  })}
                />
                {errors.billTo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.billTo?.message || "Bill To. is a required field"}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Ship To."
                  disabled={isDisabled}
                  {...register("shipTo", {
                    required: {
                      value: true,
                      message: "Ship To. is a required field",
                    },
                  })}
                />
                {errors.shipTo && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.shipTo?.message || "Ship To. is a required field"}
                  </p>
                )}
              </div>

              <div className="col-span-2 my-5">
                <div className="w-full flex flex-col gap-4">
                  <label className="font-medium mr-10">Quotation Rows:</label>
                  {fields.map((item, index) => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-2 mb-2"
                    >
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                        type="text"
                        placeholder="Description"
                        disabled={isDisabled}
                        {...register("description", {
                          required: {
                            value: true,
                            message: "Description is a required field",
                          },
                        })}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                        type="number"
                        min={0}
                        placeholder="Quantity"
                        disabled={isDisabled}
                        {...register("quantity", {
                          required: {
                            value: true,
                            message: "Quantity is a required field",
                          },
                        })}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                        type="number"
                        min={0}
                        placeholder="Unit Price"
                        disabled={isDisabled}
                        {...register("unitPrice", {
                          required: {
                            value: true,
                            message: "Unit Price is a required field",
                          },
                        })}
                      />
                      <input
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                        type="number"
                        min={0}
                        placeholder="Amount"
                        disabled={isDisabled}
                        {...register("amount", {
                          required: {
                            value: true,
                            message: "Amount is a required field",
                          },
                        })}
                      />
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => append({})} // Append a new object (empty or with default values)
                    className="text-blue-600"
                  >
                    Add Row
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Shipping"
                  disabled={isDisabled}
                  {...register("shipping", {
                    required: {
                      value: true,
                      message: "Shipping is a required field",
                    },
                  })}
                />
                {errors.shipping && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.shipping?.message ||
                      "Shipping is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="SGST"
                  disabled={isDisabled}
                  {...register("sgst", {
                    required: {
                      value: true,
                      message: "SGST is a required field",
                    },
                  })}
                />
                {errors.sgst && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.sgst?.message || "SGST is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="CGST"
                  disabled={isDisabled}
                  {...register("cgst", {
                    required: {
                      value: true,
                      message: "CGST is a required field",
                    },
                  })}
                />
                {errors.cgst && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.cgst?.message || "CGST is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Advance"
                  disabled={isDisabled}
                  {...register("advance", {
                    required: {
                      value: true,
                      message: "Advance is a required field",
                    },
                  })}
                />
                {errors.advance && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.advance?.message || "Advance is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Total"
                  disabled={isDisabled}
                  {...register("total", {
                    required: {
                      value: true,
                      message: "Total is a required field",
                    },
                  })}
                />
                {errors.total && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.total?.message || "Total is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="UPI"
                  disabled={isDisabled}
                  {...register("upi", {
                    required: {
                      value: true,
                      message: "UPI is a required field",
                    },
                  })}
                />
                {errors.upi && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.upi?.message || "UPI is a required field"}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-1"
                  type="text"
                  placeholder="Total"
                  disabled={isDisabled}
                  {...register("total", {
                    required: {
                      value: true,
                      message: "Total is a required field",
                    },
                  })}
                />
                {errors.total && (
                  <p className="text-red-500 mt-1 text-xs">
                    {errors?.total?.message || "Total is a required field"}
                  </p>
                )}
              </div>
            </div>

            <button
              className="mt-1 tracking-wide text-base font-semibold bg-green-400 text-white w-full md:w-[200px] py-3 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <CircleLoader />
              ) : (
                <>
                  <span className="ml-3">Update</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateQuotationInvoice;
