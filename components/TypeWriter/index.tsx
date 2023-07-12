import { FC, ReactNode, useEffect, useState } from 'react';

export interface MultipleTypeWriterProps {
  contents: ReactNode[];
}

const MultipleTypeWriter: FC<MultipleTypeWriterProps> = ({ contents }) => {
  const [content, setContent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setContent((content + 1) % contents.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [content, contents]);

  useEffect(() => {});
  return (
    <span
      className="flex w-fit overflow-hidden whitespace-nowrap text-3xl text-secondary font-bold animate-fadeIn"
      key={`mtypewriter:${content}`}
    >
      {contents[content]}
    </span>
  );
};

export default MultipleTypeWriter;
