import single from "../images/multi4.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"


function Multi4() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/multi"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-60 p-4 ml-10"></img>
                    <h4>Multi Spring Seal AC-MS03 (Reverse-Balanced)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Multi Spring out Of Product Seal Series is a multiple spring specially developed for slurry application. The springs are protected from the media by means of dynamic O ring. Although being a balanced seal it does not require step on the sleeve. The sleeve of the unbalanced seal can be used for this seal series without modification.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Springs are Outside the Media</li>
                        <li>Balanced</li>
                        <li>Independent of Direction of Rotation</li>
                        <li>Stable Drive-pins/Lugs</li>

                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Black Liquor,Salt Slurries,Corrosive Chemicals</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">

                        <li>Carbon / Ceramic</li>
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Tungsten Carbide / Tungsten Carbide</li>
                        <li>Secondary Seal : Elastomers, TTV</li>
                        <li>Metal Parts: SS 304, SS 316, Haste alloy-C</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>20 to 100 mm</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>10 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +180°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Multi4;