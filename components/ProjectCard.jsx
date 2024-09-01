import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import {Github, GithubIcon, Link2Icon} from "lucide-react";
import { Badge } from "./ui/badge";


const ProjectCard = ({project}) => {
  return (
   <div>
     <Card className="group overflow-hidden relative">  
        <CardHeader className="p-0">
            {/* image */}
            <div className="relative w-full h-[320px] flex items-center justify-center dark:bg-secondar/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg=[100%] xl:bg-no-repeat overflow-hidden">
                <Image className="absoulte bottom-0 shadow-2xl"
                src={project.image} width={247} height={250} alt="" priority
                />
                {/* btns */}
                <div className="flex gap-y-4 absolute top-30 right-10 flex-col">
                    <Link className="bg-zinc-800 hover:bg-primary w-[44px] h-[44px] rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" href={project.link}>
                        <Link2Icon className="text-white"/>
                    </Link>
                    <Link className="bg-zinc-800 hover:bg-primary w-[44px] h-[44px] rounded-full flex justify-center items-center scale-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" href={project.github}>
                        <GithubIcon className="text-white"/>
                    </Link>
                </div>
                
            </div>

            
        </CardHeader>
         <div className="h-full px-12 py-8 "> 
                <Badge className="uppercase text-sm font-medium mb-2 absolute top-4 left-5">{project.category}</Badge>
                    <h4 className="h4 mb-1">{project.name}</h4>
                <p className="text-muted-foreground text-lg">{project.description}</p>
            </div>
    </Card>
   </div>
  );
};

export default ProjectCard;
