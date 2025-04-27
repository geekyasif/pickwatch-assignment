class ResponseHandler {
  static async sendSucessResponse(ctx, data, sucessMessage, statusCode) {
    const message = sucessMessage || "Sucess";
    const status = statusCode || 200;
    return (ctx.body = {
      data: {
        ...data,
      },
      message,
      status,
      success: true,
    });
  }

  static async sendErrorResponse(ctx, errorMessage, statusCode) {
    const status = statusCode || 500;
    const message = errorMessage || "Something went wrong!";
    return (ctx.body = {
      status,
      message,
      success: false,
    });
  }
}

module.exports = ResponseHandler;
