import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function ProjectCards() {
  return (
    <div className='cards'>
      <h1>Projects</h1>
      <div className="cards__container">
          <div className="cards__wrapper">
              <ul className="cards__items">
              <CardItem
                  src="images/Todo-1.png"
                  text = "Todo (Jun 2022)"
                  description = "An application to help user stay organized and managed their daily tasks."
                  detail = "Register | Login | CRUD each todo tasks"
                  language = "MongoDB, Express, React, Node.js, Netlify, Heroku"
                  application = "Website"
                  coop = "Solo"
                  url = "https://sptech-todo.netlify.app/"
                  github = "https://github.com/SeyeongPark/todo-mern-backend"
                  />

              <CardItem
                  src="images/TS-1.png"
                  text = "Employee Time Tracking (May 2022)"
                  description = "A web application that employees can record their working time, and managers can access employees' wage and personal information."
                  detail = "Register | Login | Record Working Time | View/Manage Employee’s information(Salary, Email..)"
                  language = "Java, MySQL, Spring Framework, Spring Boot, Spring Security, JPA, Heroku"
                  application = "Website"
                  coop = "Solo"
                  url = "https://timestamp-app-1.herokuapp.com/"
                  github = "https://github.com/SeyeongPark/PartTime-TimeStamp"
                  />
                
                <CardItem 
                  src="images/HA-1.png"
                  text="HotAuc Auction (Apr 2022)"
                  description=
                  "A web application where Hot Wheels collectors can buy and sell cars over auctions."
                  role="FE (Payment Method using Paypal), BE/FE (Utilize user's payment Info for selling info) "
                  application = "Website"
                  coop = "Team"
                  url = "https://mighty-mesa-33042.herokuapp.com/"
                  github = "https://github.com/hlutony/Comp313-22w-HotAuc"
                  language = "JavaScript, HTML, CSS, React.js"
                  >
                  </CardItem>
                  
              </ul>
              <ul className="cards__items">
              <CardItem 
                  src="images/SM-1.png"
                  text="Super Survey Maker (2020)"
                  description=
                  "A web application where users can create their own survey and take other surveys."
                  role="Web Design"
                  application = "Website"
                  coop = "Team"
                  url = "https://team1c-f2020.herokuapp.com/home"
                  github = "https://github.com/jodoubleny/team1c"
                  language = "HTML, CSS"
                  >
                </CardItem>
                <CardItem 
                  src="images/SMG-1.png"
                  text="Slot Machine Game (2020)"
                  description=
                  "A game with spinning reels. Users play and gain money depending on their betting and the result of objects with different probabilities.."
                  application = "Web/Mobile"
                  coop = "Solo"
                  url = "https://seyeongpark.github.io/Slot-Machine-Game/"
                  github = "https://github.com/SeyeongPark/Slot-Machine-Game"
                  language = "TypeScript, HTML, CSS"
                  >
                </CardItem>
                <CardItem 
                  src="images/first_personalsite.png"
                  text="First Personal Site (2020)"
                  description=
                  "The first website I deployed described simple information and pictures."
                  application = "Web"
                  coop = "Solo"
                  url = "http://studentweb.cencol.ca/spark235/"
                  language = "HTML, CSS"
                  >
                </CardItem>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default ProjectCards
