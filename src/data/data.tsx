// import {
//   AcademicCapIcon,
//   ArrowDownTrayIcon,
//   BuildingOffice2Icon,
//   // CalendarIcon,
//   // FlagIcon,
//   MapIcon,
//   SparklesIcon,
// } from '@heroicons/react/24/outline';
import Image from 'next/image';
// import GithubIcon from '../components/Icon/GithubIcon';
// import FacebookIcon from '../components/Icon/FacebookIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.jpeg';
// import profilePic from 'personal-website/src/images/profilepic.jpg';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpeg';
// import Hero from '../components/Sections/Hero';
// import testimonialImage from '../images/testimonial.webp';
import {
  // About,
  // ContactSection,
  // ContactType,
  Hero,
  HomepageMeta,
  //PortfolioItem,
  // SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Dina's blog",
  description: "An 'About Me' website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'about',
  // About: 'about',
  // Contact: 'contact',
  // Portfolio: 'portfolio',
  Resume: 'updates',
  // Skills: 'skills',
  // Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
// const resume = '../../docs/Dina-Theodosiadou-CV.pdf';

export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Dina Theodosiadou`,
  description: (
    <>
      <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
            <Image alt="about-me-image" className="h-full w-full object-cover" src={profilepic} />
      </div>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a PhD Researcher based at the University of Bath, UK. I'm developing deep learning models for hydrologic predictions related to river flooding. My background is in analytics/software engineering and physics and I love to work on data-driven apps with environmental impact, contributing to the common good. At my free time, I enjoy reading novels, non-fiction, and walking. To get in touch with me, my email is <strong>kt918@bath.ac.uk</strong>.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
  //   {
  //     href: resume,
  //     text: 'Resume',
  //     primary: true,
  //     Icon: ArrowDownTrayIcon,
  //   },
  //   // {
  //   //   href: `#${SectionId.Contact}`,
  //   //   text: 'Contact',
  //   //   primary: false,
  //   // },
  // 
  ],
};

/**
 * About section
 */
// export const aboutData: About = {
//   profileImageSrc: profilepic,
//   description: `I'm developing deep learning models to better understand river flow in the face of extreme weather events and floods. My background is in data science, software engineering and physics and I love to work on data-driven software systems with environmental impact and for the common good.`,
//   aboutItems: [
//     {label: 'Location', text: 'Bath, United Kingdom', Icon: MapIcon},
//     {label: 'Interests', text: 'Reading, Walking, Arts', Icon: SparklesIcon},
//     {label: 'Current studies', text: 'University of Bath', Icon: AcademicCapIcon},
//     {label: 'Past employment', text: 'Arcadis', Icon: BuildingOffice2Icon},
//   ],
// };

/**
 * Skills section
 */
// export const skills: SkillGroup[] = [
//   {
//     name: 'Spoken languages',
//     skills: [
//       {
//         name: 'English',
//         level: 8,
//       },
//       {
//         name: 'German',
//         level: 4,
//       }
//     ],
//   },
//   {
//     name: 'Backend development',
//     skills: [
//       {
//         name: 'Node.js',
//         level: 8,
//       },
//       {
//         name: 'Rust',
//         level: 5,
//       },
//       {
//         name: 'Golang',
//         level: 4,
//       },
//     ],
//   },
//   {
//     name: 'Frontend development',
//     skills: [
//       {
//         name: 'React',
//         level: 9,
//       },
//       {
//         name: 'Typescript',
//         level: 7,
//       },
//       {
//         name: 'GraphQL',
//         level: 6,
//       },
//     ],
//   },
// ];

/**
 * Portfolio section
 */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const update: TimelineItem[] = [
  {
    date: 'July 2025',
    location: 'Bath, UK',
    title: 'Turing GW4: AI, Data Science, Climate, Adaptation and Net Zero',
    content: 'Gave a lightening talk',
  },
  {
    date: 'July 2025',
    location: 'Manchester, UK',
    title: 'RMetS Early Careers and Student Conference 2025',
    content: 'Presented at Machine Learning Applications in Meteorology poster session',
  },
  {
    date: 'May 2025',
    location: 'Vienna, Austria',
    title: 'EGU25 Conference',
    content: 'Presented at Deep Learning in Hydrology poster session',
  }

];

// export const experience: TimelineItem[] = [
//   {
//     date: 'March 2010 - Present',
//     location: 'Awesome Development Company',
//     title: 'Senior UX Engineer',
//     content: (
//       <p>
//         Describe work, special projects, notable achievements, what technologies you have been working with, and
//         anything else that would be useful for an employer to know.
//       </p>
//     ),
//   },
//   {
//     date: 'March 2007 - February 2010',
//     location: 'Garage Startup Studio',
//     title: 'Junior bug fixer',
//     content: (
//       <p>
//         Describe work, special projects, notable achievements, what technologies you have been working with, and
//         anything else that would be useful for an employer to know.
//       </p>
//     ),
//   },
// ];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

// export const contact: ContactSection = {
//   headerText: 'Get in touch.',
//   description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
//   items: [
//     {
//       type: ContactType.Email,
//       text: 'kt918@bath.ac.uk',
//       href: 'mailto:kt918@bath.ac.uk',
//     },
//     {
//       type: ContactType.Location,
//       text: 'Bath, United Kingdom',
//       href: 'https://www.google.com/maps/place/Charlton+Court,+Lower+Bristol+Rd,+Bath+BA2+3ES/@51.3818455,-2.3873206,17z/data=!3m1!4b1!4m6!3m5!1s0x48718136ea731211:0xa45a679074286489!8m2!3d51.3818422!4d-2.3847457!16s%2Fg%2F1tf57b84?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
//     },
//     // {
//     //   type: ContactType.Instagram,
//     //   text: '@tbakerx',
//     //   href: 'https://www.instagram.com/tbakerx/',
//     // },
//     {
//       type: ContactType.Github,
//       text: 'dinaTheo',
//       href: 'https://github.com/dinaTheo',
//     },
//   ],
// };

/**
 * Social items
 */
export const socialLinks: Social[] = [
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/dinatheodosiadou/'},
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/dinaTheo'},
  // {label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/dina.theodosiad/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
