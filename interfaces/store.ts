import { 
    MenuType, ArticleType, DiscountData, DiscovetData, Link,
    RecommendationData, SliderData, TopTenData, HowItWork, 
    Benefit, WhatYouGet, PrivacyPolicy, ProblemsDataType, Copyright,
    TermsAndCondtion, articlesDataType, gameSectionDescription, gameFiltersType,
    CurrentDiscount
} from "interfaces"

export type Store = {
    footerLinks : Link[],
    headerMenu : MenuType,
    article : ArticleType[],
    discount : DiscountData[],
    discover : DiscovetData[],
    recommendation : RecommendationData[],
    slider: SliderData[],
    topTen: TopTenData[],
    howItWork: HowItWork[],
    benefit: Benefit[],
    whatYouGet : WhatYouGet[],
    privacyPolicy : PrivacyPolicy,
    support : ProblemsDataType,
    copyright: Copyright,
    termsAndCondtion: TermsAndCondtion,
    blogCategory: articlesDataType,
    gameSectionDescription : gameSectionDescription,
    gameFiltersType : gameFiltersType,
    currentDiscount : CurrentDiscount[]
}
