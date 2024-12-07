import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
    return (
        <div className="about">
          <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="About"/>
          </div>
          <div className="about-sections">
            <div className="about-left">
              <img src={profile_img} alt="Profile"/>
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>
                  Over the course of my dynamic career, I have had the privilege of working on impactful projects across
                  various industries, including Aerospace, Banking, Finance, Insurance, Networking, Logistics, and
                  Geospatial Information.
                </p>
                <p>
                  In addition to my strong technical skills, I bring a wealth of experience in strategic team leadership
                  and defect prevention analysis. More recently, I have broadened my expertise by diving into Android
                  app development and React web application development, further enhancing my skill set and versatility
                  in the tech field.
                </p>
              </div>
              <div className="about-skills">
                <div className="about-skill">
                  <p>HTML & CSS</p>
                  <hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                  <p>Java</p>
                  <hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                  <p>Kotlin</p>
                  <hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                  <p>Typescript</p>
                  <hr style={{width: "50%"}}/>
                </div>
                <div className="about-skill">
                  <p>React</p>
                  <hr style={{width: "50%"}}/>
                </div>
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>12+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr/>
            <div className="about-achievement">
              <h1>90+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr/>
            <div className="about-achievement">
              <h1>15+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
    )
}

export default About