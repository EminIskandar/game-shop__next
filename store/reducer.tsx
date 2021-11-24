import { Store } from "interfaces/store";

const INITIAL_STATE : Store = {
    footerLinks : [
        {
            path : '/about-us',
            name: 'About us'
        },
        {
            path : '/how-it-work',
            name: 'How Gamivo Works'
        },
        {
            path : '/cpp',
            name: 'Customer Protection Program' 
        },
        {
            path : '/smart',
            name: 'SMART' 
        },
        {
            path : '/privacy-policy',
            name: 'Privacy Policy' 
        },
        {
            path : '/affiliate',
            name: 'Affiliate' 
        },
        {
            path : '/support',
            name: 'Support center'
        },
        {
            path : '/blog',
            name: 'Blog' 
        },
        {
            path : '/contact',
            name: 'Contact' 
        },
        {
            path : '/copyright',
            name: 'Copyright & Legal Issues' 
        },
        {
            path : '/terms-conditions',
            name: 'Terms & Conditions'
        }
    ],
    headerMenu : {  
        Games :{ 
            name:'Games',
            underList:{
                Genres: ['Action', 'RPG' ,'FPS', 'Multiplayer' , 'Adventure','Simulation', 'Strategy', 'Shooter' , 'Spotrs'],
                Platforms: ['Steam','Xbox live', 'Origin', 'Ubisoft Connect','Battle.net','PSN','Rockstart Social Club','Itunes','GOG'],
                DLC:['Dyling Light: Bad Blood','The Sims 4: Seasons','The Sims 4: Cats and Dogs','The Sims 4: Eco Lifestyle','Monster Hunter: World-Iceborne'],
                Prepaid:['Netflix Cart 100USD','Boblox Gift Card 5 USD','Netflix Gift Card 75 USD','Boblox Gift Card 10 USD','Razer Gold Gift Card 50 USD'],
            }
        }, 
        PrePaidCardSubscriptions :{
            name:'Pre-Paid Card & Subscriptions',
            underList:{
                Playstation: ['PlayStation Network Card PSN 50 USD','PlayStation Network Card PSN 25 USD','PlayStation Network Card PSN 10 USD' ,'PlayStation Network Card 365 Days US','PlayStation Network Card PSN 50 EUR'],
                Xbox:['Xbox Game Pass Ultimate - 14 Days','Xbox live 50 EUR','Xbox Game Pass Ultimate - 7 Days','Xbox live 10 EUR','Xbox live Dold 12 months'],
                Steam:['Steam Gift Card 100 USD','Steam Gift Card 50 US','Steam Gift Card 25 USD','Steam Gift Card 10 USD','Steam Gift Card 5 USD'],
                Battle_net:['World of Warcraft 30 day time card EU','Overwatch','World of Warcraft: Shadowlands','World of Warcraft 30 day time card US','World of Warcraft 60 day time card US'],
                Other:['Final Fantasy XIV: A Realm Reborn','Genera Free Fire Gift Card 1080','Genera Free Fire Gift Card 210','Genera Free Fire Gift Card 100','Valorant Gift Card 5025 Riot Points']
            }
        }, 
        PreOrders:{
            name: 'Pre Orders', 
            underList:{
                Bestsellers:['World of Warcraft 30 day time card','Overlord II','Windows 10 Professional','S.T.A.L.K.E.R: Shadow of Chernobyl','Xbox Game Pass Ultimate - 14 Days'],
                Upcoming:['Natira Boy ARG PRE-ORDER','Natira Boy PRE-Order','Evil Genius 2: World Domination EU PRE-PURCHASE','Evil Genius 2: World Domination US PRE-PURCHASE','Evil Genius 2: World Domination CIS PRE-PURCHASE']
            }
        },  
        GamivoSmart:{
            name: 'Gamivo Smart',
            underList: {}
        } 
    },
    article : [
        {
            path: '/blog/post/top-crazy-easter-eggs-in-games',
            img : 'blog-img1.jpg',
            title: 'Top Crazy Easter Eggs in Games',
            description : 'Easter eggs are always a delight to find. Some are fun, while others aren’t really worth the time to look for them. In some titles, the Easter eggs ar...',
            date: 'March 25, 2021'
        },
        {
            path: '/blog/post/outriders-everything-you-need-to-know-about-the-game',
            img : 'blog-img2.jpg',
            title: 'Outriders: Everything you need to know about the game',
            description : 'Outriders by acclaimed Polish studio People Can Fly is one of the hottest premiers of 2021. The ultimate mix of a shooter and an RPG brings us to the ...',
            date: 'March 24, 2021'
        },
        {
            path: '/blog/post/top-structures-recreated-in-valheim',
            img : 'blog-img3.jpg',
            title: 'Top structures recreated in Valheim',
            description : 'Vikings are known for plundering and conquering. Valheim shows us that the horrifying Norsemen are also pretty handy builders. The biggest Steam hit o...',
            date: 'March 22, 2021'
        },
        {
            path: '/blog/post/mmo-games-worth-checking-out',
            img : 'blog-img4.jpg',
            title: 'MMO Games Worth Checking Out',
            description : 'People crave human interaction and the pandemic has prevented that in many ways. To satisfy that desire and relieve stress, many people are turning to...',
            date: 'March 19, 2021'
        }
    ],
    discount : [
        {
            image : 'image_game_smal1.jpg',
            discountPercent : '-20%',
            name : 'Far Cry 5 EMEA Ubisoft Connect CD Key',
            price : 16.99,
            discountPrice : 14.44, 
        },
        {
            image : 'image_game_smal2.jpg',
            discountPercent : '-20%',
            name : 'Escape from Tarkov',
            price : 28.94,
            discountPrice : 25.47, 
        },
        {
            image : 'image_game_smal3.jpg',
            discountPercent : '-20%',
            name : 'Cyberpunk 2077',
            price : 24.99,
            discountPrice : 21.24, 
        }
    ],
    discover : [
        {
            title: 'Customer Protection Program',
            imageNotHover: 'cpp.webp',
            imageHover: 'cpp-hover.webp'
        },
        {
            title: 'Deals & Promotions',
            imageNotHover: 'deals.webp',
            imageHover: 'deals-hover.png'
        }, 
        {
            title: 'Shop in your native language',
            imageNotHover: 'language.webp',
            imageHover: 'language-hover.webp'
        }, 
        {
            title: 'Gamivo Smart',
            imageNotHover: 'gamivo-smart.png',
            imageHover: 'gamivo-smart-hover.png'
        },
        {
            title: '27/4 Customer Service',
            imageNotHover: 'cs.webp',
            imageHover: 'cs-hover.webp'
        },
        {
            title: 'Affliate Network',
            imageNotHover: 'affiliate.webp',
            imageHover: 'affiliate-hover.webp'
        },
        {
            title:  'Gaming Blog',
            imageNotHover: 'gaming-blog.webp',
            imageHover: 'gaming-blog-hover.webp'
        },
    ],
    recommendation :[
        {
            path : '/product/world-of-warcraft-60-day-time-card-eu-battle.net-cd-key',
            image : 'product-id16-image.jpg',
            name : 'Buy World of Warcraft 30 day time card EU Battle.net CD Key',
            price : 22.99
        },
        {
            path: '/product/fifa-21-eng-pl-cz-tr-origin-cd-key',
            image : 'product-id3-image.jpg',
            name : 'FIFA 21 ENG/PL/CZ/TR Origin CD Key',
            price : 21.19
        },
        {
            path: '/product/sea-of-thieves-xbox-live-cd-key',
            image : 'Recommendation_img3.webp',
            name : 'Sea of Thieves Xbox live CD Key',
            price : 20.93
        },
        {
            path : '/product/outriders-eu-steam-cd-key',
            image : 'Recommendation_img4.webp',
            name : 'Outriders EU Steam CD Key',
            price : 50.78
        },
        {
            path: '/product/it-takes-two-eng-origin-cd-key',
            image : 'Recommendation_img5.webp',
            name : 'It Takes Two ENG Origin CD Key',
            price : 28.26
        }
    ],
    slider: [
        'slider_img1.jpg' , 
        'slider_img2.jpg' , 
        'slider_img3.jpg'
    ],
    topTen : [
        {
            path: '/product/world-of-warcraft-60-day-time-card-eu-battle.net-cd-key',
            img :   'img_topten12.jpg',
            title : 'Buy World of Warcraft 30 day time card EU Battle.net CD Key',
            price :'22.99$'
        },
        {
            path: '/product/pubg-playerunknowns-battlegrounds-steam-cd-key',
            img : 'img_topten11.jpg',
            title : `PUBG PlayerUnknown's Battlegrounds Steam CD Key`,
            price :'0.85$'
        },
        {
            path: '/product/minecraft-java-edition-official-website-cd-key',
            img : 'img_topten3.webp',
            title : `Minecraft - Java Edition Official website CD Key`,
            price :'19.55$'
        },
        {
            path: '/product/battlefield-5-eng-origin-cd-key',
            img : 'img_topten13.jpg',
            title : `Battlefield 5 ENG Origin CD Key`,
            price :'11.99$'
        },
        {
            path: '/product/terraria-steam-gift',
            img : 'img_topten5.webp',
            title : `Terraria Steam Gift`,
            price :'4.16$'
        },
        {
            path: '/product/dead-by-daylight-steam-cd-key',
            img : 'img_topten14.jpg',
            title : `Dead by Daylight Steam CD Key`,
            price :'6.49$'
        },
        {
            path: '/product/crusader-kings-iii-steam-cd-key',
            img : 'img_topten7.webp',
            title : `Crusader Kings III Steam CD Key`,
            price :'15.5$'
        },
        {
            path: '/product/outriders-eu-steam-cd-key',
            img : 'img_topten8.webp',
            title : `Outriders EU PRE-ORDER Steam CD Key`,
            price :'50.78$'
        },
        {
            path: '/product/escape-from-tarkov-official-website-cd-key',
            img : 'img_topten9.webp',
            title : `Escape from Tarkov Official website CD Key`,
            price :'28.94$'
        },
        {
            path: '/product/cartel-tycoon-steam-cd-key',
            img : 'img_topten10.webp',
            title : `Cartel Tycoon Steam CD Key`,
            price :'6.99$'
        }
    ],
    howItWork : [
        {
            image : 'step-1.webp',
            text : 'Find your favourite game'
        },
        {
            image : 'step-2.webp',
            text : 'Check activation details, language version and choose the best offer'
        },
        {
            image : 'step-3.webp',
            text : 'Add game to the cart, complete the order and start playing!'
        }
    ],
    benefit: [
        {
            icon : 'b-icon-1.webp',
            text : "All tickets from CPP users go first! Don't wait for your turn.",
            title : 'Priority Support'
        },
        {
            icon : 'b-icon-2.webp',
            text : 'Fast mediation',
            title : 'In case of any issue with the supplier, we will maintain the communication with you.'
        },
        {
            icon : 'b-icon-3.webp',
            text : 'Get first in line! All pre-orders will be sent to CPP users first.',
            title : 'Priority pre-orders'
        }
    ],
    whatYouGet: [
        {
            icon: 'cpp-icon.webp',
            text : '<span>Customer Protection Program</span> for whole <span>SMART</span>  subscription <span>period</span>'
        },
        {
            icon: 'livechat-icon.webp',
            text : 'Customer Service <span>Livechat</span> access'
        },
        {
            icon: 'preorder-icon.webp',
            text : 'Preorder Delivery <span>Priority</span>'
        },
        {
            icon: 'discount-icon.webp',
            text : 'Exclusive <span>Discounts</span>'
        },
        {
            icon: 'alerts-icon.webp',
            text : 'Best deals <span>Alerts</span>'
        },
        {
            icon: 'giveaways-icon.png',
            text : 'Outstanding <span>Giveaways</span>'
        },
    ],
    privacyPolicy: "In this privacy policy we, GAMIVO.COM LIMITED, registered under number C 90983, with our registered office 99, Dingli Street, Sliema, Malta (“GAMIVO.COM”), wish to explain how we handle personal data of our Users when they visit our website and use our services. All the terms used in GAMIVO.COM Terms &amp; Conditions have the same meaning as in this Privacy Policy. When you first visit GAMIVO.COM site, you will be asked to consent to our use of cookies in accordance with these terms.We incorporate such privacy controls, that will provide you with controls on deciding how we will process your personal data. Use privacy controls, with which you can specify whether you would like to receive direct marketing communications from GAMIVO.COM. Please let us know if the personal information that we hold about you needs to be corrected or updated.If you wish to exercise any of your rights provided in this Privacy Policy or contact us regarding all privacy-related issues, you may submit or request by email: support@gamivo.com.",
    support : {
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
    },
    copyright : `Out of concern for safety of our client’s, we have adopted the following copyright dispute policy (“Copyright Policy”) below toward copyright infringement. We reserve the right to block access to or remove offers that we believe in good faith to be copyrighted that has been illegally copied and distributed by any of our affiliates, merchants or users and remove and discontinue service to repeat infringers and offenders. If you believe that any content residing on or accessible through GAMIVO’s platform infringes your copyright or the copyright of a company which you are authorized to act on behalf of, send a notice of copyright infringement, which may allow us to identify you and the infringing content or activity. Once a proper Bona Fide Notification is received, it will be examined by GAMIVO’s Legal Team and will be responded accordingly. If an infringement is found, the content will be removed or restricted accordingly. We reserve the right to notify the content provider of an infringement notification, terminate or freeze cooperation. Content provider will have a right to counter an infringement notification. Such a counter notice may be send to the complaining party in sole discretion of Gamivo. In the course of such a procedure, Gamivo may remove the content, disable it, replace or keep it. Please contact Gamivo’s Legal Team on the Copyright Policy or any other legal issue by email to legal@gamivo.com Please remember that our Legal Team does not act as a replacement to our Support Center (https://www.gamivo.com/faq), which will answer most common issues.`,
    termsAndCondtion: `In order to use the Platform, the User agrees to and accepts the Terms & Conditions as a whole and without reservations.  The User confirms that under the domestic laws of his country of residence he is able to conclude legally binding agreements. The User agrees that he is not prohibited from using the Platform and services offered on the Platform due to the domestic regulations or other restrictions.  The User acknowledges and agrees that GAMIVO has the right to make changes and modifications to the Terms & Conditions. The change or modification to the Terms & Conditions will not affect the rights acquired by the Users before that change or modification on the basis of the existing Terms & Conditions. Information about the change and modification of the Terms & Conditions will be provided to Users by email in accordance with the contact details provided by the Users in the course of the registration with the Platform, as well as will be published on the Platform. The amended Terms & Conditions will be published on the Platform and become binding for User fourteen days after the information about the changes of Terms & Conditions is delivered to the User. For new Users, the version published on the Platform at the moment of their registration applies immediately. The User who does not agree with the amended Terms & Conditions should resign from using the Platform.  The User may conclude with GAMIVO, through the Internet or otherwise, separate agreements related to certain rights and obligations between the User and GAMIVO. In the case of any conflict or discrepancies between the Terms & Conditions and such additional agreements, the additional agreements prevail over the Terms & Conditions unless explicitly stated otherwise in the additional agreements. In the case of discrepancies between the Terms & Conditions and the General Sale Conditions, the General Sale Conditions prevail.`,
    blogCategory: {
        news:[
            {
                img: 'blog-big-img1.webp',
                title: 'TOP 10 WEIRDEST TEKKEN CHARACTERS',
                text : 'Lidia Sobieska just joined the roster of Tekken 7. The new fighter is the prime minister of Poland. Putting a...',
                section: 'General News Now Trending',
                date: '02/04/2021',
                path: '/blog/article/top-10-weirdest-tekken-characters'
            },
            {
                img: 'blog-big-img2.webp',
                title: 'Outriders: Everything you need to know about the game',
                text : 'Outriders by acclaimed Polish studio People Can Fly is one of the hottest premiers of 2021. The ultimate mix of a...',
                section: 'General News Now Trending',
                date: '24/03/2021',
                path: '/blog/article/outriders-everything-you-need-to-know-about-the-game'
            },
            {
                img: 'blog-big-img3.webp',
                title: 'Top structures recreated in Valheim',
                text : 'Vikings are known for plundering and conquering. Valheim shows us that the horrifying Norsemen are also pretty handy builders. The...',
                section: 'General News Now Trending',
                date: '22/03/2021',
                path: '/blog/article/top-structures-recreated-in-valheim'
            },
            {
                img: 'blog-img3.jpg',
                title: 'MMO Games Worth Checking Out',
                text : 'People crave human interaction and the pandemic has prevented that in many ways. To satisfy that desire and relieve stress,...',
                section: 'General News Now Trending',
                date: '19/03/2021',
                path: '/blog/article/mmo-games-worth-checking-out'
            },
        ],
        nowTrending:[
            {
                img:  'blog-img5.jpg' ,
                title: 'Celebrate St. Patrick’s Day with GAMIVO!',
                text : 'We could not be more lucky to have you here, let"s celebrate together by saving money on amazing video games!...',
                section: 'General News Now Trending',
                date: '17/03/2021',
                path: '/blog/article/celebrate-st-patrick’s-day-with-gamivo'
            },
            {
                img: 'blog-img6.jpg' ,
                title: 'Things you Need to Know about Overwatch® 2',
                text : 'For those not familiar with Overwatch® 2, the title will provide fans of the series with an opportunity to join...',
                section: 'General News Now Trending',
                date: '10/03/2021',
                path: '/blog/article/things-you-need-to-know-about-overwatch-2'
            },
            {
                img: 'blog-img7.jpg' ,
                title: 'International Women’s Day is here!',
                text : "The day of showing our appreciation for women is finally here! We sincerely thank you for being here thus, we've...",
                section: 'General News Now Trending',
                date: '08/03/2021',
                path: '/blog/article/international-women’s-day-is-here'
            },
            {
                img: 'blog-img8.jpg',
                title: 'Top 10 Games to Finish in One Afternoon',
                text : "With games becoming more expansive, complex, and taking longer to complete, many individuals may think the days of starting and...",
                section: 'General News Now Trending',
                date: '08/03/2021',
                path: '/blog/article/top-10-games-to-finish-in-one-afternoon'
            },
        ],
        promosions:[
            {
                img: 'blog-img9.jpg',
                title: 'Best pixel graphics',
                text : 'Video game designers have an array of graphic art techniques at their disposal when creating the game artwork One of...',
                section: 'General News Now Trending',
                date: '26/01/2021',
                path: '/blog/article/best-pixel-graphics'
            },
            {
                img: 'blog-img10.jpg',
                title: 'Will Nintendo Release Switch Pro?',
                text : 'Whispers, rumors and theories abound, but Nintendo hasn’t released any official confirmation that there will be a Switch Pro model...',
                section: 'General News Now Trending',
                date: '26/01/2021',
                path: '/blog/article/will-nintendo-release-switch-pro'
            },
            {
                img: 'blog-img11.jpg',
                title: 'The Medium – solve the dark mystery',
                text : 'Bloober Team - a polish studio behind games like Observer, Blair Witch and Layers of Fear (1 and 2) worked...',
                section: 'General News Now Trending',
                date: '25/01/2021',
                path: '/blog/article/the-medium–solve-the-dark-mystery'
            },
            {
                img: 'blog-img12.jpg',
                title: 'Top 10 Worst DLCs in Gaming History',
                text : 'Downloadable content (DLC) is regularly issued by publishers for a variety of reasons. For many, it’s simply a way to...',
                section: 'General News Now Trending',
                date: '25/01/2021',
                path: '/blog/article/top-10-worst-dlcs-in-gaming-history'
            }
        ]
    },
    gameSectionDescription : {
        action: 'One of the most known video games genres out there. Action games revolve around vivid gameplay where the player will meet explosions, epic battles, shooting and fighting many enemies. The genre can be mixed with other genres, making it so popular.',
        rpg:'Role Playing Games lets you become pretty much everyone in an immerse, deep and well-developed way. Unveil mysteries behind your character, get to know them, decide which moral side they take. Explore vast skill and abilities sets and wade through story.',
        fps:"FPS stands for First Person Shooter, a genre where you see from your character's perspective and you are accompanied by a broad assortment of weaponry. March through the game and leave countless bodies behind you. Be ruthless and precise, shoot to kill.",
        multiplayer:"We are living in the era of the Internet. Most of the video games that come out nowadays are aimed towards multiplayer gameplay and experience. It's something for everybody, competitive and casual gamers will find something to their liking." ,
        adventure: 'Embark on a long, unforgettable gaming experience, settled in unknown worlds. Adventure games allow us to live through some unbelievable stories filled with interesting NPCs, twisted dialogues, moral decisions, demanding riddles and puzzles.',
        simulation: 'Games offer us an experience not available in real life. But this is not the case with simulation games – they, on the contrary to other genres, try to achieve the highest level or reality and authenticity to real life processes and mechanisms.',
        strategy:'Strategy video games used to be a niche in the world of gaming. With each year we can see the genre growing stronger and stronger. Obtaining more and more devoted players that love planning ahead and making sure every move goes according to plan.',
        shooter: "To put it simply, in shooter games you shoot stuff. Either that'll be monstrous enemies or ducks. Everything with a shooting mechanic falls under this genre, therefore it's one of the most popular genre types out there, grab a gun and start playing!",
        sports: "Something for sport fans, everything that's considered a sport will have it's own video game dedicated to it. Even the least known sports will have video game equivalents. The most known sports games revolve around soccer, basketball and rugby.",
    },
    gameFiltersType : {
        Type:['Games','DLC'],
        Genres:[ 'Action','RPG','FPS','Multiplayer','Adventure', 'Simulation','Strategy','Shooter','Sports'],
        Platform :['Steam','Official website','Origin','Epic','Ubisoft','Battle.net'],
        Region : [ 'EU','RU','GE','FR','TR','IT','JA','IS' ],
        Price : [ '0.00$ - 5.00 $','5.00$ - 10.00$','10.00$ - 25.00$','25.00$ - 50.00$','More than 50.00$'],
    },
    currentDiscount : [
        {
            name : `Outriders EU PRE-ORDER`,
            price :41.03,
            discountPrice : 36.93,
            image :'image_current_1.jpg' 
        },
        {
            name : `Stronghold: Warlords - Special Edition `,
            price :29.18,
            discountPrice : 26.26,
            image : 'image_current_2.jpg' 
        },
        {
            name : `FIFA 21`,
            price :22.61,
            discountPrice : 18.09,
            image : 'image_current_3.jpg' 
        },
        {
            name : `Watch Dogs: Legion EU`,
            price :28.29,
            discountPrice :25.46,
            image : 'image_current_4.jpg' 
        },
        {
            name : `Nioh 2 - The Complete Edition`,
            price :27.34,
            discountPrice :24.61,
            image : 'image_current_5.jpg' 
        },
        {
            name : `Call of Duty: Black Ops - Cold War Green Gift`,
            price :48.10,
            discountPrice :43.29,
            image : 'image_current_6.jpg' 
        },
        {
            name : `Destiny 2: Beyond Light`,
            price :19.49,
            discountPrice :17.54,
            image : 'image_current_7.jpg' 
        },
        {
            name : `Cyberpunk 2077`,
            price :25.29,
            discountPrice :22.79,
            image : 'image_current_8.jpg' 
        },
        {
            name : `World of Warcraft: Shadowlands EU`,
            price :28.93,
            discountPrice :26.04,
            image : 'image_current_9.jpg' 
        },
        {
            name : `Little Nightmares II EU`,
            price :24.93,
            discountPrice :22.45,
            image : 'image_current_10.jpg' 
        },
        {
            name : `Hitman 3 EU `,
            price :33.29,
            discountPrice :29.96,
            image : 'image_current_11.jpg'
        },
        {
            name : `Assassin's Creed: Valhalla EU`,
            price :33.45,
            discountPrice :30.11,
            image : 'image_current_12.jpg'
        },
        {
            name : `FIFA 21 ENG/PL/CZ/TR`,
            price :18.99,
            discountPrice :17.09,
            image : 'image_current_13.jpg'
        },
        {
            name : `Star Wars: Squadrons`,
            price :18.49,
            discountPrice :16.64,
            image : 'image_current_14.jpg'
        },
        {
            name : `The Medium`,
            price :47.24,
            discountPrice :42.52,
            image : 'image_current_15.jpg'
        },
        {
            name : ` Mafia - Definitive Edition EU`,
            price :22.32,
            discountPrice :20.09,
            image :'image_current_16.jpg'
        }
    ]
}

export default function reducer (state = INITIAL_STATE, action : any ){  
    switch (action.type) {  
            default: return state;
    }
}