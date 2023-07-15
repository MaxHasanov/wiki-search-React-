import React from "react";
import { observer } from 'mobx-react'
import store from "../store/store";
import '../page/MainContent.scss'

function Input() {

  const { search } = store;

  const onKeyDown = (event) => {
    if (event.keyCode === 13) {
      store.fetchData();
    }
  }

  return (
    <>
      <input
        value={search}
        onChange={store.changeSearch}
        onKeyDown={onKeyDown}
        type="search" className='searchBox' placeholder="Search Here" name="searchBox">
      </input>
    </>
  )
}

export default observer(Input);