import React from "react";
import { observer } from 'mobx-react'
import store from '../store/store'
import '../page/MainContent.scss'

function Card() {

  const { data } = store;

  return (
    <>
      <ul className='card'>
        {data.map((item, index) => (
          <li className='card-item'
            key={index}>
            <a className='card-item-link' href={item.url} target="_blank">{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default observer(Card);