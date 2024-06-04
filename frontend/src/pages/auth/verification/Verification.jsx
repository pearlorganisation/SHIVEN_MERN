import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyLoginOtp } from "../../../features/actions/Auth/authActions";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";

const OtpVerification = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const email = location?.state?.email || "";
  const dispatch = useDispatch();
  const { isUserLoggedIn } = useSelector((state) => state?.auth);

  const onInputChange = (event, index) => {
    const inputName = `otp${index + 1}`;
    const value = event.target.value;

    // Move focus to the next input field if a digit is entered
    if (value && value.length === 1 && index < 3) {
      const nextInputName = `otp${index + 2}`;
      document.getElementsByName(nextInputName)[0].focus();
    }

    // Move focus to the previous input field if backspace is pressed and the current input field is empty
    if (event.keyCode === 8 && !value && index > 0) {
      const prevInputName = `otp${index}`;
      document.getElementsByName(prevInputName)[0].focus();
    }

    // Update the input field value
    setValue(inputName, value);
  };

  const onSubmit = (data) => {
    let otp = "";
    for (let i in data) {
      otp += data[i];
    }

    if (!email) {
      toast.error("Email is required");
    } else {
      dispatch(verifyLoginOtp({ email, otp }));
    }
  };

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/");
    }
  }, [isUserLoggedIn]);

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Otp Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              <p>We have sent a code to your email {email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-16 ">
              <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs ">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="w-16 h-16">
                    <input
                      {...register(`otp${index}`, {
                        required: true,
                        minLength: 1,
                        maxLength: 1,
                        pattern: /^[0-9]*$/,
                      })}
                      className={`w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 ${
                        errors[`otp${index}`] ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="*"
                      maxLength={1}
                      onChange={(event) => onInputChange(event, index - 1)}
                      onKeyDown={(event) => onInputChange(event, index - 1)}
                      name={`otp${index}`}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col space-y-5">
                <div>
                  <button
                    className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-[#4F46E5] border-none text-white text-sm shadow-sm"
                    type="submit"
                  >
                    Verify Account
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                  <p>Didn't receive code?</p>
                  <a
                    className="flex flex-row items-center "
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resend
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
