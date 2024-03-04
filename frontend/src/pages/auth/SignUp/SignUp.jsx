import React from 'react'

const SignUp = () => {
    return (
        <div class="container mx-auto min-h-[90dvh] grid place-items-center">
            <form class="relative  w-full p-3 space-y-3 max-w-screen-md  rounded-md bg-white shadow-xl lg:p-10">
                <h1 class="mb-6 text-xl font-semibold lg:text-2xl">Register</h1>

                <div class="grid gap-3 md:grid-cols-2">
                    <div>
                        <label class=""> First Name </label>
                        <input type="text" placeholder="Your Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                    <div>
                        <label class=""> Last Name </label>
                        <input type="text" placeholder="Last  Name" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                    </div>
                </div>
                <div>
                    <label class=""> Username </label>
                    <input type="text" placeholder="Username" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                </div>
                <div>
                    <label class=""> Email Address </label>
                    <input type="email" placeholder="Info@example.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                </div>
                <div>
                    <label class=""> Password </label>
                    <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3" />
                </div>


                <div class="checkbox flex justify-start items-center gap-2">
                    <input type="checkbox" id="chekcbox1" checked="" />
                    <label for="checkbox1">I agree to the <a href="#" target="_blank" class="text-blue-600"> Terms and Conditions </a> </label>
                </div>

                <div>
                    <button type="button" class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white">Get Started</button>
                </div>
            </form>

        </div>
    )
}

export default SignUp