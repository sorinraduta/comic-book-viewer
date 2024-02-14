import { FC } from 'react';
import { useRouter }  from 'next/router';

interface IComicBookViewerProps {

}

const ComicBookViewer: FC<IComicBookViewerProps> = (props) => {
  const { push } = useRouter();

  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <h1 className="block text-xl pb-10">Comic book viewer</h1>
      <button className="py-2 px-5 border-2 rounded-md" onClick={() => push('/demo1')}>DEMO 1: react-pageflip (images)</button>
      <button className="py-2 px-5 border-2 rounded-md" onClick={() => push('/demo2')}>DEMO 2: react-pdf-js (PDF)</button>
    </div>
  );
};

export default ComicBookViewer;
