import React from 'react'
import ImageCard from './ImageCard'


const Services = () => {
   const image =[ { url:"https://demo.templateflip.com/super/images/services/web-design.svg", title : "Web Design"},

   { url:"https://demo.templateflip.com/super/images/services/graphic-design.svg", title : "Graphic Design"},

   { url:"https://demo.templateflip.com/super/images/services/ui-ux.svg", title : "UI/UX Design"},

   { url:"https://demo.templateflip.com/super/images/services/app-development.svg", title : "App Development"},
]

  return (
    <div className='container-sm w-75'>
      <h1 className='text-center mt-5'>My Services</h1>
      
      <p className='text-center mt-4 mx-auto'>I offer services fit for any website or app. I can quickly maximize timely deliverables for real-time schemas.</p>
      <div className="row mx-auto gap-5">
         
         {image.map((value)=>( <div className="col col-12 mx-auto col-sm-12 col-md-2 h-sm-25"  key={value.url}><ImageCard image={value}/></div>))}
        
        
      </div>
    </div>
  )
}

export default Services