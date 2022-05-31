const { RESET_LINK, SENDGRID_API_KEY } = require('./K.js');
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY); 
sgMail.setApiKey(SENDGRID_API_KEY); // since this is just a practice test I am not using envs...
const FROM_EMAIL = 'vstefan9@gmail.com';

const sendWelcome = (user) => {
    const text = `Welcome ${user.firstName}`;
    sendEmail(user, text, 'Welcome');
}


const sendForgottenPassword = (user) => {
    const text = `Oh no ${user.firstName}, you forgot your password! Try our reset link ${RESET_LINK}`;
    sendEmail(user, text, 'Forgotten Password');
    
}


const sendOrderConfirmation = (user, order='NOTHING') => {
    const text = `Congratulations ${user.firstName} your order: ${order} is on its way :)`;
    sendEmail(user, text, 'Order Confirmation');
    
}

const sendEmail = (user, emailBody, emailTitle) => {
    console.log("SendEmail here");
    const msg = {
        to: user.email,
        from: FROM_EMAIL, // Use the email address or domain you verified above
        subject: emailTitle,
        text: emailBody,
      };
      (async () => {
        try {
          await sgMail.send(msg);
        } catch (error) {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          }
        }
        console.log("success");
      })();
}

exports.sendOrderConfirmation = sendOrderConfirmation;
exports.sendWelcome = sendWelcome;
exports.sendForgottenPassword = sendForgottenPassword;