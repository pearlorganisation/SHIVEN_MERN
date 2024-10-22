import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const HeadingFormIncome = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      additionalBenefits: [{ heading: "", subheadings: [""] }], // Initial value with empty heading and subheading
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "additionalBenefits",
  });

  const onSubmit = (data) => {
    console.log(data); // Logs array of headings with subheadings
  };

  return (
    <div className="">
      <div className="max-w-4xl mx-auto my-5 rounded-2xl bg-white shadow-lg">
        <div className="bg-blue-600 px-10 py-4 rounded-t-2xl text-center text-white font-semibold">
          Add Income Headings
        </div>
        <form
          className="space-y-5 my-4 mx-8 sm:mx-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-6">
            {fields.map((item, headingIndex) => (
              <div key={item.id} className="space-y-3">
                 <label className="font-bold">{`Heading ${headingIndex+1}`}</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder={`Heading ${headingIndex + 1}`}
                    {...register(`additionalBenefits.${headingIndex}.heading`, {
                      required: "Heading is required",
                    })}
                    className={`w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg ${
                      errors.additionalBenefits?.[headingIndex]?.heading
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => remove(headingIndex)}
                    className="bg-red-600 hover:bg-red-500 text-white rounded-md"
                  >
                   {`Remove Heading ${headingIndex+1}`}
                  </button>
                </div>

                {/* Subheadings for the current heading */}
                <div className="ml-5">
                  <label className="font-medium">Subheadings</label>
                  <SubheadingForm
                    control={control}
                    register={register}
                    headingIndex={headingIndex}
                    errors={errors}
                  />
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => append({ heading: "", subheadings: [""] })} // Append a new heading with subheadings
              className="text-blue-600"
            >
              Add Heading
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-700 hover:bg-gray-800 active:bg-gray-700 px-10 py-3 font-semibold text-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeadingFormIncome;

// Component for handling subheadings
const SubheadingForm = ({ control, register, headingIndex, errors }) => {
  const { fields: subheadingFields, append: appendSubheading, remove: removeSubheading } = useFieldArray({
    control,
    name: `additionalBenefits.${headingIndex}.subheadings`, // Target the subheadings array inside the current heading
  });

  return (
    <div className="space-y-3">
      {subheadingFields.map((subItem, subheadingIndex) => (
        <div key={subItem.id} className="flex items-center space-x-2">
          <input
            type="text"
            placeholder={`Subheading ${subheadingIndex + 1}`}
            {...register(
              `additionalBenefits.${headingIndex}.subheadings.${subheadingIndex}`,
              {
                required: "Subheading is required",
              }
            )}
            className={`w-full mt-2 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg ${
              errors.additionalBenefits?.[headingIndex]?.subheadings?.[subheadingIndex]
                ? "border-red-500"
                : ""
            }`}
          />
          <button
            type="button"
            onClick={() => removeSubheading(subheadingIndex)}
            className="bg-red-600 w-10 rounded-md text-white text-xl font-bold"
          >
            -
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => appendSubheading("")} // Add a new empty subheading
        className="text-blue-600"
      >
        Add Subheading
      </button>
    </div>
  );
};
