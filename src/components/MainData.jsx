// banner.jsx

export const  Banner = ({title,tag,banimg,className,titleClass}) =>{
    return (
      <div className={className} style={{backgroundImage:`url(${banimg})`}}>
      <h3 className={titleClass ? titleClass : "first"}>{title}</h3>
      <p className="second">{tag}</p>
      </div>
    )
  }


// Image with title.jsx

export const ImageWithTitle = ({header,description,tags,imgurl}) => {
    return (
      <div className="line2" style={{backgroundImage:`url(${imgurl})`}}>
                  <h3 className="linehead">{header}</h3>
                  <p className="linehead1">{description}</p>
                  {tags.map((item,index)=>{
                      return(
                          <span className="travel" key={index}>{item}</span>
  
                      )
                  })}
      </div>
    )
}


// homepage.jsx

export const  Homepage = ({headding,brief,data,backimg}) => {
    return (
      
    <>
      <hr className="hr4"/>
      <div className="block1">
          <div className="manali" style={{backgroundImage:`url(${backimg})`}}/>
          
              
              <div className="manali1">
              <h3 className="text2">{headding}</h3>
                  <p className="text21">{brief}</p>
                  {data.map((item1,index1)=>{
                      return(
                          <span className="travel" key={index1}>{item1}</span>
                      )
                  })}
                  
      
         </div>
         </div>
  
    </>
    )
}
  

// middle.jsx

export const Middle = ({number,toptext,textimg,midtext}) => {
    return (
      <>
      <div className="top2" style={{backgroundImage:`url(${textimg})`}}/>
                      <h1 className="top2no1">{number}</h1>
                      <h3 className="top2text">{toptext}</h3>
                      {midtext.map((item2,index2)=>{
                      return(
                          <span className="top2travel" key={index2}>{item2}</span>
                      )
                      })}
                      <hr className="hr7" />
      </>
    )
}
  

// mockdata.js

export const Latest = [{

        id:1,
        header:"Singapore At Night",
        description:"Singapore is a sunny, tropical island in South-east Asia, off the southern tip of the Malay Peninsula. The city-state is 710 square kilometres and inhabited by five million people from four major communities; Chinese (majority), Malay, Indian and Eurasian.",
        tags:['April 15 2019'],
        background:require("../Images/sing1.jpg")
    },

    {
        id:2,
        header:"Mumbai City",
        description:"Mumbai lies on the Konkan coast on the west coast of India and has a deep natural harbour. In 2008, Mumbai was named an alpha world city. It is also the wealthiest city in India, and has the highest number of millionaires and billionaires among all cities in India.",
        tags:['July 11 2020'],
        background:require("../Images/mumbai.jpg")
    },

    {
        id:3,
        header:"Zurich Switzerland",
        description:"Zürich, largest city of Switzerland and capital of the canton of Zürich. Located in an Alpine setting at the northwestern end of Lake Zürich, this financial, cultural, and industrial centre stretches out between two forested chains of hills, about 40 miles (60 km) from the northern foothills of the Alps.",
        tags:['October 17 2020'],
        background:require("../Images/switzer.jpg")

    }]

export const mainBanner = 
    {
      title:"Canada, - Toronto Ontario Canada Skyline from Center Island",
    //   tag:"Travel / August 2017"  ,
      image:require("../Images/canada.jpg")
    }

export const mainHome =[
    {
        headding:" Mysore Palace",
        brief:"The Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence (house).",
        data:['Jan 22 2021'],
        backimg:require("../Images/mysore.jpg")
    },
    {
        headding:" Jaipur Palace",
        brief:"The Palace was also the location of religious and cultural events, as well as a patron of arts, commerce, and industry.",
        data:['Jan 22 2021'],
        backimg:require('../Images/jaipur.jpg')
    },
    {
        headding:" Royal Palace",
        brief:"The Royal Palace is owned by the state and placed at the disposal of the head of state. ",
        data:['Jan 22 2021'],
        backimg:require("../Images/Royal.jpg")
    },
    {
        headding:" Rajendra Pole Palace",
        brief:"The palace was the royal residence of the maharaja of Jammu and Kashmir from the Dogra dynasty.",
        data:['Jan 22 2021'],
        backimg:require("../Images/Pole.jpg")
    },
]
export const mainMiddle=[
    {
        number:"2",
        toptext:"Choose only one master - Nature ",
        midtext:[],
        textimg:require("../Images/img1.jpg")
    },
    {
        number:"3",
        toptext:"Choose only one master - Nature",
        midtext:[],
        textimg:require("../Images/img1.jpg")
    },
    {
        number:"4",
        toptext:"Choose only one master - Nature",
        midtext:[],
        textimg:require("../Images/img1.jpg")
    }
]

