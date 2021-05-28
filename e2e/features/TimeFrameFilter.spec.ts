import {APPLICATION_URL} from "../model";
import {t} from "testcafe";
import {CountTranslation} from "../model/TranslationList";
import {e2eSelector} from "../util/selector";
import {INCREASE_TIMEFRAME} from "../model/selectors";

fixture("Home").page(APPLICATION_URL);

test("Increase", async () => {
    const initial = await CountTranslation()
    await t.click(e2eSelector(INCREASE_TIMEFRAME))
    const updated = await CountTranslation()
    await t.expect(initial).lte(updated)
});

