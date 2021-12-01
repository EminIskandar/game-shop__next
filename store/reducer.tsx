import footerSlice from "components/footer/footerSlice";
import headerSlice from "components/header/headerSlice";
import blogSlice from "components/home/blog/blogSlice";
import discountSlice from "components/home/discount/discountSlice";
import discoverSlice from "components/home/discover/discoverSlice";
import recommendationSlice from "components/home/recommendation/recommendationSlice";
import sliderSlice from "components/home/slider/slideSlice";
import topTenSlice from "components/home/topten/topTenSlice";
import howItWorkSlice from "components/how-it-work/howItWorkSlice";
import benefitSlice from "components/cpp/benefits/benefitsSlice";
import whatYouGetSlice from "components/smart/what-you-get/whatYouGetSlice";
import privacySlice from "components/privacy/privacySlice";
import problemsSlice from "components/support/problems/problemSlice";
import copyrightSlice from "components/copyright/copyrightSlice";
import termsConditionsSlice from "components/terms-conditions/termsConditionsSlice";
import categorySlice from "components/blog/category/categorySlice";
import resultSlice from "components/result/index/resultSlice";
import filterSlice from "components/result/filter/filterSlice";
import currentDiscountSlice from "components/smart/current-discount/currentDiscountSlice";

const reducer = {
    footerLinks : footerSlice.reducer,
    headerMenu : headerSlice.reducer,
    article : blogSlice.reducer,
    discount : discountSlice.reducer,
    discover : discoverSlice.reducer,
    recommendation : recommendationSlice.reducer,
    slider : sliderSlice.reducer,
    topTen : topTenSlice.reducer,
    howItWork : howItWorkSlice.reducer,
    benefit : benefitSlice.reducer,
    whatYouGet : whatYouGetSlice.reducer,
    privacyPolicy : privacySlice.reducer,
    support : problemsSlice.reducer,
    copyright : copyrightSlice.reducer,
    termsAndCondtion : termsConditionsSlice.reducer,
    blogCategory : categorySlice.reducer,
    gameSectionDescription : resultSlice.reducer,
    gameFiltersType : filterSlice.reducer,
    currentDiscount : currentDiscountSlice.reducer,
};


export default reducer