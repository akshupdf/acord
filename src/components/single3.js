import single from "../images/single5.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Single3() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/single"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4 className='py-4 '>Conical Spring Seal</h4>
                    
                    <div className="w-100 ml-10 flex">
                        <p>Conical Spring Seal is a conical helical spring, unbalanced seal with ‘O’ ring as secondary sealing member. Conical Spring is dependent on the direction of rotation of shaft, since the torque transmission is done by conical helical spring. Face Combination depends on the application of respective Mechanical Seal. Direction of rotation is seen from the drive end of the shaft. Clockwise rotating shaft requires right handed spring and anti-clockwise rotating shaft requires left handed spring.</p>

                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Unbalanced</li>
                        <li>Dependent of Direction of Rotation</li>
                        <li>Single Conical Helical Spring</li>
                        <li>Torque Transmission by Conical Helical Spring</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Used in Water Pumps, Circulating Pumps for Central Heating, Chemical Pumps and Sewage& Submersible Pumps.</p>
                    <p>Face Combination:</p>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>

                        <li>Secondary Seal : Elastomers,PTFE</li>
                        <li>Metal Parts: SS 304, SS 316</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>10 to 90 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +160°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Single3;