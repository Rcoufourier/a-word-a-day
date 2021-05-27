import {MockTranslation} from "../../models/MockTranslation";
import {Translation} from "../../models/Translation";

export function FetchTranslationFrom(id: string) {
   const data = MockTranslation.map((data: any) => {
        if (data.id == id) {
            return data
        }
    })
    return new Translation(data)
}