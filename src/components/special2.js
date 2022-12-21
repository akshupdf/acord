import single from "../images/special2.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Special2() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/special"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>

                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 "></img>
                    <h4>Rubber Bellow Seal </h4>
                    <div className="w-100 ml-10 flex">
                        <p>Rubber Bellow Seal is a single coil spring seal with elastomeric bellow designed for Water, Oil and Light Duty Applications. This seal has self-aligning feature which compensate abnormal shaft end play and run out, which leads to improved service life. Elastomeric bellow protects shaft and sleeve from fretting.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Unbalanced</li>
                        <li>Single Helical Coil Spring</li>
                        <li>Independent of Direction of Rotation</li>
                        <li>Torque Transmission by Elastomer Bellow</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Generally used in Water Pumps& Submersible Pumps .</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Secondary Seal : Nitrile, Viton</li>
                        <li>Metal Parts: SS 304, SS 316</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>10 to 80 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>8 Bars (max)</td>
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

export default Special2;