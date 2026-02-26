import { useState } from 'react';

const accordions = [
  {
    title: 'This is sample',
    content: 'My sample content for this sample title',
  },
  {
    title: 'I Love Javascript',
    content: 'Javascript is a dynamically typed language',
  },
];

export const MyAccordion = () => {
  return (
    <div>
      <h1 id="accordion-heading">Demo of an accordion</h1>
      <div id="accordions">
        {accordions.map(acc => (
          <AccordionList title={acc.title} content={acc.content} />
        ))}
      </div>
    </div>
  );
};

export const AccordionList = ({ title, content }) => {
  const [open, setOpen] = useState(false);
  return (
    <div id="list-main">
      <div id="list-sub">
        <h3>{title}</h3>
        <p onClick={() => setOpen(!open)}>{open ? '-' : '+'}</p>
      </div>
      {open && (
        <div id="list-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};
