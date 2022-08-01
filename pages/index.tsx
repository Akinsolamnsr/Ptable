import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HomePage from './component/HomePage';
var _ = require('lodash/array');
const Home: NextPage = () => {
 
  return (
   <div className="text-3xl " >
    <HomePage />
    </div>
  )
}

export default Home
