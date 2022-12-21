import single from "../images/special3.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Special3() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/special"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>



                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 "></img>
                    <h4>Single Spring Seal (AC- LKH 10)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>The Seal is a single coil spring designed for general chemicals and Light Duty Applications. . Torque transmission from drive collar to spring holder seal rings is done through sturdy drive lugs. As all the parts are interchangeable, so this series can be converted from ‘V Packing’ to ‘O-ring’ by changing only secondary seal.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Balanced</li>
                        <li>Inside Mounted</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Petroleum Refinery, General Chemicals, Fertilizers, Pharmaceutical industry.</p>
                    <p>Face Combination:</p>
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
                                <td>20 to 80 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>12 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-40 to +200°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Special3;