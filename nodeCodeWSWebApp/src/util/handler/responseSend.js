const returnReponse = (res, resultCode, resultMessage, resultStatus, resultContent) => {
    return res.status(resultCode).json({
        resultCode: resultCode,
        resultMessage: resultMessage,
        resultStatus: resultStatus,
        resultContent: resultContent
    })
}
module.exports = returnReponse