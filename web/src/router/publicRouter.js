const loginRegister = resolve => require(['@cts/loginRegister/loginRegister'], resolve),
    login = resolve => require(['@cts/loginRegister/login'], resolve),
    register = resolve => require(['@cts/loginRegister/register'], resolve),
    forgotPassword = resolve => require(['@cts/loginRegister/forgotPassword'], resolve),
    changePassword = resolve => require(['@cts/personPage/changePassword'], resolve),
    appHeader = resolve => require(['@cts/appHeader'], resolve),
    appHome = resolve => require(['@cts/home/home'], resolve),
    aboutUs = resolve => require(['@cts/aboutUs/aboutUs'], resolve),
    customerService = resolve => require(['@cts/customerService/customerService'], resolve),
    suggest = resolve => require(['@cts/suggest/suggest'], resolve),
    notFound = resolve => require(['@cts/error/404'], resolve);

export {loginRegister ,login ,register ,forgotPassword ,changePassword,
        appHeader ,appHome ,aboutUs ,customerService ,suggest ,notFound }