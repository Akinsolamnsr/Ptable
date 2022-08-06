import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import createMap from "./tableGenerator"
var _ = require('lodash/array');
const HomePage: NextPage = () => {
 const [stat ,SetStat]=useState<boolean>(false)


const Smap1:any=createMap(7,2)
const Smap1C:any=createMap(2,2)
const Smap1B:any=createMap(8,2)
const Smap2:any=createMap(7,2)
const Fmap:any=createMap(11,5)
const Pmap:any=createMap(7,5)
const PmapB:any=createMap(7,3)
const Dmap:any=createMap(7,6)
const FlatArr= _.flatten(Smap1)
const FlatArr2= _.flatten( Smap1C)
const FlatArr3= _.flatten(Fmap)
const FlatArr4= _.flatten(Pmap)
const FlatArr4B= _.flatten(PmapB)
const FlatArr5= _.flatten(Dmap)
const FlatArrB= _.flatten(Smap1B)
const Sblock1=FlatArr.filter((x:any)=>x!==undefined)
const Sblock1C=FlatArr2.filter((x:any)=>x!==undefined)
const Fblock=FlatArr3.filter((x:any)=>x!==undefined)
const Pblock=FlatArr4.filter((x:any)=>x!==undefined)
const PblockB=FlatArr4B.filter((x:any)=>x!==undefined)
const Dblock=FlatArr5.filter((x:any)=>x!==undefined)
const Sblock1B=FlatArrB.filter((x:any)=>x!==undefined)

  return (
   <div className="text-3xl overflow-visible " >
    HomePage 
    
    <div className='flex  w-TL  bg-blue-300 ml-14 items-end'>

     <div className='w-[7rem] bg-indigo-400 mt-[0.25rem] flex flex-col  '>

     <div className='flex w-[6.75rem] bg-violet-500 flex-wrap-reverse  '>
   {Sblock1B?.map((v:any,i:any)=>{ 
      const period:any=[1,2,3,4,5,6,7,8]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1 ml-1' key={i}>
            x:{period[i]} S:1
        </div>
      )
    })}
   </div>

   <div className='flex w-[7rem] bg-red-300 flex-wrap '>
   {Sblock1?.map((v:any,i:any)=>{ 
      const period:any=[1,2,3,4,5,6,7,8]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1 ml-1' key={i}>
            x:{period[i]} S:2
        </div>
      )
    })}
   </div>
     </div>

      <div className={`${stat?" transition duration-500 translate-x-[48.75rem]":"transition duration-500"} flex bg-gray-300 text-sm w-30R h-1/2 flex-wrap relative z-1 -mx-[0.5rem]  `}>
      {Fblock?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 ml-1' key={i}>
            x:{1} y:{v[2]}
        </div>
      )
    })}
      </div>

      
     <div className={`${stat?" transition duration-500 translate-x-[48.75rem]":"transition duration-500"} flex bg-green-300 text-sm w-18R h-1/2  relative z-1 mx-[0.5rem] flex-col`}>

     <div className='w-full flex justify-end bg-emerald-400 '>
      {Sblock1C?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 mr-1' key={i}>
            x:{1} y:3
        </div>
      )
    })}
      </div>

      <div className='w-full flex flex-wrap bg-emerald-400 '>
      {PblockB?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 mr-1' key={i}>
            x:{1} y:3
        </div>
      )
    })}
      </div>

      <div className='w-full flex flex-wrap bg-emerald-400 '>
      {Pblock?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 mr-1' key={i}>
            x:{1} y:3
        </div>
      )
    })}
      </div>

      </div>


    </div>

    <div className=' w-47R overflow-hidden bg-red-500 ml-4T  '>
    <div className={`${stat?" mx-[3rem] transition-spacing duration-500 -mx-[49rem] ":""} transition-spacing duration-500 mx-[3rem] w-45R flex  bg-red-100 flex-wrap  mt-8 `} >
   {Dblock?.map((v:any,i:any)=>{ 
      const period:any=[1,2,11,19,37,55,87]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1 ml-1 ' key={i}>
            x:{period[i]} y:1
        </div>
      )
    })}
    </div>

   </div>
   
   <div className=' w-47R overflow-hidden bg-purple-500 ml-4T3  -my-[26.5rem]'>
    <div className={`ml-[0.5rem] w-45R flex  bg-white flex-wrap  mt-[2rem] `} >
   {Dblock?.map((v:any,i:any)=>{ 
      const period:any=[1,2,11,19,37,55,87]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1 ml-1 ' key={i}>
            x:{i} y:1
        </div>
      )
    })}
    </div>

   </div>

   <button className='inline-block w-12 h-1H bg-green-400 absolute ml-4T bottom-4t z-3'onClick={()=>stat?SetStat(false):SetStat(true)}> </button>

   </div>
  )
}

export default HomePage