// bottompage.jsx

export const Bottompage =({titlehead,deschead,taghead})=> {
    return (
     <>
      <div className="bottom1">
                  <p className="storie1">{titlehead}</p>
                  <p  className="storie2">{deschead}</p>
                  {taghead.map((item3,index3)=>{
                      return(
                          <span className="storie3" key={index3}>{item3}</span>
                      )
                  })}
                  
              </div>
              <hr className='hr10' />
     </>
    )
}


export const mainPage=[
    {
        titlehead:" Burj Kjalifa Dubai redirects",
        deschead:"Construction of the Burj Khalifa began in 2004, with the exterior completed five years later in 2009. The primary structure is reinforced concrete and some of the structural steel for the building originated from the Palace of the Republic in East Berlin, the former East German parliament.",
        taghead:["April 15 2017"]
    },
    {
        titlehead:"Sydney Opera House",
        deschead:"The Sydney Opera House constitutes a masterpiece of 20th century architecture. Its significance is based on its unparalleled design and construction; its exceptional engineering achievements and technological innovation and its position as a world-famous icon of architecture.",
        taghead:["April 15 2017"]
    },
    {
        titlehead:"Attractions Of America",
        deschead:"As one of the largest and most diverse countries in the world, The United States boast an amazing amount of tourist destinations ranging from the skyscrapers of New York and Chicago, the natural wonders of Yellowstone and Alaska to the sunny beaches of California, Florida and Hawaii.",
        taghead:["April 15 2017"]
    }

]

// bollyfirst.jsx

export const Bollyfirst=({bollyhead,bollydesc,bollytags,bollyimg}) =>{
    return (
    <>
      <div className="blockz">
      <div className="bollywood1"  style={{backgroundImage:`url(${bollyimg})`}}/>
      <div className="manali1">
      <h3 className="dilip1">{bollyhead}</h3>
          <p className="dilip2">{bollydesc}</p>
          {bollytags.map((item4,index4)=>{
                      return(
                          <span className="travel" key={index4}>{item4}</span>
                      )
                  })}
      </div>
      </div>   
      <hr className="hr47"/>
    </>
    )
}  


export const mainBolly = [
    {
        bollyhead:"Award 2022",
        bollydesc:"Filmfare is considered one of the most prestigious awards in Bollywood. Members of Bollywood fraternity dreams of winning the Black Lady. ",
        bollytags:['Mar 13 2022'],
        bollyimg:require("../Images/award2022.jpg")
    },
    {   
        bollyhead:"Award 2021",
        bollydesc:"The BollywoodLife.com Awards 2021 is the first and one of its kind digital-only awards based on online voting by the audience.",
        bollytags:['Mar 27 2021'],
        bollyimg:require('../Images/award2.jpg')
    },
    {
        bollyhead:"Award 2020",
        bollydesc:"The winners of the 68th National Film Awards were announced on July 22. The National Award for Best Actor Ajay Devgn for Tanhaji.",
        bollytags:['Feb 15 2020'],
        bollyimg:require('../Images/award2020.jpg')
    },
    {
        bollyhead:"Award 2019",
        bollydesc:"The 64th Filmfare Awards ceremony, presented by The Times Group, honored the best Indian Hindi-language films of 2018.  ",
        bollytags:['Mar 23 2019'],
        bollyimg:require('../Images/award2019.jpg')
    },
    {
        bollyhead:"Award 2018",
        bollydesc:"This year’s award season kickstarts with 63rd Jio Filmfare Awards 2018.   ",
        bollytags:['Jan 20 2018'],
        bollyimg:require('../Images/award2018.jpg')
    },
    {
        bollyhead:"Award 2017",
        bollydesc:"The 2017 IIFA Awards, presented by the International Indian Film Academy honouring the best, New Jersey on 14–15 July 2017.",
        bollytags:['Jan 14 2017'],
        bollyimg:require('../Images/award2017.jpg')
    }
]

// bolly second.jsx

export const Bollysecond=({secnum,sectitle,sectags,secimg})=> {
    return (
     <>
      <div className="uri2" style={{backgroundImage:`url(${secimg})`}}/>
      <h1 className="bollytop2no1">{secnum}</h1>
      <h3 className="bollytop2text">{sectitle}</h3>
      {sectags.map((item5,index5)=>{
                      return(
                          <span className="top2travel" key={index5}>{item5}</span>
                      )
                  })}
  
      <hr className="hr7" />
     </>
    )
}

