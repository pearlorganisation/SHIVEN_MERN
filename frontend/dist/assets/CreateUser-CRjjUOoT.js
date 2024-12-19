import{u as g,r as h,e as q,f as C,g as U,h as k,i as S,j as e,k as E,l as A,A as p,m as F}from"./index-Dv_kEKgP.js";const D=()=>{var d,n,u,c;const{loggedInUserData:y}=g(r=>r.auth),[i,b]=h.useState("");q();const a=C(),{isUserLoading:j,isUserCreated:o}=g(r=>r==null?void 0:r.user),{register:t,formState:{errors:s},handleSubmit:w,reset:N}=U(),v=r=>{try{const{userName:l,fullName:m,email:x,password:f}=r;l&&m&&x&&f&&(i?a(F({payload:{userName:l,fullName:m,email:x,password:f,role:i}})):p.error("Please Choose a role for the user"))}catch(l){p.error(l.message)}};return h.useEffect(()=>{o&&(a(k(!1)),N(),b(""),a(S()))},[o]),e.jsx("div",{children:e.jsx("div",{class:"min-h-screen bg-gray-100 text-gray-900 flex justify-center",children:e.jsxs("div",{class:"max-w-screen-xl m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1",children:[e.jsxs("div",{class:"lg:w-1/2 xl:w-5/12 p-6 sm:p-12",children:[e.jsx("h1",{className:"text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl",children:y.role==="0"?"Create Consultant Account":"Create Client Account"}),e.jsx("div",{class:"mt-12 flex flex-col items-center",children:e.jsx("div",{class:"w-full flex-1 mt-8",children:e.jsxs("form",{class:"mx-auto max-w-xs",onSubmit:w(v),children:[e.jsx("input",{class:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Username",...t("userName",{required:{value:!0,message:"User Name is a required field"}})}),s.userName&&e.jsx("p",{className:"text-red-500 mt-1",children:((d=s==null?void 0:s.userName)==null?void 0:d.message)||"User Name is a required field"}),e.jsx("input",{class:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"text",placeholder:"Full Name",...t("fullName",{required:{value:!0,message:"Full Name is a required field"}})}),s.fullName&&e.jsx("p",{className:"text-red-500 mt-1",children:((n=s==null?void 0:s.fullName)==null?void 0:n.message)||"Full Name is a required field"}),e.jsx("input",{class:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"email",placeholder:"Email",...t("email",{required:{value:!0,message:"Email is a required field"}})}),s.email&&e.jsx("p",{className:"text-red-500 mt-1",children:((u=s==null?void 0:s.email)==null?void 0:u.message)||"Email is a required field"}),e.jsx("input",{class:"w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"password",placeholder:"Password",...t("password",{required:{value:!0,message:"Password is a required field"}})}),s.password&&e.jsx("p",{className:"text-red-500 mt-1",children:((c=s==null?void 0:s.password)==null?void 0:c.message)||"Password is a required field"}),j?e.jsx("button",{class:"mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",type:"submit",children:e.jsx(E,{})}):e.jsxs("button",{class:"mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none",type:"submit",children:[e.jsxs("svg",{class:"w-6 h-6 -ml-2",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[e.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),e.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),e.jsx("path",{d:"M20 8v6M23 11h-6"})]}),e.jsx("span",{class:"ml-3",children:"Create"})]}),e.jsxs("p",{class:"mt-6 text-xs text-gray-600 text-center",children:["Shiven Consultancy ",e.jsx("br",{})]})]})})})]}),e.jsx("div",{class:"flex-1 bg-green-100 text-center hidden lg:flex",children:e.jsx("img",{src:A,className:"w-full"})})]})})})};export{D as default};