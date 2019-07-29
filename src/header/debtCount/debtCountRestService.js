import restApiService from "../../restApiService/RestApiService";

class DebtCountRestService {
  getDebtCount() {
    return restApiService.get('GetDebtsCount');
  }
}

export default new DebtCountRestService();
