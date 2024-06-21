import React, { useEffect } from 'react';

// interface BubbleTextProps {
//   text: string;
// }

const BubbleText = ({ text }: { text: string }) => {
  useEffect(() => {
    const spans = document.querySelectorAll(
      '.hover-text span'
    ) as NodeListOf<HTMLSpanElement>;

    spans.forEach((span) => {
      span.addEventListener('mouseenter', function (this: typeof span) {
        this.style.fontWeight = '900';
        this.style.color = 'rgb(238, 242, 255)';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '500';
          leftNeighbor.style.color = 'rgb(199, 210, 254)';
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '500';
          rightNeighbor.style.color = 'rgb(199, 210, 254)';
        }
      });

      span.addEventListener('mouseleave', function (this: typeof span) {
        this.style.fontWeight = '300';
        this.style.color = 'rgb(238, 242, 255)';

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement;
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '300';
          leftNeighbor.style.color = 'rgb(238, 242, 255)';
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '300';
          rightNeighbor.style.color = 'rgb(238, 242, 255)';
        }
      });
    });
  }, []);

  return (
    <h2 className='hover-text text-center text-sm lg:text-xl'>
      <Text>{text}</Text>
    </h2>
  );
};

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split('').map((child, idx) => (
        <span
          style={{
            transition: '0.35s font-weight, 0.35s color',
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default BubbleText;
