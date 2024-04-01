import React from "react";
import blogimg from "../../../assets/nextjs.png";
const BlogDetails = () => {
  return (
    <article className=" mt-4 min-h-[20rem] rounded-md duration-300 hover:shadow-sm container mx-auto py-12">
      <div className="grid  gap-3 w-[70%] mx-auto">
        <img loading="lazy" src={blogimg} className="w-full rounded-t-md" />
        <div className="space-y-2 py-3 flex flex-col justify-center gap-1 items-start p-1">
          <div className=" rounded-2xl text-slate-950 bg-white w-fit font-medium flex gap-3">
            <div className="px-3 py-2 rounded-3xl border-2 border-yellow-400 bg-yellow-400/30 ">
              #Technology
            </div>{" "}
            <div className="px-3 py-2 rounded-3xl border-2 border-blue-400 bg-blue-400/30">
              #Science
            </div>
          </div>

          <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
            <div class="flex items-center space-x-3">
              <img
                class="w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1707343848552-893e05dba6ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />{" "}
              <div>
                <span class="text-white text-sm">Abhishek Bahuguna </span>
                <span class="block text-white text-xs">
                  abhishek@pearloraganisation
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <p className=" text-2xl mt-1">
              Whiskers and Whimsy: Adventures in Feline Fancy
            </p>
            <p>
              Dive into the delightful world of cats with "Whiskers and Whimsy"!
              Join us as we explore the quirky antics, mysterious behaviors, and
              undeniable charm of our feline friends.{" "}
            </p>
          </div>
        </div>
        <div>
          "Wagging Wisdom: A Guide to Canine Companions" Description: Embark on
          a tail-wagging journey with "Wagging Wisdom"! This blog is your
          ultimate guide to all things dog-related, offering valuable insights
          into canine behavior, training tips, health advice, and heartwarming
          stories of loyalty and companionship. Whether you're a proud pup
          parent or simply a dog enthusiast, join our pack as we celebrate the
          joy of having a furry best friend by your side. React Compiler React
          Compiler is no longer a research project: the compiler now powers
          instagram.com in production, and we are working to ship the compiler
          across additional surfaces at Meta and to prepare the first open
          source release. As discussed in our previous post, React can sometimes
          re-render too much when state changes. Since the early days of React
          our solution for such cases has been manual memoization. In our
          current APIs, this means applying the useMemo, useCallback, and memo
          APIs to manually tune how much React re-renders on state changes. But
          manual memoization is a compromise. It clutters up our code, is easy
          to get wrong, and requires extra work to keep up to date. Manual
          memoization is a reasonable compromise, but we weren’t satisfied. Our
          vision is for React to automatically re-render just the right parts of
          the UI when state changes, without compromising on React’s core mental
          model. We believe that React’s approach — UI as a simple function of
          state, with standard JavaScript values and idioms — is a key part of
          why React has been approachable for so many developers. That’s why
          we’ve invested in building an optimizing compiler for React.
          JavaScript is a notoriously challenging language to optimize, thanks
          to its loose rules and dynamic nature. React Compiler is able to
          compile code safely by modeling both the rules of JavaScript and the
          “rules of React”. For example, React components must be idempotent —
          returning the same value given the same inputs — and can’t mutate
          props or state values. These rules limit what developers can do and
          help to carve out a safe space for the compiler to optimize. Of
          course, we understand that developers sometimes bend the rules a bit,
          and our goal is to make React Compiler work out of the box on as much
          code as possible. The compiler attempts to detect when code doesn’t
          strictly follow React’s rules and will either compile the code where
          safe or skip compilation if it isn’t safe. We’re testing against
          Meta’s large and varied codebase in order to help validate this
          approach.
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
