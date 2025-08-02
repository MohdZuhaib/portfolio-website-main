import Link from 'next/link';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import WorkExperience from '../lists/WorkExperience';
import { BsDiscord, BsGithub, BsLinkedin } from 'react-icons/bs';
import { AiFillGitlab } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { HiDocumentText } from 'react-icons/hi';

const PersonalPortfolio = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'Founder of Alpha Design',
            thumbnail: '/assets/images/personal-portfolio/customer-avatar.svg',
            message:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ];
    return (
        <div className="overflow-hidden">
            {/* Title */}

            {/* Hero */}
            <section
                id="hero"
                className=" bg-[url(/assets/images/personal-portfolio/bg-5.jpg)] bg-center bg-cover bg-no-repeat pb-12 pt-36 text-white sm:pt-[200px]  h-101 flex items-center justify-center"
            >
                <div className="container">
                    <div className="relative">
                        <div className="text-center lg:max-w-[754px] lg:text-left ltr: rtl:lg:text-right">
                            <h2 className="text-3xl font-black sm:text-5xl md:text-6xl">
                                Expert in <span className="text-primary">Fullstack</span> technologies.

                            </h2>
                            <p className="mt-7 text-base font-semibold xl:text-lg">
                                Crafting innovative, high-performance web applications that are as functional as they are visually stunning.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-6 lg:justify-start">
                                <Link href="#contact" className="btn bg-white py-[19px] shadow-[10px_15px_30px_rgba(199,128,161,0.2)]">
                                    Contact
                                </Link>
                                {/* <Link href="#pricing" className="btn px-8 py-[19px] text-white shadow-[10px_15px_30px_rgba(199,128,161,0.2)]">
                                    Pricing
                                </Link> */}
                            </div>
                        </div>
                        <div className="top-0 mt-10 w-full max-w-[686px] ltr:right-0 rtl:left-0 lg:absolute" data-aos="fade-left" data-aos-duration="1000">
                            {/* <img src="/assets/images/personal-portfolio/bg-3.jpg" className="rtl:rotate-y-180" alt="" /> */}
                        </div>
                    </div>
                </div>
            </section >

            {/* Technologies */}
            < section id="technologies" className="scroll-mt-20 scroll-mt-20 bg-white py-14 dark:bg-gray-dark lg:scroll-mt-24 lg:scroll-mt-24" >
                <div className="container">
                    <div className="items-center lg:flex">
                        <h2 className="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right">
                            MY TECHNOLOGIES
                        </h2>
                        <Swiper
                            className="mt-10 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
                            loop={true}
                            slidesPerView="auto"
                            spaceBetween={10}
                            speed={4000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 3,
                                },
                                600: {
                                    slidesPerView: 4,
                                },
                                1000: {
                                    slidesPerView: 5,
                                },
                                1142: {
                                    slidesPerView: 7,
                                },
                            }}
                            modules={[Autoplay]}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/react.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/next.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/sass.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/mui.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/antd.svg" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/tailwind.png" alt="" className="h-12 w-14" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/html.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/css.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/javascript.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/typescript.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/nodejs.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/sql.png" alt="" className="h-14 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="pt-1">
                                    <img src="/assets/icons/mongodb.png" alt="" className="h-8 w-36" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/postgresql.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/redux.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/icons/git.png" alt="" className="h-12 w-12" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section >

            {/* About Me */}
            < section id="about" className="scroll-mt-20 bg-gradient-to-t from-white/50 to-transparent py-14 dark:bg-none md:py-20 lg:scroll-mt-24" >
                <div className="container">
                    <div className="grid items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div className="relative">
                            <img
                                src="/assets/images/personal-portfolio/about-block.png"
                                alt=""
                                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden md:block"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                            <img
                                src="/assets/images/personal-portfolio/about-block-dark.png"
                                alt=""
                                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden dark:md:block"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                            <img src="/assets/images/personal-portfolio/bg-3.jpg" alt="" className="h-full w-full object-cover" />
                            <img
                                src="/assets/images/personal-portfolio/me2.jpg"
                                alt=""
                                className="absolute -bottom-10 h-[140px] w-[140px] rotate-12 ltr:-left-10 rtl:-right-10 rounded-full"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            />
                        </div>
                        <div>
                            <div className="mb-2">
                                <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                                    <span className="text-primary">/</span> About Zuhaib
                                </h6>
                                <h2 className="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                                    Making web apps since 2021
                                </h2>
                            </div>
                            <p className="text-lg font-medium">
                                I specialize in developing responsive, optimized, and user-focused web apps that are not only visually
                                appealing but also deliver a seamless and intuitive navigation experience.
                                My frontend expertise includes HTML, CSS/SASS, JavaScript/TypeScript, and popular libraries and frameworks such as NextJS and React.
                            </p>
                            <div className="my-6 grid gap-4 text-lg font-bold text-black dark:text-white sm:mb-8 sm:mt-12 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-4xl font-black text-primary md:text-7xl">3+</h2>
                                    <p>Years of experience</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-4xl font-black text-secondary md:text-7xl">20+</h2>
                                    <p>Successful projects</p>
                                </div>
                            </div>
                            <p className="text-lg font-medium">
                                On the backend, I have a strong foundation in database management, server-side scripting. I work with
                                JavaScript web frameworks such as Express to build the backbone of web applications, ensuring they perform
                                efficiently and securely.
                            </p>
                        </div>
                    </div>
                </div>
            </section >

            {/* Stats */}
            < section className="bg-white py-14 dark:bg-gray-dark md:py-20" >
                <div className="container">
                    <div className="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-black dark:text-white sm:grid-cols-3 sm:ltr:text-left sm:rtl:text-right lg:text-xl">
                        <div className="px-5 py-8 md:px-12 md:py-10">
                            <div className="mb-4 text-[40px] font-extrabold text-primary">
                                <CountUp start={0} end={3} duration={5} suffix="+"></CountUp>
                            </div>
                            <h6>Years of experience</h6>
                        </div>
                        <div className="bg-secondary/10 px-5 py-8 md:px-12 md:py-10">
                            <div className="mb-4 text-[40px] font-extrabold text-secondary">
                                <CountUp start={0} end={10} duration={5} suffix="+"></CountUp>
                            </div>
                            <h6>Technologies</h6>
                        </div>
                        <div className="px-5 py-8 md:px-12 md:py-10">
                            <div className="mb-4 text-[40px] font-extrabold text-primary">
                                <CountUp start={0} end={20} duration={5} suffix="+"></CountUp>
                            </div>
                            <h6>Projects complete</h6>
                        </div>
                    </div>
                </div>
            </section >

            {/* Portfolio */}
            < section
                id="work-exp"
                className="relative scroll-mt-20 bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20 lg:scroll-mt-24"
            >
                <div className="absolute inset-x-0 top-0 h-[550px] bg-black">
                    <img
                        src="/assets/images/personal-portfolio/star-icon.svg"
                        alt=""
                        className="absolute top-0 ltr:left-0 rtl:right-0 rtl:rotate-y-180"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    />
                </div>
                <div className="container relative z-[1]">
                    <div className="mb-10 max-w-[410px]">
                        <div className="mb-5 flex items-center gap-10">
                            <h6 className="text-lg font-extrabold uppercase text-secondary">
                                <span className="text-primary">/</span> Portfolio
                            </h6>
                            <div className="flex gap-2.5">
                                <button
                                    type="button"
                                    className="portfolio-slider-button-prev flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="portfolio-slider-button-next flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black leading-normal text-white md:text-[40px]">Some of My Noteworthy Projects</h2>
                    </div>
                    <Swiper
                        className="xl:w-[1680px]"
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.portfolio-slider-button-next',
                            prevEl: '.portfolio-slider-button-prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1142: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        {WorkExperience.map((element, index) => (
                            <SwiperSlide key={index}>
                                <div className="min-h-[400px] bg-white dark:bg-gray-dark md:min-h-[280px] lg:min-h-[330px]">
                                    <div
                                        onClick={() => window.open(`https://${element.companyName}`, '_blank')}
                                        className="flex cursor-pointer items-center justify-between gap-2 p-4 md:p-7"
                                    >
                                        <div className="font-extrabold">
                                            <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[2px] text-transparent md:tracking-[6px]">
                                                {element.companyName}
                                            </h6>
                                            <h4 className="py-2 text-xl text-black dark:text-white">{element.projectTitle}</h4>
                                            <span className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                                {element.projectDescription}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section >

            {/* Why Me */}
            < section id="why-me" className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20" >
                <div className="container">
                    <div className="mb-10">
                        <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                            <span className="text-primary">/</span> Why me
                        </h6>
                        <h2 className="text-3xl font-black leading-tight text-black dark:text-white md:text-[40px]">Reasons to Choose Me</h2>
                    </div>
                    <div
                        className="grid grid-cols-1 justify-between gap-7 ltr:text-left rtl:text-right md:grid-cols-2"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white px-6 py-10 duration-200 hover:border-primary hover:bg-primary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Versatile Skill Set</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    Mastering both front-end and back-end technologies, I ensure a seamless user experience and robust server functionality. My
                                    comprehensive solutions span the entire spectrum of software development, providing a holistic approach that guarantees
                                    excellence in every aspect of your project.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M33.6822 11.1466L31.4947 7.35783C31.2046 6.85537 30.7268 6.48878 30.1665 6.33863C29.606 6.18848 29.009 6.26709 28.5066 6.55717L26.9578 7.45191C25.4683 6.11519 23.7148 5.10614 21.8106 4.49V2.6875C21.8106 2.10734 21.5801 1.55091 21.1699 1.14071C20.7597 0.73044 20.2033 0.5 19.6231 0.5H15.2481C14.668 0.5 14.1115 0.73044 13.7013 1.14071C13.2911 1.55091 13.0606 2.10734 13.0606 2.6875V4.48342C11.1508 5.09487 9.3932 6.10602 7.90472 7.44967L6.36031 6.55717C5.85869 6.26989 5.26376 6.19282 4.70544 6.34283C4.14719 6.49284 3.67098 6.85775 3.38097 7.35783L1.19347 11.1466C0.903388 11.649 0.824779 12.2461 0.974929 12.8064C1.12508 13.3668 1.49167 13.8446 1.99406 14.1347L3.55156 15.0359C3.13149 16.9919 3.13149 19.0147 3.55156 20.9706L1.99406 21.8697C1.49167 22.1597 1.12508 22.6376 0.974929 23.1979C0.824779 23.7583 0.903388 24.3554 1.19347 24.8578L3.38097 28.6466C3.67105 29.149 4.1488 29.5156 4.70922 29.6657C5.26957 29.8159 5.86667 29.7372 6.36906 29.4472L7.91781 28.5525C9.40734 29.892 11.1628 30.902 13.0694 31.5166V33.3125C13.0694 33.8927 13.2998 34.4491 13.7101 34.8593C14.1203 35.2696 14.6767 35.5 15.2569 35.5H19.6319C20.212 35.5 20.7684 35.2696 21.1787 34.8593C21.5889 34.4491 21.8194 33.8927 21.8194 33.3125V31.5187C23.7277 30.9067 25.4844 29.8964 26.9731 28.5547L28.5153 29.4472C29.0178 29.7372 29.6148 29.8159 30.1752 29.6657C30.7356 29.5156 31.2133 29.149 31.5035 28.6466L33.691 24.8578C33.981 24.3554 34.0596 23.7583 33.9094 23.1979C33.7594 22.6376 33.3927 22.1597 32.8903 21.8697L31.335 20.9728C31.7562 19.0155 31.7562 16.991 31.335 15.0338L32.8903 14.1347C33.3912 13.8431 33.756 13.3647 33.9045 12.8045C34.0529 12.2442 33.973 11.6479 33.6822 11.1466ZM17.4356 25.6562C15.9214 25.6562 14.4411 25.2072 13.182 24.3659C11.923 23.5247 10.9417 22.3289 10.3622 20.9299C9.78268 19.5309 9.63106 17.9915 9.92646 16.5063C10.2219 15.0211 10.9511 13.657 12.0218 12.5862C13.0926 11.5155 14.4568 10.7863 15.942 10.4909C17.4272 10.1954 18.9665 10.347 20.3656 10.9266C21.7646 11.506 22.9603 12.4874 23.8016 13.7464C24.6428 15.0055 25.0919 16.4858 25.0919 18C25.0919 20.0306 24.2852 21.978 22.8494 23.4138C21.4136 24.8496 19.4662 25.6562 17.4356 25.6562Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white px-6 py-10 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Problem Solving</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    Adapting swiftly to evolving project dynamics, I efficiently overcome challenges, ensuring continuous progress and timely
                                    resolutions that contribute to the overall success of your venture. My ability to navigate complexity with agility is a key
                                    asset.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16.8133 0.821289C13.6502 0.821289 10.5582 1.75924 7.92817 3.51658C5.29817 5.27392 3.2483 7.77167 2.03784 10.694C0.827388 13.6163 0.51066 16.8319 1.12771 19.9343C1.74483 23.0365 3.26798 25.8862 5.50469 28.1228C7.74133 30.3596 10.591 31.8827 13.6933 32.4998C16.7956 33.1169 20.0112 32.8001 22.9335 31.5897C25.8559 30.3792 28.3536 28.3294 30.111 25.6994C31.8683 23.0694 32.8062 19.9773 32.8062 16.8142C32.8013 12.5741 31.1147 8.50915 28.1166 5.51096C25.1184 2.51278 21.0534 0.826226 16.8133 0.821289ZM26.0453 11.7498L16.9226 24.1296C16.8149 24.2725 16.6798 24.3925 16.5253 24.4827C16.3707 24.5728 16.1997 24.6312 16.0222 24.6545C15.8449 24.6778 15.6646 24.6656 15.4919 24.6185C15.3193 24.5714 15.1578 24.4904 15.0168 24.3802L8.50238 19.1718C8.36568 19.0624 8.25185 18.9272 8.16744 18.7738C8.08302 18.6204 8.02962 18.4519 8.01036 18.278C7.97135 17.9265 8.07356 17.5741 8.29448 17.2979C8.51539 17.0219 8.83691 16.8449 9.18834 16.8059C9.36232 16.7867 9.53844 16.8018 9.70658 16.8506C9.87471 16.8993 10.0316 16.9807 10.1683 17.09L15.6005 21.4361L23.8995 10.1731C23.9994 10.0232 24.1287 9.89511 24.2795 9.79658C24.4303 9.69798 24.5996 9.63101 24.777 9.59972C24.9544 9.56843 25.1363 9.57344 25.3118 9.6144C25.4873 9.65542 25.6525 9.73156 25.7977 9.83823C25.9429 9.94489 26.065 10.0799 26.1565 10.2351C26.248 10.3903 26.3071 10.5624 26.3303 10.7411C26.3535 10.9198 26.3401 11.1012 26.2911 11.2746C26.2421 11.448 26.1585 11.6096 26.0453 11.7498Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white px-6 py-10 duration-200 hover:border-secondary hover:bg-secondary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-secondary">Innovative Solutions</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    Going beyond traditional coding, I provide creative and forward-thinking solutions, infusing projects with a blend of
                                    creativity and technical prowess. By addressing challenges innovatively, I ensure that your project outcomes surpass
                                    expectations and stand out in the digital landscape.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(180,118,229,0.06)] text-[#B476E5]">
                                <svg width="39" height="23" viewBox="0 0 39 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2.41997 22.2C3.0107 22.2012 3.57945 21.9763 4.00967 21.5715L14.2216 11.993C14.3677 11.8547 14.5621 11.779 14.7633 11.782C14.9645 11.785 15.1565 11.8665 15.2985 12.0091L18.7335 15.4457C19.767 16.4323 21.1408 16.9828 22.5696 16.9828C23.9984 16.9828 25.3722 16.4323 26.4057 15.4457L32.1553 9.69598C32.1912 9.66 32.2338 9.63151 32.2807 9.61205C32.3275 9.59252 32.3779 9.58251 32.4286 9.58251C32.4794 9.58251 32.5297 9.59252 32.5765 9.61205C32.6234 9.63151 32.6661 9.66 32.7019 9.69598L35.4248 12.4093C35.7156 12.6987 36.1092 12.8611 36.5195 12.861C36.9305 12.8605 37.3245 12.6972 37.6153 12.4067C37.9061 12.1163 38.0698 11.7224 38.0706 11.3114V2.04953C38.0702 1.63842 37.9066 1.24432 37.6158 0.953751C37.3249 0.663251 36.9306 0.500012 36.5195 0.500012H27.2206C26.9128 0.498822 26.6116 0.589332 26.3554 0.760062C26.0992 0.930722 25.8997 1.17383 25.7823 1.45838C25.6649 1.74293 25.6348 2.05597 25.696 2.35767C25.7573 2.65937 25.9069 2.93601 26.126 3.15224L28.8586 5.88483C28.9314 5.95777 28.9724 6.05661 28.9727 6.15972C28.9729 6.21054 28.9629 6.26094 28.9433 6.30784C28.9237 6.35481 28.8949 6.3973 28.8586 6.43293L23.1169 12.1762C22.971 12.3205 22.774 12.4015 22.5688 12.4015C22.3635 12.4015 22.1666 12.3205 22.0207 12.1762L18.584 8.73957C17.593 7.73857 16.2499 7.16443 14.8415 7.13986C13.4331 7.11522 12.0707 7.64197 11.0453 8.60776L0.830203 18.1783C0.491543 18.4975 0.256413 18.911 0.155263 19.3652C0.054043 19.8195 0.0914927 20.2937 0.262713 20.7265C0.433933 21.1593 0.731013 21.5307 1.11559 21.7928C1.50017 22.055 1.95454 22.1957 2.41997 22.1968V22.2Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div className="group flex gap-6 rounded-[32px] border-2 border-white/[0.1] bg-white px-6 py-10 duration-200 hover:border-primary hover:bg-primary/20 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent">
                            <div className="flex-1">
                                <h3 className="text-2xl font-extrabold text-primary">Team Player</h3>
                                <p className="mt-4 text-lg font-semibold">
                                    Excelling in teamwork and open communication, I thrive in collaborative environments. By facilitating the harmonious
                                    integration of diverse skills, I contribute to the successful realization of projects with synergy and cohesion, ensuring a
                                    collaborative approach that adds value to every aspect of the development process.
                                </p>
                            </div>
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(71,189,255,0.06)] text-[#47BDFF]">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M41.7656 39.9469C41.7656 40.1702 41.8543 40.3843 42.0122 40.5421C42.17 40.7 42.3842 40.7887 42.6074 40.7887H47.3563C47.4942 40.7885 47.6299 40.7547 47.7516 40.6898C47.8732 40.6249 47.9772 40.5313 48.0541 40.4169C48.1311 40.3025 48.1788 40.171 48.193 40.0339C48.2073 39.8967 48.1876 39.7582 48.1357 39.6305C47.6363 38.3821 46.81 37.2913 45.7437 36.4723C44.6774 35.6533 43.4103 35.1364 42.0754 34.9758C41.9358 34.9589 41.7941 34.9773 41.6634 35.0293C41.5328 35.0813 41.4172 35.1652 41.3273 35.2734C41.2374 35.3815 41.176 35.5105 41.1488 35.6485C41.1216 35.7865 41.1293 35.9291 41.1714 36.0633C41.5654 37.3202 41.7657 38.6297 41.7656 39.9469Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M16.2911 35.9898C16.3316 35.8638 16.3418 35.7299 16.3208 35.5991C16.2999 35.4683 16.2483 35.3443 16.1704 35.2372C16.0925 35.13 15.9904 35.0428 15.8724 34.9826C15.7544 34.9224 15.6239 34.8908 15.4914 34.8906H15.4712C13.9632 34.8913 12.4899 35.3432 11.2408 36.1879C9.99161 37.0327 9.02365 38.2318 8.46148 39.631C8.40989 39.7588 8.39057 39.8974 8.40506 40.0344C8.41955 40.1714 8.46743 40.3028 8.54457 40.417C8.62171 40.5312 8.72566 40.6247 8.84739 40.6894C8.96905 40.754 9.10478 40.7877 9.24254 40.7876H14.8316C15.0548 40.7876 15.2688 40.6989 15.4267 40.5411C15.5845 40.3832 15.6732 40.1691 15.6732 39.9459C15.6726 38.6031 15.8811 37.2685 16.2911 35.9898Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M24.6457 29.5232C24.7113 29.5634 24.7645 29.6207 24.7997 29.689C24.835 29.7573 24.8509 29.8339 24.8457 29.9105C24.8405 29.9872 24.8144 30.061 24.7703 30.1239C24.7261 30.1867 24.6655 30.2364 24.5952 30.2673C22.6983 31.0772 21.081 32.4262 19.9438 34.147C18.8066 35.8676 18.1996 37.8844 18.1982 39.947C18.1982 40.1702 18.2869 40.3843 18.4448 40.5421C18.6026 40.7 18.8167 40.7886 19.0399 40.7886H38.3993C38.6225 40.7886 38.8366 40.7 38.9945 40.5421C39.1523 40.3843 39.241 40.1702 39.241 39.947C39.2375 37.8813 38.6266 35.8623 37.4844 34.1412C36.3422 32.4201 34.7191 31.0729 32.817 30.2673C32.7459 30.2364 32.6847 30.1866 32.64 30.1232C32.5953 30.0599 32.5689 29.9855 32.5637 29.9081C32.5585 29.8308 32.5746 29.7534 32.6104 29.6847C32.6462 29.6159 32.7002 29.5583 32.7666 29.5182C34.268 28.6264 35.4349 27.2659 36.0877 25.6462C36.7405 24.0264 36.843 22.237 36.3796 20.5533C35.9161 18.8695 34.9122 17.3847 33.5225 16.3272C32.1327 15.2697 30.434 14.698 28.6877 14.7002C26.9414 14.7024 25.2441 15.2783 23.857 16.3393C22.4699 17.4002 21.4698 18.8875 21.0105 20.5724C20.5512 22.2573 20.6582 24.0464 21.315 25.6645C21.9718 27.2826 23.1421 28.6401 24.6457 29.5282V29.5232ZM24.0902 22.67C24.0902 22.3517 24.1258 22.0344 24.1963 21.7239C24.2255 21.594 24.2852 21.4728 24.3703 21.3705C24.4555 21.2681 24.5637 21.1874 24.6861 21.135C24.8086 21.0825 24.9416 21.0599 25.0745 21.0689C25.2073 21.078 25.3362 21.1184 25.4504 21.1869C27.064 22.1583 28.9119 22.6711 30.7952 22.67C31.2877 22.6696 31.7795 22.633 32.2666 22.5606C32.3981 22.5409 32.5324 22.5527 32.6585 22.5949C32.7846 22.6372 32.8989 22.7086 32.992 22.8036C33.0852 22.8985 33.1545 23.0142 33.1943 23.1411C33.2341 23.2679 33.2433 23.4025 33.2211 23.5336C33.0071 24.6607 32.3802 25.6675 31.463 26.3567C30.5459 27.0459 29.4045 27.368 28.2624 27.26C27.1202 27.152 26.0595 26.6216 25.2878 25.7727C24.5161 24.9236 24.089 23.8173 24.0902 22.67Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M41.1266 33.2135C42.0932 33.2194 43.0377 32.9244 43.8292 32.3695C44.6206 31.8146 45.2198 31.0272 45.5438 30.1164C45.8677 29.2057 45.9003 28.2168 45.637 27.2868C45.3737 26.3567 44.8276 25.5315 44.0744 24.9257C43.3211 24.32 42.3981 23.9635 41.4331 23.9058C40.4682 23.8481 39.5093 24.092 38.6893 24.6037C37.8691 25.1154 37.2286 25.8695 36.8564 26.7616C36.4841 27.6537 36.3986 28.6394 36.6117 29.5823C36.848 30.6062 37.4216 31.5209 38.2405 32.1795C39.0594 32.8381 40.0758 33.2023 41.1266 33.2135Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M15.4712 33.2129C18.0279 33.2129 20.1006 31.1402 20.1006 28.5835C20.1006 26.0267 18.0279 23.9541 15.4712 23.9541C12.9144 23.9541 10.8418 26.0267 10.8418 28.5835C10.8418 31.1402 12.9144 33.2129 15.4712 33.2129Z"
                                        fill="currentcolor"
                                    />
                                    <path
                                        d="M28.2989 28.5546C31.1994 28.5546 33.5508 26.2033 33.5508 23.3027C33.5508 20.4022 31.1994 18.0508 28.2989 18.0508C25.3983 18.0508 23.047 20.4022 23.047 23.3027C23.047 26.2033 25.3983 28.5546 28.2989 28.5546Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Pricing */}
            {/* < section id="pricing" className="scroll-mt-20 bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20 lg:scroll-mt-24" >
                <div className="container">
                    <div className="mb-10">
                        <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                            <span className="text-primary">/</span> Pricing
                        </h6>
                        <h2 className="text-3xl font-black leading-tight text-black dark:text-white md:text-[40px]">Pricing for Custom Projects</h2>
                    </div>
                    <div
                        className="mt-14 grid grid-cols-1 justify-between gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-7"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-primary bg-white p-7 duration-200 hover:bg-primary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-primary">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto inline-flex -translate-x-1/2 justify-between rounded-[78px] bg-primary px-8 py-4 text-white">
                                <h5 className="text-[22px] font-black">Inspect</h5>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Existing Site Bug Fixes & Improvements</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">SEO Improvements</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Site Wide Bug Fixes</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Google Analytics Setup</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Performance Optimization</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Figma Implementation</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Adding Responsiveness</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn px-[26px] py-[19px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-primary"
                                >
                                    $30<span className="text-sm font-bold">/hr</span>
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm text-black group-hover:text-white">Billed After Completion</h5>
                        </div>
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-transparent bg-black p-7 text-white duration-200 hover:border-2 hover:border-black hover:bg-white hover:text-black dark:bg-white/5 dark:hover:border-white dark:hover:text-white">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-gray px-8 py-4 text-white">
                                <h5 className="text-[22px] font-black">Static</h5>
                            </div>
                            <div className="absolute top-0 group-hover:text-black ltr:right-0 rtl:left-0 dark:group-hover:text-white">
                                <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M39 0L43.7406 12.1147L52.3388 2.35199L52.65 15.3575L64.0687 9.12427L59.913 21.4519L72.775 19.5L64.6536 29.6628L77.4075 32.2277L66.3 39L77.4075 45.7723L64.6536 48.3372L72.775 58.5L59.913 56.5481L64.0687 68.8757L52.65 62.6425L52.3388 75.648L43.7406 65.8853L39 78L34.2594 65.8853L25.6612 75.648L25.35 62.6425L13.9313 68.8757L18.087 56.5481L5.22501 58.5L13.3464 48.3372L0.592499 45.7723L11.7 39L0.592499 32.2277L13.3464 29.6628L5.22501 19.5L18.087 21.4519L13.9313 9.12427L25.35 15.3575L25.6612 2.35199L34.2594 12.1147L39 0Z"
                                        fill="currentcolor"
                                        fillOpacity="0.12"
                                    />
                                    <path
                                        d="M32.6583 23.032V33H31.0623V26.812L28.4163 33H27.2263L24.5663 26.882V33H22.9703V23.032H24.3983L27.8283 30.83L31.2303 23.032H32.6583ZM37.9168 33.112C37.1981 33.112 36.5635 32.9627 36.0128 32.664C35.4715 32.3653 35.0515 31.9407 34.7528 31.39C34.4635 30.83 34.3188 30.1767 34.3188 29.43C34.3188 28.6833 34.4635 28.0347 34.7528 27.484C35.0515 26.924 35.4715 26.4947 36.0128 26.196C36.5635 25.8973 37.1981 25.748 37.9168 25.748C38.6261 25.748 39.2515 25.8973 39.7928 26.196C40.3341 26.4947 40.7495 26.924 41.0388 27.484C41.3375 28.0347 41.4868 28.6833 41.4868 29.43C41.4868 30.1767 41.3375 30.83 41.0388 31.39C40.7495 31.9407 40.3341 32.3653 39.7928 32.664C39.2515 32.9627 38.6261 33.112 37.9168 33.112ZM37.9028 31.74C38.5001 31.74 38.9528 31.5487 39.2608 31.166C39.5781 30.774 39.7368 30.1953 39.7368 29.43C39.7368 28.674 39.5781 28.1 39.2608 27.708C38.9435 27.3067 38.4955 27.106 37.9168 27.106C37.3288 27.106 36.8761 27.3067 36.5588 27.708C36.2415 28.1 36.0828 28.674 36.0828 29.43C36.0828 30.1953 36.2368 30.774 36.5448 31.166C36.8621 31.5487 37.3148 31.74 37.9028 31.74ZM45.5859 33.112C44.3073 33.112 43.2899 32.8133 42.5339 32.216L43.0239 30.984C43.7799 31.544 44.6433 31.824 45.6139 31.824C46.0339 31.824 46.3559 31.754 46.5799 31.614C46.8133 31.474 46.9299 31.278 46.9299 31.026C46.9299 30.8113 46.8506 30.6433 46.6919 30.522C46.5333 30.3913 46.2626 30.2793 45.8799 30.186L44.7039 29.92C43.4159 29.64 42.7719 28.982 42.7719 27.946C42.7719 27.5167 42.8933 27.1387 43.1359 26.812C43.3786 26.476 43.7193 26.2147 44.1579 26.028C44.5966 25.8413 45.1053 25.748 45.6839 25.748C46.1879 25.748 46.6733 25.8273 47.1399 25.986C47.6066 26.1353 48.0173 26.3547 48.3719 26.644L47.8539 27.834C47.1446 27.3113 46.4166 27.05 45.6699 27.05C45.2686 27.05 44.9559 27.1247 44.7319 27.274C44.5079 27.4233 44.3959 27.6287 44.3959 27.89C44.3959 28.0953 44.4613 28.2587 44.5919 28.38C44.7319 28.5013 44.9653 28.604 45.2919 28.688L46.4959 28.954C47.1959 29.1127 47.7046 29.36 48.0219 29.696C48.3486 30.0227 48.5119 30.452 48.5119 30.984C48.5119 31.6373 48.2506 32.1553 47.7279 32.538C47.2053 32.9207 46.4913 33.112 45.5859 33.112ZM52.1673 27.246V30.41C52.1673 31.2407 52.5546 31.656 53.3293 31.656C53.5439 31.656 53.7773 31.6187 54.0293 31.544V32.93C53.7213 33.042 53.3479 33.098 52.9093 33.098C52.1066 33.098 51.4906 32.874 51.0613 32.426C50.6319 31.978 50.4173 31.334 50.4173 30.494V27.246H49.0593V25.93H50.4173V24.208L52.1673 23.62V25.93H54.0433V27.246H52.1673ZM19.0895 43.748C19.6961 43.748 20.2328 43.9067 20.6995 44.224C21.1755 44.532 21.5441 44.9707 21.8055 45.54C22.0761 46.1 22.2115 46.744 22.2115 47.472C22.2115 48.2 22.0808 48.8393 21.8195 49.39C21.5581 49.9407 21.1895 50.3653 20.7135 50.664C20.2468 50.9627 19.7055 51.112 19.0895 51.112C18.5761 51.112 18.1188 51.0047 17.7175 50.79C17.3161 50.566 17.0081 50.258 16.7935 49.866V54.024H15.0575V45.932C15.0575 45.1853 15.0201 44.518 14.9455 43.93H16.5835L16.7235 45.148C16.9101 44.7093 17.2135 44.3687 17.6335 44.126C18.0535 43.874 18.5388 43.748 19.0895 43.748ZM18.6135 49.74C19.2015 49.74 19.6541 49.544 19.9715 49.152C20.2888 48.76 20.4475 48.2 20.4475 47.472C20.4475 46.7347 20.2888 46.1607 19.9715 45.75C19.6541 45.33 19.2061 45.12 18.6275 45.12C18.0301 45.12 17.5728 45.3207 17.2555 45.722C16.9381 46.1233 16.7795 46.6973 16.7795 47.444C16.7795 48.1813 16.9381 48.7507 17.2555 49.152C17.5728 49.544 18.0255 49.74 18.6135 49.74ZM26.9451 51.112C26.2264 51.112 25.5918 50.9627 25.0411 50.664C24.4998 50.3653 24.0798 49.9407 23.7811 49.39C23.4918 48.83 23.3471 48.1767 23.3471 47.43C23.3471 46.6833 23.4918 46.0347 23.7811 45.484C24.0798 44.924 24.4998 44.4947 25.0411 44.196C25.5918 43.8973 26.2264 43.748 26.9451 43.748C27.6544 43.748 28.2798 43.8973 28.8211 44.196C29.3624 44.4947 29.7778 44.924 30.0671 45.484C30.3658 46.0347 30.5151 46.6833 30.5151 47.43C30.5151 48.1767 30.3658 48.83 30.0671 49.39C29.7778 49.9407 29.3624 50.3653 28.8211 50.664C28.2798 50.9627 27.6544 51.112 26.9451 51.112ZM26.9311 49.74C27.5284 49.74 27.9811 49.5487 28.2891 49.166C28.6064 48.774 28.7651 48.1953 28.7651 47.43C28.7651 46.674 28.6064 46.1 28.2891 45.708C27.9718 45.3067 27.5238 45.106 26.9451 45.106C26.3571 45.106 25.9044 45.3067 25.5871 45.708C25.2698 46.1 25.1111 46.674 25.1111 47.43C25.1111 48.1953 25.2651 48.774 25.5731 49.166C25.8904 49.5487 26.3431 49.74 26.9311 49.74ZM36.0563 43.748C36.6629 43.748 37.1996 43.9067 37.6663 44.224C38.1423 44.532 38.5109 44.9707 38.7723 45.54C39.0429 46.1 39.1783 46.744 39.1783 47.472C39.1783 48.2 39.0476 48.8393 38.7863 49.39C38.5249 49.9407 38.1563 50.3653 37.6803 50.664C37.2136 50.9627 36.6723 51.112 36.0563 51.112C35.5429 51.112 35.0856 51.0047 34.6843 50.79C34.2829 50.566 33.9749 50.258 33.7603 49.866V54.024H32.0243V45.932C32.0243 45.1853 31.9869 44.518 31.9123 43.93H33.5503L33.6903 45.148C33.8769 44.7093 34.1803 44.3687 34.6003 44.126C35.0203 43.874 35.5056 43.748 36.0563 43.748ZM35.5803 49.74C36.1683 49.74 36.6209 49.544 36.9383 49.152C37.2556 48.76 37.4143 48.2 37.4143 47.472C37.4143 46.7347 37.2556 46.1607 36.9383 45.75C36.6209 45.33 36.1729 45.12 35.5943 45.12C34.9969 45.12 34.5396 45.3207 34.2223 45.722C33.9049 46.1233 33.7463 46.6973 33.7463 47.444C33.7463 48.1813 33.9049 48.7507 34.2223 49.152C34.5396 49.544 34.9923 49.74 35.5803 49.74ZM47.1459 43.93V51H45.4379V49.908C45.2139 50.3 44.9152 50.5987 44.5419 50.804C44.1686 51.0093 43.7392 51.112 43.2539 51.112C41.5272 51.112 40.6639 50.1413 40.6639 48.2V43.93H42.3999V48.214C42.3999 48.7273 42.5026 49.1053 42.7079 49.348C42.9226 49.5907 43.2492 49.712 43.6879 49.712C44.2012 49.712 44.6119 49.544 44.9199 49.208C45.2279 48.872 45.3819 48.424 45.3819 47.864V43.93H47.1459ZM49.0458 40.696H50.7818V51H49.0458V40.696ZM59.4581 43.93V51H57.7361V49.866C57.5215 50.258 57.2135 50.566 56.8121 50.79C56.4108 51.0047 55.9535 51.112 55.4401 51.112C54.8241 51.112 54.2781 50.9627 53.8021 50.664C53.3261 50.3653 52.9575 49.9407 52.6961 49.39C52.4348 48.8393 52.3041 48.2 52.3041 47.472C52.3041 46.744 52.4348 46.1 52.6961 45.54C52.9668 44.9707 53.3401 44.532 53.8161 44.224C54.2921 43.9067 54.8335 43.748 55.4401 43.748C55.9535 43.748 56.4108 43.86 56.8121 44.084C57.2135 44.2987 57.5215 44.602 57.7361 44.994V43.93H59.4581ZM55.9161 49.74C56.4948 49.74 56.9428 49.5393 57.2601 49.138C57.5775 48.7367 57.7361 48.172 57.7361 47.444C57.7361 46.6973 57.5775 46.1233 57.2601 45.722C56.9428 45.3207 56.4901 45.12 55.9021 45.12C55.3235 45.12 54.8708 45.33 54.5441 45.75C54.2268 46.1607 54.0681 46.7347 54.0681 47.472C54.0681 48.2 54.2268 48.76 54.5441 49.152C54.8708 49.544 55.3281 49.74 55.9161 49.74ZM65.1721 43.762C65.4428 43.762 65.6761 43.7993 65.8721 43.874L65.8581 45.47C65.5594 45.3487 65.2514 45.288 64.9341 45.288C64.3368 45.288 63.8794 45.4607 63.5621 45.806C63.2541 46.1513 63.1001 46.6087 63.1001 47.178V51H61.3641V45.932C61.3641 45.1853 61.3268 44.518 61.2521 43.93H62.8901L63.0301 45.176C63.2074 44.7187 63.4874 44.3687 63.8701 44.126C64.2528 43.8833 64.6868 43.762 65.1721 43.762Z"
                                        fill="currentcolor"
                                    />
                                </svg>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Upto 5 Responsive Static Pages</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">100 SEO Score</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">90+ Page Load Speed</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Includes Hosting</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Google Analytic Reports</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Free Website Copywriting</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">1 Free Logo Design</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn bg-white px-[26px] py-[19px] text-[22px] font-black text-black group-hover:bg-black group-hover:text-white"
                                >
                                    $1,200
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm">50% Upfront</h5>
                        </div>
                        <div className="group relative space-y-6 rounded-[32px] border-2 border-secondary bg-white p-7 duration-200 hover:bg-secondary hover:text-white dark:border-gray/[0.1] dark:bg-gray-dark dark:hover:border-secondary">
                            <div className="item-center absolute -top-[30px] left-1/2 mx-auto flex -translate-x-1/2 justify-between rounded-[78px] bg-secondary px-8 py-4 text-white">
                                <h5 className="text-[20px] font-black md:text-[22px]">Full-Stack</h5>
                            </div>
                            <div className="mt-14 flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">NextJS Fullstack</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Optional Express or Fastify Backend</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">100 SEO Score</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Your Choice of Database</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Google Analytics Setup</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Highly Optimized Performance</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="8" r="8" fill="#45B649" />
                                        <path
                                            d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                            stroke="white"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Database + Data Encryption</p>
                                </div>
                            </div>
                            <div className="my-7 h-[2px] bg-gray/10"></div>
                            <div className="text-center">
                                <button
                                    type="button"
                                    className="btn bg-secondary px-[26px] py-[19px] text-[22px] font-black text-white group-hover:bg-white group-hover:text-secondary"
                                >
                                    $3,500+<span className="text-sm font-bold">/Month</span>
                                </button>
                            </div>
                            <h5 className="font-blod mt-4 text-center text-sm text-black group-hover:text-white">Billed every month</h5>
                        </div>
                    </div>
                </div>
            </section > */}

            {/* Contact */}
            < section id="contact" className="scroll-mt-20 bg-black py-10 md:py-0 lg:scroll-mt-24" >
                <div className="container">
                    <div className="grid items-center pb-10 md:grid-cols-2">
                        <div className="py-5">
                            <div className="text-center md:ltr:text-left md:rtl:text-right lg:w-3/4">
                                <div className="mb-2">
                                    <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                                        <span className="text-primary">/</span> get started
                                    </h6>
                                    <h2 className="text-3xl font-black leading-tight text-white md:text-[40px]">Let Me Help You With Your Next Big Thing</h2>
                                </div>
                                <ul className="mt-8 flex items-center justify-center gap-6 md:justify-start">
                                    <li>
                                        <Link href={process.env.NEXT_PUBLIC_DISCORD} target="_blank">
                                            <BsDiscord className="text-3xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>

                                    </li>
                                    <li>
                                        <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank">
                                            <BsLinkedin className="text-3xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={process.env.NEXT_PUBLIC_GITHUB} target="_blank">
                                            <BsGithub className="text-4xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}>
                                            <MdEmail className="text-4xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>
                                    </li>
                                    {/* <li>
                                        <Link href={process.env.NEXT_PUBLIC_LINKEDIN} target="_blank">
                                            <BsLinkedin className="text-3xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href={process.env.NEXT_PUBLIC_PDF}>
                                            <HiDocumentText className="text-4xl text-secondary transition hover:scale-110 hover:text-primary" />
                                        </Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-10 pr-4 md:pr-12">
                            <img src="/assets/images/personal-portfolio/contact-email.png" alt="" data-aos="fade-down" data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default PersonalPortfolio;
