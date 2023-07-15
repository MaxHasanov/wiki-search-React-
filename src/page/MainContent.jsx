import React from 'react';
import './MainContent.scss'
import { observer } from 'mobx-react'
import Input from '../components/Input';
import Card from '../components/Card';
import Button from '../components/Button';

function MainContent() {

  return (
    <div className='container'>
      <h1 className='wiki-title'>WikiSearch</h1>
      <img className='img-search'
        src="http://res.cloudinary.com/kharatpriyank/image/upload/v1513659146/search_ojyiyb.svg" alt="Search"></img>
      <div className="searchBar">
        <Input />
        <Button />
      </div>
      <Card />
    </div>
  )
}

export default observer(MainContent);