'use client';

import{
    RiLinkedinBoxFill,
    RiGithubFill,
    RiFacebookBoxFill,
} from 'react-icons/ri';
import Link from 'next/link';


const icons = [
    {
        path:'https://www.linkedin.com/in/mrtanviir/',
        name:<RiLinkedinBoxFill/>,
    },
    {
        path:'https://github.com/mrtanviir',
        name:<RiGithubFill/>,
    },
    {
        path:'https://www.facebook.com/mrtaanviir/',
        name:<RiFacebookBoxFill/>,
    },
  
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon,index) => {
        return (
            <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
            </Link>
        )
      })}
    </div>
  )
}

export default Socials
