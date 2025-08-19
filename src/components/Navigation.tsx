import Image from "next/image";
import Tabs from './Tabs';

const Navigation = (props: {
  tabs: { icon?: string | undefined; alt?: string | undefined; isActive?: boolean | undefined; title: string; disabled?: boolean | undefined; }[];
}
) => {
  return (
    <nav className='bg-white py-7 content-padding flex justify-between border-b-[#F4F4F5] border-b-[1px]'>
      <Tabs items={props.tabs} />
      <div className="nav-search-wrapper flex bg-[#F5F5F5] px-6 py-3.5 rounded-lg space-x-2 justify-center items-center">
        <Image
          src="/search_icon.svg"
          alt="Search icon"
          width={24}
          height={24}
        />
        <input type="text" placeholder='Search listings, users here...' className='placeholder:text-[#919191] min-w-3xs border-0 outline-0 text-gray-900' />
      </div>
    </nav>
  )
}

export default Navigation
