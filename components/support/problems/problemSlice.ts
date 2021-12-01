import {  createSlice } from "@reduxjs/toolkit"; 
  
const  problems = {
    Buyers: [
        {
            name: 'What does my order status mean? Pending/Hold/Completed/Refunded/Canceled/Blacklisted',
            code: 609,
            title : 'Here you can find all statuses explained',
            text : [
                'Pending - we did not receive the funds for the order. The order will not be completed and you will not be further charged. If you have been charged for a “pending order” please contact our Support Team.',
                'Hold - your order was held due to security reasons. Please check your support tickets and e-mail inbox. If we did not send you one already, please contact us via support ticket.',
                'Completed - your order was completed and the product was delivered. You can find your keys in the “Games” tab in the "Purchases" section of your account.',
                'Refunded - your purchase was refunded. Please check your balance or your original payment account.',
                'Canceled - your order was canceled. If you are not aware why, please contact the Support Team to learn why.',
                'Blacklisted - your account was suspended. Please contact the Support Team to get more information about the reason.'
            ],
            link: 'https://www.gamivo.com/faq/what-does-my-order-status-mean-pending-hold-completed-refunded-canceled-blacklisted'
        },
        {
            name: 'I bought a product. When will I receive it?',
            code: 748,
            title : '',
            text : [
                'Your order should be completed as soon as your payment is registered. It should only take a few minutes, however, the timeframe may differ depending on the payment method and your payment provider. Sometimes your order might be put on hold for additional verification so please check your',
                'If you are not sure about your order status please, hover the mouse over the "i" icon in the "Orders" tab of the'
            ],
            link: 'https://www.gamivo.com/faq/what-does-my-order-status-mean-pending-hold-completed-refunded-canceled-blacklisted'
        },
        {
            name: 'Can I return unused keys and receive a refund?',
            code: 445,
            title : '',
            text : [
                'You can return a product within 7 days from the purchase date as long as you have not redeemed the key and you purchased the Customer Protection Program for that product.',
                'Please, create a support ticket and we will explain the procedure to you.'
            ],
            link: 'https://www.gamivo.com/faq/what-does-my-order-status-mean-pending-hold-completed-refunded-canceled-blacklisted'
        }
    ],
    Payments: [
        {
            name: 'When will I receive the refund?',
            code: 212,
            title : '',
            text : [
                'We offer two refund options. The first is in the form of an in-store balance. After issuing, it instantly appears on your GAMIVO account under the "Balance" section and can be used as a full or partial payment method on any purchase on our platform.',
                'The second refund option is a refund back to the original payment method you used during the purchase. Once the payment is sent, it may take up to a few days for it to be registered on your account.',
                'In case you used PaySafeCard, Skrill, BitBayPay, RazerGold, or SkinWallet as a payment method, we will only be able to refund you in GAMIVO balance as it is not possible to send the funds back to the original payment account.'
            ],
            link: 'https://www.gamivo.com/faq/what-does-my-order-status-mean-pending-hold-completed-refunded-canceled-blacklisted'
        },
        {
            name: ' My order failed or was canceled. What does it mean?',
            code: 203,
            title : '',
            text : [
                'Please, make sure that you entered all the payment details correctly and that you have a sufficient amount on your account. In the case of credit/debit card payments, please make sure you have 3D-Secure enabled. Should the issue persist, please contact us via a support ticket.'
                                         
            ],
            link: 'https://www.gamivo.com/faq/my-order-failed-or-was-canceled-what-does-it-mean'
        },
        {
            name: 'What payment methods are available?',
            code: 123,
            title : '',
            text : [ 
                'You can pay for your purchases with one of the numerous payment methods depending on your region and the chosen currency. All the available methods will be visible at the payment step of your purchase.',
                'The available payment methods are also visible at the very bottom of the page.'         
            ],
            link: 'https://www.gamivo.com/faq/what-does-my-order-status-mean-pending-hold-completed-refunded-canceled-blacklisted'
        }
    ],
    Other : [
        {
            name: 'How can I change my email address?',
            code: 65,
            title : '',
            text : [
                'If you wish to change your email address, please contact our customer support service'
            ],
            link: 'https://www.gamivo.com/faq/how-can-i-change-my-email-address'
        },
        {
            name: 'I can’t find the answer to my query. Can you help me?',
            code: 58,
            title : '',
            text : [
                'If you wish to change your email address, please contact our customer support service'
            ],
            link: 'https://www.gamivo.com/faq/how-can-i-change-my-email-address'
        }, 
        {
            name: 'How long can a case be handled by the merchant or GAMIVO Customer Service?',
            code: 43,
            title : '',
            text : [
                'Although there is no particular time frame, we make sure that each case is resolved as soon as possible.',
                'Due to the nature of the issues reported to the supplier they may take longer. Depending on the additional information required to resolve the issue it may take up to a few messages exchanged with the',
                'GAMIVO Customer Service is available 24/7, so you can rest assured that we attend to all questions and issues.'
            ],
            link: 'https://www.gamivo.com/faq/how-long-can-a-case-be-handled-by-the-merchant-or-gamivo-customer-service'
        },
    ]
}

const problemsSlice = createSlice({
    name: "problems",
    initialState: problems,
    reducers:  {}
});
    
export default problemsSlice;
     
   