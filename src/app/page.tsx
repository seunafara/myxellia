"use client"
import Calendar from '@/components/Calendar';
import Carousel from '@/components/Carousel';
import Header from '@/components/Header';
import Modal from '@/components/modals';
import BudgetingModal from '@/components/modals/Budgeting';
import Navigation from '@/components/Navigation';
import Overview from '@/components/Overview';
import ProfilePopup from '@/components/ProfilePopup';
import Welcome from '@/components/Welcome';
import { useState } from 'react';

export default function Home() {
  const carousels = [
    [
      {
        image: '/carousel_item_1.jpg',
        subtitle: 'Most CLICKED',
        title: 'Urban Prime Plaza Premiere',
        isActive: true
      },
      {
        image: '/carousel_item_2.jpg',
        subtitle: 'most wATCHLISTED',
        title: 'Urban Prime Plaza Premiere',
        isActive: false
      },
      {
        image: '/carousel_item_3.jpg',
        subtitle: 'HOTTEST LISTING',
        title: 'Urban Prime Plaza Premiere',
        isActive: false
      }
    ],
    [
      {
        image: '/carousel_item_2.jpg',
        subtitle: 'most wATCHLISTED',
        title: 'Urban Prime Plaza Premiere',
        isActive: true
      },
    ],
    [
      {
        image: '/carousel_item_1.jpg',
        subtitle: 'Most CLICKED',
        title: 'Urban Prime Plaza Premiere',
        isActive: false
      },
      {
        image: '/carousel_item_2.jpg',
        subtitle: 'most wATCHLISTED',
        title: 'Urban Prime Plaza Premiere',
        isActive: false
      },
      {
        image: '/carousel_item_3.jpg',
        subtitle: 'HOTTEST LISTING',
        title: 'Urban Prime Plaza Premiere',
        isActive: true
      }
    ]
  ]
  const navTabs = [
    {
      icon: "/dashboard_icon.svg",
      alt: "Dashboard icon",
      isActive: true,
      title: "Dashboard"
    },
    {
      icon: "/listings_icon.svg",
      alt: "Listings icon",
      title: "Listings",
      disabled: true
    },
    {
      icon: "/users_icon.svg",
      alt: "Users icon",
      title: "Users",
      disabled: true
    },
    {
      icon: "/request_icon.svg",
      alt: "Request icon",
      title: "Request",
      disabled: true
    },
    {
      icon: "/applications_icon.svg",
      alt: "Applications icon",
      title: "Applications",
      disabled: true
    },
  ]
  const overview = {
    sales: {
      "total-inflow": {
        value: "₦120,000,000.00",
        increment: true,
        incrementValue: "2.5",
        styles: {
          title: 'sales-overview-text-blue',
          increment: 'sales-overview-text-green'
        }
      },
      mrr: {
        value: "₦50,000,000.00",
        increment: true,
        incrementValue: "2.5",
        styles: {
          title: 'sales-overview-text-green',
          increment: 'sales-overview-text-green'
        }
      },
      "commission-revenue": {
        value: "₦200,000,000.00",
        increment: false,
        incrementValue: "0.5",
        styles: {
          title: 'sales-overview-text-teal',
          increment: 'sales-overview-text-teal'
        }
      },
      gmv: {
        value: "₦200,000,000.00",
        increment: true,
        incrementValue: "0.5",
        styles: {
          title: 'sales-overview-text-red',
          increment: 'sales-overview-text-red'
        }
      }
    },
    listings: {
      total: "1.8k",
      active: "80",
      archived: "1k"
    },
    users: {
      total: "20.7k",
      riders: "8.5k",
      subscribers: "7.5k"
    },
    tabs: [
      {
        title: '1 Week',
        disabled: true
      },
      {
        title: '1 Month',
        disabled: true
      },
      {
        title: '1 Year',
        isActive: true
      }
    ]
  }
  const overviewTabs = [
    {
      title: '1 Week',
      disabled: true
    },
    {
      title: '1 Month',
      disabled: true
    },
    {
      title: '1 Year',
      isActive: true
    }
  ]
  const [displayCalendar, setDisplayCalendar] = useState(false)
  const [displayProfile, setDisplayProfile] = useState(false)
  const [displayBudgetModal, setDisplayBudgetModal] = useState(false)
  return (
    <>
      <Modal close={() => setDisplayBudgetModal(false) } display={displayBudgetModal}>
        <BudgetingModal setDisplayBudgetModal={setDisplayBudgetModal} />
      </Modal>
      <main className='relative'>
        <Calendar display={displayCalendar} setDisplay={setDisplayCalendar} />
        <ProfilePopup display={displayProfile} />
        <Header 
          setDisplayBudgetModal={setDisplayBudgetModal} 
          setDisplayCalendar={setDisplayCalendar} 
          displayCalendar={displayCalendar} 
          setDisplayProfile={setDisplayProfile}
          displayProfile={displayProfile}
        />
        <Navigation tabs={navTabs} />
        <Welcome />
        <Overview overview={overview} tabs={overviewTabs} />
        <section className='dashboard-carousel-wrapper'>
          {carousels.map((x, idx) => (<Carousel key={idx} items={x} />)) }
        </section>
      </main>
    </>
  );
}
