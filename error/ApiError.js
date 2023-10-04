class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    static badRequest(message){
        return new ApiError(404, message)
    }
static ithernal(message){
        return new ApiError(500, message)
    }
static frobbiden(message){
        return new ApiError(403, message)
    }



}
module.exports = ApiError