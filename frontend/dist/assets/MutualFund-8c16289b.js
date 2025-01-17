import{a as c,l as v,b,u as y,c as g,r as j,m as h,j as e,I as i,n as f,S as P,o as S,p as N}from"./index-e87c8a1a.js";const A=()=>{const{providerDropdownData:m}=c(s=>s.serviceProvider),{isLoading:l}=c(s=>s.servicePlan),{id:t}=v(),u=b(),o=y(),{register:r,handleSubmit:d,formState:{errors:n},control:x}=g(),p=s=>{var a;s.serviceType=t,s!=null&&s.serviceProvider&&(s.serviceProvider=(a=s.serviceProvider)==null?void 0:a.value),console.log(s),o(N(s)).then(()=>{u("/admin/services")})};return j.useEffect(()=>{o(h(t))},[]),e.jsxs("div",{className:"max-w-4xl mx-auto my-5 overflow-hidden rounded-2xl bg-white shadow-lg ",children:[e.jsx("div",{className:"bg-blue-600 px-10 py-4 text-center text-white font-semibold",children:"Mutual Fund"}),e.jsxs("form",{className:"space-y-5 my-4 mx-8 sm:mx-2",onSubmit:d(p),children:[e.jsxs("div",{className:"sm:flex space-y-6 sm:space-y-0 justify-between gap-10",children:[e.jsx(i,{label:"Plan Name",...r("planName",{required:!0}),isError:n.planName,errorMessage:"Plan Name is required"}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{className:"font-medium",children:"Service Provider"}),e.jsx(f,{control:x,name:"serviceProvider",render:({field:s})=>e.jsx(P,{value:s.value,options:m,onChange:a=>s.onChange(a),className:"mt-2 ",placeholder:"Choose Service Provider ",styles:{control:a=>({...a,border:"1px solid #CBD5E1",borderRadius:"0.400rem",height:"40px"}),placeholder:a=>({...a,color:"#9CA3AF"})}}),rules:{required:!0}}),n.serviceProvider&&e.jsx("span",{className:" text-sm font-medium text-red-500",children:"Service Provider is required"})]})]}),e.jsxs("div",{className:"sm:flex space-y-6 sm:space-y-0 justify-between gap-10",children:[e.jsx(i,{label:"Fund Size",...r("fundSize")}),e.jsx(i,{label:"Category",...r("category")})]}),e.jsxs("div",{className:"sm:flex space-y-6 sm:space-y-0 justify-between gap-10",children:[e.jsx(i,{label:"Minimum SIP Amount",type:"number",...r("minSIPAmount",{required:!0}),isError:n.minSIPAmount,errorMessage:"Minimum SIP Amount is required"}),e.jsx(i,{label:"Expense Ratio",type:"number",...r("expenseRatio",{min:0,max:100}),isError:n.expenseRatio,errorMessage:"Expense ratio must be between 0 and 100"})]}),e.jsxs("div",{className:"sm:flex space-y-6 sm:space-y-0 justify-between gap-10",children:[e.jsx(i,{label:"Five Years Annualised Returns",type:"number",...r("fiveYearsAnnualisedReturns")}),e.jsx(i,{label:"One Years Annualised Returns",type:"number",...r("oneYearsAnnualisedReturns")})]}),e.jsx("div",{className:"sm:flex space-y-6 sm:space-y-0 justify-between gap-10",children:e.jsx(i,{label:"Risk Factor",...r("riskFactor")})}),e.jsx("button",{type:"submit",disabled:l,className:"w-full rounded-lg bg-gray-700 hover:bg-gray-800 active:bg-gray-700 px-10 py-3 font-semibold text-white",children:l?e.jsx(S,{color:"#c4c2c2"}):e.jsx(e.Fragment,{children:"Create"})})]})]})};export{A as default};
