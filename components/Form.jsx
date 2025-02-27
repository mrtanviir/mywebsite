import  {Button} from './ui/button';
import  {Input} from './ui/input';
import  {Textarea} from './ui/textarea';
import {User, MailIcon , ArrowRightIcon, MessageSquare} from 'lucide-react'

const Form = () => {
  return (
   <form className='flex flex-col gap-y-4'>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type="name" id="name" placeholder="Name" />
            <User className='absolute right-6' size={20} />
        </div>
        {/* mail  */}
        <div className='relative flex items-center'>
            <Input type="email" id="email" placeholder="Email" />
            <MailIcon className='absolute right-6' size={20} />
        </div>
        {/* text area*/}
        <div className='relative flex items-center'>
            <Textarea type="text" id="text" placeholder="Type your text" />
            
        </div>
        <Button className="flex items-center max-w-[166px] gap-x-1">Let's Talk <ArrowRightIcon size={20}/> </Button>
        
   </form>
  )
}

export default Form
