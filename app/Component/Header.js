import Link from "next/link";
import img from "../../public/assets/img/logo (1).png";
import Image from "next/image";


export default function Header() {
    return (
        <>
            <div className="bg-[#F5F3FF]">
                <div className="navbar  max-w-[90%] mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link href={'/'}>Home</Link></li>
                                <li><Link href={'/shop'}>Shop</Link></li>
                                <li><Link href={'/deals'}>Deals</Link></li>
                                <li><Link href={'/new'}>What's New</Link></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl w-[100px] p-0 sm:w-52">
                            <Image
                                src={img}
                                alt="Description of the image"

                            />
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal text-[#646464] px-1">
                            <li className=" hover:text-[#581FC1]"><Link href={'/'}>Home</Link></li>
                            <li className=" hover:text-[#581FC1]"><Link href={'/shop'}>Shop</Link></li>
                            <li className=" hover:text-[#581FC1]"><Link href={'/deals'}>Deals</Link></li>
                            <li className=" hover:text-[#581FC1]"><Link href={'/new'}>What's New</Link></li>

                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div>
                            <label className="input input-bordered hidden sm:flex rounded-3xl h-[35px] items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />
                            </label>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className=" block sm:hidden w-6 h-6 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="relative mx-4 cursor-pointer">
                            <div className="w-4 h-4 absolute right-[-7px] top-[-3px] text-center rounded-full bg-black text-white text-[12px]">0</div>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.87289 17.5194L2.66933 10.3398C2.48735 9.25428 2.39637 8.71152 2.68773 8.35576C2.9791 8 3.51461 8 4.58564 8H19.4144C20.4854 8 21.0209 8 21.3123 8.35576C21.6036 8.71152 21.5126 9.25428 21.3307 10.3398L20.1271 17.5194C19.7282 19.8991 19.5287 21.0889 18.7143 21.7945C17.9 22.5 16.726 22.5 14.3782 22.5H9.62182C7.27396 22.5 6.10003 22.5 5.28565 21.7945C4.47127 21.0889 4.27181 19.8991 3.87289 17.5194Z" stroke="#1D1D1D" stroke-width="1.5" />
                                <path d="M17.5 8C17.5 4.96243 15.0376 2.5 12 2.5C8.96243 2.5 6.5 4.96243 6.5 8" stroke="#1D1D1D" stroke-width="1.5" />
                            </svg>

                        </div>
                        <div className="cursor-pointer">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.57757 15.9816C5.1628 16.824 1.45336 18.5441 3.71266 20.6966C4.81631 21.748 6.04549 22.5 7.59087 22.5H16.4091C17.9545 22.5 19.1837 21.748 20.2873 20.6966C22.5466 18.5441 18.8372 16.824 17.4224 15.9816C14.1048 14.0061 9.89519 14.0061 6.57757 15.9816Z" stroke="#1D1D1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.5 7C16.5 9.48528 14.4853 11.5 12 11.5C9.51472 11.5 7.5 9.48528 7.5 7C7.5 4.51472 9.51472 2.5 12 2.5C14.4853 2.5 16.5 4.51472 16.5 7Z" stroke="#1D1D1D" stroke-width="1.5" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}