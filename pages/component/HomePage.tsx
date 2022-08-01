import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
var _ = require('lodash/array');
const HomePage: NextPage = () => {
 
  function createMap(rowCount:any, columnCount:any) {
    for (let x = 1; x < rowCount; x++) {
        for (let y = 1; y < columnCount; y++) {
            addCell(x, y); 
        }
    }
}

function addCell(x:any, y:any) {
    map[x] = map[x] || [];
    map[x][y] = [x,y];
}

var map:any = [];
createMap(8, 19);
const FlatArr= _.flatten(map)
const TableArray=FlatArr.filter(x=>x!==undefined)

  return (
   <div className="text-3xl " >
    HomePage 
    <div className='flex  w-9/12 flex-wrap bg-blue-300 ml-7'>
    {TableArray?.map((v:any,i:any)=>{
      console.log(v)  
      return(
        <div className='w-12 h-14 bg-amber-400  mx-1 text-sm my-1' key={i}>
            x:{v[0]} y:{v[1]}
        </div>
      )
    })}
    </div>
   </div>
  )
}

export default HomePage
