export default function (context) {
    console.log('----------------- this is a middleware --------------------')
    context.userAgent = process.server ? context.req && context.req.headers['user-agent'] : navigator.userAgent
    console.log('middleware:', context.userAgent)
  }