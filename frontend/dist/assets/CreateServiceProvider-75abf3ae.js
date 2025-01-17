import{u as S,b as w,a as p,r as d,c as P,k as C,j as e,n as q,S as E,o as F,v as L}from"./index-e87c8a1a.js";const D=()=>{var x,g;const u=S(),v=w(),{serviceProviderData:t,isLoading:h}=p(r=>r.serviceProvider),{serviceData:m}=p(r=>r.service);console.log("service type ---->",m);const[a,f]=d.useState(""),y=r=>{const s=r.target.files[0];if(s){const i=new FileReader;i.readAsDataURL(s),i.onloadend=()=>{f(i.result)}}},{register:n,handleSubmit:b,formState:{errors:o},control:j}=P(),N=r=>{const{service:s}=r,i=s==null?void 0:s.map(l=>l==null?void 0:l.value),c=new FormData;c.append("serviceProviderName",r==null?void 0:r.serviceProviderName),c.append("description",r==null?void 0:r.description),c.append("service",JSON.stringify(i)),Array.from(r==null?void 0:r.logo).forEach(l=>{c==null||c.append("logo",l)}),u(L(c))};return d.useEffect(()=>{t!=null&&t.success&&v("/admin/serviceProviders")},[t]),d.useEffect(()=>{u(C())},[]),e.jsx("div",{children:e.jsx("div",{className:"min-h-screen  bg-gray-100 text-gray-900 flex justify-center ",children:e.jsx("div",{className:" m-0 sm:m-5 bg-white shadow sm:rounded-lg flex justify-center flex-1",children:e.jsxs("div",{className:"p-6 w-full",children:[e.jsx("h1",{className:"text-center font-bold text-blue-600 text-sm sm:text-lg md:text-xl",children:"Create Service Provider"}),e.jsx("div",{className:" mt-4 w-full h-[90%]",children:e.jsxs("form",{action:"",onSubmit:b(N),children:[e.jsxs("div",{className:" flex justify-between gap-4 h-[20rem]",children:[e.jsxs("div",{className:"w-full h-[80%]",children:[e.jsx("input",{className:"w-full  px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white",type:"text",placeholder:"Service Provider Name",...n("serviceProviderName",{required:{value:!0,message:"Service Provider Name is a required field"}})}),o.serviceProviderName&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:(x=o==null?void 0:o.serviceProviderName)==null?void 0:x.message}),e.jsxs("div",{className:"",children:[e.jsx("label",{htmlFor:"fileImage",children:e.jsxs("div",{className:`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none cursor-pointer focus:border-gray-400 focus:bg-white mt-5 max-h-[200px] ${a?"flex justify-center ":""}`,children:[!a&&e.jsxs("p",{className:"text-gray-500 font-medium",children:[e.jsxs("span",{className:"text-red-500 font-bold",children:["Select :"," "]}),"Service Logo"]}),a&&e.jsx("img",{src:a,className:"rounded-md h-40 w-52"})]})}),e.jsx("input",{id:"fileImage",...n("logo",{required:!0,onChange:r=>{y(r)}}),className:"w-full hidden px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5",type:"file",placeholder:"Service Icon"}),o.logo&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:"Service Provider Logo is a required field"})]})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("textarea",{className:"w-full h-[85%] px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white resize-none",type:"text",placeholder:"Service Provider Description",...n("description",{required:{value:!0,message:"Service Provider Description is a required field"}})}),o.description&&e.jsx("p",{className:"text-red-500 text-xs mt-1",children:(g=o==null?void 0:o.description)==null?void 0:g.message})]})]}),e.jsxs("div",{className:"secondBox grid place-content-center gap-2",children:[e.jsx("label",{className:"justify-self-center",children:"Service Type"}),e.jsx(q,{control:j,name:"service",render:({field:r})=>e.jsx(E,{value:r.value,options:m.map(s=>({value:s==null?void 0:s.serviceType,label:s==null?void 0:s.serviceType})),onChange:s=>r.onChange(s),className:"mt-2 min-w-80",placeholder:"Choose Service Type ",isMulti:!0,closeMenuOnSelect:!1}),rules:{required:!0}})]}),e.jsx("div",{className:"text-center mt-10 p-3",children:e.jsx("button",{className:"w-64 border rounded-lg tracking-wider bg-red-700 p-2  text-white font-bold",children:h?e.jsx(F,{color:"#c4c2c2"}):e.jsx(e.Fragment,{children:"Create Service Provider"})})})]})})]})})})})};export{D as default};
