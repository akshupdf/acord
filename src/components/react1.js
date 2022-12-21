import single from "../images/react4.png"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"


function React1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className=""><a href="/react"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Dry Running Seal Series (AC-ASD01)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Dry Running Seal Series is factory assembled & dynamic tested seal for steel, glass lined & SS mixers, agitators & vessels. It is a multiple spring externally mounted, reverse balanced seal with ‘O’ ring for secondary sealing. Various elastomers can be offered for different service applications. These seals are basically used on top entry agitators as dry running seals. When food products or pharmaceutical products are agitated in agitator, mixing of any other liquid will contaminate the product & affect its quality; hence these dry running seals are used. These seals do not require any external media for lubricating the faces and are therefore called dry running seals.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Dry Running</li>
                        <li>Outside Mounted</li>
                        <li>Reverse Balanced</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Pharmaceutical, Chemical & Food Industries.</p>
                    <h4>Face Combination:</h4>
                    <ul>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Silicon Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers, PTFE, TTV</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C, Haste Alloy-B, Monel, Alloy-20</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>15 to 150 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>Vacuum To 8 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>Ambient to +120°C</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default React1;