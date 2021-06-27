//public e5e78ee3f38430c529c32a9492c26614
//private 9031a623c213b041b26fc0f8cba04a7f7b31bed4
//developer.marvel.com

import md5 from 'md5';
import axios from 'axios';

function getMarvelBaseAuth(){
    var PUBLIC_KEY =process.env.REACT_APP_PUBLIC_KEY;
    const ts = String(new Date().getTime());
    var PRIV_KEY = md5(ts+process.env.REACT_APP_SECRET_KEY+PUBLIC_KEY);
     let result ='ts='+ts+'&apikey='+PUBLIC_KEY+'&hash='+PRIV_KEY
    return result;
}


export default getMarvelBaseAuth;