import React from 'react';
import { BecomeHostHero, WhoAreBoggleHost, WhyBeHost, GettingStarted, BoggleSupport, FAQSection } from '../../components';

const BecomeHost = () => {
    return ( 
    <div className="w-full h-auto flex flex-col">
        <BecomeHostHero />
        <WhoAreBoggleHost />
        <WhyBeHost />
        <GettingStarted />
        <BoggleSupport />
        <FAQSection />
    </div>
     );
}
 
export default BecomeHost;