export const mainSecond=[
    {
        secnum:"2",
        sectitle:"P.D Hinduja Award",
        sectags:['Mar 23 2018'],
        secimg:require("../Images/awd.jpg")
    },
    {
        secnum:"3",
        sectitle:"P.D Hinduja Award",
        sectags:['Mar 23 2018'],
        secimg:require("../Images/awd.jpg")
    },
    {
        secnum:"4",
        sectitle:"P.D Hinduja Award",
        sectags:['Mar 23 2018'],
        secimg:require("../Images/awd.jpg")
    }
]

export const mainTech = [
    {
        bollyhead:"Hondanavi System",
        bollydesc:"This file contains additional information, probably added from the digital camera or scanner used to create or digitize it.",
        bollytags:['17:50/ 6 June 2009'],
        bollyimg:require("../Images/Tech1.jpg")
    },
    {   
        bollyhead:"Best Programming",
        bollydesc:"Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
        bollytags:['20 Aug 2013'],
        bollyimg:require('../Images/Tech3.jpg')
    },
    {
        bollyhead:"Digital Art",
        bollydesc:"Digital art refers to as any artistic work or practice that uses digital technology as part of the creative or presentation process.",
        bollytags:['Feb 15 2020'],
        bollyimg:require('../Images/dg.jpg')
    },
    {
        bollyhead:"Semiconductor Device",
        bollydesc:"Semiconductor device fabrication is the process used to manufacture semiconductor devices, as NAND flash and DRAM.",
        bollytags:['Mar 23 2019'],
        bollyimg:require('../Images/Tech2.jpg')
    },
    {
        bollyhead:"Coding",
        bollydesc:"Programmer writing program code with two monitors hacker programming developing software applications in the office. ",
        bollytags:['Jan 20 2018'],
        bollyimg:require('../Images/Tech4.jpg')
    },
    {
        bollyhead:"Artificial Intelligence",
        bollydesc:"AI Assets to Market Faster by Streamlining the Model Training And Deployment Process.  Schedule Time with Sales.",
        bollytags:['Oct 24 1995'],
        bollyimg:require('../Images/Ai.jpg')
    }
]
export const mainThird=[
    {
        secnum:"2",
        sectitle:"Inventeing Tech Globe",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/Tech5.jpg")
    },
    {
        secnum:"3",
        sectitle:"Inventeing Tech Globe",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/Tech5.jpg")
    },
    {
        secnum:"4",
        sectitle:"Inventeing Tech Globe",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/Tech5.jpg")
    }
]

export const mainHolly = [
    {
        bollyhead:"Dwayne Johnson",
        bollydesc:" Johnson was born on 2nd May 1972 in Hayward, California. His parents are Rocky Johnson and Ata Johnson.",
        bollytags:['2nd May 1972'],
        bollyimg:require('../Images/johnson.jpg')
    },
    {   
        bollyhead:"Nicholas Hoult",
        bollydesc:"Nicholas Caradoc Hoult is an English actor. Hoult made his feature-film debut as a child artist in Intimate Relations.",
        bollytags:['7th December 1989'],
        bollyimg:require('../Images/nic.jpg')
    },
    {
        bollyhead:"Vin Diesel",
        bollydesc:"Mark Sinclair, known professionally as Vin Diesel, is an American actor and filmmaker.",
        bollytags:['18th July 1967'],
        bollyimg:require('../Images/vin.jpg')
    },
    {
        bollyhead:"Robert Downey Jr.",
        bollydesc:"Robert John Downey Jr. is an American actor and producer. He made his debut in 1970 as a child actor in the film Pound. He is best known for his work as Iron Man in the Iron Man and Avengers Franchise.",
        bollytags:['4th April 1965'],
        bollyimg:require('../Images/Robert.jpg')
    },
    {
        bollyhead:"Chris Hemsworth",
        bollydesc:"Christopher Hemsworth is the full name of Chris Hemsworth, is an Australian Actor. Chris Hemsworth was born on 11 August 1983 in Melbourne, Victoria, Australia.. ",
        bollytags:['11 August 1983'],
        bollyimg:require('../Images/chris.jpg')
    },
    {
        bollyhead:"Leonardo DiCaprio",
        bollydesc:"Hollywood Male Actor Leonardo DiCaprio was born on 11 November 1974 to George DiCaprio. He is one stepbrother Adam Farrar.",
        bollytags:['11 November 1974'],
        bollyimg:require('../Images/leo.jpg')
    }
]
export const mainFourth=[
    {
        secnum:"2",
        sectitle:"Tom Cruise",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/tom.jpg")
    },
    {
        secnum:"3",
        sectitle:"Matthew McConaughey",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/mat.jpg")
    },
    {
        secnum:"4",
        sectitle:"Christian Bale",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/bale.jpg")
    }
]

