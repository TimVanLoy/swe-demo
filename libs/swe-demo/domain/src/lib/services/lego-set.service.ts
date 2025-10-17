import { Injectable } from "@angular/core";
import { LegoSet } from "@swe-demo/shared-domain";
import { httpResource } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LegoSetService {
  private apiUrl = `${import.meta.env["NG_APP_LEGO_API_URL"]}`;

  legoSetsResource = httpResource<LegoSet[]>(
    () => `${this.apiUrl}/api/legoset`,
    {
      defaultValue: [],
    }
  );
}
