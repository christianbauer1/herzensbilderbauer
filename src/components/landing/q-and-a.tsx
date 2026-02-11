import Section from "@/components/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ButtonVideo from "@/components/button-video";

export interface FaqProps {
  heading: Heading;
  questionsAndAnswers: { question: React.ReactNode; answer: React.ReactNode }[];
}

export interface Question {
  question: string;
  buttonProps: VideoButton;
}

export function FormattedQuestion({ question, buttonProps }: Question) {
  return (
    <div className="flex flex-row items-center gap-3">
      <p className="flex flex-1">{question}</p>
      <ButtonVideo showPlayButton className="h-7" {...buttonProps} />
    </div>
  );
}

export default function QAndA({ faq }: { faq: FaqProps }) {
  const { heading, questionsAndAnswers } = faq;
  return (
    <Section
      showColorBlurs={false}
      headline={{
        h2: heading.hTag,
        title: heading.title,
      }}
    >
      <Accordion type="single" collapsible className="w-full">
        {questionsAndAnswers.map((q, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{q.question}</AccordionTrigger>
            <AccordionContent>{q.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
