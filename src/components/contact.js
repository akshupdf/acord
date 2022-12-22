import { MDBCol, MDBRow, } from 'mdb-react-ui-kit';
import logo from '../images/call2.jpg'

export default function Contact() {

    return (
        <div className='bg-no-repeat bg-cover bg-fixed w-screen' style={{ backgroundImage: `url(${logo})` }}>
            <div className='p-4 font-medium '>


                <MDBRow className=' justify-content-center '>

                    <MDBCol md='6' className=' mt-5 text-l shadow-2xl bg-white'>
                        <h5 className='text-uppercase fw-bold mb-4'>

                            Head Office and Manufacturing Unit:
                        </h5>
                        <h6>A-CORD SEALS INDIA PVT LTD.</h6>
                        <p>

                            657, Raj Rajeshwari Compound,
                            Near Sonale Police Station,
                            Sonale, Bhiwandi 421302
                            Maharashtra, India

                        </p>



                        <table className="table ">
                            <tbody>
                                <th>
                                    <td>Emails</td>
                                </th>
                                <tr>
                                    <td>Marketing: </td>
                                    <td>info@acordseals.com</td>
                                </tr>
                                <tr>
                                    <td>Sales & Services: 	</td>
                                    <td>sales@acordseals.com</td>
                                </tr>
                                <tr>
                                    <td>Technical Support: 	</td>
                                    <td>support@acordseals.com</td>
                                </tr>
                            </tbody>
                        </table>

                        <table className="table ">
                            <tbody>
                                <th>
                                    <td>Contact No.</td>
                                </th>
                                <tr>
                                    <td>Head office</td>
                                    <td>02522-295058</td>
                                </tr>
                                <tr>
                                    <td>Marketing: </td>
                                    <td>+91-9322778733</td>
                                </tr>
                                <tr>
                                    <td>Sales & Services: 	</td>
                                    <td>+91-9860325171</td>
                                </tr>
                                <tr>
                                    <td>Technical Support: 	</td>
                                    <td>+91-9821262176</td>
                                </tr>
                            </tbody>
                        </table>
                    </MDBCol>
                </MDBRow>

            </div>
            <div className='w-[100vh] mx-auto p-10 flex'>
                <iframe title="myFrame" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15063.670264697399!2d73.0916095!3d19.2859507!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3254b9ec363b9532!2sA-CORD%20SEALS%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1670142318120!5m2!1sen!2sin" width="700" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    )
}