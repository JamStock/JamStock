import React, { useState, useEffect } from "react"
import url from "../func/fetchURL"
import { recommandbubble } from "../func/recommandBubble"

export const recomandCompany = (theme: string) => {

  const [companys, setCompanys] = useState([])
  useEffect(() => {
    fetch(`${url}:3080/recommand`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(theme)
    })
      .then(response => response.json())
      .then(data => {
        console.log('????', Array.isArray(data))
        setCompanys(data)
      }).catch(err => console.log(err))

  },[theme])

  return companys
}