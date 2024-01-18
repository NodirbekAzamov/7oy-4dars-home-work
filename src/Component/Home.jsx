import React from 'react'
// import { Link } from 'react-router-dom'
import nav_img from "./images/nav_img.svg"
import img1 from "./images/img1.svg"
import img2 from "./images/img2.svg"
import img3 from "./images/img3.svg"
import img_fb from "./images/img_fb.svg"
import img_insta from "./images/img_insta.svg"
import img_twitter from "./images/img_twitter.svg"
import img_in from "./images/img_in.svg"

export default function Home() {
    return (
        <div className=''>
           

            <nav className='flex gap-[106px] px-[148px] pt-[140px] pb-[70px]'>
                <div>
                    <h1 className=' text-[44px] font-[700] pr-[100px]'>Hi, I am John, Creative Technologist</h1>
                    <p className=' fs-[16px] font-[400] font-[Heebo] mt-[40px] pr-[350px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <button className=' text-[white] bg-[red] py-[10px] px-[20px] mt-[47px]'>Download Resume</button>
                </div>
                <div className='w-[50%] h-[50%] '>
                    <img src={nav_img} alt="" className='w-full h-full' />
                </div>
            </nav>


            <div className='bg-[#EDF7FA] py-[25px]'>
                <header className="flex justify-between px-[148px]">
                    <h1 className='text-[20px]'>Recent posts</h1>
                    <p className='text-[20px]'>View all</p>
                </header>
                <nav className=' flex align-center justify-center gap-[50px] mt-[15px] px-[148px]'>
                    <div className="card  p-[35px]">
                        <h1 className=' text-[26px] font-[700] '>Making a design system from scratch</h1>
                        <div className='flex gap-5 mt-[25px]'>
                            <h1>12 Feb 2020</h1>
                            <h1>Design, Pattern</h1>
                        </div>
                        <p className='text-[16px] mt-[25px]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                    <div className="card  p-[35px]">
                        <h1 className=' text-[26px] font-[700] '>Making a design system from scratch</h1>
                        <div className='flex gap-5 mt-[25px]'>
                            <h1>12 Feb 2020</h1>
                            <h1>Design, Pattern</h1>
                        </div>
                        <p className='text-[16px] mt-[25px]'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>
                </nav>
            </div>

            <div className=' px-[148px] pt-[20px]'>
                <h2 className='text-[22px] font-[400] font-[Heebo]'>Featured works</h2>
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
