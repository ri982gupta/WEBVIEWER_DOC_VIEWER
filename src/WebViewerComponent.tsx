//-------------------------------------------------YT----------------------------------------------------------------------------

// // src/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {
//       // Additional actions with the instance can be done here
//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;


// get output


//---------------------------------------------------------------------------------------------------------------------------------


// // src/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
  
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//       extension: documentPath.split('.').pop()?.toLowerCase(),
//     }, viewerDiv.current as HTMLDivElement).then(instance => {
//       // Additional actions with the instance can be done here
//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;

// get output

// ---------------------------------------------------------------------------------------------------------------------------


// // src/WebViewerComponent.tsx

// import React from 'react';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const fileType = documentPath.split('.').pop()?.toLowerCase();

//   let iframeSrc = '';
//   if (fileType === 'pdf') {
//     iframeSrc = `lib/index.html?file=${documentPath}`;
//   } else {
//     iframeSrc = `https://view.officeapps.live.com/op/embed.aspx?src=${window.location.origin}/${documentPath}`;
//   }

//   return (
//     <div className="webviewer">
//       <iframe src={iframeSrc} width="100%" height="600px" frameBorder="0"></iframe>
//     </div>
//   );
// }

// export default WebViewerComponent;


// not getting output



//-----------------------------------------all files in pdf format------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------



// src/WebViewerComponent.tsx


// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {
//       // Additional actions with the instance can be done here
//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;

//get output


//-----------------------------------------------------------------------------------------------------------------------------------------------------------


// src/WebViewerComponent.tsx

// import React from 'react';
// import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const docs = [{ uri: `${documentPath}` }];

//   return (
//     <div className="webviewer">
//       <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
//     </div>
//   );
// }

// export default WebViewerComponent;

// not getting output


//---------------------------------------------------------------------------------------------------------------------------------

// // src/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {
//       // Additional actions with the instance can be done here
//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;

//get output


//---------------------------------------------------------------------------------------------------------------------------------

// // src/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {

//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;

// get output


//-----------------------------------------------------------------------------------------------------------------------


// // src/components/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   WebViewer({
  //     path: 'lib',
  //     initialDoc: documentPath,
  //     // enableOfficeEditing: true,
  //   }, viewerDiv.current as HTMLDivElement).then(instance => {
  //     instance.UI.loadDocument(documentPath, {
  //       filename: documentPath.split('/').pop(),
  //       // enableOfficeEditing: true,
  //       officeOptions: {
  //         enableOfficeEditing: true,
  //       },
  //     });
  //   });
  // }, [documentPath]);


//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;

// not getting output

//------------------------------------------------------------------------------------------------------------------------

// src/components/WebViewerComponent.tsx

// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//       enableOfficeEditing: true,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {
//       instance.UI.loadDocument(documentPath, {
//         filename: documentPath.split('/').pop(),
//         enableOfficeEditing: true,
//       });
//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;



//not getting output



//------------------------------------------------------------------------------------------------------



// import React, { useRef, useEffect } from 'react';
// import WebViewer from '@pdftron/webviewer';
// import './WebViewerComponent.css';

// interface WebViewerComponentProps {
//   documentPath: string;
// }

// const WebViewerComponent: React.FC<WebViewerComponentProps> = ({ documentPath }) => {
//   const viewerDiv = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     WebViewer({
//       path: 'lib',
//       initialDoc: documentPath,
//     }, viewerDiv.current as HTMLDivElement).then(instance => {

//     });
//   }, [documentPath]);

//   return (
//     <div className="webviewer" ref={viewerDiv}></div>
//   );
// }

// export default WebViewerComponent;


//get output in pdf format
//no edit mode of document 


//-----------------------------------------------------------------------------------------------------------------------------------

// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document2.docx',
//         enableOfficeEditing: true,
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       const { UI } = instance;
//       // Load the document if not loaded initially
//       UI.loadDocument('/Document2.docx', {
//         filename: 'Document2.docx',
//         enableOfficeEditing: true,
//       });
//     });
//   }, []);

//   return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
// };

// export default WebViewerComponent;


// get edited output

// ------------------------------------------------------------------------------------------------------------------------


// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);
//   const fileInput = useRef<HTMLInputElement | null>(null);
//   const instanceRef = useRef<any>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       instanceRef.current = instance;
//       const { UI } = instance;
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         enableOfficeEditing: true,
//       });
//     });
//   }, []);

//   const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => {
//         instanceRef.current.UI.loadDocument(reader.result, {
//           extension: 'doc',
//           filename: file.name,
//           enableOfficeEditing: true,
//         });
//       };
//       reader.readAsArrayBuffer(file);
//     }
//   };

//   const handleSave = () => {
//     instanceRef.current.Core.documentViewer.getDocument().getFileData().then((data: Uint8Array) => {
//       const blob = new Blob([data], { type: 'application/msword' });
//       const link = document.createElement('a');
//       link.href = URL.createObjectURL(blob);
//       link.download = 'EditedDocument.doc';
//       link.click();
//     });
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         ref={fileInput}
//         accept=".doc"
//         onChange={handleFileUpload}
//         style={{ marginBottom: '10px' }}
//       />
//       <button onClick={handleSave} style={{ marginBottom: '10px' }}>Save Document</button>
//       <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default WebViewerComponent;


