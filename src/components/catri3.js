import single from "../images/catri3.jpg"
import SideNavBar from "./sidenav";
import { BsArrowLeftCircleFill } from "react-icons/bs"

function Catri3() {
    return (

        <div className="flex w-[100%] h-auto">
            <div className="relative w-[20%]">
                <SideNavBar />

            </div>
            <div className=" w-[80%] my-4">
                <h1 className=""><a href="/catri"><BsArrowLeftCircleFill style={{ color: 'black' }} /></a></h1>
                <div className="flex flex-wrap w-[100]">
                    <img src={single} alt="" className="w-60 h-40 ml-10 "></img>
                    <h4>Cartridge DoubleMetal Bellow Seal (AC-CTMB01)</h4>
                    <div className="w-100 ml-10 flex">
                        <p>Cartridge type Double Metal Bellow Seal Series is welded metal bellow seals used in process pumps for high temperature and moderate pressure applications in chemical, petrochemical & refineries. These bellow seals are constructed by welding a series of diaphragms together at the edges. The bellow unit eliminates the need of spring, dynamic secondary seal and provides flexibility to the seal face in addition to compensating for seal face wear. Drive to the seal is given by strong drive lugs, which also protects the bellows from damage.</p>
                    </div>

                </div>
                <div className="p-10">
                    <h4 className='text-light bg-dark p-2'>Feature</h4>
                    <ul className="list-dist">
                        <li>Double Acting</li>
                        <li>Inside Mounted</li>
                        <li>Inherently Balanced</li>
                        <li>Welded Metal Bellows</li>
                        <li>Independent of Direction of Rotation</li>
                    </ul>

                    <h4 className='text-light bg-dark p-2'>Applications</h4>
                    <p>Chemicals, Petrochemicals, Petroleum Refineries, Hot oil.</p>
                    <h4>Face Combination:</h4>
                    <ul className="list-dist">
                        <li>Carbon / Silicon Carbide</li>
                        <li>Silicon Carbide / Silicon Carbide</li>
                        <li>Secondary Seal : Grafoil</li>
                        <li>Welded Bellows: AM 350</li>
                        <li>Metal Parts: SS316</li>
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
                                <td>14 Bars (max)</td>
                            </tr>
                            <tr>
                                <td>Temperature</td>
                                <td>-20 to +350°C</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Catri3;