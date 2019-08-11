import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { intlProvider } from "react-intl";
import { addLocaleData } from "react-intl";
import localedMessages from "./services/localization/locales";
import { App } from "./modules";
import { IntlProvider, FormattedMessage } from "react-intl";
import "./styles/main.css";
import "./styles/shared.css";
import "./styles/keyframes.css";
import "./assets/fonts/index.css";

import { UserBoxSender } from "./components";

// import enLocale from "react-intl/locale-data/en";
// import ruLocale from "react-intl/locale-data/ru";

const locale = "en";

// addLocaleData(enLocale);
// addLocaleData(ruLocale);

const messages = {
	simple: "Hello world",
	placeholder: "Hello {name}",
	date: "Hello {ts, date}",
	time: "Hello {ts, time}",
	number: "Hello {num, number}",
	plural: "I have {num, plural, one {# dog} other {# dogs}}",
	select: "I am a {gender, select, male {boy} female {girl}}",
	selectordinal: `I am the {order, selectordinal, 
		  one {#st person} 
		  two {#nd person}
		  =3 {#rd person} 
		  other {#th person}
	  }`,
	richtext: "I have <bold>{num, plural, one {# dog} other {# dogs}}</bold>",
};

const ROOT_ELEMENT = document.getElementById("root");
const store = createAppStore();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<IntlProvider locale="en" messages={messages}>
				<p>
					<FormattedMessage id="simple" />
					<br />
					<FormattedMessage id="placeholder" values={{ name: "John" }} />
					<br />
					<FormattedMessage id="date" values={{ ts: Date.now() }} />
					<br />
					<FormattedMessage id="time" values={{ ts: Date.now() }} />
					<br />
					<FormattedMessage id="number" values={{ num: Math.random() * 1000 }} />
					<br />
					<FormattedMessage id="plural" values={{ num: 1 }} />
					<br />
					<FormattedMessage id="plural" values={{ num: 99 }} />
					<br />
					<FormattedMessage id="select" values={{ gender: "male" }} />
					<br />
					<FormattedMessage id="select" values={{ gender: "female" }} />
					<br />
					<FormattedMessage id="selectordinal" values={{ order: 1 }} />
					<br />
					<FormattedMessage id="selectordinal" values={{ order: 2 }} />
					<br />
					<FormattedMessage id="selectordinal" values={{ order: 3 }} />
					<br />
					<FormattedMessage id="selectordinal" values={{ order: 4 }} />
					<br />
					<FormattedMessage id="richtext" values={{ num: 99, bold: (...chunks) => <strong>{chunks}</strong> }} />
				</p>
			</IntlProvider>
		</BrowserRouter>
	</Provider>,
	ROOT_ELEMENT
);
