'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const ContactAccordion = () => {
    const email = 'duckart@hawaii.edu';
    const itsOffice = 'www.hawaii.edu/its';

    return (
        <Accordion type="single" collapsible className="w-full pt-20 pl-20 pr-20 pb-16">
            <div className="px-20">
                <h3 className="page-title">
              Contact Us
                </h3>
                <div className={"p-2"}/>
                <AccordionItem value="item-1">
                    <AccordionTrigger>For General Help/How-To Questions</AccordionTrigger>
                    <AccordionContent>
                Send email: <a className="text-golden" href={`mailto:${email}`}>{email}</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Reporting Technical Issues/Problems</AccordionTrigger>
                    <AccordionContent>
                Send email: <a className="text-golden" href={`mailto:${email}`}>{email}</a>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Information Technology Services</AccordionTrigger>
                    <AccordionContent>
                See: <a className="text-golden" href={`http://${itsOffice}`} target="_its_office">{itsOffice}</a>
                    </AccordionContent>
                </AccordionItem>
            </div>

        </Accordion>
    );
}

export default ContactAccordion;
