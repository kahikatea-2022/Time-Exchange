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
          <div>Box 1 Lorem ipsum, dol
          or sit amet consectetur adipisicing elit. Odio max
          ime commodi eligendi, modi dolore soluta rerum ad dicta. 
          Repellat, neque ad cum amet hic rerum
          . Quod expedita pariatur libero placeat?</div>
          <div>Box 2</div>
          <div>Box 3</div>
        </div>
      </div>
    </div>
  )
}

export default Home
    