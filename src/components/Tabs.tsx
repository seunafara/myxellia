import Image from "next/image";
import { Key } from 'react';

const Tabs = (props: {
  items: {
    icon?: string;
    alt?: string;
    isActive?: boolean;
    title: string;
    disabled?: boolean
  }[]
}) => {
  return (
    <div className="nav-items-wrapper flex space-x-6">
      {props.items.map((x: {
        icon?: string;
        alt?: string;
        isActive?: boolean;
        title: string;
        disabled?: boolean
      }, idx: Key | null | undefined) => (
      <a key={idx} 
      href="#" 
      className={`nav-item ${x.isActive ? 'nav-item-active' : ''} ${x.disabled ? 'cursor-not-allowed' : ''}`}>
        {x.icon ? (<Image
          src={x.icon}
          alt={x.alt || "tab icon"}
          width={20}
          height={20}
        />) : (<></>)}
        <p className=''>
          {x.title}
        </p>
      </a>))}
    </div>
  )
}

export default Tabs
