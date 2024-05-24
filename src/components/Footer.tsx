import React from 'react'
import tailwindLogo from '../assets/tailwind.svg'
function Footer() {
    const footerItems = [
        {
            title: 'Getting Started',
            items: [
                'Installation',
                'Editor Setup',
                'Using with Preprocessors',
                'Optimizing for Production',
                'Browser Support',
                'Upgrade Guide',
            ],
        },
        {
            title: 'Core Concepts',
            items: [
                'Utility-First Fundamentals',
                'Handling Hover, Focus, and Other States', 'Responsive Design',
                'Dark Mode',
                'Reusing Styles',
                'Adding Custom Styles',
                'Functions & Directives',
            ],

        },
        {
            title: 'Customization',
            items: [
                'Configuration',
                'Content Configuration',
                'Theme Configuration',
                'Customizing Screens',
                'Customizing Colors',
                'Customizing Spacing',
                'Plugins',
                'Presets',
            ],
        },
        {
            title: 'Community',
            items: [
                'GitHub',
                'Discord',
                'Twitter',
                'YouTube',
            ],
        },

    ]
    return (
        <footer className='pb-16 text-sm leading-6 '>
            <div className='max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700'>
                <div className='flex mb-16 justify-between'>
                    {footerItems.map((footerItem, index) => (
                        <div key={index} className=''>
                            <div className=' mx-10'>
                                <h2 className='dark:text-white text-slate-900 text-lg font-semibold'>{footerItem.title}</h2>
                                <ul className='mt-3 space-y-2'>
                                    {footerItem.items.map((item, index) => (
                                        <li className='text-slate-500 hover:text-slate-900 dark:text-gray-400 dark:hover:text-slate-300' key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div><img src={tailwindLogo} alt="Tailwind Logo" width={200} height={300} className='mt-12' /></div>
            </div>
        </footer>
    )
}

export default Footer