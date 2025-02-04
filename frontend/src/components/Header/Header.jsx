// -------------------------------------------Imports------------------------------------------------
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/ShivenLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { clearReduxStoreData } from "../../features/slices/Auth/authSlice";
//---------------------------------------------------------------------------------------------------

const Header = () => {
  // -------------------------------------------States------------------------------------------------
  //  -------------------------------------------------------------------------------------------------
  // -------------------------------------------Hooks------------------------------------------------
  const { isUserLoggedIn } = useSelector((state) => state?.auth);
  const dispatch = useDispatch();
  //  -------------------------------------------------------------------------------------------------
  // -------------------------------------------Functions------------------------------------------------
  //  -------------------------------------------------------------------------------------------------
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    {
      title: "Home",
      path: "/",
      isDrapdown: false,
    },
    {
      title: "About Us",
      path: "javascript:void(0)",
      isDrapdown: false,
    },
    { title: "Contact Us", path: "javascript:void(0)", isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 z-20 position: bg-[lightskyblue] w-[100%]  md:text-sm md:border shadow-lg border-b-gray-300 border-l-neutral-50 ${
          state ? " rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link
              to="/"
              className="text-3xl font-semibold text-black font-mono"
              href="javascript:void(0)"
            >
              <img className="h-[4rem] w-[6rem]" src={Logo} alt="" />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => {
                return (
                  <Link className="relative" to={item?.path} key={idx}>
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex text-md items-center bg-[lightskyblue] justify-between gap-1 text-black font-semibold hover:text-blue-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-black font-semibold text-md hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="top-20 min-w-[16rem] md:absolute md:top-[4rem] md:border-y md:shadow-md md:mt-0 bg-white z-10 border-2">
                        <ul className="">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li
                              className="px-4 font-medium py-2 hover:bg-indigo-100"
                              key={idx}
                            >
                              <p className="text-black poppins-semibold text-sm">
                                {dropdownItem.label}
                              </p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </Link>
                );
              })}

              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  {isUserLoggedIn ? (
                    <button
                      onClick={() => {
                        dispatch(clearReduxStoreData());
                      }}
                      className=" px-4 py-2 bg-[var(--primary-color)] block  text-center text-white font-semibold hover:text-[var(--primary-color)] hover:bg-gray-300 hover:shadow-lg border rounded-lg md:border-none"
                    >
                      Logout
                    </button>
                  ) : (
                    <Link
                      to="/login"
                      href="javascript:void(0)"
                      className=" px-4 py-2 bg-[var(--primary-color)] block  text-center text-white font-semibold hover:text-black hover:bg-gray-300 hover:shadow-lg border rounded-lg md:border-none"
                    >
                      Log in
                    </Link>
                  )}
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
};
export default Header;
