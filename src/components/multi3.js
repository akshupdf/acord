import single from "../images/multi3.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"


function Multi3() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/multi"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Multi Spring Seal AC-DU01(Unbalanced)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Multi Spring Seal Series are multiple spring units developed for universal high pressure application. These type of Mechanical Seals are used mostly for slurry applications, their compact design makes them suitable for use in all types of Centrifugal pumps. As all parts are interchangeable, so Series Wedge Packing can be converted to Series O ring by changing only the seal ring & the elastomers.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Unbalanced</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Petrochemicals, Petroleum Refineries, General Chemicals & Light Hydrocarbons.</p>
                    <p>Face Combination:</p>
                    <ul className="list-disc">

                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal: PTFE, GFT (Wedge)</li>
                        <li>Secondary Seal : Elastomers ("O Ring)</li>
                        <li>Metal Parts: SS 304, SS 316, Haste alloy-C, Monel, Alloy-20</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>16 to 115 mm / 0.35 to 4.500 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-23 to +200°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Multi3;