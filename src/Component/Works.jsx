import React from 'react'
import img1 from "./images/img1.svg"
import img2 from "./images/img2.svg"
import img3 from "./images/img3.svg"
import img4 from "./images/img4.svg"
import img_fb from "./images/img_fb.svg"
import img_insta from "./images/img_insta.svg"
import img_twitter from "./images/img_twitter.svg"
import img_in from "./images/img_in.svg"
// import { Link } from 'react-router-dom'

export default function Works() {
  return (
    <div>

     

      <div className=' px-[148px] pt-[20px]'>
        <h2 className='text-[44px] font-[900] font-[Heebo]'> Works</h2>
        <div className=' flex gap-[18px] pt-[22px]'>
          <section className='w-[25%] '>
            <img src={img1} alt="" className=' w-full h-full' />
          </section>
          <aside>
            <h2 className='text-[30px] font-[700]'>Designing Dashboards</h2>
            <div className='flex gap-[36px] mt-[12px]'>
              <p className='bg-[#142850] text-[white] px-[10px] py-[2px] rounded-[16px]'>2020</p>
              <input type="text" placeholder='Dashboard' />
            </div>
            <p className='text-[16px] font-[400] mt-[32px] max-w-[580px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </aside>
        </div>
        <div className=' flex gap-[18px] pt-[22px] '>
          <section className='w-[25%] '>
            <img src={img2} alt="" className=' w-full h-full' />
          </section>
          <aside>
            <h2 className='text-[30px] font-[700]'>Vibrant Portraits of 2020</h2>
            <div className='flex gap-[36px] mt-[12px]'>
              <p className='bg-[#142850] text-[white] px-[10px] py-[2px] rounded-[16px]'>2018</p>
              <input type="text" placeholder='Illustration' />
            </div>
            <p className='text-[16px] font-[400] mt-[32px] max-w-[580px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </aside>
        </div>
        <div className=' flex gap-[18px] pt-[22px] mb-[32px]'>
          <section className='w-[25%] '>
            <img src={img3} alt="" className=' w-full h-full' />
          </section>
          <aside>
            <h2 className='text-[30px] font-[700]'>36 Days of Malayalam type</h2>
            <div className='flex gap-[36px] mt-[12px]'>
              <p className='bg-[#142850] text-[white] px-[10px] py-[2px] rounded-[16px]'>2018</p>
              <input type="text" placeholder='Typography' />
            </div>
            <p className='text-[16px] font-[400] mt-[32px] max-w-[580px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </aside>
        </div>
        <div className=' flex gap-[18px] pt-[22px] mb-[32px]'>
          <section className='w-[25%] '>
            <img src={img4} alt="" className=' w-full h-full' />
          </section>
          <aside>
            <h2 className='text-[30px] font-[700]'>Components</h2>
            <div className='flex gap-[36px] mt-[12px]'>
              <p className='bg-[#142850] text-[white] px-[10px] py-[2px] rounded-[16px]'>2018</p>
              <input type="text" placeholder='Components, Design' />
            </div>
            <p className='text-[16px] font-[400] mt-[32px] max-w-[580px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </aside>
        </div>

        <hr />
      </div>

      <div className='box1'>
        <div className='flex gap-[35px]'>
          <img src={img_fb} alt="img" />
          <img src={img_insta} alt="img" />
          <img src={img_twitter} alt="img" />
          <img src={img_in} alt="img" />
        </div>
        <p className='mt-[26px] text-[16px] font-[400]'>Copyright ©2020 All rights reserved</p>
      </div>
    </div>
  )
}
