import React from 'react'
import styles from './FAQs.module.css'
import SingleQuestion from '../ui/SingleQuestion'

const FAQs = () => {
    return (
        <>
            <div className={styles['faq-section']}>
                <p>FAQs</p>
                <h1>Common Questions</h1>
                <div className={styles['questions']}>
                    <SingleQuestion que='How does the platform work?' ans='The platform allows hostelers to exchange their belongings with others by creating listings for the items they want to give away and browsing listings for items they need. Users can connect with each other, negotiate the terms of the exchange, and arrange for the exchange of items.'/>
                    <SingleQuestion que='Is it free to use the platform?' ans='Yes, the platform is completely free to use. There are no charges or fees for creating listings, connecting with other users, or making exchanges.'/>
                    <SingleQuestion que='How can I ensure the safety of my belongings during an exchange?' ans='While the platform provides a platform for users to connect and arrange exchanges, it is important to take necessary precautions to ensure the safety of your belongings. We recommend meeting in a public place, inspecting the items before finalizing the exchange, and communicating clearly with the other user to establish trust.'/>
                    <SingleQuestion que='Can I exchange multiple items at once?' ans='Yes, you can exchange multiple items at once. When negotiating with another user, you can discuss and agree upon the terms of the exchange, including the number of items involved.'/>
                    <SingleQuestion que="What if I can't find the item I need on the platform?" ans="If you can't find the item you need on the platform, you can create a listing specifying your requirements. Other users who have the item may reach out to you if they are interested in exchanging it with you."/>
                </div>
            </div>
        </>
    )
}

export default FAQs