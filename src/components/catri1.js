import single from "../images/catri1.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Catri1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className=""><a href="/catri"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Cartridge Single Seal (AC-CTS01)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Cartridge Single Seal Series is a specially designed cartridge seal for pumps handling oil, water and other fluids which are being pumped at high pressure. These seals are widely used in pipeline pumps and boiler feed water pumps. Very sturdy design and drive arrangement makes the seal suitable for high pressure. This being a multiple spring seal, it provides uniform face loading.</p>
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
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers, TTV</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C, Titanium, Monel, Alloy-20</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>1.000 to 4.500 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bar (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-40 to +2500°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Catri1;