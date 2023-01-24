import React from 'react'

function PersonalInfo({data,light}) {
const item = (data)=>{
    let html =[]
    for(let i = 0 ; i<data.length; i++){
       const key1 = Object.keys(data[i]);
       const key2 =data[i+1]&& Object.keys(data[i+1])
       html.push((
        <>
         <h4 className='left'><span className={light?"font-sun-mode":""}>{key1[0]} : </span> {data[i][key1[0]]}</h4>
         { data[i+1]&& <h4 className='right'><span className={light?"font-sun-mode":""}>{key2[0]} : </span> {data[i+1][key2[0]]}</h4>}
        </>
    ))
    i=i+1

    }return html

}
  return (
    <div className='personal-info-cont'>
        <ul>
            <h2>Personal Informations</h2>
            {
                item(data).map((d,i)=><li key={i} className={`inf-row ${light?"font-sun-mode-low":""}`}>{d}</li>)
            }
        </ul>
    </div>
  )
}

export default PersonalInfo