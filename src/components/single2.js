import single from "../images/single8.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Single2() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/single"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4 className='py-4 '>Wave Spring Seal</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Wave Spring Unbalanced Seal Series are single wave spring seals suitable for most general applications. Advantage of these seals is due to use of single wave spring. Seal is of compact design with reduced axial length. These seals can also be used in Sewage application as spring clogging does not occur.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting </li>
                        <li>Inside Mounted</li>
                        <li>Unbalanced</li>
                        <li>Independent of Direction of Rotation</li>
                        <li>Wave Spring Loaded</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications :-</h4>
                    <p>Light Abrasive Slurry, Light Sewage Water, High Viscosity Fluids General and Light Chemicals & Hydrocarbons.</p>
                    <h4 >Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal: PTFE </li>
                        <li>Secondary Seal : Elastomers </li>
                        <li>Metal Parts: SS 304, SS 316</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>18 to 105 mm / 0.875 to 4.000 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-45 to +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Single2;