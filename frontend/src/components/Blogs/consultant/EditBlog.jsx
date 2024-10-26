import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
// import { instance } from "../../services/axiosInterceptor";
// import { Toaster, toast } from "sonner";
import { ClipLoader } from "react-spinners";
// import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";

const EditBlog = () => {
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [bannerName, setBannerName] = useState({});
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
//   const { blogId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setValue, // Allows you to manually set field values
    reset,
  } = useForm({
    defaultValues: {},
  });

//   const getBlog = () => {
//     setIsLoading(true);
//     instance
//       .get(`/blogs/${blogId}`)
//       .then((res) => {
//         setBlogData(res?.data?.blogData);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//       // console.log(err);
//         setIsLoading(false);
//       });
//   };

//   useEffect(() => {
//     if (blogId) {
//       getBlog();
//     }
//   }, [blogId]);

//   useEffect(() => {
//     if (!blogData) return;
//     reset({
//       title: blogData?.title,
//       slug: blogData?.slug,
//     });
//     setPreviewImage(blogData.banner);
//     setValue("content", blogData.content); // This updates the content field's value
//   }, [blogData, setValue, reset]);

  const onSubmit = (data) => {
    if (isLoading) return;
    setIsLoading(true);
    const formData = new FormData();
    const { banner } = data;
    if (selectedBanner) {
      formData.append("banner", selectedBanner);
    }
    formData.append("id", blogData._id);
    formData.append("content", data.content);
    formData.append("title", data.title);
    // formData.append("slug", data.slug);

    // api call here
    // instance
    //   .patch(`/blogs/${blogId}`, formData, {
    //     withCredentials: true,
    //   })
    //   .then((res) => {
    //     reset();
    //     setIsLoading(false);
    //     toast.success(res.data.message, {
    //       style: {
    //         background: "green",
    //         color: "white",
    //       },
    //     });
    //     window.location.href = "/blogs";
    //   })
    //   .catch((err) => {
    //     reset();

    //     setIsLoading(false);
    //     toast.error(err, {
    //       style: {
    //         background: "red",
    //         color: "white",
    //       },
    //     });
    //   });
  };

  const temp = watch("banner");

  useEffect(() => {
    setBannerName(temp);
  }, [temp]);

  const handleFileInputChange = (e) => {
    setSelectedBanner(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="p-10">
      
      <div className=" flex justify-center">
        <h3 className="text-gray-600 text-2xl font-semibold sm:text-3xl">
          Edit blog
        </h3>
      </div>
      <div className="bg-white rounded-lg shadow p-4 py-6  sm:rounded-lg sm:max-w-5xl mt-8 mx-auto">
        <form
          className="space-y-6 mx-8 sm:mx-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="font-medium">Title</label>
          <input
            {...register("title", { required: "title is required" })}
            type="text"
            className="w-full mt-2 me-50 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
            placeholder="Enter a title for your blog"
          />
          {errors.topic && (
            <span className="text-red-500">Title is required</span>
          )}
          {/* <div>
            <label className="font-medium">URL Slug</label>

            <input
              {...register("slug", { required: "URL Slug is required" })}
              type="text"
              className="w-full mt-2 me-50 px-5 py-2 text-gray-500 border-slate-300 bg-transparent outline-none border focus:border-teal-400 shadow-sm rounded-lg"
              placeholder="Enter-a-slug-like-this"
            />
            {errors.topic && (
              <span className="text-red-500">URL Slug is required</span>
            )}
          </div> */}

          <div className="flex-1 items-center mx-auto gap-2 mb-3 space-y-4 sm:flex sm:space-y-0">
            {previewImage && (
              <div className="w-full max-w-[48%]">
                <img alt=""  src={previewImage} className="max-h-[500px]" />
              </div>
            )}
            <div className="relative w-full space-y-1">
              <label htmlFor="input" className="font-medium ">
                Banner
              </label>
              <div className="items-center justify-center  mx-auto">
                <label
                  className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  id="drop"
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <span className="font-medium text-gray-600">
                      {Array.isArray(Array.from(bannerName || {})) &&
                      Array.from(bannerName || {}).length > 0
                        ? bannerName[0]?.name
                        : "Drop files to Attach, or "}
                      <span className="text-blue-600 underline ml-[4px]">
                        browse
                      </span>
                    </span>
                  </span>
                  <input
                    type="file"
                    {...register("banner")}
                    className="hidden"
                    accept="image/png,image/jpeg,image/webp"
                    id="input"
                    onChange={handleFileInputChange}
                  />
                </label>
              </div>
              {errors.banner && (
                <span className="text-red-500">Banner is required</span>
              )}
            </div>
          </div>

          <div>
            <label className="font-medium">Content</label>
            <Controller
              name={`content`}
              control={control}
              render={({ field }) => (
                <JoditEditor
                  value={field.value} // Controlled by react-hook-form
                  tabIndex={1}
                  onBlur={(newContent) => field.onChange(newContent)}
                  config={{ theme: "light" }}
                />
              )}
              rules={{ required: true }}
            />

            {errors?.description && (
              <span className="fw-normal fs-6 text-danger">
                Content is required
              </span>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button className="w-1/2 text-white rounded-md p-2 bg-blue-500 hover:bg-blue-700 transition duration-300">
              {isLoading ? <ClipLoader color="#c4c2c2" /> : <>Save</>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
