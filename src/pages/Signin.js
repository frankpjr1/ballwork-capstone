import Header from "./Header";
import Footer from "./footer";


function Signin() {
    return(


        <div className="h-screen bg-orange-regular">
            <Header />
            <div id="container" className="w-3/4 mx-auto">

                <div id="form-container" className="w-1/4 mx-auto min-w-fit bg-f_blue-medium p-4 rounded-md">
                    <h1 id="skills" className="text-center text-2xl text-f_yellow-regular font-semibold ">Sign In</h1>
                    <form action="" id="signup" className="w-full flex flex-col gap-6 ">

                        <input type="email" name="email" placeholder="email"  className="py-3 px-2
                        rounded-md outline-none hover:bg-f_yellow-regular"/>

                        <input type="password" name="password" placeholder="password"  className="py-3 px-2
                        rounded-md outline-none hover:bg-f_yellow-regular"/>

                        <button type="submit" className="py-3 bg-f_yellow-regular text-f_blue-medium
                        text-2xl rounded font-semibold">Submit</button>
                    </form>
                    <div className="pt-4 text-center text-f_yellow-regular font-semibold">
                        <span>sign in</span>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Signin;