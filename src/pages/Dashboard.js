import Header from "./Header";
import Footer from "./footer";


function Dashboard() {
    return(


        <div className="h-screen bg-orange-regular">
            <Header />
            <div id="container" className="w-3/4 mx-auto">



                <div id="form-container" className="w-1/4 min-w-fit mx-auto bg-f_blue-medium p-12 rounded-md">
                    <h1 id="skills" className="text-center text-2xl text-f_yellow-regular
                    font-semibold mb-4 ">DASHBOARD</h1>
                    <form action="" id="signup" className="w-full flex flex-col gap-6 ">
                        <div className="flex flex-col gap-8">
                            <div cl>
                                <label htmlFor="exercise" className="text-f_yellow-regular">Exercise</label>
                                <select name="exercise" id="exercise" className="w-full outline-none py-1
                                text-f_blue-medium rounded pl-2 hover:outline-f_purple-dull">
                                    <option value="">EXERCISE</option>
                                    <option value="situps">sit ups</option>
                                    <option value="pushups">push ups</option>
                                    <option value="squats">squats</option>
                                    <option value="toe raise">toe raise</option>
                                    <option value="lunges">lunges</option>
                                    <option value="pull ups">pull ups</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="skills" className="text-f_yellow-regular">Skills</label>
                                <select name="exercise" id="exercise" className="w-full outline-none py-1
                                text-f_blue-medium rounded pl-2 hover:outline-f_purple-dull">
                                    <option value="">SKILLS</option>
                                    <option value="form-shooting" className="h-2">form shooting</option>
                                    <option value="lay-ups">lay ups</option>
                                    <option value="mid-range">mid range</option>
                                    <option value="low-dribble">low dribble</option>
                                    <option value="wall-dribble">wal dribble</option>
                                    <option value="windshied-wipers">windshield-wipers</option>
                                </select>
                            </div>
                        </div>

                        <button type="submit" className="py-3 bg-f_yellow-regular text-f_blue-medium
                        text-2xl rounded font-semibold hover:bg-f_purple-dull">Submit</button>
                    </form>
                    <div className="pt-4 text-center text-f_yellow-regular font-semibold">

                    </div>
                </div>
                <Footer />
            </div>

        </div>
    )
}

export default Dashboard;