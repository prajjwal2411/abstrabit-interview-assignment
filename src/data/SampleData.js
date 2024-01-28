import finserve from '../assets/finserve.png';
import mahindra from '../assets/mahindra.png';
import srf from '../assets/srf.png';
import utkarsh from '../assets/utkarsh.png';

import { PhoneCall, EnvelopeSimple, User, PiggyBank, Money, SignOut } from '@phosphor-icons/react';

export const BookingGridData = [
    {   
        'key': 1,
        'title': 'Utkarsh Small Finance Bank',
        'logo': {'img': utkarsh, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Highest Interest Rate', 
            'f2': 'RBI Insured'
        },
        'interest': '9.10% p.a.',
        'color':{
            'buttonColor': '#58418C',
            'featureBgColor': '#EFDFFF',
            'bgColor': '#F8F0FF'
        }
    },
    {
        'key': 2,
        'title': 'Bajaj Finserve',
        'logo': {'img': finserve, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#1772BB',
            'featureBgColor': '#D7E9F8',
            'bgColor': '#EFF6FF'
        }
    },
    {
        'key': 3,
        'title': 'Shriram Finance',
        'logo': {'img': srf, 'height': 50, 'width': 50},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#010101',
            'featureBgColor': '#DEDEDE',
            'bgColor': '#F4F4F4'
        }
    },
    {
        'key': 4,
        'title': 'Mahindra Finance',
        'logo': {'img': mahindra, 'height': 80, 'width': 80},
        'features': {
            'f1': 'Crisil AAA Rated',
            'f2': 'No Video KYC Required'
        },
        'interest': '8.80% p.a.',
        'color':{
            'buttonColor': '#EA4E14',
            'featureBgColor': '#F8D6D7',
            'bgColor': '#FCEFEF'
        }
    }
]

export const GraphData = [
    ["Investments", "Percentage"],
    ["Bajaj Finserve",25],
    ["Shriram Finance",20],
    ["Mahindra Finance",15],
    ["Utkarsh Small Finance Bank",40],
];

export const FaqData = [
    {
        'title': 'How FDs are taxed',
        'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'link': 'Read more...'
    },
    {
        'title': 'How FDs are taxed',
        'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'link': 'Read more...'
    },
    {
        'title': 'How FDs are taxed',
        'content': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        'link': 'Read more...'
    }
]

export const UpcomingEventsData = [
    {
        'title': 'Video KYC',
        'company': 'Utkarsh SF Bank FD Plan 2',
        'info': 'Scheduled on',
        'date': new Date(2023, 9, 28),
        'deposit': '20,000',
        'tennure': '2 Years',
        'interest': 9.10,
        'options':{
            'button1': 'Complete Now',
            'button2': 'Reschedule'
        }
    },
    {
        'title': 'Pending Payment',
        'company': 'Bajaj Finserv Corp FD 1',
        'info': 'Pay by',
        'date': new Date(2023, 9, 30),
        'deposit': '25,000',
        'tennure': '18 Months',
        'interest': 8.10,
        'options':{
            'button1': 'Pay Now',
            'button2': 'Cancel Application'
        }
    },
    {
        'title': 'Upcoming FD Maturity',
        'company': 'Shriram Finance Corp FD 1',
        'info': 'Renew by',
        'date': new Date(2023, 9, 30),
        'deposit': '25,000',
        'tennure': '18 Months',
        'interest': 8.10,
        'options':{
            'button1': 'Renew Now',
            'button2': 'Compare other FDs'
        }
    }
]

export const HeaderLinksData = [
    {
        'key': 0,
        'label': 'Dashboard',
    },
    {
        'key': 1,
        'label': 'FAQs',
    },
    {
        'key': 2,
        'label': 'Support',
        'dropdown': [
            {
                'icon': <PhoneCall size={24} weight="thin" />,
                'info': {
                    'infoOne': '+91 88777 37777',
                    'infoTwo': '+91 88777 5666',
                }
            },
            {
                'icon': <EnvelopeSimple size={24} weight="thin" />,
                'info': {
                    'infoOne': 'support@silverbullet.in',
                    'infoTwo': 'info@silverbullet.in',
                }
            }
        ]
    }
]

export const ProfileOptionsData = [
    {
        'icon': <User size={32} weight="duotone" />,
        'label': 'My Profile'
    },
    {
        'icon': <PiggyBank size={32} weight="duotone" />,
        'label': 'My FDs'
    },
    {
        'icon': <Money size={32} weight="duotone" />,
        'label': 'My Transactions'
    },
    {
        'icon': <SignOut size={32} weight="duotone" />,
        'label': 'Logout'
    }
]
