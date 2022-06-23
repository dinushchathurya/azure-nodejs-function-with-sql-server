module.exports = async function (context) {

    const responseMessage = "This is test function";

    context.res = {
        status: 200,
        body: responseMessage
    };
    
}