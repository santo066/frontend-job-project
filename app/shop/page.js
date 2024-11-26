"use client";
import Footer from "../Component/Footer";
import Header from "../Component/Header";

import "../../public/assets/css/style.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useRef, useState } from "react";


export default function Shop() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <Header></Header>

            <div className="flex flex-col md:flex-row pt-9 md:pt-[77px] max-w-[90%] mx-auto gap-6 mb-14">
                <div className="md:w-1/2 relative">
                    <div className="absolute border border-[#7E53D4] left-1 top-[35%] w-8 h-8 rounded-full flex items-center justify-cente priv-button z-10">
                        <button ref={prevRef} className="custom-prev-btn">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00002 12.5002H20" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {/* Custom icon */}
                        </button>
                    </div>
                    <div className="absolute border border-[#7E53D4] top-[35%] right-1 w-8 h-8 rounded-full flex items-center justify-cente next-button z-10">
                        <button ref={nextRef} className="custom-next-btn">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12.4998H4" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {/* Custom icon */}
                        </button>
                    </div>
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        loop={true}
                        spaceBetween={10}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        thumbs={{ swiper: thumbsSwiper }}
                        onBeforeInit={(swiper) => {
                            // Assign navigation elements before initialization
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="my-slider2"
                    >
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/imggg.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/imggg.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/imggg.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/imggg.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>

                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-4"
                    >
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/shop-1.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/shop-2.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/shop-3.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>
                        <SwiperSlide>
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/shop-4.png"
                                    alt="Shoes" />
                            </figure>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className="w-full">
                    <button className="btn mb-6 bg-[#2f1c59]  hover:bg-[#6F42C1] text-white px-[54px] py-[10px]">New Arrival</button>
                    <h1 className="text-[28px] font-bold mb-6">White Hoodie</h1>
                    <div>
                        <div className="rating mb-6 ">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <span>(4.0)</span>
                            <span className="text-[16px] text-[#7E53D4] font-light">121 reviews</span>
                        </div>
                    </div>
                    <h1 className="text-[28px] font-bold ">BDT 2500</h1>
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:gap-40 w-full border py-6 border-l-0 border-r-0 mt-[32px]">
                        <div>
                            <span>Available Size</span>
                            <ul className="flex gap-2 mt-4">
                                <li className="px-[15px] py-[9px] border-1 bg-purple-100 rounded-md border-[#7E53D4]">S</li>
                                <li className="px-[15px] py-[9px] border-1 bg-purple-100 rounded-md border-[#7E53D4]">M</li>
                                <li className="px-[15px] py-[9px] border-1 bg-purple-100 rounded-md border-[#7E53D4]">L</li>
                                <li className="px-[15px] py-[9px] border-1 bg-purple-100 rounded-md border-[#7E53D4]">XL</li>
                            </ul>
                        </div>
                        <div>
                            <span>Available color</span>
                            <div className="flex gap-2">
                                <div className="w-6 h-6 rounded-full bg-slate-100 border border-[#7E53D4]"></div>
                                <span>Off White</span>
                                <div className="w-6 h-6 rounded-full bg-black border border-[#7E53D4]"></div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <span className="text-[16px] font-bold">Quantity</span>
                        <div className="bg-purple-100 py-[13px] mt-4 px-2 w-32 flex rounded-3xl">
                            <span className="mx-auto tracking-[10px] text-[19px] ">- 1 +</span>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 mt-8">
                        <button className="btn bg-[#7E53D4] text-white px-28 py-[10px] hover:bg-transparent hover:text-[#7E53D4] hover:border hover:border-[#7E53D4]">Buy Now</button>
                        <button className="btn   px-28 py-[10px] hover:bg-[#7E53D4]  bg-transparent hover:text-white  text-[#7E53D4] border hover:border-0 border-[#7E53D4]">Add to Cart</button>
                    </div>
                </div>
            </div>

            {/* slider */}
            <div className="mt-6 max-w-[90%] mx-auto pb-24 my-slider">
                <div className="flex justify-between items-center mb-6">
                    <div className="">
                        <span className="text-[#7E53D4] text-[19px] font-light">FEATURED PRODUCT</span>
                        <h6 className="text-[28px] font-bold">New Arrivals</h6>
                    </div>
                    <div className="absolute right-10  w-8 h-8 rounded-full flex items-center justify-cente  priv-button z-10">
                        <button ref={prevRef} className="custom-prev-btn">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.00002 12.5002H20" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.99966 7.5C8.99966 7.5 3.99976 11.1824 3.99976 12.5C3.99976 13.8176 8.99976 17.5 8.99976 17.5" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {/* Custom icon */}
                        </button>
                    </div>
                    <div className="absolute right-0 w-8 h-8 rounded-full flex items-center justify-cente next-button z-10">
                        <button ref={nextRef} className="custom-next-btn">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 12.4998H4" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.0003 17.5C15.0003 17.5 20.0002 13.8176 20.0002 12.5C20.0002 11.1824 15.0002 7.5 15.0002 7.5" stroke="#7E53D4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {/* Custom icon */}
                        </button>
                    </div>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        // Assign navigation elements before initialization
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    modules={[Navigation]}
                    className="mySwiper-slider"
                    breakpoints={{

                        768: {
                            slidesPerView: 2,
                            spaceBetween: 24,
                        },
                        992: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-1.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Indian Sharee</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-2.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Hoodie</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-3.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Plazu</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-4.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Jacket</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-1.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Indian Sharee</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-2.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Hoodie</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-3.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Plazu</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card p-2 card-compact bg-base-100 w-auto">
                            <figure className="bg-[#F6F5FD]">
                                <img
                                    src="/assets/img/slider-4.png"
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body p-2">
                                <div className="flex my-4 justify-between items-center">
                                    <span className="text-4">Jacket</span>
                                    <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <button className="btn mt-6 px-6 py-3 bg-[#7E53D4] text-white text-base font-semibold  hover:text-black hover:bg-white hover:border-[#7E53D4] absolute left-[50%] translate-x-[-50%]">See more</button>
            </div>

            <Footer></Footer>
        </>
    )
}