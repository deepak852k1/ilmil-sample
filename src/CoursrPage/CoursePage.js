import React from 'react'

function CoursePage({title, image, price, rating,Content, Features}) {
  return (
    <div className='CoursePage'>
     <div className='course_info'>
     <p>{title}</p>
     </div>
    </div>
  )
}

export default CoursePage