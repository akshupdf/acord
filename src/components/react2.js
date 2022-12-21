import single from "../images/react5.png"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function React2() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/react"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <div className="w-100 ml-10 flex">
                        <p>Wet Running Seal without Bearing Series is factory assembled & dynamic tested seal for steel, glass lined & SS mixers, agitators & vessels. These are used with non-pressurised barrier fluid preferably clean soft water because of its good heat transfer qualities. Fluids like oil, hydrocarbon, solvents etc. can also be used as buffer fluid by considering the corrosion resistance of wetted parts and compatibility with main media to be sealed. These seals are supplied with cooling water jacket which ensures cool running of the seal.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Outside Mounted</li>
                        <li>Without Bearing</li>
                        <li>Reverse Balanced</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Corrosive Chemicals, Hydrocarbons, General and Light Chemicals, Mixers & Agitators.</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers, TTV</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C, Haste Alloy-B, Monel, Alloy-20</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>25 to 150 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>Vacuum To 8 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>Ambient to +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default React2;