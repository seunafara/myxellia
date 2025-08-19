import Image from "next/image";
const Header = (props:
  {
    setDisplayBudgetModal: (state: boolean) => void,
    setDisplayCalendar: (state: boolean) => void,
    setDisplayProfile: (state: boolean) => void,
    displayCalendar: boolean,
    displayProfile: boolean
  }
) => (
  <header className='header content-padding bgDarkMain'>
    <div className="header-logo-wrapper">
      <Image
        src="/myxellia_logo.svg"
        alt="Myxellia logo"
        width={172}
        height={26} />
    </div>
    <div className="header-cta-wrapper flex space-x-6">
      <div className="header-cta flex space-x-6">
        <button className='cursor-not-allowed'>
          <Image
            src="/notification_icon.svg"
            alt="Notification icon"
            width={32}
            height={32}
          />
        </button>
        <button className='cursor-pointer' onClick={() => props.setDisplayBudgetModal(true)}>
          <Image
            src="/budgeting_icon.svg"
            alt="Budgeting icon"
            width={32}
            height={32}
          />
        </button>
        <button className='cursor-pointer' onClick={() => props.setDisplayCalendar(!props.displayCalendar)}>
          <Image
            src="/calendar_icon.svg"
            alt="Calendar icon"
            width={32}
            height={32}
          />
        </button>
        <button className='cursor-not-allowed'>
          <Image
            src="/message-notif_icon.svg"
            alt="Message icon"
            width={32}
            height={32}
          />
        </button>
      </div>
      <button onClick={() => props.setDisplayProfile(!props.displayProfile)} className="profile cursor-pointer">
        S
      </button>
    </div>
  </header>
)

export default Header
