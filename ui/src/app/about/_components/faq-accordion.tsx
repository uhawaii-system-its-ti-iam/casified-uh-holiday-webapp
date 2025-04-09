'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqAccordion = () => {
    // General Questions
    const email = 'duckart@hawaii.edu';

    // Resources
    const githubRepo = 'https://github.com/uhawaii-system-its-ti-iam/casified-uh-holiday-webapp';
    const holidaysDesignated = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0001.htm';
    const observanceHolidays = 'https://www.capitol.hawaii.gov/hrscurrent/Vol01_Ch0001-0042F/HRS0008/HRS_0008-0002.htm';
    const stateObservedHolidays = 'http://dhrd.hawaii.gov/state-observed-holidays/';
    
    // Technologies
    const springFrameworkGuide = 'https://docs.spring.io/spring-framework/docs/5.3.14/reference/html/';
    const springFrameworkAPI = 'https://docs.spring.io/spring-framework/docs/5.3.14/javadoc-api/';
    const springBootGuide = 'https://docs.spring.io/spring-boot/docs/2.6.2/reference/htmlsingle/';

    return (
        <Accordion type="single" collapsible className="w-full pt-20 pl-20 pr-20 pb-16">
            <div className="px-20">
                <h3 className="page-title">
                    Frequently Asked Questions
                </h3>
                <div className={"p-5"}/>
                <h2 className="category-text">General Questions</h2>
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        Who can answer some basic questions about the application?
                    </AccordionTrigger>
                    <AccordionContent>
                        Send an email to
                        <a className="text-golden" href={`mailto:${email}`}> ITS Web Developers.</a>
                    </AccordionContent>
                </AccordionItem>
                <br/>
                <h4 className="category-text">Resources</h4>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Can I get the source code for this project?</AccordionTrigger>
                    <AccordionContent>
                        Sure thing. It is available at this
                        <a className="text-golden" href={githubRepo} target="_github_repo"> github repository.</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Can I contribute coding modifications to this project?</AccordionTrigger>
                    <AccordionContent>
                        Yes! See the github repository mentioned above.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>How are the dates determined?</AccordionTrigger>
                    <AccordionContent>
                        By state statute. <br/>
                        You take this state document:
                        <a className="text-golden" href={holidaysDesignated} target="_holidays_designated"> Holidays
                            designated</a>,
                        then combine it with this other state document:
                        <a className="text-golden" href={observanceHolidays} target="_observance_holidays"> Observance
                            of holidays</a>.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger>Does the state produce a holiday list?</AccordionTrigger>
                    <AccordionContent>
                        Yes, it does. See
                        <a className="text-golden" href={stateObservedHolidays} target="_state_observed_holidays"> State
                            Observed Holidays</a>.
                    </AccordionContent>
                </AccordionItem>
                <br/>

                <h3 className="category-text">Technologies</h3>
                <AccordionItem value="item-6">
                    <AccordionTrigger>What did you use to create the site?</AccordionTrigger>
                    <AccordionContent>
                        Apache Maven <br/>
                        Apache Tomcat <br/>
                        Axios HTTP <br/>
                        Java 17 <br/>
                        Spring Framework
                        <a className="text-golden" href={springFrameworkGuide} target="_spring_framework_guide"> (Guide)</a>
                        <a className="text-golden" href={springFrameworkAPI} target="_spring_framework_api"> (API)</a> <br/>
                        Spring Boot
                        <a className="text-golden" href={springBootGuide} target="_spring_boot_guide"> (Guide)</a> <br/>
                        React.js <br/>
                        Next.js <br/>
                        Tailwind CSS <br/>
                        shadcn/ui
                    </AccordionContent>
                </AccordionItem>
            </div>
        </Accordion>
    );
}

export default FaqAccordion;
