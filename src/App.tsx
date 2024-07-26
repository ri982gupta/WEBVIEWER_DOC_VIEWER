//-------------------------------------------------------------DEFAULT--------------------------------------------------------------------
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//-----------------------------------------------CHECK LOCAL PDF DISPLAY-------------------------------------------------------------------


// import React from 'react';
// import WebViewerComponent from './WebViewerComponent';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <WebViewerComponent documentPath="RESUME_RG.pdf" />
//       // <WebViewerComponent documentPath="sample2.pdf" />
//     </div>
//   );
// }

// export default App;

//get output, check only pdf 



//---------------------------------------------all files in pdf format-----------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------------------------------------------


// import React from 'react';
// import WebViewerComponent from './WebViewerComponent';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <WebViewerComponent documentPath="Document2.pdf" />
//       <WebViewerComponent documentPath="demo.docx" />
//       <WebViewerComponent documentPath="INTERNET_1.pptx" />
//       <WebViewerComponent documentPath="file_example_XLS_10.xls" />
//     </div>
//   );
// }

// export default App;


// display all files as pdf format



//-----------------------------------------------------------CHECK DOC EDITOR-----------------------------------------------------------------


// import React from 'react';
// import WebViewerComponent from './WebViewerComponent';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <WebViewerComponent documentPath="Document2.docx" />
//     </div>
//   );
// }

// export default App;

// WORKING FOR DOC EDITOR


//----------------------------------------------------------------CHECK DOC FILE-----------------------------------------------------------------



// src/App.tsx
// import React from 'react';
// import WebViewerComponent from './WebViewerComponent';

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <WebViewerComponent documentPath="Document2.doc" />
//     </div>
//   );
// };

// export default App;


// get edited output as pdf


//------------------------------------------------------------------DOC EDITOR----------------------------------------------------------------------

// src/App.tsx
import React from 'react';
import WebViewerComponent from './WebViewerComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <WebViewerComponent />
    </div>
  );
};

export default App;


// get edited output for doc editor


//---------------------------------------------------------------------------------------------------------------------------------------------------

