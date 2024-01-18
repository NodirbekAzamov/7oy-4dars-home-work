import React from 'react'
// import { Link } from 'react-router-dom'
import img_fb from "./images/img_fb.svg"
import img_insta from "./images/img_insta.svg"
import img_twitter from "./images/img_twitter.svg"
import img_in from "./images/img_in.svg"
export default function Blog() {
    return (
        <div>
            <div className='px-[235px]'>
                <h6 className='text-[44px] font-[700] mb-[55px] mt-[106px]'>Blog</h6>
                <div className=''>
                    <h4 className='text-[30px] font-[500]'>UI Interactions of the week</h4>
                    <h5 className='text-[#21243D] text-[20px] font-[400] py-[16px]'>12 Feb 2019 | <span>Express Handlebars</span></h5>
                    <p className='text-[16px] font-[400] max-w-[670px] mb-[29px]'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <hr />
                </div>
                <div className='mt-[32px]'>
                    <h4 className='text-[30px] font-[500]'>UI Interactions of the week</h4>
                    <h5 className='text-[#21243D] text-[20px] font-[400] py-[16px]'>12 Feb 2019 | <span>Express Handlebars</span></h5>
                    <p className='text-[16px] font-[400] max-w-[670px] mb-[29px]'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <hr />
                </div>
                <div className='mt-[32px]'>
                    <h4 className='text-[30px] font-[500]'>UI Interactions of the week</h4>
                    <h5 className='text-[#21243D] text-[20px] font-[400] py-[16px]'>12 Feb 2019 | <span>Express Handlebars</span></h5>
                    <p className='text-[16px] font-[400] max-w-[670px] mb-[29px]'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <hr />
                </div>
                <div className='mt-[32px]'>
                    <h4 className='text-[30px] font-[500]'>UI Interactions of the week</h4>
                    <h5 className='text-[#21243D] text-[20px] font-[400] py-[16px]'>12 Feb 2019 | <span>Express Handlebars</span></h5>
                    <p className='text-[16px] font-[400] max-w-[670px] mb-[29px]'> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </p>
                    <hr />
                </div>
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
