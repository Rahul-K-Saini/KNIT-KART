import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./accordion"
const SingleQuestion = (props) => {
    return (
        <>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>{props.que}</AccordionTrigger>
                    <AccordionContent>
                        {props.ans}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}

export default SingleQuestion