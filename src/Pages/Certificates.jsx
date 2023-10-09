
function Cetificates() {
  return (
    <div name='Certificate' className="p-[2rem] bg-[#FFD500]">
      <div className="flex">
        <div className="w-full flex flex-col justify-around">
          <div>
            <h1 className="text-8xl font-bold">Skills and <br /> Certificates</h1>
            <p className="p-4">I have extensive experience in full-stack development, having worked on a wide range of projects and technologies to deliver robust web applications</p>
          </div>
          <div className="p-8 space-y-8">
            <h2 className="text-5xl font-semibold">Skills</h2>
            <div className='grid grid-cols-3 gap-8'>
              <div className=' p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/tcBw4yV/virtual-lab.gif" alt="weblogo" />
                <p className='text-xl font-semibold'>Computer Science</p>
              </div>
              <div className=' p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/dm2yWYL/html.gif" alt="weblogo" />
                <p className='text-xl font-semibold'>Frontend Development</p>
              </div>
              <div className=' p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/0ht5LRF/backend.png" alt="weblogo" />
                <p className='text-xl font-semibold'>Backend Development</p>
              </div>
              <div className='p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/28nLb45/ui.png" alt="weblogo" />
                <p className='text-xl font-semibold'>UI/UX Design</p>
              </div>
              <div className='p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/s3htqbB/data-science.png" alt="weblogo" />
                <p className='text-xl font-semibold'>Data Science with Python</p>
              </div>
              <div className=' p-2 space-y-4 bg-white rounded-md'>
                <img className='h-14 scale-150' src="https://i.ibb.co/N99ZgMs/coding.png" alt="weblogo" />
                <p className='text-xl font-semibold'>Machine Learning</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h2 className='text-5xl font-semibold'>Certificates</h2>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <img src="https://i.ibb.co/1LxhpFm/certifi.jpg" alt="c1" />
              <p className='p-4 bg-white'> Certified by IBM for Chatbot building</p>
            </div>
            <div><img src="https://i.ibb.co/3Yfk275/sscertifica.jpg" alt="c1" /></div>
            <div><img src="https://i.ibb.co/546wkjs/Cloud-Core-Badge20220920-46-y4rcwq.jpg" alt="c1" /></div>
            <div><img src="https://i.ibb.co/wshgHM9/Guvi-Certification-299618t0s-Z8-S5-U2-X1-G.png" alt="c1" /></div>
            <div><img src="https://i.ibb.co/SNpGgMv/Guvi-Certification-D0-P1196-Bz26gdc02-M1.png" alt="c1" /></div>
            <div><img src="https://i.ibb.co/br9HqrF/IBM-ML0101-EN-Certificate-Cognitive-Class.jpg" alt="c1" /></div>
            <div><img src="https://i.ibb.co/fStDrFb/UC-1bbb3170-6875-4eae-a558-83b7512dfe80.jpg" alt="c1" /></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cetificates
