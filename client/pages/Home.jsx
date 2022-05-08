import React from 'react'

function Home() {
  return (
    <div className='page-container'>
      <div className='main-content-container'>
        <div className='slogan-image-container'>
          <div className='slogan-container'>
            <h1 id='slogan'><i>Everybody Is <br></br>An Expert <br></br>In Something.</i></h1>
          </div>
          {/* <div className='image-container'>
            <img src='/hobby-icons.jpg' id='image'></img>
          </div> */}
        </div>
        <div className='app-blurb-container'>
            <div className='blurb-text'>
              <p id='about-app'><i> Lorem ipsum dolor sit amet consectetur adipisicing e
                lit. Modi eum corrupti ipsum. Voluptatibus aliquid l
                aboriosam consequatur quisquam non optio placeat acc
                usantium et veniam natus culpa modi quis recusandae 
                </i></p>
            </div>
        </div>
        <div className='reviews-container'>
          <div>
            <h4 className='review-title'>Thanks to David</h4>
           
            <p className='review-text'>Great teacher, very patient and really knows
              how to get learnings across.
              I am looking forward to continue to learn the Piano
            </p>
          </div>
          <div>
            <h4 className='review-title'>I learnt Japanese</h4>
            <p className='review-text'>Had a easy experience connecting with Kim through Karma,
              Sent an email and organized a time for teachings.
              Thanks to Karma I now know the basics of a language
              I otherwise would not have learnt.
            </p>
          </div>
          <div>
            <h4 className='review-title'>I love Teaching - Thanks Karma</h4>
            <p className='review-text'>I have been using Karma for just over 3 months now,
              And can not believe the connections I have made with people who 
              have the same passion for the things that I do.
              
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
    
