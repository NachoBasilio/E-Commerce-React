import React from 'react'
import Item from '../components/Item'

export default function Home() {
  return (
    <div className="container">
      <div className="wraper">
        <div className="home">
          <Item src="http://escueladevrock.com/store/0.png"/>
          <Item src="http://escueladevrock.com/store/1.png"/>
          <Item src="http://escueladevrock.com/store/2.png"/>
          <Item src="http://escueladevrock.com/store/3.png"/>
          <Item src="http://escueladevrock.com/store/4.png"/>
          <Item src="http://escueladevrock.com/store/5.png"/>
        </div>
      </div>
    </div>
  )
}
