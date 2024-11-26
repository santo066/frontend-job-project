'use client';

import Image from "next/image";
import Link from "next/link";
import "../public/assets/css/style.css"




import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { useRef } from "react";
import Footer from "./Component/Footer";
import Header from "./Component/Header";


export default function Home() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <>
      <Header></Header>

      {/* banner */}
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage: "url('/assets/img/hero.png')",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-[650px]">
            <h1 className="mb-2 text-[23px] sm:text-5xl font-bold">Elevate Your Everyday Style</h1>
            <p className="mb-6 text-[13px] sm:text-[19px]">
              Discover the Latest Trends in Sustainable Fashion
            </p>
            <div className="flex items-center justify-center buton-group">
              <button className="btn first-btn border-0 rounded-3xl py-[11px] px-[30px] text-white text-[19px] font-light hover:bg-[#6F42C1] bg-[#8F71E1]">Shop Now</button>
              <button className="hover:bg-[#6F42C1] bg-[#8F71E1] btn rounded-full second-btn w-12 h-12 border-0">
                <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 7L6 18" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* feature section */}
      <div className="bg-[#6F42C1]">
        <div className=" flex flex-col sm:py-4 gap-4 sm:max-w-[85%] p-4 mx-auto md:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-[18px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6667 26.6666C24.1394 26.6666 25.3333 25.4727 25.3333 24C25.3333 22.5272 24.1394 21.3333 22.6667 21.3333C21.1939 21.3333 20 22.5272 20 24C20 25.4727 21.1939 26.6666 22.6667 26.6666Z" stroke="#F4F8FF" stroke-width="1.5" />
              <path d="M9.33329 26.6666C10.8061 26.6666 12 25.4727 12 24C12 22.5272 10.8061 21.3333 9.33329 21.3333C7.86053 21.3333 6.66663 22.5272 6.66663 24C6.66663 25.4727 7.86053 26.6666 9.33329 26.6666Z" stroke="#F4F8FF" stroke-width="1.5" />
              <path d="M6.66663 23.9632C5.20433 23.8904 4.29209 23.6728 3.64293 23.0237C2.99377 22.3745 2.77625 21.4622 2.70336 20M12 24H20M25.3333 23.9632C26.7956 23.8904 27.7078 23.6728 28.357 23.0237C29.3333 22.0473 29.3333 20.476 29.3333 17.3333V14.6666H23.0666C22.074 14.6666 21.5776 14.6666 21.176 14.5361C20.3641 14.2724 19.7276 13.6358 19.4638 12.824C19.3333 12.4223 19.3333 11.926 19.3333 10.9333C19.3333 9.44429 19.3333 8.69978 19.1376 8.09725C18.7418 6.8795 17.7872 5.92475 16.5694 5.52909C15.9669 5.33331 15.2224 5.33331 13.7333 5.33331H2.66663" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.66663 10.6667H10.6666" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2.66663 14.6667H7.99996" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.3334 8H21.7616C23.7022 8 24.6723 8 25.4619 8.47161C26.2515 8.94323 26.7115 9.79748 27.6315 11.506L29.3334 14.6667" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="text-white">
              <h3 className="text-[19px]">FREE SHIPPING</h3>
              <h5 className="text-[13px]">BUY BDT 3000+ & GET FREE DELIVERY</h5>
            </div>
          </div>
          <div className="flex gap-[18px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.6356 26C25.8689 23.8501 28 20.174 28 16C28 9.37259 22.6275 4 16 4C15.0835 4 14.1909 4.10275 13.3333 4.29736M22.6356 26V21.3333M22.6356 26H27.3333M9.33333 6.02073C6.11737 8.17343 4 11.8394 4 16C4 22.6275 9.37259 28 16 28C16.9165 28 17.8091 27.8972 18.6667 27.7027M9.33333 6.02073V10.6667M9.33333 6.02073H4.66667" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="text-white">
              <h3 className="text-[19px]">7 DAYS EXCHANGE</h3>
              <h5 className="text-[13px]">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</h5>
            </div>
          </div>
          <div className="flex gap-[18px]">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.66675 5C2.11447 5 1.66675 5.44772 1.66675 6C1.66675 6.55228 2.11447 7 2.66675 7V5ZM17.9597 12.0404C18.3502 12.431 18.9833 12.431 19.3738 12.0404C19.7643 11.6499 19.7643 11.0167 19.3738 10.6262L17.9597 12.0404ZM2.66675 7H11.6766V5H2.66675V7ZM13.7978 7.87868L17.9597 12.0404L19.3738 10.6262L15.2121 6.46447L13.7978 7.87868ZM11.6766 7C12.4722 7 13.2353 7.31607 13.7978 7.87868L15.2121 6.46447C14.2743 5.52679 13.0026 5 11.6766 5V7Z" fill="#F4F8FF" />
              <path d="M6.66675 18H2.66675" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.0403 9.29289C11.6498 8.90237 11.0166 8.90237 10.6261 9.29289C10.2356 9.68341 10.2356 10.3166 10.6261 10.7071L12.0403 9.29289ZM9.33323 13.3333L10.0403 12.6262C9.64982 12.2357 9.01664 12.2357 8.62612 12.6262L9.33323 13.3333ZM5.26656 12.5333C4.82474 12.202 4.19794 12.2915 3.86656 12.7333C3.53519 13.1752 3.62474 13.802 4.06656 14.1333L5.26656 12.5333ZM10.6261 10.7071L13.2928 13.3737L14.707 11.9596L12.0403 9.29289L10.6261 10.7071ZM12.0403 14.6263L10.0403 12.6262L8.62612 14.0404L10.6261 16.0404L12.0403 14.6263ZM5.67048 12.8363L5.26656 12.5333L4.06656 14.1333L4.47048 14.4363L5.67048 12.8363ZM8.62612 12.6262C7.83043 13.4219 6.57072 13.5115 5.67048 12.8363L4.47048 14.4363C6.16696 15.7087 8.54086 15.5399 10.0403 14.0404L8.62612 12.6262ZM13.2928 14.6263C12.9469 14.9721 12.3862 14.9721 12.0403 14.6263L10.6261 16.0404C11.753 17.1673 13.5802 17.1673 14.707 16.0404L13.2928 14.6263ZM13.2928 13.3737C13.6387 13.7196 13.6387 14.2804 13.2928 14.6263L14.707 16.0404C15.8339 14.9136 15.8339 13.0865 14.707 11.9596L13.2928 13.3737Z" fill="#F4F8FF" />
              <path d="M6.66675 14.6666V20.6666C6.66675 23.1808 6.66675 24.4378 7.4478 25.2189C8.22884 26 9.48592 26 12.0001 26H24.0001C26.5142 26 27.7713 26 28.5523 25.2189C29.3334 24.4378 29.3334 23.1808 29.3334 20.6666V16.6666C29.3334 14.1525 29.3334 12.8954 28.5523 12.1144C27.7713 11.3333 26.5142 11.3333 24.0001 11.3333H12.6667" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M20.3334 18.6666C20.3334 19.9553 19.2887 21 18.0001 21C16.7114 21 15.6667 19.9553 15.6667 18.6666C15.6667 17.378 16.7114 16.3333 18.0001 16.3333C19.2887 16.3333 20.3334 17.378 20.3334 18.6666Z" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className="text-white">
              <h3 className="text-[19px]">100% PAYMENT SECURE</h3>
              <h5 className="text-[13px]">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</h5>
            </div>
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

      {/* offer banner */}
      <div className="sm:flex-row items-center sm:justify-center sm:gap-[75px] bg-[#EEECFB] sm:max-w-[90%] mx-auto mb-12 flex flex-col gap-11">
        <div className="p-6">
          <h1 className="sm:text-5xl text-[28px] mb-6  text-center font-semibold"><span className="text-[#6F42C1]">30% </span>Off for New Customers</h1>
          <div className="flex items-center justify-center sm:justify-normal buton-group">
            <button className="btn first-btn border-0 rounded-3xl py-[11px] px-[30px] text-white text-[19px] font-light hover:bg-[#6F42C1] bg-[#8F71E1]">Shop Now</button>
            <button className="hover:bg-[#6F42C1] bg-[#8F71E1] btn rounded-full second-btn w-12 h-12 border-0">
              <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 7L6 18" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" />
                <path d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
        <div className="">
          <img src="/assets/img/offer-1.png"></img>
        </div>
      </div>

      {/* collection slider */}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper md:max-w-[90%] mx-auto"
      >
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center md:gap-10 gap-3 relative pb-12 md:pt-24">
            <div className="w-full flex items-center justify-center bg-[#EEECFB] h-auto md:h-[466px]">
              <img className="md:absolute top-0" src="/assets/img/collection-1.png"></img>
            </div>
            <div className="w-full">
              <h1 className="sm:text-5xl text-[24px] text-start mb-4 sm:mb-6 font-bold">MEN COLLECTION</h1>
              <div className="flex items-center justify-normal buton-group">
                <button className="btn first-btn border-0 rounded-3xl py-[11px] px-[30px] text-white text-[19px] font-light hover:bg-[#6F42C1] bg-[#8F71E1]">Shop Now</button>
                <button className="hover:bg-[#6F42C1] bg-[#8F71E1] btn rounded-full second-btn w-12 h-12 border-0">
                  <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L6 18" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col md:flex-row-reverse items-center md:gap-10 gap-3 relative pb-12 md:pt-24">
            <div className="w-full flex items-center justify-center bg-[#EEECFB] h-auto md:h-[466px]">
              <img className="md:absolute top-0" src="/assets/img/collection-1.png"></img>
            </div>
            <div className="w-full">
              <h1 className="sm:text-5xl text-[24px] text-start mb-4 sm:mb-6 font-bold">WOMEN COLLECTION</h1>
              <div className="flex items-center justify-normal buton-group">
                <button className="btn first-btn border-0 rounded-3xl py-[11px] px-[30px] text-white text-[19px] font-light hover:bg-[#6F42C1] bg-[#8F71E1]">Shop Now</button>
                <button className="hover:bg-[#6F42C1] bg-[#8F71E1] btn rounded-full second-btn w-12 h-12 border-0">
                  <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 7L6 18" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" />
                    <path d="M11 6.13153C11 6.13153 16.6335 5.65664 17.4885 6.51155C18.3434 7.36647 17.8684 13 17.8684 13" stroke="#F4F8FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* big deal */}
      <div className="mt-6 max-w-[90%] mx-auto pb-24 my-slider">
        <div className="flex justify-between items-center mb-6">
          <div className="">
            <span className="text-[#7E53D4] text-[19px] font-light">SUMMER</span>
            <h6 className="text-[28px] font-bold">Big Deal</h6>
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
          className="mySwiper-slider mb-6"
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-11.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-22.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Half Sleeve Shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-44.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Woman wearing sari</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-33.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Checkered shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-11.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-22.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Half Sleeve Shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-44.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Woman wearing sari</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-33.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Checkered shirt</span>
                  <span className="text-[19px] font-semibold text-black">BDT 2,300</span>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-white border-[#7E53D4] w-full text-[#7E53D4] text-base hover:text-white hover:bg-[#7E53D4]">Add to Cart</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-11.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-22.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Half Sleeve Shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-44.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Woman wearing sari</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-33.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Checkered shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-11.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
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
              <figure className="bg-[#F6F5FD] relative h-[255px">
                <img
                  src="/assets/img/img-22.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Half Sleeve Shirt</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-44.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Woman wearing sari</span>
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
              <figure className="bg-[#F6F5FD] relative h-[255px]">
                <img
                  src="/assets/img/img-33.png"
                  alt="Shoes" />
                <div className="absolute right-4 flex rounded-b-[50%] top-0 w-12  h-16 bg-[#7E53D4]">
                  <span className="text-[13px] text-center font-bold text-white">Up to 40%</span>
                </div>
              </figure>
              <div className="card-body">
                <div className="rating rating-sm mt-4">
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-[#FFC700]"
                    defaultChecked />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <input type="radio" name="rating-6" className="mask mask-star-2 bg-[#FFC700]" />
                  <span>(50)</span>
                </div>
                <div className="flex justify-between mb-4 items-center">
                  <span className="text-4">Checkered shirt</span>
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

      {/* footer */}
      <Footer></Footer>
    </>
  );
}
