import cookie from 'cookie';
export const ParseCookie=(req)=>{
   return cookie.parse(req?req.headers.cookie||"":document.cookie);
}