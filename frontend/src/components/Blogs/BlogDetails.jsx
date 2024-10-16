// import axios from "axios";
// import DOMPurify from "dompurify";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import { useParams } from "react-router-dom";

const BlogDetails = () => {
  //   const { id } = useParams();
    const [data, setBlogData] = useState(null);

  //   const getBlogData = () => {
  //     axios
  //       .get(`${import.meta.env.VITE_API_URL}/blogs/${slug}`)
  //       .then((res) => {
  //         let data = res.data.data;
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
        <title>Shiven Blog</title>
        {/* <meta
          name="description"
          content="Get free AI Generated images with HeadGen AI’s advanced AI image generator. Create professional photos for resumes, teams, or LinkedIn with our easy-to-use AI headshot generator"
        /> */}
      </Helmet>
      <div className="container mx-auto min-h-screen py-28 px-10">
        <div className=" flex flex-col items-center max-w-4xl  mx-auto text-[#171717] space-y-8">
          <img
            alt=""
            className="rounded-md "
            src={
              data?.banner ||
              "https://images.unsplash.com/photo-1640161704729-cbe966a08476?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
          <h1 className="text-2xl text-center  md:text-3xl max-w-2xl ">
            Blog sample lorem ipsum
          </h1>
          {/* <div dangerouslySetInnerHTML={{ __html: data?.content }}>

          </div> */}
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo esse,
            adipisci veritatis vitae incidunt ut sit, quam hic tenetur labore
            voluptatibus laborum, mollitia earum amet eius aliquid asperiores
            minus aut. Suscipit natus quaerat rerum adipisci facilis nihil
            excepturi esse ut facere laborum veritatis amet officiis voluptate,
            temporibus repellendus veniam doloribus velit neque aliquam quis,
            dolores rem voluptas? Vitae, fugiat neque. Iste magni dolore,
            delectus officiis sunt numquam quod provident similique maxime in
            deleniti vitae, animi nisi reprehenderit! Error, fuga
            exercitationem, laborum corrupti natus nostrum explicabo culpa at,
            eligendi consectetur consequuntur? Odio magni et, assumenda alias
            quo dignissimos repudiandae autem enim ut dolor expedita! Alias
            velit magni impedit pariatur sapiente! Cupiditate numquam pariatur
            necessitatibus sit eum sapiente aut, dolores dolore dolorum. Sint
            magni et commodi ea distinctio, ipsum corporis reprehenderit ducimus
            rerum, quaerat eaque aliquid placeat, hic voluptatem fugiat sapiente
            sit cumque sequi nulla necessitatibus rem labore atque! Sint, ullam
            temporibus. Reiciendis voluptatibus in reprehenderit incidunt
            ducimus, quaerat id accusantium asperiores inventore aut saepe
            corrupti, repellat quo modi ea quibusdam iusto et natus quasi vitae,
            maxime quisquam necessitatibus! Quasi, vel architecto? Aliquam qui
            rerum assumenda obcaecati omnis! Officiis eos porro adipisci
            consectetur eveniet sit quasi nulla enim? Illo ab illum assumenda
            rem unde quasi asperiores labore, cupiditate, obcaecati culpa quis
            numquam. Voluptatum reprehenderit fugiat id qui, aut quidem ullam
            ducimus ex illo natus hic enim iusto laudantium aspernatur in quos,
            atque ipsum vel. Odit odio itaque blanditiis ad dolor voluptatem
            maiores. Molestias quas ipsa quae sit, eius accusantium atque. Quae
            ratione facere laboriosam voluptatum tenetur. Consequatur
            reiciendis, enim architecto, libero ad distinctio quis dignissimos
            ut aliquid tempora, facilis necessitatibus possimus expedita? Earum
            corrupti dolorum quae ipsa nemo vitae perspiciatis pariatur numquam
            corporis, sed, exercitationem modi nam aliquam odio incidunt
            voluptatum nobis ipsum illum aspernatur, quis blanditiis inventore.
            Vero a quod exercitationem.
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
