import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./storage/store";
import * as serviceWorker from "./serviceWorker";
import Application from "./view/Application";
import Counter from "./view/Counter";
import Error404 from "./view/Error404";
import "./index.css";
import TranslationItemDetails from "./components/FormDetails/FormDetails";
import {SliderTimerProvider} from "./Context/SlideTimer/SlideTimerContext";

ReactDOM.render(
    <React.StrictMode>
        <SliderTimerProvider>
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Application}/>
                        <Route exact path="/word/edit/:id" component={TranslationItemDetails}/>
                        <Route exact path="/word/add/" component={TranslationItemDetails}/>
                        <Route exact path="/counter" component={Counter}/>
                        <Route component={Error404}/>
                    </Switch>
                </Router>
            </Provider>
        </SliderTimerProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
