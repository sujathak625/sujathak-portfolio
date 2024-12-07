import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Looking for a talented and dedicated professional to join your team? I'm open to new opportunities and eager to connect. Let's discuss how my skills and experience can contribute to your next project.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>sujakanraj@gmail.com </p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+49 15141409842</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>MA, Baden-Wuerrtemberg, Deutschland</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form action="" className="contact-right">
                        <label htmlFor="">Your Name</label>
                        <input type="text" placeholder='Your Name' name="name" />
                        <label htmlFor="">Your Email</label>
                        <input type="email" placeholder='Your Email' name="email" />
                        <label htmlFor="">Write Your Message here</label>
                        <textarea name="message" placeholder="Enter Your Message" rows={8}/>
                        <button className="contact-submit" type="submit">Submit Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;