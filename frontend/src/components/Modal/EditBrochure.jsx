
import React, { useEffect, useRef } from 'react';
import ImageEditor from 'tui-image-editor';
import 'tui-image-editor/dist/tui-image-editor.css';

export default function EditBrochure({ viewData, setModal }) {
  const editorRef = useRef(null);
  console.log(viewData)

  useEffect(() => {
    if (editorRef.current) {
      const instance = new ImageEditor(editorRef.current, {
        includeUI: {
          loadImage: {
            path: viewData|| "",
            name: 'SampleImage',
          },
          
          theme: {}, // Default theme
          menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'filter'],
          initMenu: 'filter',
          uiSize: {
            width: '90vw',
            height: '90vh',
          },
          menuBarPosition: 'bottom',
        },
        cssMaxWidth: 800,
        cssMaxHeight: 600,
        usageStatistics: false,
      });

      return () => {
        instance.destroy();
      };
    }
  }, [viewData]);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm"
      aria-labelledby="header-3a content-3a"
      aria-modal="true"
      tabIndex="-1"
      role="dialog"
    >
      {/* Modal */}
      <div
        className="flex justify-center rounded bg-white py-6 shadow-xl"
        id="modal"
        role="document"
      >
        <div className="flex flex-col justify-center gap-5">
          <div className="px-8 space-y-5">
            <div
              ref={editorRef}

            ></div>
          </div>
        </div>
        <button
          onClick={() => setModal(false)}
          className="me-3 inline-flex h-10 items-center justify-center justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
          aria-label="close dialog"
        >
          <span className="relative only:-mx-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              role="graphics-symbol"
              aria-labelledby="title-79 desc-79"
            >
              <title id="title-79">Close Modal</title>
              <desc id="desc-79">Close the modal window</desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
