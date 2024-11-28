import {Tabs} from "../tabs/Tabs";
import {Tab} from "../tabs/tab/Tab";
import {TabContent} from "../tabs/tabcontent/TabContent";


export const Tree = () => {
  return (
      <section id="tree">
        <Tabs>
          <Tab label="Tab 1" defaultActive />
          <Tab label="Tab 2" />

          <TabContent label={"Tab 1"} >
            <h1>Tab 1 content</h1>
          </TabContent>

          <TabContent label={"Tab 2"} >
            <h1>Tab 2 content</h1>
          </TabContent>

        </Tabs>
      </section>
  )
}