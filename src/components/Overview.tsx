import Image from "next/image";
import Tabs from './Tabs';
import BarChart from './BarChart';

const Overview = (props: {
  overview: { 
    sales: {
      "total-inflow": {
        value: string;
        increment: boolean;
        incrementValue: string;
        styles: {
          title: string;
          increment: string;
        };
      };
      mrr: {
        value: string;
        increment: boolean;
        incrementValue: string;
        styles: {
          title: string;
          increment: string;
        };
      };
      "commission-revenue": {
        value: string;
        increment: boolean;
        incrementValue: string;
        styles: {
          title: string;
          increment: string;
        };
      };
      gmv: {
        value: string;
        increment: boolean;
        incrementValue: string;
        styles: {
          title: string;
          increment: string;
        };
      };
    };
    listings: {
      total: string;
      active: string;
      archived: string;
    };
    users: {
      total: string;
      riders: string;
      subscribers: string;
    },
  },
  tabs: ({
    title: string;
    disabled: boolean;
    isActive?: undefined;
  } | {
    title: string;
    isActive: boolean;
    disabled?: undefined;
  })[]
}
) => {
  return (
    <section className="dashboard-overview-wrapper grid grid-cols-3 gap-x-5 bg-white px-[78px]">
      <div className="col-span-2 sales-overview border-[1px] border-[#E4E4E4] rounded-2xl">
        <div className="sales-overview-header-wrapper flex flex-col border-b-[1px] border-b-[#E4E4E4] py-4 px-6 space-y-4">
          <div className="sales-overview-header flex justify-between">
            <div className="sales-overview-title space-y-3">
              <h2 className='text-xl text-[#191919] font-semibold'>Sales Overview</h2>
              <h6 className='text-xs text-[#606060]'>Showing overview Jan 2022 - Sep 2022</h6>
            </div>
            <button className='text-xs cursor-not-allowed border-[1px] border-[#D6D6D6] rounded-[72px] text-[#191919] font-medium py-4 px-9'>
              View Transactions
            </button>
          </div>
          <div className="sales-overview-tabs flex self-end">
            <Tabs items={props.tabs} />
          </div>
        </div>
        <div className="sales-overview-body grid grid-cols-2 py-4 px-6 space-x-9">
          {/* <div className="sales-overview-chart bg-gray-300 h-40 w-80"></div>
           */}
           <BarChart />
          <div className="sales-overview-numbers grid grid-cols-2 gap-x-3.5 gap-y-4">
            {Object.entries(props.overview.sales).map((x, idx) => (<div key={idx} className="sales-overview-numbers-item flex flex-col space-y-2">
              <h2 className={`sales-overview-text ${x[1].styles.title}`}>{x[1].value}</h2>
              <div className="sales-overview-numbers-item-summary flex items-center space-x-2">
                <h6 className={`capitalize`}>{x[0].split("-").join(" ")}</h6>
                {x[1].increment ? (<Image
                  src="/increment_icon.svg"
                  alt="increment icon"
                  width={14}
                  height={14}
                />) : (<Image
                  src="/decrement_icon.svg"
                  alt="decrement icon"
                  width={14}
                  height={14}
                />) }
                <p className={`sales-overview-increment-text ${x[1].styles.increment}`}>{x[1].incrementValue}%</p>
              </div>
            </div>)) }
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 w-full justify-between">
        {Object.entries({ listings: props.overview.listings, users: props.overview.users }).map((x, idx) => (<div key={idx} className="users-overview w-full h-full rounded-2xl border-[1px] border-[#E4E4E4]">
          <div className="flex rounded-tr-2xl rounded-tl-2xl p-4 bg-[#F9FAFB] justify-between px-4 py-3.5">
            <div className="users-overview-title flex space-x-2.5 w-max items-center text-gray-800">
              {x[0] === "users" ? (<Image
                src="/user_icon_blue.svg"
                alt="Users icon"
                width={24}
                height={24}
              />) : (<Image
                  src="/home_icon_blue.svg"
                alt="Home icon"
                width={24}
                height={24}
              />) }
              <h6 className='text-sm font-semibold'>
                <span className='capitalize'>{x[0]}</span> Overview
              </h6>
            </div>
            <a href="#" className='overview-text-link'>
              <p className='text-xs'>View all</p>
              <Image
                src="/arrow_right_icon.svg"
                alt="arrow right icon"
                width={6}
                height={10}
              />
            </a>
          </div>
          <div className="grid grid-cols-3 p-4 py-5">
            {Object.entries(x[1]).map((x, idx) => (<div key={idx} className="users-overview-summary-item flex flex-col">
              <h6>{x[0]}</h6>
              <h2>{x[1]}</h2>
            </div>))}
          </div>
        </div>))}
      </div>
    </section>
  )
}

export default Overview
