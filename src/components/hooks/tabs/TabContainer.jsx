
import { useState } from "react";
import AboutTab from "./AboutTab";
import ContactTab from "./ContactTab";
import PostsTab from "./PostsTab";

export default function TabContainer() {
    const [tab, setTab] = useState("tab_1");
    //TODO
    return (
        <>
            <button onClick={() => setTab("tab_1")}>Tab 1</button>
            <button onClick={() => setTab("tab_2")}>Tab 2</button>
            <button onClick={() => setTab("tab_3")}>Tab 3</button>
            <hr />
            {tab === "tab_1" && <AboutTab />}
            {tab === "tab_2" && <PostsTab />}
            {tab === "tab_3" && <ContactTab />}
        </>
    );
}
