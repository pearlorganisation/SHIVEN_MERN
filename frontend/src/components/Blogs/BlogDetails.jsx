import axios from "axios";
import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
//   const { id } = useParams();
//   const [blogData, setBlogData] = useState(null);

//   const getBlogData = () => {
//     axios
//       .get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`)
//       .then((res) => {
//         let data = res.data.blogData;
//         data.content = DOMPurify.sanitize(data.content);
//         setBlogData(data);
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     getBlogData();
//   }, [id]);

  return (
    <>
      <Helmet>
        <title>
        Shiven Blog
        </title>
        {/* <meta
          name="description"
          content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator"
        /> */}
      </Helmet>
      <div className="container mx-auto min-h-screen pt-28 px-10">
        <div className=" flex flex-col items-center max-w-4xl  mx-auto text-white space-y-8">
          <img alt=""  className="rounded-md " src={blogData?.banner} />
          <h1 className="text-2xl text-center  md:text-3xl max-w-2xl ">
            {blogData?.title}
          </h1>
          <div dangerouslySetInnerHTML={{ __html: blogData?.content }}></div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
