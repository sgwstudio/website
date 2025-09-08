import ThemeSwitch from "@/components/theme-switch";
import ImageCarousel from "@/components/image-carousel";
import ScrollAnimation from "@/components/scroll-animation";
import { generalData } from "@/data/general";
import { contentData } from "@/data/content";
import type { Content } from "@/data/content";

type ContentProps = Content;

const Content: React.FC<ContentProps> = ({ title, items }) => {
  return (
    <ScrollAnimation direction="up" distance={15} className="my-14 text-sm">
      <h3 className="mb-6">{title}</h3>
      <div className="flex flex-col gap-6">
        {items.map((item, index) => {
          return (
            <ScrollAnimation 
              key={index} 
              direction="up" 
              distance={10} 
              delay={index * 100}
              className="flex"
            >
              <div className="mr-8 max-w-[100px] w-full text-gray-400 dark:text-gray-400">
                {item.date}
              </div>
              <div className="flex flex-col flex-1">
                <h4>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center"
                    >
                      {item.title}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current"
                        ></path>
                      </svg>
                    </a>
                  ) : (
                    item.title
                  )}
                </h4>
                <p className="text-gray-400 dark:text-gray-400">
                  {item.subTitle}
                </p>
                {item.description ? (
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    {item.description}
                  </p>
                ) : null}
                
                         {/* Image Carousel - under the description */}
         {item.images && item.images.length > 0 && (
           <ScrollAnimation 
             direction="up" 
             distance={8} 
             delay={200}
             className="mt-4"
           >
             <ImageCarousel 
               images={item.images} 
               alt={`${item.title} images`}
               className="w-full"
             />
           </ScrollAnimation>
         )}
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </ScrollAnimation>
  );
};

export default function Home() {
  return (
    <>
      <main className="max-w-xl mx-auto px-6 py-20 relative min-h-screen font-light">
        <ScrollAnimation direction="up" distance={20} className="flex items-center">
          <div>
            <h1 className="mb-0.5 text-xl text-gray-900 dark:text-gray-100">
              {generalData.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {generalData.jobTitle}
            </p>
            {generalData.website ? (
              <span className="text-sm text-gray-400 dark:text-gray-400">
                <a
                  href={generalData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {generalData.website
                    .replace(/(^\w+:|^)\/\//, "")
                    .replace("www.", "")}
                </a>
              </span>
            ) : null}
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" distance={15} delay={200} className="my-9 text-sm">
          <h3 className="mb-1 text-gray-900 dark:text-gray-100">About</h3>
          <div className="text-gray-600 dark:text-gray-300">
            <p>{generalData.about}</p>
          </div>
        </ScrollAnimation>
        
        {/* Divider line after About section */}
        <div className="my-8 border-t border-gray-100 dark:border-neutral-700"></div>
        
        {contentData.map((content, index) => {
          return (
            <div key={index}>
              <Content {...content} />
              {/* Add divider line after each content section except the last one */}
              {index < contentData.length - 1 && (
                <div className="my-8 border-t border-gray-100 dark:border-neutral-700"></div>
              )}
            </div>
          );
        })}
        
        {/* Divider line before Contact section */}
        <div className="my-8 border-t border-gray-100 dark:border-neutral-700"></div>
        
        <ScrollAnimation direction="up" distance={15} className="my-14 text-sm">
          <h3 className="mb-6 text-gray-900 dark:text-gray-100">Contact</h3>
          <div className="flex flex-col gap-6">
            {generalData.contacts.map((contact, index) => {
              return (
                <ScrollAnimation 
                  key={index} 
                  direction="up" 
                  distance={8} 
                  delay={index * 50}
                  className="flex"
                >
                  <div className="mr-8 max-w-[100px] w-full text-gray-400 dark:text-gray-400">
                    {contact.label}
                  </div>
                  <div className="flex flex-col flex-1 text-gray-900 dark:text-gray-100">
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex"
                    >
                      {contact.value}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z"
                          className="fill-current text-gray-900 dark:text-gray-100"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </ScrollAnimation>
        
        <div className="px-6 absolute left-0 bottom-6">
          <ThemeSwitch />
        </div>
      </main>
    </>
  );
}
