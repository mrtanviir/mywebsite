import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text illustration  */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4  ">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello✋
            </div>
            <h1 className=" h1 max-w-md mb-8">Let's Work Together </h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              illo porro quasi.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-top bg-no-repeat"></div>
        </div>
        
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col  mb-12 gap-y-4 xl:gap-y-14 text-base xl:text-lg ">
             {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>yourmail@gmail.com</div>
            </div>
             {/* Address */}
             <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Gazipur, Dhaka, Bangladesh</div>
            </div>
             {/* Phone */}
             <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+88 0132****52</div>
            </div>
          </div>
            <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
