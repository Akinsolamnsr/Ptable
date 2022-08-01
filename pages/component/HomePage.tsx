import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import createMap from "./tableGenerator"
var _ = require('lodash/array');
const HomePage: NextPage = () => {
 
const map:any=createMap(8,19)
const map2:any=createMap(3,16)
const FlatArr= _.flatten(map)
const FlatArr2= _.flatten(map2)
const TableArray=FlatArr.filter(x=>x!==undefined)
const TableArray2=FlatArr2.filter(x=>x!==undefined)

  return (
   <div className="text-3xl " >
    HomePage 
    <div className='flex  w-9/12 flex-wrap bg-blue-300 ml-7'>
    {TableArray?.map((v:any,i:any)=>{ 
      return(
        <div className='w-12 h-14 bg-amber-400  mx-1 text-sm my-1' key={i}>
            x:{v[0]} y:{v[1]}
        </div>
      )
    })}
    </div>

    <div className='flex  w-3.5/5 flex-wrap bg-red-300 ml-7'>
    {TableArray2?.map((v:any,i:any)=>{ 
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
