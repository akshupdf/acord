import single from "../images/multi1.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Multi1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className=""><a href="/multi"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Multi Spring Seal AC-MS01 (Unbalanced)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Multi Spring Seal Series are multiple spring units developed for universal high pressure application. Their compact design makes them suitable for use in all types of Centrifugal pumps. As all parts are interchangeable, so Series Wedge Packing can be converted to Series O ring by changing only the seal ring & the elastomer.</p>
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
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers ("O Ring)</li>
                        <li>Secondary Seal : PTFE (Wedge)</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>12 to 105 mm / 0.875 to 4.000 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-60 to +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Multi1;