import single from '../images/rotray1.jpg'
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function rotary1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/rotary"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>ROTARY UNION & JOINTS (AC-RU02)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Suitable for RCVD Equipment a rotary union or rotating union, permits the flow of various media from a supply pipe in to and/or outof rotating equipment. Heat transfer and hydraulic media typically used with rotary joints and rotating unions include steam, water,thermal oil, hydraulic oil, air, and coolant.Cartridge construction Preassembled Maintenance friendly Interchangeable parts Corrosion proofPerfect finish Sturdiness</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Balanced</li>
                        <li>Inside Mounted</li>
                        <li>Sturdy Drive Mechanism</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Oil Pipeline Pumps and Boiler Feed Water Pumps.</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Silicon Carbide</li>
                        <li>Secondary Seal: PTFE,Grafoil,Outboard-Elastomers</li>
                        <li>Metal Parts: SS304, MS, Brass</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>0.5 to 5 Inches</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 to 35 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-40 +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default rotary1;