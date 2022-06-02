import React from 'react'

const Content = () => {

   const details =[
      {q:"Age",a:28},
      {q:"Email",a:"walr@comp"},
      {q:"Skype",a:"user@skype"},
      {q:"Phone",a: "+071811101"},
      {q:"Address",a:"NewDelhi"},
      {q:"status",a:"available"},
   ]
  return (
    <div>
       <div className="container w-75 clearfix mt-5 ">
       <div className="row mt-5">
       <div className="col col-12 col-sm-12 col-lg-6 mt-5">
       <h2 >Hello! I’m Walter Patterson.</h2>
          <p className='mt-3'>I am passionate about UI/UX design and Web Design. I am a skilled front-end developer and master of graphic design tools such as Photoshop and Sketch. I am a quick learner and a team worker that gets the job done. I can easily capitalize on low hanging fruits and quickly maximize timely deliverables for real-time schemas.</p>
         <div className='float-start'>
         <ul className='list-unstyled'>
          {details.map((detail,index)=>(<li key={index} className="m-1">{detail.q} :</li>))}
          </ul>
         </div>
          
         <div className='float-start ms-4'>
          <ul className='list-unstyled'>
          {details.map((detail,index)=>(<li key={index} className="m-1 fw-bold">{detail.a}</li>))}
          </ul>
         </div>

          </div>
          <div className="col col-12 col-sm-12  col-lg-6 mt-5">
            <img src="https://demo.templateflip.com/super/images/avatar.jpg" alt="super folio pic" className=' mx-auto d-block img-fluid' style={{borderRadius:"25px"}}/>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Content