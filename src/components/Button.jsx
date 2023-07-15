import React from "react";
import { observer } from 'mobx-react'
import store from '../store/store'
import '../page/MainContent.scss'

function Button() {

  return (
    <>
      <button
        onClick={store.fetchData}
        id='searchIcon'
        className="fa fa-search">
      </button>
      <a className="button" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank">Random!</a>
    </>
  )
}

export default observer(Button);