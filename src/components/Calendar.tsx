import Image from "next/image";

const Calendar = (props: { display: boolean; setDisplay: (state: boolean) => void }) => {
  return (
    <div className={`calendar-wrapper ${props.display ? 'block' : 'hidden'}`}>
      <div className="calendar-header flex justify-between bg-[#171717] px-6 py-3">
        <div className="flex space-x-2">
          <Image
            src="/arrow-right-iconly.svg"
            alt="Arrow right icon"
            width={24}
            height={24} 
          />
          <h4 className='text-white text-base font-semibold'>
            Calendar
          </h4>
        </div>
        <button onClick={() => props.setDisplay(false)} className='cursor-pointer'>
          <Image
            src="/close_icon.svg"
            alt="Close icon"
            width={12}
            height={12}
          />
        </button>
      </div>
      <div className="flex items-center justify-around px-4 py-6">
        <Image
          src="/arrow-left.svg"
          alt="Arrow left icon"
          width={24}
          height={24}
        />
        <div className="text-lg text-white">November 2023</div>
        <Image
          src="/arrow-right.svg"
          alt="Arrow right icon"
          width={24}
          height={24}
        />
      </div>
      <div className="flex flex-col px-6">
        <div className="grid grid-cols-7 grid-col-dense">
          <div className="calendar-item-border calendar-item-day !rounded-tr-sm calendar-item-day text-left">Sun</div>
          <div className="calendar-item-border calendar-item-day calendar-item-day text-left">Mon</div>
          <div className="calendar-item-border calendar-item-day calendar-item-day text-left">Tue</div>
          <div className="calendar-item-border calendar-item-day calendar-item-day text-left">Wed</div>
          <div className="calendar-item-border calendar-item-day calendar-item-day text-left">Thu</div>
          <div className="calendar-item-border calendar-item-day calendar-item-day text-left">Fri</div>
          <div className="calendar-item-border calendar-item-day !rounded-tl-sm calendar-item-day text-left">Sat</div>

        </div>
        <div className="grid grid-cols-7 grid-col-dense grid-rows-6">
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">27</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">28</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">29</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">30</a>
          <a href="#" className="calendar-item-border calendar-item-date">1</a>
          <a href="#" className="calendar-item-border calendar-item-date">2</a>
          <a href="#" className="calendar-item-border calendar-item-date">3</a>
          <a href="#" className="calendar-item-border calendar-item-date">4</a>
          <a href="#" className="calendar-item-border calendar-item-date">5</a>
          <a href="#" className="calendar-item-border calendar-item-date">6</a>
          <a href="#" className="calendar-item-border calendar-item-date">7</a>
          <a href="#" className="calendar-item-border calendar-item-date">8</a>
          <a href="#" className="calendar-item-border calendar-item-date">9</a>
          <a href="#" className="calendar-item-border calendar-item-date">10</a>
          <a href="#" className="calendar-item-border calendar-item-date">11</a>
          <a href="#" className="calendar-item-border calendar-item-date">12</a>
          <a href="#" className="calendar-item-border calendar-item-date">13</a>
          <a href="#" className="calendar-item-border calendar-item-date">14</a>
          <a href="#" className="calendar-item-border calendar-item-date">15</a>
          <a href="#" className="calendar-item-border calendar-item-date calendar-today">16</a>
          <a href="#" className="calendar-item-border calendar-item-date">17</a>
          <a href="#" className="calendar-item-border calendar-item-date">18</a>
          <a href="#" className="calendar-item-border calendar-item-date">19</a>
          <a href="#" className="calendar-item-border calendar-item-date">20</a>
          <a href="#" className="calendar-item-border calendar-item-date">21</a>
          <a href="#" className="calendar-item-border calendar-item-date">22</a>
          <a href="#" className="calendar-item-border calendar-item-date text-white">23</a>
          <a href="#" className="calendar-item-border calendar-item-date">24</a>
          <a href="#" className="calendar-item-border calendar-item-date">25</a>
          <a href="#" className="calendar-item-border calendar-item-date">26</a>
          <a href="#" className="calendar-item-border calendar-item-date">27</a>
          <a href="#" className="calendar-item-border calendar-item-date">28</a>
          <a href="#" className="calendar-item-border calendar-item-date">29</a>
          <a href="#" className="calendar-item-border calendar-item-date">30</a>
          <a href="#" className="calendar-item-border calendar-item-date">31</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">1</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">2</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">3</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">4</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">5</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">6</a>
          <a href="#" className="calendar-item-border calendar-item-date text-gray-500">7</a>
        </div>
      </div>
    </div>
  )
}

export default Calendar