// we got upload document and save document option



//------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document2.docx',
//         enableOfficeEditing: true,
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       const { UI } = instance;
//       // Load the document if not loaded initially
//       UI.loadDocument('/Document2.docx', {
//         filename: 'Document2.docx',
//         enableOfficeEditing: true,
//       });
//     });
//   }, []);

//   return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
// };

// export default WebViewerComponent;


// edit but not save in same file, it will save in new file




//---------------------------------------------------------------------------------------------------------------------------



// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);
//   const instanceRef = useRef<any>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//         fullAPI: true,  // Ensure the full API is enabled
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       instanceRef.current = instance;
//       const { UI } = instance;

//       // Load the document
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         extension: 'doc',
//       });
//     });
//   }, []);

//   const handleSave = async () => {
//     const docViewer = instanceRef.current.Core.documentViewer;
//     const doc = await docViewer.getDocument().getFileData({
//       downloadType: 'doc',
//     });

//     // Convert Uint8Array to Blob
//     const blob = new Blob([doc], { type: 'application/msword' });

//     // Create FormData object to send the file
//     const formData = new FormData();
//     formData.append('file', blob, 'Document.doc');

//     // Example of saving file using fetch API
//     fetch('/api/saveDocument', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Document saved successfully!');
//       } else {
//         alert('Failed to save document.');
//       }
//     })
//     .catch(error => {
//       console.error('Error saving document:', error);
//       alert('Error saving document.');
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleSave} style={{ marginBottom: '10px' }}>
//         Save Document
//       </button>
//       <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default WebViewerComponent;

//  using api

//------------------------without using api---------------------------------------------------------------------------


// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);
//   const instanceRef = useRef<any>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//         fullAPI: true,  // Ensure the full API is enabled
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       instanceRef.current = instance;
//       const { UI } = instance;

//       // Load the document
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         extension: 'doc',
//       });
//     });
//   }, []);

//   const handleSave = async () => {
//     const docViewer = instanceRef.current.Core.documentViewer;
//     const doc = await docViewer.getDocument().getFileData({
//       downloadType: 'doc',
//     });

//     // Convert Uint8Array to Blob
//     const blob = new Blob([doc], { type: 'application/msword' });

//     // Create a link element to download the Blob
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'Document.doc';
//     a.click();
//     URL.revokeObjectURL(url);

//     // Optionally provide user feedback
//     alert('Document saved successfully!');
//   };

//   return (
//     <div>
//       <button onClick={handleSave} style={{ marginBottom: '10px' }}>
//         Save Document
//       </button>
//       <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default WebViewerComponent;


// we are able to edit the file as pdf but save at diff location

//----------------------------------save at same location ------------------------------------------------------------


// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);
//   const instanceRef = useRef<any>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//         fullAPI: true,  // Ensure the full API is enabled
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       instanceRef.current = instance;
//       const { UI } = instance;

//       // Load the document
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         extension: 'doc',
//       });
//     });
//   }, []);

//   const handleSave = async () => {
//     const docViewer = instanceRef.current.Core.documentViewer;
//     const doc = await docViewer.getDocument().getFileData({
//       downloadType: 'doc',
//     });

//     // Convert Uint8Array to Blob
//     const blob = new Blob([doc], { type: 'application/msword' });

//     // Create a function to save Blob to file
//     const saveBlobToFile = (blob: Blob, filename: string) => {
//       const blobUrl = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = blobUrl;
//       a.download = filename;
//       a.style.display = 'none';
//       document.body.appendChild(a);
//       a.click();
//       URL.revokeObjectURL(blobUrl);
//       document.body.removeChild(a);
//     };

//     // Save the Blob to the file location
//     saveBlobToFile(blob, 'Document.doc');

//     // Optionally provide user feedback
//     alert('Document saved successfully!');
//   };

//   return (
//     <div>
//       <button onClick={handleSave} style={{ marginBottom: '10px' }}>
//         Save Document
//       </button>
//       <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default WebViewerComponent;


// we are able to edit the file as pdf but save at diff location

// we have to implement the server for that


//------------------------------------------------------------------------------------------------------------------------


// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document2.docx',
//         enableOfficeEditing: true,
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       const { UI } = instance;
//       // Load the document if not loaded initially
//       UI.loadDocument('/Document2.docx', {
//         filename: 'Document2.docx',
//         enableOfficeEditing: true,
//       });
//     });
//   }, []);

//   return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
// };

// export default WebViewerComponent;


// .docx is open , edit and downlaod 
// edit but not save in same file, it will save in new file

//----------------------------------------------------------------------------------------------------------------------------



// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       const { UI } = instance;
//       // Load the document if not loaded initially
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         enableOfficeEditing: true,
//       });
//     });
//   }, []);

//   return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
// };

