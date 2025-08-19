import Image from "next/image";

const BudgetingModal = (props: { setDisplayBudgetModal: (state: boolean) => void }) => {
  const infos = [
    {
      icon: "/settings_icon.svg",
      alt: "Settings icon",
      title: "Set up annual budgets by account category",
      subtitle: "Allocate funds across income and expense lines with full visibility."
    },
    {
      icon: "/trend-up-icon.svg",
      alt: "Trend Up icon",
      title: "Track actuals vs budget in real time",
      subtitle: "See how your community is performing against plan, month by month."
    },
    {
      icon: "/chart_icon.svg",
      alt: "Chart icon",
      title: "Adjust figures and forecast with ease",
      subtitle: "Edit amounts, apply percentage changes, or roll forward last year’s data—all in one place."
    },
  ]
  return (
    <div className='budgeting-modal-wrapper'>
      <div className="budgeting-modal">
        <div className="budgeting-modal-header">
          <div className="budgeting-modal-icon-wrapper">
            <Image
              src="/budgeting_icon.svg"
              alt="Budgeting icon"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="budgeting-modal-info">
          {infos.map((x, idx) => (<div key={idx} className="flex space-x-3">
            <Image
              src={x.icon}
              alt={x.alt}
              width={24}
              height={24}
            />
            <div className="budgeting-modal-info-text">
              <h2>{x.title}</h2>
              <h6>{x.subtitle}</h6>
            </div>
          </div>))}
          <button onClick={() => props.setDisplayBudgetModal(false)} className='primary-button'>
            Create Budget
          </button>
        </div>
      </div>
    </div>
  )
}

export default BudgetingModal
