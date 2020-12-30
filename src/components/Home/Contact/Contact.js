import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        
            <section className="container my-5 contact-container">
            <div >
                <h5  style={{color:'#1CC7C1', marginLeft:'400px'}} >CONTACT US</h5>
                <h2 style={{ marginLeft:'300px'}} className="my-4 text-white">Always Contact With Us</h2>
            </div>
            
            <form style={{width:'600px', marginLeft:'200px'}}>
  <div className="form-group">
    
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
    
    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Your Subject"/>
  </div>

  <div className="form-group">
    
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Your Message"></textarea>
  </div>
  
  
  <button style={{marginLeft:'200px', padding:'10px 80px'}} type="submit" className="btn btn-primary ">Submit</button>
</form>
            </section>
        
    );
};

export default Contact;