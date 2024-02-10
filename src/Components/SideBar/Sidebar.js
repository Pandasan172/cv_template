import './SideBar.css'
import UserPhoto from '../Pictures/UserPhoto.jpg'

function SideBar(){
return(
    <>
    <div class="sidebar">
            <img class="profile-picture" src={UserPhoto} alt="Profile Picture"/>
            
            <div class="contact-info">
                <i class="fa fa-phone"></i>+380664327656<br/>
                <i class="fa fa-envelope"></i> your.email@example.com
            </div>

            <div class="tech-skills">
                <h3>Tech Skills</h3>
                <ul class="skills-list">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>

            <div class="soft-skills">
                <h3>Soft Skills</h3>
                <ul class="skills-list">
                    <li>Communication</li>
                    <li>Teamwork</li>
                    <li>Problem-solving</li>
                    <li>Scrum</li>
                        <li>Agile</li>
                            <li>GTD</li>
                </ul>
            </div>
    </div>
    </>
)
}

export default SideBar