// export default WebViewerComponent;


// .doc is open as pdf format not able to edit and save as doc 



//------------------------------------------------------------using appserver.js--------------------------------------------------------------------


// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const convertAndLoadDocument = async () => {
//       try {
//         // Create a FormData object and append the file
//         const formData = new FormData();
//         const response = await fetch('/Document.doc');
//         const fileBlob = await response.blob();
//         formData.append('file', new Blob([fileBlob], { type: 'application/msword' }), 'Document.doc');

//         // Request server to convert .doc to .docx
//         const convertResponse = await fetch('http://localhost:3000/convert', {
//           method: 'POST',
//           body: formData,
//         });

//         if (convertResponse.ok) {
//           const result = await convertResponse.json();
//           const { filename } = result;

//           // Initialize WebViewer with the converted .docx file
//           WebViewer(
//             {
//               path: '/lib',
//               initialDoc: `http://localhost:3000/${filename}`, // Use the converted .docx file
//               enableOfficeEditing: true,
//             },
//             viewer.current as HTMLDivElement
//           ).then((instance) => {
//             const { Core } = instance;

//             // Handle save button click
//             const saveButton = document.createElement('button');
//             saveButton.textContent = 'Save Document';
//             saveButton.addEventListener('click', async () => {
//               // Get document content
//               const docViewer = Core.documentViewer;
//               const doc = await docViewer.getDocument().getFileData({
//                 downloadType: 'doc',
//               });

//               // Send updated .doc content to server to overwrite original .doc file
//               const saveFormData = new FormData();
//               saveFormData.append('file', new Blob([doc], { type: 'application/msword' }), 'Document.doc');

//               // Save the file using fetch API
//               fetch('http://localhost:3000/download', {
//                 method: 'POST',
//                 body: saveFormData,
//               })
//                 .then((saveResponse) => {
//                   if (saveResponse.ok) {
//                     alert('Document saved successfully as .doc!');
//                   } else {
//                     alert('Failed to save document.');
//                   }
//                 })
//                 .catch((error) => {
//                   console.error('Error saving document:', error);
//                   alert('Error saving document.');
//                 });
//             });

//             // Append save button to the viewer
//             const viewerElement = viewer.current as HTMLElement;
//             viewerElement.appendChild(saveButton);
//           });
//         } else {
//           console.error('Failed to convert document');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     convertAndLoadDocument();
//   }, []);

//   return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
// };

// export default WebViewerComponent;



// not working 


//--------------------------------------------------------with api--------------------------------------------------------------------


// // src/WebViewerComponent.tsx
// import React, { useEffect, useRef } from 'react';
// import WebViewer from '@pdftron/webviewer';

// const WebViewerComponent: React.FC = () => {
//   const viewer = useRef<HTMLDivElement | null>(null);
//   const instanceRef = useRef<any>(null);

//   useEffect(() => {
//     WebViewer(
//       {
//         path: '/lib',
//         initialDoc: '/Document.doc',
//         enableOfficeEditing: true,
//         fullAPI: true,  // Ensure the full API is enabled
//       },
//       viewer.current as HTMLDivElement
//     ).then((instance) => {
//       instanceRef.current = instance;
//       const { UI } = instance;

//       // Load the document
//       UI.loadDocument('/Document.doc', {
//         filename: 'Document.doc',
//         extension: 'doc',
//       });
//     });
//   }, []);

//   const handleSave = async () => {
//     const docViewer = instanceRef.current.Core.documentViewer;
//     const doc = await docViewer.getDocument().getFileData({
//       downloadType: 'doc',
//     });

//     // Convert Uint8Array to Blob
//     const blob = new Blob([doc], { type: 'application/msword' });

//     // Create FormData object to send the file
//     const formData = new FormData();
//     formData.append('file', blob, 'Document.doc');

//     // Example of saving file using fetch API
//     fetch('/api/saveDocument', {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Document saved successfully!');
//       } else {
//         alert('Failed to save document.');
//       }
//     })
//     .catch(error => {
//       console.error('Error saving document:', error);
//       alert('Error saving document.');
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleSave} style={{ marginBottom: '10px' }}>
//         Save Document
//       </button>
//       <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// };

// export default WebViewerComponent;


// not working


//-----------------------------------------------wORKING DOC EDITOR-----------------------------------------------------------------------


import React, { useEffect, useRef } from 'react';
import WebViewer from '@pdftron/webviewer';

const WebViewerComponent: React.FC = () => {
  const viewer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    WebViewer(
      {
        path: '/lib',
        initialDoc: '/Document2.docx',
        enableOfficeEditing: true,
      },
      viewer.current as HTMLDivElement
    ).then((instance) => {
      const { UI } = instance;
      // Load the document if not loaded initially
      UI.loadDocument('/Document2.docx', {
        filename: 'Document2.docx',
        enableOfficeEditing: true,
      });
    });
  }, []);

  return <div className="webviewer" ref={viewer} style={{ height: '100vh' }}></div>;
};

export default WebViewerComponent;


// edit but not save in same file, it will save in new file