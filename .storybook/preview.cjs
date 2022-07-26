import {app} from '@storybook/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret ,faHouse} from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret,faHouse);
app.component('font-awesome-icon', FontAwesomeIcon);;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}