import React from 'react'
import style from './rightSection.module.css'

export default function Page1() {
  return (
    <div className={style.trendbox}>

            <h2>What's trending</h2>


            <div className={style.trend} >

                <p>Trending in World</p>
                <h4>#trending</h4>
                <a href='https://www.youtube.com/watch?v=x3IwvPvDpKE' />
                <p>500Tweets</p>
            </div>
            <div className={style.trend} >
                <p>Trending in World</p>
                <h4>#trending</h4>
                <p>450Tweets</p>
            </div>
            <div className={style.trend} >
                <p>Trending in World</p>
                <h4>#trending</h4>
                <img width="20px" height = "30px" src = "https://th.bing.com/th?id=OIP.4siKIW3oZ4kEo0vkEVQ5hgHaLH&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" />
               
    
                <p>40Tweets</p>
            </div>
            <div className={style.trend} >
                <p>Trending in World</p>
                <h4>#trending</h4>

                <video width="50px" height="50px"
        controls="controls"/>
         
        <source src="https://www.youtube.com/watch?v=JvWukLAdS_8&t=3s&pp=ygUMcmVhY3QgcmVjb2ls"
            type="video"/>
                <p>4,500Tweets</p>


            </div>

            <h5>show more</h5>





        </div>
  )
}
