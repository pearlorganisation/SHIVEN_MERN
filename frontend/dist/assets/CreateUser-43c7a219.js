import{a as u,u as y,b as v,r as m,c as C,j as e,F as N,d as q,C as P,e as E,f as S}from"./index-7a150fbc.js";const M=()=>{var o,d,n,c;const{loggedInUserData:r}=u(t=>t.auth),x=y(),f=v(),{isLoading:h,customerData:a}=u(t=>t==null?void 0:t.customer),[i,g]=m.useState(!1),p=t=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||"Please enter a valid email address",{register:l,formState:{errors:s},handleSubmit:w,watch:j}=C(),b=t=>{x(S({...t,consultantId:r==null?void 0:r._id}))};return m.useEffect(()=>{a!=null&&a.status&&f("/users")},[a]),e.jsx("div",{children:e.jsx("div",{class:"min-h-screen bg-gray-100 text-gray-900 flex justify-center",children:e.jsxs("div",{class:"max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1",children:[e.jsxs("div",{class:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12",children:[e.jsx("h1",{className:"text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl",children:r.role==="1"?"Create Client Account":"Create Staff Account"}),e.jsx("div",{class:"mt-12 flex flex-col items-center",children:e.jsx("div",{class:"w-full flex-1 mt-8",children:e.jsxs("form",{class:"mx-auto max-w-xs",onSubmit:w(b),children:[e.jsx("input",{class:"w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Full Name",...l("fullName",{required:{value:!0,message:"Full Name is a required field"}})}),s.fullName&&e.jsx("p",{className:"text-red-500 mt-1",children:((o=s==null?void 0:s.fullName)==null?void 0:o.message)||"Full Name is a required field"}),e.jsx("input",{class:"w-full px-6 py-4 rounded-lg font-medium border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",...l("email",{required:{value:!0,message:"Email is a required field"},validate:p})}),s.email&&e.jsx("p",{className:"text-red-500 mt-1",children:((d=s==null?void 0:s.email)==null?void 0:d.message)||"Email is a required field"}),e.jsx("input",{class:"w-full px-6 py-4 rounded-lg font-medium  border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",...l("password",{required:{value:!0,message:"Password is a required field"}})}),s.password&&e.jsx("p",{className:"text-red-500 mt-1",children:((n=s==null?void 0:s.password)==null?void 0:n.message)||"Password is a required field"}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{class:"w-full px-6 py-4 rounded-lg font-medium  border border-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:i?"text":"password",placeholder:"Confirm Password",...l("confirmPassword",{required:{value:!0,message:"Confirm Password is a required field"},validate:t=>t===j("password")||"The passwords does not match"})}),e.jsx("span",{className:"absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer pt-5 ",onClick:()=>g(t=>!t),children:i?e.jsx(N,{}):e.jsx(q,{})})]}),s.confirmPassword&&e.jsx("p",{className:"text-red-500 mt-1",children:((c=s==null?void 0:s.confirmPassword)==null?void 0:c.message)||"Confirm Password is a required field"}),h?e.jsx("button",{class:"mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",type:"submit",children:e.jsx(P,{})}):e.jsxs("button",{class:"mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",type:"submit",children:[e.jsxs("svg",{class:"w-6 h-6 -ml-2",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),e.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),e.jsx("path",{d:"M20 8v6M23 11h-6"})]}),e.jsx("span",{class:"ml-3",children:"Create"})]}),e.jsxs("p",{class:"mt-6 text-xs text-gray-600 text-center",children:["Shiven Consultancy ",e.jsx("br",{})]})]})})})]}),e.jsx("div",{class:"flex-1 bg-green-100 text-center hidden lg:flex",children:e.jsx("img",{src:E,className:"w-full"})})]})})})};export{M as default};
