import single from "../images/special1.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Special1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/special"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 "></img>
                    <h4>Cartridge Seal AC-GF01</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Cartridge Balanced Seal Series is a specially designed seal for pumps ETP water and other fluids which are being pumped. These seals are widely used in multistage pumps. Very sturdy design and drive arrangement makes the seal suitable for smooth running.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Balanced</li>
                        <li>Cartridge Unit</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Utility, ETP, Petrochemicals, Paint Industries.</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Secondary Seal: PTFE, GFT</li>
                        <li>Secondary Seal: Inboard -PTFE, GFT / Outboard-Elastomers</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C, Haste Alloy-B, Monel, Alloy-20, Carbon Steel</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>12, 16, 22, 28,38 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>16 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +180°C</td>
                            </tr>
                            <tr>
                                <td>Velocity</td>
                                <td>Up to 20 m/sec</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Special1;