"use client";;
import { useEffect, useState } from 'react';
import { assets } from '@/constant/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styles from "./home.module.css";
import Link from 'next/link';

const tabs = [
    {
        name: 'Project',
        image: assets.home.myLatestProject.suitcase,
        data: [
            {
                slug: "Reward Factory",
                title: "Reward Factory",
                image: "/assets/images/home/myLatestProject/projects/rewardFactory.png",
                repositoryUrl: "https://github.com/jassem-Souey/portfolio",
                demoUrl: "https://rewardfactory.io/",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "Landing Page",
                title: "Landing Page",
                image: "/assets/images/home/myLatestProject/projects/landing.png",
                repositoryUrl: "https://github.com/jassem-Souey/portfolio",
                demoUrl: "https://drive.google.com/file/d/1ixxR1rh_p8C3VlfhGBSCWXoNi533ZZW7/view?usp=sharing",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "Swap Widget",
                title: "Swap Widget",
                image: "/assets/images/home/myLatestProject/projects/swap.png",
                repositoryUrl: "https://github.com/jassem-Souey/portfolio",
                demoUrl: "https://drive.google.com/file/d/1-_6SghMgv-pzY4xxSdgAtF4N77s44r9W/view?usp=drive_link",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "Data Fetching Interface ",
                title: "Data Fetching Interface",
                image: "/assets/images/home/myLatestProject/projects/datafetching.png",
                repositoryUrl: "https://github.com/jassem-Souey/portfolio",
                demoUrl: "https://drive.google.com/file/d/18GFu0plZ79paKMUqWIMLnpdyx1rr9Z2M/view?usp=sharing",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "Some Block Explorer interfaces ",
                title: "Some Block Explorer interfaces",
                image: "/assets/images/home/myLatestProject/projects/block.png",
                demoUrl: "https://drive.google.com/file/d/1mJ_0m3haexTE0Y88iUgzVBHEnZywBBuk/view?usp=sharing",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
               {
                slug: "Ongoing Mern Ecommerce website",
                title: "Ongoing Mern Ecommerce website",
                image: "/assets/images/home/myLatestProject/projects/ecomm.png",
                demoUrl: "https://drive.google.com/file/d/1o63mVRR_JzPIu8IOhA6W-d81A3HeReQu/view?usp=sharing",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "FullStack Team management app ",
                title: "FullStack Team management app ",
                image: "/assets/images/home/myLatestProject/projects/esprit.png",
                demoUrl: "https://drive.google.com/file/d/1uXBSKRnyt7-vJbZWZJ6oCt3Xb7qCa8cH/view?usp=drive_link",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
              {
                slug: "Static Crypto-Related Interface",
                title: "Static Crypto-Related Interface",
                image: "/assets/images/home/myLatestProject/projects/static.png",
                repositoryUrl: "https://github.com/jassem-Souey/portfolio",
                demoUrl: "https://belguith-dashboard.vercel.app/",
                summary:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
                techStacks: [
                  {
                    name: "Next JS",
                    imageUrl:
                      "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png",
                    webUrl: "https://nextjs.org/",
                  },
                  {
                    name: "React JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=123603&format=png",
                    webUrl: "https://reactjs.org/",
                  },
                  {
                    name: "Node JS",
                    imageUrl: "https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png",
                    webUrl: "https://nodejs.org/en/",
                  },
                ],
             
              },
        ]
    },
  
];

tabs.push({
    name: 'More',
    image: assets.home.myLatestProject.rocket,
    data: []
});

export default function SectionMyLatestProject() {
    const [activeTab, setActiveTab] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const router = useRouter();

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tab = urlParams.get('tab');
        if (tab && parseInt(tab) < tabs.length - 1) {
            setActiveTab(parseInt(tab));
        }
    }, [activeTab])

    return (
        <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
            <div className='text-center'>
                <Link href='/project' className='cursor-pointer ' >
                <motion.h2 initial={{ y: 100, opacity: 0 }} 
                animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className=" mb-6 text-4xl 
                font-extrabold md:text-5xl lg:text-6xl bg-transparent  hover:border
                 hover:border-gray-300 rounded-2xl hover:bg-gray-200 font-montserrat
                 text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text"> My Latest Projects</motion.h2>

                </Link>
               
                <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[706px] mx-auto`}>
                    Take a look at something I&apos;ve worked on</motion.p>
            </div>
            <div className='mt-[50px] h-full'>
                <div className='flex flex-col items-center justify-center md:items-start md:flex-row gap-9'>
                    <div className='flex flex-row md:flex-col bg-gray p-3 md:p-[26px] rounded-2xl md:rounded-[25px] gap-x-3 md:gap-x-0 gap-y-[26px]'>
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={index.toString()}
                                className={`relative ${activeTab === index ? 'gradient-bg' : 'bg-white'} w-[75px] h-[75px] md:w-[150px] md:h-[150px] rounded-2xl md:rounded-[25px] flex justify-center items-center shadow-xl overflow-hidden`}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                onClick={() => {
                                    if (index === tabs.length - 1) {
                                        router.push('/project');
                                        return;
                                    }
                                    setActiveTab(index);
                                    window.history.pushState({}, '', `?tab=${index}`);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Image
                                    src={tab.image}
                                    alt=""
                                    width={100}
                                    height={100}
                                    style={{ height: 'auto' }}
                                />
                                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity duration-300 opacity-0 bg-gray/10 backdrop-blur-sm rounded-2xl md:rounded-[25px] hover:opacity-100 md:text-2xl">
                                    <p className={`${activeTab === index ? 'text-white' : 'text-accent'} font-bold transition-colors duration-75 ease-in-out`}>{tab.name}</p>
                                </div>
                            </motion.button>

                        ))}
                    </div>
                    <div className='overflow-hidden'>
                        <div className='bg-gray rounded-[36px] p-[26px] w-full h-[600px] overflow-y-auto'>
                            <div className='grid grid-flow-row grid-cols-12 gap-[26px]'>
                                {tabs.map((tab, tabIndex) =>
                                    tab.data.map((item, dataIndex) =>
                                        activeTab === tabIndex && (
                                            <motion.div
                                                key={dataIndex.toString()}
                                                className="relative col-span-12 overflow-hidden group xl:col-span-6"
                                                initial={{ opacity: 0, x: -50 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.5 }}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <div className="col-span-6">
                                                    <motion.div
                                                        className="bg-white p-[26px] rounded-2xl md:rounded-[25px] h-[261px] overflow-hidden"
                                                        initial={{ opacity: 0, x: -50 }}
                                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                                        transition={{ duration: 0.5, delay: 0.2 + dataIndex * 0.1 }}
                                                    >
                                                        <Image
                                                            className="object-contain w-full h-auto"
                                                            src={item.image}
                                                            alt=""
                                                            width={441}
                                                            height={261}
                                                            priority
                                                        />
                                                    </motion.div>
                                                </div>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 hidden transition-all duration-300 gap-y-2 group-hover:block bg-gray/10 backdrop-blur-sm rounded-2xl'>
                                                    <div className='flex flex-col items-center justify-center w-full h-full select-none lg:select-auto'>
                                                        <p className="p-8 text-xl text-gray-400 font-bold text-center transition-all duration-150 ease-in-out line-clamp-1">{item.title}</p>
                                                      
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
