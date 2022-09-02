import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
        <div className="home__container">
        <img
          className="home__image"
          src="https://thumbs.dreamstime.com/z/asian-business-team-work-together-project-brainstorm-meeting-using-laptop-computer-colleague-coworker-startup-office-young-178061459.jpg"
          alt=""
        />
        <div className="home__row">
        <Product
            id="12321341"
            title="ITIL MPT"
            price={10000}
            rating={"653 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2017/07/pen-writing-notes-studying.jpg"
            alt=""
          />
            <Product
            id="12321341"
            title="VeriSM™ Professional"
            price={6000}
            rating={"617 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2019/01/VeriSM%E2%84%A2-Professional-472x355.jpg"
          />
           <Product
            id="12321341"
            title="COBIT 5® Assessor"
            price={10000}
            rating={"431 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2017/06/COBIT5-ASSESSOR_v1.0-copy.001-585x390.jpeg"
          />
            
           

        </div>
        <div className="home__row">
        <Product
            id="12321341"
            title="ITIL ® 4 Foundation"
            price={16000}
            rating={"1337 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2019/08/fg-img-free-img-3-585x390.png"
          />
        <Product
            id="12321341"
            title="SIAM™ Foundation"
            price={12000}
            rating={"498 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2019/01/SIAM%E2%84%A2-Foundation-472x355.jpg"
          />
       
            

        </div>
        <div className="home__row">
        <Product
            id="12321341"
            title="ITIL DITS"
            price={11.96}
            rating={"3535 Students enrolled"}
            image="https://ilmil.com/wp-content/uploads/2022/06/ITIL%C2%AE-4-Strategic-Leader-Digital-And-IT-Strategy-DITS.png"
          />
        
          
        
            
        </div>


        </div>
    </div>
  )
}

export default Home