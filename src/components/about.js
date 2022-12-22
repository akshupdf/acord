import logo from '../images/pump6.jpg'

function about() {

  return (

    <div className="w-full max-w-screen mx-auto font-bold flex flex-col bg-no-repeat bg-cover bg-fixed" style={{ backgroundImage: `url(${logo})` }} >
      <h1 className="text-3xl m-2 text-center bg-white w-40 mx-auto  font-bold">About Us</h1>

      <div className="container w-[80%] mx-auto opacity-80 bg-white  border-gray-100  px-4 py-12  text-slate-900 m-4 ">

        <p className="font-monospace text-xl"><span className="font-bold">A-CORD SEALS INDIA PVT LTD.</span> is a core manufacturer of Mechanical Shaft Seals with effective sealing solutions.
          We at A-CORD, offer a diversified working environment with enthusiasm and adaptability to change for the good. </p><br></br>
        <p className="font-monospace text-xl">We Manufacture Mechanical Seals for various Equipment such as GLR, SSR, RMG, NAUTA, ROTARY UNION & JOINTS,
          CENTRIFUGAL, GEAR & VACCUM PUMPS, Etc.
          Talking about our Organization, We have built a much specified working culture for the welfare of the company.</p><br></br>
        <p className="font-monospace text-xl">We have a highly qualified Design Team to initiate the operation. After the approval of Design our Production
          Team undertakes the further proceedings on the given time.  </p> <br></br>
        <p className="font-monospace text-xl">We offer a wide range of Standard as well as customized Seals.
          Our commitment towards on time delivery and instant service has been much courageous for both us and our valuable clients. </p>

      </div>
      <hr className="text-2xl "></hr>

      <div className="flex w-[80%] bg-white opacity-80  justify-center font-monospace mx-auto text-xl">
        <div className=' text-slate-900 m-4 p-8 rounded-xl shadow-2xl '>

          <div>
            <p className='text-2xl font-bold  '>	AIMS:</p>
          </div>
          <p className='text-l py-8'><span className="font-bold">A-CORD SEALS INDIA PVT LTD</span>  has always been tagged with, “your Attention, Our Coordination”. With that being said, we request Attention from our trustable and honoured clients to provide them with as much coordination as we can in return. We Aim for an economical and user friendly product. We stay true to our values which has been very helpful for us to achieve more valuable clients.<br></br> We at <span className="font-bold">A-CORD SEALS</span> , are aiming for continuous growth with many more products and services. We Aim for a leak less world which we think is possible with <span className="font-bold">A-CORD SEALS</span> . We Aim for an organization which will be a living example of professionalism, dignity and striving for perfection. </p>
          <div className='text-xl text-center'>


            {/* <button className='p-4 py-4 my-4 border-2 border-black rounded-md relative'>Enquire </button> */}
          </div>

        </div>



        <div className=' text-slate-900 m-4 p-8  bg-white rounded-xl shadow-2xl  '>

          <div>
            <p className='text-2xl font-bold '>	QUALITY POLICY:</p>
          </div>
          <p className='text-l py-8'>Our Quality programme is immensely specialized with high ranging equipment and manpower which has been helping us to stand reputed. Quality measures have always been prior to the company due to which we trust our Quality and so do our clients. The time interval in between our supply and failure has been increasing from ages validating our continual growth and Quality. </p>
          <div className='text-2xl text-center'>

            {/* <button className='p-4 bottom-0 border-2 border-black rounded-md  '>Enquire </button> */}
          </div>
        </div>
      </div>

    </div>
  )
}

export default about;