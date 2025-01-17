import React, { useState } from "react";

export default function ViewProfileModal({ viewData, setModal }) {
  const [showBankDetails, setShowBankDetails] = useState(false);
  const [showCreditCard, setShowCreditCard] = useState(false);
  const handleCheckboxchange = () => {
    setShowBankDetails(!showBankDetails);
    setShowCreditCard(false)
  };

  const handleCreditCardcheckbox=()=>{
    setShowCreditCard(!showCreditCard);
    setShowBankDetails(false)
  }
  return (
    <div
      className="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdroap-blur-sm"
      aria-labelledby="header-3a content-3a"
      aria-modal="true"
      tabindex="-1"
      role="dialog"
    >
      {/*    <!-- Modal --> */}
      <div
        className="flex h-[90%] w-[80%] sm:w-[70%]  flex-col gap-6 overflow-hidden rounded bg-white p-6 shadow-xl "
        id="modal"
        role="document"
      >
        {/*        <!-- Modal header --> */}
        <header id="header-3a" className="flex items-center gap-4">
          <h3 className="flex-1 text-xl font-medium text-slate-700">Profile</h3>

          <button
            onClick={() => setModal(false)}
            className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
            aria-label="close dialog"
          >
            <span className="relative only:-mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                role="graphics-symbol"
                aria-labelledby="title-79 desc-79"
              >
                <title id="title-79">Icon title</title>
                <desc id="desc-79">
                  A more detailed description of the icon
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </header>
        {/*        <!-- Modal body --> */}
        <div id="content-3a" className="flex-1 overflow-auto space-y-10">
          <table className="w-full table-auto text-sm">
            <tbody className="text-gray-600">
              {/* <tr> */}
              {/* <td className="py-2 px-4 border border-gray-300">Full Name</td>
                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.fullName}
                </td>
              </tr> */}
              <tr>
                <td className="py-2 px-4 border border-gray-300">Email</td>
                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.email}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Mobile 1</td>

                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.mobile1}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Mobile 2</td>

                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.mobile2 || <span className="text-xs text-blue-500">No Data Found</span>}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">Dob</td>
                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.dob
                    ? new Date(viewData.dob).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  Anniversary
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.anniversary
                    ? new Date(viewData.anniversary).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )
                    : "N/A"}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">City</td>

                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.city}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">State</td>

                <td className="py-2 px-4 border border-gray-300">
                  {viewData?.state}
                </td>
              </tr>

              <tr>
                <td className="py-2 px-4 border border-gray-300">Pincode</td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.pincode}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  Aadhaar Number
                </td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.aadhaarNumber}
                </td>
              </tr>

              <tr>
                <td className="py-2 px-4 border border-gray-300">Pan Number</td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.panNumber}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  Driving License Number
                </td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.drivingLicenseNumber}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  Passport Number
                </td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.passportNumber}
                </td>
              </tr>

              <tr>
                <td className="py-2 px-4 border border-gray-300">
                  Passport Number
                </td>
                <td className="py-2 px-4 border border-b-1 border-gray-300">
                  {viewData?.passportNumber}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* bank details */}

          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id="toggleBankDetails"
              checked={showBankDetails}
              onChange={handleCheckboxchange}
              className="cursor-pointer"
            />
            <label htmlFor="toggleBankDetails" className="cursur-pointer">
              {" "}
              Show Bank Details
            </label>
          </div>
     
        {showBankDetails && viewData?.bankDetails ? (
          <>
            {" "}
            <div id="content-3a" className="flex-1 overflow-auto space-y-10">
                <table  className="w-full table-auto text-sm">
                  <tbody  className="text-gray-600">
                    <tr>
                      <td className="py-2 px-4 border border-gray-300">Name</td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.name}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border border-gray-300">
                        Bank Name
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.bank}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Savings/Current
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.savingsCurrent}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-gray-300">
                        Account Number
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.accountNumber}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Url
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.url}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        CIF
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.cif}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        UserId
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.userId}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Password
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.password}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Transaction Password
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.transactionPassword}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        DebitCardNo
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.debitCardNo}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Debit Card Pin
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.debitCardPin}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        IFSC
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.ifsc}
                      </td>
                    </tr>

                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        CIF
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.cif}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Nominee
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.nominee}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        CIF
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.cif}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Bank Email
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.bankEmail}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Bank Mobile
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.bankMobile}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border border-b-1 border-gray-300">
                        Bank Address
                      </td>
                      <td className="py-2 px-4 border border-gray-300">
                        {viewData?.bankDetails?.bankAddress}
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </>
        ) : showBankDetails && !viewData?.bankDetails  ? (
          <span className="text-sm text-blue-500"> No Bank Details Data </span>
        ): <> </>}
 <div className="flex items-center gap-2 mb-2">
      <input type="checkbox" id="toggleBankDetails" checked={showCreditCard} onChange={handleCreditCardcheckbox} className="cursor-pointer"/>
      <label  htmlFor="toggleBankDetails" className="cursur-pointer">
Show Credit Card Details
      </label>

     </div>

        {  showCreditCard && viewData?.creditCardDetails ?(<>
        <div id="content-3a" className="flex-1 overflow-auto space-y-10 ">
        <table className="w-full table-auto text-sm">
        <tbody className="text-gray-600">
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Bank</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">
    
{viewData?.creditCardDetails?.bank}

  </td>


  
</tr>
      
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Bank Account</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">
    
{viewData?.creditCardDetails?.accountNumber}

  </td>


  
</tr>   
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Bank Email</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.bankEmail}
  </td>  
</tr>  
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Bank Mobile No. </td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.bankMobile}
  </td>  
</tr> 
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Credit Card No.</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.creditCardNo}
  </td>  
</tr> 
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Credit Card Pin</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.creditCardPin}
  </td>  
</tr> 

<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Password</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.password}
  </td>  
</tr> 
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Savings/Current</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.savingsCurrent}
  </td>  
</tr> 
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Transaction Password</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.transactionPassword}
  </td>  
</tr> 
<tr>
<td className="py-2 px-4 border border-b-1 border-gray=-300">Url</td>
  <td className="py-2 px-4 border border-b-1 border-gray=-300">    
{viewData?.creditCardDetails?.url}
  </td>  
</tr> 


</tbody> 
        </table>
        </div>
    
          
          </>): showCreditCard && !viewData?.creditCardDetails  ? (
          <span className="text-sm text-blue-500"> No Credit Card Details Data </span>
        ): <> </>
        }
      </div>
    </div>
  );
}
