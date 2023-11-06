// emailjsConfig.js
import emailjs from 'emailjs-com';

emailjs.init(process.env.EMAIL_iD || '');
