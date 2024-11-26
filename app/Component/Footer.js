export default function Footer() {
    return (
        <>
            <footer className=" bg-neutral py-20">
                <div className="footer text-neutral-content sm:p-10 p-3 sm:max-w-[90%] mx-auto">
                    <aside className="w-1/2">
                        <img src="/assets/img/logo.png"></img>
                        <p className="">
                            Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est.
                        </p>
                    </aside>
                    <div className="">
                        <h2 className="text-[23px] font-bold text-white mb-2">Sign Up For Our Newsletter!</h2>
                        <p>Get notified about updates and be the first to get early access to new Podcast <br /> episodes.</p>
                        <label className="input pr-0 mt-[30px] w-full input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="your email address" />
                            <button className="btn  sm:w-[190px] bg-[#7E53D4] hover:bg-[#6F42C1] text-base font-normal text-white border-0">Subscribe</button>
                        </label>
                    </div>

                </div>
                <div className="sm:max-w-[90%] mx-auto sm:px-10 px-4">
                    <ul className="sm:flex-row flex-col  flex gap-4 sm:items-center sm:justify-between">
                        <li>
                            <h6 className="text-[16px] font-bold text-white mb-2">Contact Us</h6>
                            <span className="text-[16px] font-normal text-white">support@we5ive.com</span>
                        </li>
                        <li>
                            <h6 className="text-[16px] font-bold text-white mb-2">About Us</h6>
                            <span className="text-[16px] font-normal text-white">Contact Us</span>
                        </li>
                        <li>
                            <h6 className="text-[16px] font-bold text-white mb-2">Privacy policy</h6>
                            <span className="text-[16px] font-normal text-white">Terms & Condition</span>
                        </li>
                        <li>
                            <h6 className="text-[16px] font-bold text-white mb-2">Privacy policy</h6>
                            <div className="flex gap-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} viewBox="0 0 24 24" fill="#1877F2"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} viewBox="0 0 24 24" fill="#1877F2"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width={"24px"} viewBox="0 0 24 24" fill="#1877f2"><path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path></svg>
                            </div>
                        </li>
                    </ul>
                </div>
            </footer>
            <div className="py-5 bg-[#7E53D4] flex">
                <span className="text-white mx-auto">© 2024 | We5ive</span>
            </div>
        </>
    )
}