import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Money from "./views/Money";
import Statistics from "./views/Statistics";
import Tags from "./views/Tags";
import NoMatch from "./views/NoMatch";
import styled from "styled-components";
import {Tag} from "./views/Tag";

const AppWrapper = styled.div`
color: #333333;
`;

function App() {
    // @ts-ignore
    return (
        <AppWrapper>
            <Router>
                {/*switch默认渲染区域*/}
                <Switch>
                    {/*exact={true}表示精确匹配*/}
                    <Route path="/tags" exact={true}>
                        <Tags/>
                    </Route>
                    <Route path="/tags/:tags" exact>
                        <Tag/>
                    </Route>
                    <Route path="/money" exact>
                        <Money/>
                    </Route>
                    <Route path="/statistics" exact>
                        <Statistics/>
                    </Route>
                    {/*默认路由*/}
                    <Redirect exact from="/" to="/money"/>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
}

export default App
