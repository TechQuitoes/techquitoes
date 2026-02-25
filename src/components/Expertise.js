import React from 'react'
import { expertises } from '../constants/expertiseData'
import ExperticeCard from './ExperticeCard'

const Expertise = () => {
  return (
    <div className='flex items-center  flex-col gap-5 bg-gradient-to-r from-[#070B1E] via-[#0B1030] to-[#070B1E] border-b border-white/5 ' >
        <div className=' my-24 flex items-center justify-center flex-col gap-5'>
            <h1 className='text-emerald-500 font-bold text-3xl'>Our <span className='text-purple-500 font-bold text-3xl' >Expertise</span></h1>
            
            </div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {expertises.map((item, i) => (
          <ExperticeCard key={i} {...item} />
        ))}
      </div>
      <button className='bg-black p-2 border rounded-lg  text-purple-600  border-white/10 transition-all duration-300
      hover:bg-slate-700 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'>View All Expertise</button>
        
        </div>
  )
}

export default Expertise