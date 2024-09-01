import Link from "next/link"
import { Button } from "./ui/button";
import { Download , Send } from "lucide-react";

import{
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri"

import DevImg from "./DevImg";
import Badge from "./Badge";
import Socials from "./Socials";

const Hero = () => {
  return (
    <section className=" py-12 xl:py-24 h-[84vh] xl:pt-28  bg-no-repeat bg-bottom bg-cover dark:bg-none ">
        <div className="container mx-auto">
            <div className="flex justify-between gap-x-8 ">
                {/* text */}
                <div className=" flex max-w-[600px] flex-col  justify-center mx-auto xl:mx-0 text-center xl:text-left">
                    <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Full Stack Web Developer</div>
                    <h1 className="h1 mb-4">Hi, My name is Tanvir</h1>
                    <p className="subtitle max-w-[590px] mx-auto xl:mx-0 ">
                Knowledgeable, data-driven, and adaptive web developer with 2 years’ coding experience and pursuing Bachelor of Science degree in Software Engineering. 
            </p>

                    {/* button */}
                    <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                        <Link href="/contact">
                            <Button className="gap-x-2 ">Contact me <Send size={20}/></Button>
                        </Link>
                        <Link href="MyOwnCV.pdf" download>
                        <Button variant='secondary' className="gap-x-2 ">Download CV <Download size={20}/></Button>
                        </Link>
                    </div>

                    {/* socials */}
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0 ' iconsStyles='text-foreground text-[24px] hover:text-primary transition-all' />
                </div>
                {/* image */}
                <div className="hidden xl:flex relative  rounded-lg">

                    {/* badge-1 */}
                    <Badge containerStyles='absolute top-[89%] right-[17rem]  ' icon={<RiBriefcase4Fill/>} endCountNum={2} badgeText='Years of Experience'/>

                    {/* badge-2 */}
                    <Badge containerStyles='absolute  top-[34%] right-[29rem] ' icon={<RiTodoFill/>} endCountNum={6}   badgeText='Finished Projects'/>
                    {/* badge-3 */}
                    <Badge containerStyles='absolute top-[18%] right-5 ' icon={<RiTeamFill/>} endCountNum={6}  badgeText='Happy Clients'/>

                    
                    <DevImg className='relative mx-auto rounded-lg overflow-hidden ' containerStyles='w-[750px] h-[510px]  border-radius-100 rounded-full  ' imgSrc='/hero/developer.png' />
                </div>
            </div>
            <div className=" hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
  )
}

export default Hero
