import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import HomePageComponent from "./components/HomePageComponent";

export default function Home() {
  return (
    <div className="bg-[#131317] w-[100%] h-[100%] flex flex-col">

      <div className="text-[#d0d1d5] pt-[7rem] flex flex-col max-md:px-1 items-center gap-1 max-md:gap-4 border-b-2 border-[#5a5861] h-[85.4svh]">
        <h1 className="text-[#ffff] font-bold md:text-[3.5rem] max-md:text-[3.1rem] text-center">Build your component library</h1>
        <p className="text-[#9a989c] text-[1.1rem]">Beautifully designed components that you can copy and <br />
             paste into your apps. Accessible. Customizable. Stable.</p>
        <div className="flex items-center gap-4 my-4">
          <Link href="/"><button className="border-[1px] font-semibold hover:border-[#3b076b] border-[#412a6f] bg-[#160c1f] hover:bg-[#1f0337] transition duration-200 py-[5px] px-[14px] rounded-lg">Get Started</button></Link>
          <Link href="/"><button className="font-semibold flex items-center gap-2 border-[1px] hover:border-[#202529] border-[#4b5763] bg-[#1c2025] hover:bg-[#39414b] transition duration-200 py-[4px] px-[15px] rounded-lg"><FaGithub /> GitHub</button></Link>
        </div>
        <div className="flex items-center justify-center md:mt-16 max-md:mt-10 md:gap-12 max-md:gap-6">
          <img className="md:w-[6rem] max-md:w-[4rem]" src="react js_logo.png" alt="React.js" />
          <img className="md:w-[16rem] max-md:w-[10rem]" src="tailwindcss-logotype-white.png" alt="Tailwind CSS" />
          <img className="md:w-[6rem] max-md:w-[4rem]" src="nextjs.png" alt="Next.js" />
          <img className="md:w-[6rem] max-md:w-[4rem]" src="react-icons.svg" alt="React-Icons" />
        </div>
      </div>

<div className="my-10 md:px-10 max-md:flex flex-col items-center">
      <h1 className="text-[#bcbaba] w-[40%] text-[1rem] mb-8 max-md:mb-14 max-md:text-center max-md:w-[95%]">
      <span className="font-semibold md:text-[3rem] max-md:text-[2.8rem] text-[#9370DB]">Building with blocks</span><br />
          Get started with over 400+ block sections coded with Tailwind CSS and CUI to build high-quality website pages.
      </h1>
      <div className="grid grid-cols-3 gap-9 max-md:grid-cols-1">
          <HomePageComponent src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' name='Reply to an email' />
          <HomePageComponent src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' name='Reply to an email' />
          <HomePageComponent src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' name='Reply to an email' />
          <HomePageComponent src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' name='Reply to an email' />
          <HomePageComponent src='https://flowbite.com/images/application-ui-pages/email-reply-dark.svg' name='Reply to an email' />
      </div>
        <button className="flex items-center gap-2 border-[1px] hover:border-[#170c2f] text-[#D0D1D5] border-[#4b5763] bg-[#1c2025] hover:bg-[#39414b] transition duration-200 py-[4px] px-[15px] rounded-lg text-lg mt-9">Load more pages</button>
</div>

      <div className="my-10 md:px-10 max-md:flex flex-col items-center">
        <h1 className="text-[#bcbaba] w-[40%] text-[1rem] mb-8 max-md:mb-14 max-md:text-center max-md:w-[95%]">
          <span className="font-semibold text-[3rem] text-[#9370DB] max-md:text-[2.8rem]">Components</span><br />
    Get started with over 400+ block sections coded with Tailwind CSS and CUI to build high-quality website pages.
  </h1>

  <div className="grid grid-cols-3 gap-9 max-md:grid-cols-1">
    <HomePageComponent src='https://flowbite.s3.amazonaws.com/block-thumbnails/application/table-headers-dark.svg' name='Reply to an email' />
    <HomePageComponent src='https://flowbite.s3.amazonaws.com/block-thumbnails/application/table-headers-dark.svg' name='Reply to an email' />
    <HomePageComponent src='https://flowbite.s3.amazonaws.com/block-thumbnails/application/table-headers-dark.svg' name='Reply to an email' />
    <HomePageComponent src='https://flowbite.s3.amazonaws.com/block-thumbnails/application/table-headers-dark.svg' name='Reply to an email' />
    <HomePageComponent src='https://flowbite.s3.amazonaws.com/block-thumbnails/application/table-headers-dark.svg' name='Reply to an email' />
  </div>

  <button className="flex items-center gap-2 border-[1px] hover:border-[#170c2f] text-[#D0D1D5] border-[#4b5763] bg-[#1c2025] hover:bg-[#39414b] transition duration-200 py-[4px] px-[15px] rounded-lg text-lg mt-9">Load more components</button>
</div>



    </div>
  );
}
