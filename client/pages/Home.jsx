import React from 'react'

function Home() {
  return (
    <div className="page-container">
      <div className="main-content-container">
        <div className="slogan-image-container">
          <div className="slogan-container">
            <h1 id="slogan">
              <i>
                Everybody Is <br></br>An Expert <br></br>In Something.
              </i>
            </h1>
          </div>
          {/* <div className='image-container'>
            <img src='/hobby-icons.jpg' id='image'></img>
          </div> */}
        </div>
        <div className="app-blurb-container">
          <div className="blurb-text">
            <p id="about-app">
              <i>
                {' '}
                Welcome to to the Karma family. <br></br>
                <br></br>The only reciprocal community of learning and teaching.
                Be a teacher one moment and a student the next. <br></br>
                <br></br>
                Everyone has skills and knowledge to share, the only currency
                required is a willingness to teach others.
              </i>
            </p>
          </div>
        </div>
        <div className="reviews-container">
          <div>
            <h4 className="review-title">Dr Bigbrain</h4>

            <p className="review-text">
              I learnt so much from Bigbrain. I went from being a bench-warming
              Bronze tier Valorant player to an Immortal in two weeks. Now I can
              360 noscope in my sleep!
            </p>
          </div>
          <div>
            <h4 className="review-title">Holdme-Sempai</h4>
            <p className="review-text">
              O-Sempai had the patience of a saint whilst teaching me Japanese.
              Now I can order sushi like a pro and spit freestyle Naruto rhymes
              like a B-boy raised in the Shinjuku Ghetto.
            </p>
          </div>
          <div>
            <h4 className="review-title">Toothpick crafting with Shane </h4>
            <p className="review-text">
              I was able to connect with Shane who has taught me the forgotten
              art of toothpick crafting. I have finally found a safe place to
              learn lesser known esoteric arts.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
