import React from 'react';

function hello() {
    alert('You clicked me!');
  }

function Main(){
    return (
        <main className='body'>
            <div className='body-cardcontainer'>
                <div className='body-card'>
                    <b>+6%</b> climbers compared to same time&day last week
                </div>
                <div className='body-card'>
                    <b>22</b> new climbers this week
                </div>
                <div className='body-card'>
                    <b>42</b> hours of activity tracked this week
                </div>
                <div className='body-card'>
                    positive sentiment on climbs has increased by <b>10%</b> since last week 
                </div>
            </div>

            <div className='body-cardcontainer'>
                <div className='body-card'>
                    <b>11</b> climbers came in today
                </div>
                <div className='body-card'>
                    <b>+3%</b> climbers since last week 
                </div>
                <div className='body-card'>
                    <b>30%</b> climbers shared their session on social media
                </div>
                <button onClick={hello} className='body-card'>
                    Let students know the wall has been reset (clickable)
                </button>
            </div>

            <img src="Palladium climbing.jpeg" className="body-image"/>
        </main>
    )
}
export default Main;