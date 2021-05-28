import { e2eSelector } from "../util/selector";
import {TranslationItem} from "./selectors";

export async function CountTranslation() {
    return e2eSelector(TranslationItem).count;
}