export const mainFitness = [
    {
        bollyhead:"Anaerobic",
        bollydesc:"Anaerobic exercise features high-intensity movements performed in a short period of time. ",
        bollytags:['10 mins'],
        bollyimg:require("../Images/aro.jpg")
    },
    {   
        bollyhead:"Lunges",
        bollydesc:"Challenging your balance is an essential part of a well-rounded exercise routine.",
        bollytags:['30 times'],
        bollyimg:require('../Images/lunge.jpg')
    },
    {
        bollyhead:"Pushups",
        bollydesc:"Drop and give me 20! Pushups are one of the most basic yet effective bodyweight moves you can perform .",
        bollytags:['20 times'],
        bollyimg:require('../Images/pushup.jpg')
    },
    {
        bollyhead:"Squats",
        bollydesc:"Squats increase lower body and core strength, as well as flexibility in your lower back and hips. ",
        bollytags:['20 times'],
        bollyimg:require('../Images/squat.jpg')
    },
    {
        bollyhead:"Standing overhead dumbbell presses",
        bollydesc:"Compound exercises, which utilize multiple joints and muscles, are perfect.",
        bollytags:['20 times'],
        bollyimg:require('../Images/stnd.jpg')
    },
    {
        bollyhead:"Side planks",
        bollydesc:"A healthy body requires a strong core at its foundation, so don’t neglect core-specific moves like the side plank. ",
        bollytags:['3 to 4 mins'],
        bollyimg:require('../Images/sdplnk.jpg')
    }

]
export const mainFifth=[
    {
        secnum:"2",
        sectitle:"Burpees",
        sectags:["10 times"],
        secimg:require("../Images/burp.jpg")
    },
    {
        secnum:"3",
        sectitle:"Planks",
        sectags:["5 minites / day"],
        secimg:require("../Images/plank.jpg")
    },
    {
        secnum:"4",
        sectitle:"Glute bridge",
        sectags:["10 times"],
        secimg:require("../Images/glut.jpg")
    }
]

export const mainFood = [
    {
        bollyhead:"Healthy meal",
        bollydesc:"As the lead Meals on Wheels contractor for the East Side of Manhattan from 59th Street to 142nd Street.",
        bollytags:['Mar 13 2022'],
        bollyimg:require("../Images/fd7.jpg")
    },
    {   
        bollyhead:"Healty Vegitables",
        bollydesc:"Celevida is scientifically designed to help minimize blood sugar spikes from Day 1.",
        bollytags:['Mar 27 2021'],
        bollyimg:require('../Images/fd2.jpg')
    },
    {
        bollyhead:"Vegitarian",
        bollydesc:"To get the most out of a vegetarian diet, choose a variety of healthy plant-based foods.",
        bollytags:['Feb 15 2020'],
        bollyimg:require('../Images/fd3.jpg')
    },
    {
        bollyhead:"Non-Vegitarian",
        bollydesc:"A non-vegetarian diet includes chicken, meat, eggs and fish. ",
        bollytags:['Mar 23 2019'],
        bollyimg:require('../Images/fd4.jpg')
    },
    {
        bollyhead:"Healty Snacks",
        bollydesc:"Hummus is a traditional Mediterranean dish that people make from pureed chickpeas...,  Celery sticks and nut butter.",
        bollytags:['Jan 20 2018'],
        bollyimg:require('../Images/fd5.jpg')
    },
    {
        bollyhead:"Healty Drinks",
        bollydesc:"Water is the best choice for quenching your thirst. Coffee and tea, without added sweeteners, are healthy choices, too.",
        bollytags:['Jan 14 2017'],
        bollyimg:require('../Images/fd6.jpg')
    }

]
export const mainSixth=[
    {
        secnum:"2",
        sectitle:"Hot Dringks ",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/fd8.jpg")
    },
    {
        secnum:"3",
        sectitle:"Hot Dringks",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/fd8.jpg")
    },
    {
        secnum:"4",
        sectitle:"Hot Dringks",
        sectags:["Mar 23 2018"],
        secimg:require("../Images/fd8.jpg")
    }
]

