import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import createMap from "./tableGenerator"
var _ = require('lodash/array');
const HomePage: NextPage = () => {
 
const Smap1:any=createMap(8,2)
const Smap2:any=createMap(7,2)
const Fmap:any=createMap(11,5)
const Pmap:any=createMap(7,6)
const Dmap:any=createMap(7,6)
const FlatArr= _.flatten(Smap1)
const FlatArr2= _.flatten(Smap2)
const FlatArr3= _.flatten(Fmap)
const FlatArr4= _.flatten(Pmap)
const FlatArr5= _.flatten(Dmap)
const Sblock1=FlatArr.filter((x:any)=>x!==undefined)
const Sblock2=FlatArr2.filter((x:any)=>x!==undefined)
const Fblock=FlatArr3.filter((x:any)=>x!==undefined)
const Pblock=FlatArr4.filter((x:any)=>x!==undefined)
const Dblock=FlatArr5.filter((x:any)=>x!==undefined)

  return (
   <div className="text-3xl overflow-visible " >
    HomePage 
    
    <div className='flex  w-TL  bg-blue-300 ml-14 items-end'>

   <div className='flex w-12 bg-red-300 flex-wrap '>
   {Sblock1?.map((v:any,i:any)=>{ 
      const period:any=[1,2,11,19,37,55,87]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1 ml-1' key={i}>
            x:{period[i]} y:1
        </div>
      )
    })}
   </div>




   <div className='flex w-12 bg-red-500 flex-wrap '>
   {Sblock2?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 ml-1' key={i}>
            x:{period[i]} y:2
        </div>
      )
    })}
    </div>

      <div className='flex bg-gray-300 text-sm w-30R h-1/2 flex-wrap'>
      {Fblock?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 ml-1' key={i}>
            x:{1} y:{v[2]}
        </div>
      )
    })}
      </div>

      <div className='flex bg-green-300 text-sm w-18R h-1/2 flex-wrap'>
      {Pblock?.map((v:any,i:any)=>{ 
      const period:any=[4,12,20,38,56,88]
      return(
        <div className='w-12 h-14 bg-amber-400 text-sm mb-1 mr-1' key={i}>
            x:{1} y:3
        </div>
      )
    })}
      </div>

      <div className='flex w-12 bg-red-300 flex-wrap '>
   {Sblock1?.map((v:any,i:any)=>{ 
      const period:any=[1,2,11,19,37,55,87]
      return(
        <div className='w-12 h-14 bg-yellow-400  text-sm mb-1' key={i}>
            x:{period[i]} y:1
        </div>
      )
    })}
   </div>

    </div>
    <div className=' w-47R overflow-hidden bg-red-500 ml-4T'>
    <div className='w-45R flex  bg-red-100 flex-wrap   mt-8 hover:-translate-x-48 ' >
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
   
   <button className='inline-block w-12 h-1H bg-green-400 relative ml-4T bottom-4t '> </button>

   </div>
  )
}

export default HomePage
