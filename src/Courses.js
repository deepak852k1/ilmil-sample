import './App.css';
import './Courses.css'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";
import Footer from './Footer'
function Courses() {
  return (
    <div className="App">
     <section class="section-content padding-y bg">
        <div class="container">
    
        <article class="card">
            <div class="card-body">
                    <div class="row">
                        <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="card img-big-wrap">
                                        <a href="#"> <img src="https://ilmil.com/wp-content/uploads/2017/07/pen-writing-notes-studying.jpg" /></a>
                                    </div> 
                                    
                                </article>
                        </aside>
                        <main class="col-md-6">
                            <article>
                                <a href="#" class="text-primary btn-link">Courses</a>
                                <h3 class="title">ITIL MPT</h3>
                                <div>
                                    <ul class="rating-stars">
                                        <li  class="stars-active"> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i>  
                                            
                                        </li>
                                        <li>
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> <i class="fa fa-star"></i> 
                                            <i class="fa fa-star"></i> 
                                        </li>
                                    </ul>
                                    <span class="label-rating mr-3 text-muted">3/5</span>
                                    <a href="#" class="btn-link  mr-3 text-muted"> <i class="fa fa-heart"></i> Save for later </a>
                                    
                                </div> 
        
                                <hr />
                    
                                <div class="mb-3">
                                    <h6>Who Should you attend ITIL MPT training?</h6>
                                    <ul class="list-dots mb-0">
                                        <li>ITSM Professionals</li>
                                        <li>Business Managers </li>
                                        <li>IT Security Managers</li>
                                        <li>IT Security Managers</li>
                                    </ul>
                                </div>
                                
                                <div class="form-group">
                                    <label class="text-muted"></label>
                                    <div>
                                        <label class="js-check btn btn-check  mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span> <PeopleOutlineIcon /> 294 students enrolled</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span> <PsychologyAltIcon/> Created by Sreemon S</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size" value="option1" />
                                            <span> <CalendarTodayIcon/> Last updated April 1, 2020</span>
                                        </label>
                                        <label class="js-check btn btn-check mr-1">
                                            <input type="radio" name="option_size"  value="option1" />
                                            <span> <LanguageIcon /> English</span>
                                        </label>  
                                    </div>            
                                </div>
        
                                <div class="mb-3">
                                    <var class="price h4">₹20000</var> <br />
                                    
                                </div> 
        
                                <div class="mb-4">
                                    <a href="#" class="btn btn-primary mr-1">Enroll</a>
                                    <a href="#" class="btn btn-primary mr-1">Add to card</a>
                                    <a href="#" class="btn btn-primary mr-1">Share</a>
                                    
                                </div>
                                
                            </article> 
                        </main>
                    </div> 
            </div> 
        </article>
        <article class="card mt-5">
            <div class="card-body">
                <div class="row">
                    <aside class="col-md-6">
                        <h5>Course Content</h5>
                        <dl class="row">
                              <dt class="col-sm-3">Module 1</dt>
                              <dd class="col-sm-9">1 Hr</dd>
        
                              <dt class="col-sm-3">Module 2</dt>
                              <dd class="col-sm-9">2 Hrs</dd>
        
                              <dt class="col-sm-3">Module 3</dt>
                              <dd class="col-sm-9">1 Hr 20 min</dd>
        
                              <dt class="col-sm-3">Module 4</dt>
                              <dd class="col-sm-9">2 Hr 10 min</dd>
                              
                              <dt class="col-sm-3">Module 5</dt>
                              <dd class="col-sm-9">1 Hr</dd>
                        </dl>
                    </aside>
                    <aside class="col-md-6">
                        <h5>Features</h5>
                        <ul class="list-check">
                            <li>Best in industry Teachers</li>
                            <li>Mock test after each module</li>
                            <li>Badges after successfully completing the course</li>
                            <li>Completion certificate</li>
                            <li>Real time assistance</li>
                        </ul>
                    </aside>
                </div> 
                <hr />
                <p>
                ITIL® 4 is the latest update of the world's most popular framework for IT Service Management, offering a renewed focus on value-driven practices and the optimisation of IT Services. ITIL® is a widely used IT Service Management framework to give direction to organisations for using IT tools and making development in the business process. The primary objective of ITIL® is to improve efficiency, achieve predictable service levels, and enhance the performance of the organisation.
                Our ITIL® Foundation Course covers all the fundamental knowledge to manage the IT infrastructure in the organisation and provides learners with a detailed understanding of different methods, framework, and principles of ITIL®. The delegates will gain knowledge about the ITIL® service value system, technical management practices, dimensions of service management, and concepts of service management. This ITIL® Foundation Course will help the them to support their organisation to increase the authenticity and security of information with IT infrastructure and increase customer and stakeholder's confidence. Our technical expert trainer will help individuals to pass their ITIL® 4 Foundation exam in the very 1st attempt.
                All PRINCE2®, ITIL®, M_o_R®, MoP®, P3O®, MSP® and MoV® courses are offered by The Knowledge Academy.
                </p>
            </div> 
        </article>
        </div>
        
    </section>
   
   
    
       
     
    </div>
   
  );
}
export default Courses;