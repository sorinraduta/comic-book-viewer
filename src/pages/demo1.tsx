import { FC, useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Image from 'next/image';

const Demo1: FC = () => {
  const book = useRef();

  return (
    <div className="flex flex-col justify-start items-center">
      <a className="mt-10 text-xl" href="https://github.com/Nodlik/react-pageflip">React pageflip - images</a>
      <HTMLFlipBook ref={book} width={500} height={800}>
        <div className="demoPage"><Image src="/img/1.png" alt="page1" layout='fill' objectFit='contain' /></div>
        <div className="demoPage"><Image src="/img/2.png" alt="page2" layout='fill' objectFit='contain' /></div>
        <div className="demoPage"><Image src="/img/3.png" alt="page3" layout='fill' objectFit='contain' /></div>
        <div className="demoPage"><Image src="/img/4.png" alt="page4" layout='fill' objectFit='contain' /></div>
        <div className="demoPage"><Image src="/img/1.png" alt="page5" layout='fill' objectFit='contain' /></div>
        <div className="demoPage"><Image src="/img/2.png" alt="page6" layout='fill' objectFit='contain' /></div>
      </HTMLFlipBook>
      <div className="flex justify-center w-[500px]">
        <button className="mr-4" onClick={() => book?.current?.pageFlip?.().flipPrev()}>Prev page</button>
        <button className="ml-4" onClick={() => book?.current?.pageFlip?.().flipNext()}>Next page</button>
      </div>
    </div>
  );
};

export default Demo1;
