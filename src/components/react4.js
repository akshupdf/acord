import single from "../images/react6.png"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function React4() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/react"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-50 ml-10"></img>
                    <h4>Double Unbalanced Mechanical Seal (AC-ADU01)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Double Unbalanced Mechanical Seal Series are factory assembled cartridge units used on mixers, agitators & reactors. This seals are designed for handling severe services including products emitting toxic vapours during reaction process. The design incorporates bearing located very close to the seal. This standard feature effectively arrests the shaft whip for smooth and trouble free operation enabling enhanced seal life. The cooling jacket, also a standard feature, helps to maintain cool environment around the seal. Large clearance between the rotating shaft/sleeve and mating ring permits higher deflection of the shaft, invariably associated with top entry agitators.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Double Acting Back to Back</li>
                        <li>Cartridge Unit</li>
                        <li>Unbalanced</li>
                        <li>Operated with Pressurised Barrier Fluid</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Petrochemicals, General Chemicals & Light Hydrocarbons, Emitting Vapour & Pharmaceutical Industries.</p>
                    <p>Face Combination:</p>
                    <ul className="list-disc">
                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Secondary Seal : PTFE, GFT</li>
                        <li>Secondary Seal: Inboard -PTFE, GFT / Outboard-Elastomers</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C, Haste Alloy-B, Monel, Alloy-20, Carbon Steel</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>25 to 150 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>Vacuum to 10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>Ambient to +200°C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default React4;