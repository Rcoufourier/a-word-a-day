import { t } from "testcafe";
import { e2eSelector } from "../util/selector";
import { COUNTER_VALUE, COUNTER_INCREMENT } from "./selectors";

export class Counter {
  public async increment(): Promise<void> {
    await t.click(e2eSelector(COUNTER_INCREMENT));
    await t.wait(5000)
  }
  public async expectValueToEqual(value: number): Promise<void> {
    await t.expect(e2eSelector(COUNTER_VALUE).innerText).eql(value.toString());
    await t.wait(5000)
  }
}
