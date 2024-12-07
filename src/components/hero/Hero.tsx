import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="Profile Image" />
      <h1><span>I'm Sujatha Kannan,</span> Java full Stack Developer based in Germany</h1>
      <p>Full Stack Developer and Team Leader with extensive years of experience in Java backend, React frontend as well as Android App Development</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default hero