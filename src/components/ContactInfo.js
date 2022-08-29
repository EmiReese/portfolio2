import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../stylesheets/contactInfo.css'

export default function Contact() {
    
return (

    <section class="mb-4">
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>

    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly at <span className="phoneNum">(678) 978 9459</span> or <span className="currentEmail">emilyreese.ga@gmail.com</span>.</p>

    <div class="row form">

      <div class="col-md-6 offset-4 mb-md-0 mb-2">
         <form  action="mailto:emilyreese.ga@gmail.com"  enctype="text/plain" method="POST">

          
            <div class="row">

                <div class="col-md-3">
                    <div class="md-form mb-0">
                        <input type="text" id="name" name="name" class="form-control" />
                        <label for="name" class="">Your name</label>
                    </div>
                </div>
           
           
                <div class="col-md-3">
                    <div class="md-form mb-0">
                        <input type="text" id="email" name="email" class="form-control"/>
                        <label for="email" class="">Your email</label>
                    </div>
                </div>
              

            </div>
         

      
            <div class="row">
                <div class="col-md-9">
                    <div class="md-form mb-0">
                        <input type="text" id="subject" name="subject" class="form-control"/>
                        <label for="subject" class="">Subject</label>
                    </div>
                </div>
            </div>
         
            <div class="row">


                <div class="col-md-9">

                    <div class="md-form">
                        <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                        <label for="message">Your message</label>
                    </div>

                </div>
            </div>
           
            <input class="text-center text-md-left submitBtn" type="submit" name="submit" value="Submit"></input>
        </form>

        {/* <div class="text-center text-md-left">
            <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>

        </div> */}
        <div class="status"></div>
    </div>

    <div class="col-md-3 text-center">
        <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
                <p></p>
            </li>

            {/* <li class = "contactInfo"><i class="fas fa-phone mt-4 fa-2x "></i>
                <p>(678) 978-9459</p>
            </li>

            <li class = "contactInfo"><i class="fas fa-envelope mt-4 fa-2x"></i>
                <p>emilyreese.ga@gmail.com</p>
            </li>

            <li class = "contactInfo"><i class="fas fa-envelope mt-4 fa-2x"></i>
                <a href="https://www.linkedin.com/in/emily-reese-50546621b" className="contactLink">LinkedIn Profile</a>
            </li>

            <li class = "contactInfo"><i class="fas fa-envelope mt-4 fa-2x"></i>
                <a href="https://github.com/EmiReese" className="contactLink">Github Profile</a>
            </li> */}
        </ul>
    </div>
 

</div>

</section>

);
}