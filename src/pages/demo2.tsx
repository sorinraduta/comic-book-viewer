// @ts-nocheck

import React, { useState, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

const Demo2 = () => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const { pdfDocument, pdfPage } = usePdf({
    file: '/pdfs/comic-book.pdf',
    page,
    canvasRef,
  });

  return (
    <div className="flex flex-col justify-center items-center w-[500px] m-auto">
      <a className="my-10 text-xl m-auto" href="https://github.com/Nodlik/react-pageflip">React PDF - PDF</a>
      {!pdfDocument && <span>Loading...</span>}
      <canvas className="" ref={canvasRef} />
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <nav>
          <ul className="mt-5 flex justify-center pager">
            <li className="mr-4 previous">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                Previous
              </button>
            </li>
            <li className="ml-4 next">
              <button
                disabled={page === pdfDocument.numPages}
                onClick={() => setPage(page + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Demo2;
