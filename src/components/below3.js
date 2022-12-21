import single from "../images/bellow3.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Below3() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className="text-black"><a href="/bellow"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10"></img>
                    <div className="w-100 ml-10 flex">
                        <p>Teflon Bellow Seal Series are designed for extreme corrosive chemical applications including concentrated acids, salts, strong oxidising and reducing agents & chemically active organic compounds. All components which come in contact with the liquid to be sealed are made of chemically inert material. Metallic components, clamping ring and springs are located outside the media.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-disc">
                        <li>Single Acting</li>
                        <li>Outside Mounted</li>
                        <li>Independent of direct of rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Extremely Corrosive & Chemical Applications.</p>
                    <p>GFT & CFT faces of the seal are composite moulded with highly flexible PTFE bellows. Spring provided with cover if required for acidic fumes application.
                    </p>
                    <h4>Face Combination:</h4>
                    <ul className="list-disc">

                        <li>GFT / Ceramic</li>
                        <li>CFT / Ceramic</li>
                        <li>Secondary Seal : PTFE Bellow</li>
                        <li>Metal Parts: SS304, SS316, Haste Alloy-C</li>
                    </ul>
                    <h4 className='text-light bg-dark p-2'>Operating Parameter</h4>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Shaft Dia</td>
                                <td>0.750 to 2.500 Inch</td>
                            </tr>
                            <tr>
                                <td>Pressure</td>
                                <td>8 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-45 to +200°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Below3;