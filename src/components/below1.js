import single from "../images/bellow1.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Below1() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/bellow"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Metal Bellow Seal(unbalanced)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Metal Bellow Seal Series are welded metal bellow seals used in chemical, petrochemical and refinery process pumps for moderate temperature and pressure application and for process services requiring corrosion resistance. These bellow seals are constructed by welding a series of diaphragms together at the edges to form a bellow unit. The bellow unit eliminates the need of spring, dynamic secondary seal and provides flexibility to the seal face in addition to compensating for seal face wear.</p></div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Inherently Balanced</li>
                        <li>Independent of Direction of Rotation</li>
                        <li>Welded Metal Bellows</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Chemicals, Petrochemicals, Refineries, Corrosive Chemicals.</p>
                    <p>Face Combination:</p>
                    <ul className="list-disc">
                        <li>Carbon / Silicon Carbide</li>
                        <li>Carbon / Tungsten Carbide</li>
                        <li>Silicon Carbide/ Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers, PTFE, GFT</li>
                        <li>Metal Parts: SS304, SS316</li>
                        <li>Metal Parts: Haste Alloy-C</li>
                        <li>Welded Bellows: AM 350</li>
                        <li>Welded Bellows: Haste Alloy-C</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>1.000 to 4.000 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>9 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +200°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Below1;