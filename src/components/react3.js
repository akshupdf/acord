import single from "../images/anfd.png"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function React3() {
    return (

        <div className="flex w-[100%] h-screen">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/react"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <h4>Metallic Bellow for ANFD Mechanical Seals(AC-ANFD)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Suitable for drying equipment such as Agitated Nutsche Filter Dryer ANFD is a closed vessel engineered to separate liquid and solid byfiltration under pressure. We make bellows for these vessels and the quality of these bellows is so good that using them can enhance theperformance of the vessels.</p>
                    </div>

                </div>
                {/* <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul>
                        <li>Single Acting</li>
                        <li>Inside Mounted</li>
                        <li>Unbalanced</li>
                        <li>Independent of direct of rotation</li>
                    </ul>
                    
<h4 className='text-light bg-dark p-2'>Applications</h4>
<p>Crystallizing Slurry, Suspended Solid Slurry, Saturated Chemical Slurry, General Chemical Slurry.</p>
<p>Face Combination:</p>
<ul>
    <li>Carbon / Ceramic</li>
    <li>Carbon / Silicon Carbide</li>
    <li>Silicon Carbide / Silicon Carbide</li>
    <li>Tungsten Carbide / Tungsten Carbide</li>
    <li>Secondary Seal: PTFE ('V' Packing)</li>
    <li>Secondary Seal : Elastomers ("O Ring)</li>
    <li>Metal Parts: SS 304, SS 316</li>
</ul>
<h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
<table className="table table-bordered">
    <tbody>
    <tr>
        <td>Shaft Dia</td>
        <td>14 to 100 mm / 0.875 to 3.500 Inch</td>
    </tr>
    <tr>
        <td>Pressure</td>
        <td>14 Bars (max)</td>
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
            </div> */}

            </div>
        </div>
    )
}

export default React3;