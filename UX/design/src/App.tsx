import React from 'react';
import './App.css';
import {Tabs} from "./components/tabs/Tabs";
import {Tab} from "./components/tabs/tab/Tab";
import {TabContent} from "./components/tabs/tabcontent/TabContent";
import {Editor} from "./components/editor/Editor";
import {Tree} from "./components/tree/Tree";
import {ErrorOutput} from "./components/erroroutput/ErrorOutput";
import {Help} from "./components/help/Help";



function App() {
  return (
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row h-lvh gap-4 m-4">



        <div className="flex flex-col h-full sm:h-full md:w-2/3 lg:md:w-2/3 gap-4">
          <Editor></Editor>
          <Tree></Tree>
        </div>

        <div className="flex flex-col h-full sm:h-full md:w-1/3 lg:w-1/3 gap-4">
          <ErrorOutput></ErrorOutput>
          <Help></Help>
        </div>

      </div>
  )
}

export default App;
