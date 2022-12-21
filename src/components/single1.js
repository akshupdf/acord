import single from "../images/single3.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Single1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/single"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">

                    <img src={single} alt="" className="w-60 h-40 m-4 p-2"></img>
                    <h4 className='py-20'>Single Spring Seal</h4>
                    <div className="w-100 ml-10 flex ">
                        <p>Single Spring Seal ‘V’ Packing &‘O’ Ring are single helical coil spring, bi-directional seals developed for dirty media & clogging applications. Torque transmission from drive collar to spring holder seal rings is done through sturdy drive lugs. As all the parts are interchangeable, so this series can be converted from ‘V Packing’ to ‘O-ring’ by changing only secondary seal.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Unbalanced</li>
                        <li>Independent of Direction of Rotation</li>
                        <li>Universal Chemical Compatibility Due to PTFE Elastomer</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Crystallizing Slurry, Suspended Solid Slurry, Saturated Chemical Slurry, General Chemical Slurry.</p>
                    <p>Face Combination:</p>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal: PTFE ('V' Packing)</li>
                        <li>Secondary Seal : Elastomers ("O Ring)</li>
                        <li>Metal Parts: SS 304, SS 316</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>14 to 100 mm / 0.875 to 3.500 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>14 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Single1;