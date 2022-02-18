// import { UnauthorizedException } from "@nestjs/common";

// const parseIp = (req) =>
//     req.headers['x-forwarded-for']?.split(',').shift()
//     || req.socket?.remoteAddress

const cors = (req, res, next) => {
  const {NODE_ENV} = process.env
  // const allowedOrigins = [];

  if (NODE_ENV === 'production') {
    const origin = req.headers.origin;
    // if (!allowedOrigins.includes(origin)) {
    //   console.log(`Not allowed by cors by ip: ${req.ip} | ${parseIp(req)}`)
    //   throw new UnauthorizedException('Not allowed by cors')
    // }
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
  res.header('Access-Control-Allow-Headers', '*')
  res.statusCode = 200
  next()
}

export default cors
