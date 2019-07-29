import restApiService from '../restApiService/RestApiService'

class DebtListRestService {
    getTopDebts() {
        return restApiService.get('GetTopDebts')
    }

    getFilteredDebts(payload) {
        return restApiService.post('GetFilteredDebts', payload)
    }
}

export default new DebtListRestService();