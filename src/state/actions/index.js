import AppsActions from "./apps";
import SourceActions from "./sources";
import IconsActions from "./icons";

export default {
  ...AppsActions,
  ...SourceActions,
  ...IconsActions,
  FETCH_ALL({ dispatch }) {
    dispatch("GET_ICONS").then(() => {
      dispatch("GET_SOURCES");
      dispatch("GET_APPS");
    });
  },
};
