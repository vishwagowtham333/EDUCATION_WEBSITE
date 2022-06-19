import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About</h2>

            <p>J prabha is being used by hundreds of schools to more efficiently manage school registrations, publish curriculum schedules, Events, Showcase, send day to day Attendance and Homework, run school campaigns, and improve the flow of communication between parents, students, teachers and school faculty. We get all of these features into one centralized, user-friendly school management software that can be accessed online by your school staff from any internet connection on Web or Mobile.</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2></h2>
                  <p className="address">
						   <span>India most preferred mobile friendly platform for Schools</span><br />
						   <span><br />
						         
                   </span><br />
						   <span></span><br />
                     <span></span>
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Broucher</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
