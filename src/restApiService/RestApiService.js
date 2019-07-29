import { ajax } from "rxjs/ajax";
import { createApiUrl } from "./restApiServiceUtils";

class RestApiService {
  get(resourceUrl) {
    return ajax.getJSON(createApiUrl(resourceUrl));
  }

  post(resourceUrl, payload) {
    return ajax.post(createApiUrl(resourceUrl), {
      payload
    }, {
      'Content-Type': 'application/json'
    });
  }
}

export default new RestApiService();
