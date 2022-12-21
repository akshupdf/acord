import single from "../images/catri2.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Catri2() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/catri"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Cartridge Double Seal (AC-CTM01)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>High Pressure Cartridge Balanced Seal Series is a specially designed cartridge seal for pumps handling oil, water and other fluids which are being pumped at very high `pressure. These seals are widely used in pipeline pumps and boiler feed water pumps. Very sturdy design and drive arrangement makes the seal suitable for very high pressure. This being a multiple spring seal, it provides uniform face loading.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Balanced</li>
                        <li>Inside Mounted</li>
                        <li>Multiple Spring Design</li>
                        <li>Sturdy Drive Mechanism</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Process Industry, Chemical Plants, Chemical Industry,Sugar Industry.</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Silicon Carbide / Tungsten Carbide</li>
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
                                <td>upto to 150 Bars (max)</td>
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

export default Catri2;