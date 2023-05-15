// import { getDictionary } from "../../get-dictionary";
import { getDictionary } from "../../../get-dictionary";

import Counter from "./components/counter";
// import LocaleSwitcher from "./components/locale-switcher";
import LocaleSwitcher from "./components/local-switcher";

export default async function IndexPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  const hm = "";

  return (
    <div>
      <LocaleSwitcher />
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary["server-component"].welcome}
      </p>
      <Counter dictionary={dictionary.counter} />
    </div>
  );
}
