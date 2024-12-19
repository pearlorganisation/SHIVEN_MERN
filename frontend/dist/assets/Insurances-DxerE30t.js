import{r as l,f as i,e as n,u as p,J as h,j as s,K as j}from"./index-Dv_kEKgP.js";const g=()=>{const c=i(),a=n(),{insurancesData:t}=p(e=>e==null?void 0:e.insurance),o=e=>{a("/users/update-user",{state:{userData:e}})};l.useEffect(()=>{c(h())},[]);const d=25,x=[{icon:()=>s.jsx(j,{style:{color:"black"},size:d}),actionButtonClickHandler:e=>{o(e)}}];return s.jsx("div",{children:s.jsx("div",{class:"relative overflow-x-auto shadow-md sm:rounded-lg",children:s.jsxs("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[s.jsx("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400",children:s.jsxs("tr",{children:[s.jsx("th",{scope:"col",class:"px-6 py-3",children:"Insurance Type"}),s.jsx("th",{scope:"col",class:"px-6 py-3",children:"Insurance Description"}),s.jsx("th",{scope:"col",class:"px-6 py-3",children:"Insurance Icon"}),s.jsx("th",{scope:"col",class:"px-6 py-3",children:"Actions"})]})}),s.jsx("tbody",{children:Array.isArray(t==null?void 0:t.insurances)&&(t==null?void 0:t.insurances.length)>0&&(t==null?void 0:t.insurances.map(e=>s.jsx(s.Fragment,{children:s.jsxs("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",children:[s.jsx("td",{class:"px-6 py-4",children:(e==null?void 0:e.insuranceType)||"N/A"}),s.jsx("td",{class:"px-6 py-4",children:(e==null?void 0:e.insuranceDescription)||"N/A"}),s.jsx("td",{class:"px-6 py-4",children:e!=null&&e.insuranceIcon?s.jsx("img",{src:e==null?void 0:e.insuranceIcon,className:"w-[80px] h-[80px]"}):"ICON"}),s.jsx("td",{class:"px-6 py-4",children:x.map(r=>s.jsx("button",{onClick:()=>{r.actionButtonClickHandler(e)},children:r.icon()}))})]})})))})]})})})},y=l.memo(g),u=()=>{const c=n();return s.jsxs("div",{className:"userContainer p-10 ",children:[s.jsxs("div",{className:"title p-1",children:[s.jsx("h4",{className:"font-bold text-blue-500 text-sm sm:text-md md:text-lg",children:"Insurances Listing"}),s.jsx("div",{className:"createEmployeeBtn flex justify-end p-4 ",children:s.jsx("button",{className:" p-2 rounded-lg bg-indigo-600 text-white font-bold tracking-widest",onClick:()=>{c("/insurances/create-insurance")},children:"Create Insurance"})})]}),s.jsx(y,{})]})};export{u as default};