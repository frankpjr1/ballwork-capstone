import Header from "./Header";
import Footer from "./footer";


function Exercise() {
    return(


        <div className="h-screen bg-orange-regular">
            <Header />
            <div id="container" className="w-3/4 mx-auto">

                <div id="form-container" className="w-1/4 min-w-fit mx-auto bg-f_blue-medium p-12 rounded-md">
                    <h1 id="skills" className="text-center text-2xl text-f_yellow-regular font-semibold mb-4 ">EXERCISE</h1>
                    <form action="" id="signup" className="w-full flex flex-col gap-6 ">

                        <div className="flex justify-around text-f_yellow-regular">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="situps">situps:</label>
                                <input type="text" name="situps" id="situps" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="pushups">pushups:</label>
                                <input type="text" name="pushups" id="pushups" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="squats">squats:</label>
                                <input type="text" name="squats" id="squats" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>
                            </div>
                            <div className="flex flex-col gap-1.5 items-end">
                                <label htmlFor="toeraise">toeraise:</label>
                                <input type="text" name="toeraise" id="toeraise" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="lunges">lunges:</label>
                                <input type="text" name="lunges" id="lunges" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="pullups">pullups:</label>
                                <input type="text" name="pullups" id="pullups" className="w-3/4 rounded outline-none hover:outline-f_yellow-regular"/>

                            </div>
                        </div>

                        <button type="submit" className="py-3 bg-f_yellow-regular text-f_blue-medium
                        text-2xl rounded font-semibold hover:bg-f_purple-dull">Submit</button>
                    </form>
                    <div className="pt-4 text-center text-f_yellow-regular font-semibold">
                        <span>dashboard</span>
                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Exercise;