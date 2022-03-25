import Header from "./Header";
import Footer from "./footer";


function Skills() {
    return(


        <div className="h-screen bg-orange-regular">
            <Header />
            <div id="container" className="mx-auto">

                <div id="form-container" className="w-1/4 min-w-fit mx-auto bg-f_blue-medium p-12 rounded-md">
                    <h1 id="skills" className="text-center text-2xl text-f_yellow-regular font-semibold mb-4 ">SKILLS</h1>
                    <form action="" id="signup" className="flex flex-col gap-6 ">

                        <div className="flex justify-around text-f_yellow-regular">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="formshooting">formshooting:</label>
                                <input type="text" name="formshooting" id="formshooting" className="w-3/4 rounded
                                outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="layups">layups:</label>
                                <input type="text" name="layups" id="layups" className="w-3/4 rounded outline-none
                                hover:outline-f_yellow-regular"/>

                                <label htmlFor="mid-range">mid range:</label>
                                <input type="text" name="mid-range" id="mid-range" className="w-3/4 rounded
                                outline-none hover:outline-f_yellow-regular"/>
                            </div>
                            <div className="flex flex-col gap-1.5 items-end">
                                <label htmlFor="low-dribble">low dribble:</label>
                                <input type="text" name="low-dribble" id="low-dribble" className="w-3/4 rounded
                                outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="wall-dribble">wall dribble:</label>
                                <input type="text" name="wall-dribble" id="wall-dribble" className="w-3/4 rounded
                                outline-none hover:outline-f_yellow-regular"/>

                                <label htmlFor="windshield-wipers">windshield wipers:</label>
                                <input type="text" name="windshield-wipers" id="windshield-wipers" className="w-3/4
                                rounded outline-none hover:outline-f_yellow-regular"/>

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

export default Skills