import React from 'react'
import "./listRow.css"

function ListRow({item}) {

  const IM = item.personalImage?item.personalImage:null
  const link = IM?require(`../../assets/${IM}`):''
  return (
    <div>
        
        <article class="leaderboard__profile">
      <img src={link} alt={item.name} className="leaderboard__picture"/>
      <span className="leaderboard__name">{item.name}</span>
      <span className="leaderboard__value"><span>{item.email}</span></span>
    </article>

    </div>
  )
}


export default ListRow