export const bottom = [
    {    
        header:"Also tagged Reactjs",
        description:"Udupi",
        tag1:'Dmitry Nozhenko',
        tag2:'Jan 28,2019 10 min read',
        background:require("../pics/UDUPI.jpg"),
        imgex:require("../pics/mask.png")

    },
    {
        header:"Related Reads",
        description:"Mysore",
        tag1:'Dmitry Nozhenko',
        tag2:'Jan 28,2019 10 min read',
        background:require("../pics/MYSORE.jpg"),
        imgex:require("../pics/mask.png")
    },
    {   
        header:"Related Reads",
        description:"Chikmagalur",
        tag1:'Dmitry Nozhenko',
        tag2:'Jan 28,2019 10 min read',
        background:require("../pics/CHIKMAGALUR.jpg"),
        imgex:require("../pics/mask.png")

    }
]


// Articles.js

export const Articles=[
    {
        id:1,
        heading:"Canada, - Toronto Ontario Canada Skyline from Center Island",
        image:require("../Images/canada.jpg"),
        describe:"Toronto is Canada’s largest city and a world leader in such areas as business, finance, technology, entertainment and culture. Its large population of immigrants from all over the globe has also made Toronto one of the most multicultural cities in the world. In general terms, Toronto’s weather broadly follows patterns for each of the four seasons: Spring is a fairly rainy season in Toronto with daytime temperatures rising as summer approaches while nights remain cool. The average temperature during the day is about 12°C in March, April and early May. Summer in Toronto is at its warmest in July and August, with daytime temperatures averaging above 20°C and frequently rising above 30°C. Winter is Toronto’s coldest season, with temperatures usually below 0°C and snow falling frequently."
    },
    {
        id:2,
        heading:"Tis The Season To Be Freezin.",
        image:require("../Images/ice.jpg"),
        describe:"Snow comprises individual ice crystals that grow while suspended in the atmosphere—usually within clouds—and then fall, accumulating on the ground where they undergo further changes.[2] It consists of frozen crystalline water throughout its life cycle, starting when, under suitable conditions, the ice crystals form in the atmosphere, increase to millimeter size, precipitate and accumulate on surfaces, then metamorphose in place, and ultimately melt, slide or sublimate away. Snowstorms organize and develop by feeding on sources of atmospheric moisture and cold air. Snowflakes nucleate around particles in the atmosphere by attracting supercooled water droplets, which freeze in hexagonal-shaped crystals."
    },
    {
        id:3,
        heading:"Moon On Darkest Night",
        image:require("../Images/dark.jpg"),
        describe:"It was nearly midnight, and the night sky was picturesque. A black to navy gradient was the backdrop for a full moon; the night sky so clear you could almost see every crater. The moon, a glowing yellowy white, loomed large, surrounded by an ethereal glow. Millions of stars were sprinkled behind it, a few large ones but mostly a multitude of little white pin pricks. Every now and then, a twinkle caught her eye. This was an unfamiliar sight from her city life, where the lights never went down, perpetually hiding the beauty of the nighttime sky. The ocean waves lapped lazily at the shore, a jumble of navy and royal blue that glistened in the night. White foam crested the top of the waves as they approached, spilling onto the sand like a net being cast."
    },
    {
        id:4,
        heading:"TAJ MAHAL, AGRA - Uttar Pradesh",
        image:require("../Images/Taj.jpg"),
        describe:"An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan in memory of his favourite wife, the Taj Mahal is the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage. The Taj Mahal is located on the right bank of the Yamuna River in a vast Mughal garden that encompasses nearly 17 hectares, in the Agra District in Uttar Pradesh. It was built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal with construction starting in 1632 AD and completed in 1648 AD, with the mosque, the guest house and the main gateway on the south, the outer courtyard and its cloisters were added subsequently and completed in 1653 AD. The existence of several historical and Quaranic inscriptions in Arabic script have facilitated setting the chronology of Taj Mahal."
    }

  
]



// bottombox.jsx

export const Bottombox = ({header,description,tag1,tag2,imgurl,imgex}) => {
    return (
  
      <div className="bottomimage">
      <div className="bottomimage1">
          <p className='bottomimage1text'>{header}</p>
          <div className="bottomimage2">
          <img src={imgurl} alt=""  className="bottomimage2" />
          </div>
          <div className="imagtag">
              <h3>{description}</h3>
          </div>
          <div className="bottom3">
          <div className="bottom2">
          <img src={imgex} alt="" />
          </div>
          <div className="bottom2">
          <p className="bottom2text">{tag1}</p>
            <p className="bottom2text1">{tag2}</p>
          </div>
          </div>
      </div>
    </div>
    )
}
  

  

