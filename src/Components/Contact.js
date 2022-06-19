import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>REGISTRATION FORM</span></h1>

            </div> 

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
    <form action="http://127.0.0.1:8000/form" method="get">       
    <table>    
        <tr>    
            <td><label>Rollno</label></td>    
            <td>    
                <input type="varchar" name="Rollno" placeholder=""/>    
            </td>    
        </tr>    
        <tr>    
            <td><label>Name</label></td>    
            <td>    
                <input type="text" name="Name" placeholder=""/>    
            </td>    
        </tr>    
        <tr>    
            <td><label>Gender</label></td>    
            <td>    
                <input type="radio" name="Gender" value="male"/>Male    
                <input type="radio" name="Gender" value="femele"/>Female    
            </td>    
        </tr>
        <tr>    
          <td><label>Guardian/Parents Name</label></td>    
          <td>    
              <input type="text" name="Guardian_Name" placeholder=""/>    
          </td>    
      </tr>    
        <tr>    
          <td><label>Department</label></td>    
              <td>    
                  <select name="Department">    
                      <option value="select department"></option>    
                      <option value="AIDS">ARTIFICIAL INTELLIGENCE & DATA SCIENCE</option>    
                      <option value="AIML">ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</option>    
                      <option value="BIO-TECH">BIO-TECHNOLOGY</option>    
                      <option value="CSE">COMPUTERR SCIENCE ENGINEERING</option> 
                      <option value="CSBS">COMPUTERR SCIENCE & BUSINESS ENGINEERING</option>
                      <option value="MECH">MECHATRONICS</option>
                      <option value="ME">MECHANICAL ENGINEERING</option>
                      <option value="FD">FOOD TECHNOLOGY</option>  
                      <option value="FT">FASHION TECHNOLOGY</option>   
                      <option value="IT">INFORMATION TECHNOLOGY</option>   
                      <option value="ISE">INFORMATON SCIENCE ENGINEERING</option>   
                      <option value="ECE">ELECTRICAL & COMMUNICATION ENGINEERING</option>   
                      <option value="EEE">ELECTRICAL & ELECTRONICS ENGNEERING</option>   
                  </select>    
              </td>    
          </tr>        
        <tr>    
            <td><label>Email</label></td>    
            <td>    
                <input type="text" name="Email" placeholder="example@gmail.com"/>    
            </td>    
        </tr>    
        <tr>    
            <td><label>Mobile Number</label></td>    
            <td>    
                <input type="number" name="Mobile_number"/>    
            </td>    
        </tr>  
        <tr>    
          <td><label>Address</label></td>    
          <td>    
              <input type="textarea" size="200" name="Address" placeholder="Address"/>    
          </td>    
      </tr>      
        <tr>    
            <td>    
                  <button type="submit">Submit</button>
            </td>    
        </tr>             
    </table>    
</form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        We are the Fastest Growing School Automation and Analytics Solution Provider. We help Schools migrate from Manual Administrative work to Digital Platform.
                        <a href="#">http:lnkd.in/fiJ4QQx https://lnkd.in/fF6Uhds</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        J Prabha is the best school management software in Hyderabad & By using J prabha application parents can see entire student details.
                        <a href="#">http:/lnkd.in/fiJ4QQx https://lnkd.in/fF6Uhds</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
