import React, { ReactNode } from "react"

export type MenuType = {
    [key: string]: {
        name: string;
        underList: {
        [key: string]: string[];
        }
    }
}  

export type product = { 
    id: string; 
    name: string; 
    region: string; 
    platform: string; 
    languages: string[]; 
    stock: string; 
    review: string; 
    price: number; 
    discountPrice: number | string ; 
    sales?: number; 
    section: string; 
    path: string; 
    coverImg: string; 
    image: string[]; 
}

export type LayoutProps = {
    title : string | undefined,
    children : ReactNode
}

export type ProblemsType = {
    name: string;
    code : number,
    title: string,
    text : string[],
    link: string 
}
export type ProblemsDataType = {
    [key: string]: ProblemsType[]  
}

export type CategoryPageProps = {
    categoryName : string | string[] | undefined
}

export type ArticleType = {
    img : string,
    title: string,
    text?: string,
    section? : string,
    date: string,
    path: string 
    description? : string
}

export type  articlesDataType = {
    [key: string]: ArticleType[]
}

export type ProductPageProps = { 
    data : product[]
}

export type ProductComponentProps = {
    productData : product,
    align : string
}

export type gameFiltersType = {
    [ key : string ] : string[]
}

export type ResultComponentProps = {
    datas: product[],
    header: boolean
}

export type gameSectionDescription = {
    [key : string ] : string
}

export type DiscountData = {
    image : string,
    discountPercent : string,
    name : string,
    price : number,
    discountPrice : number
}

export type DiscovetData = { 
    title: string,
    imageHover: string,
    imageNotHover: string,
}

export type GameSectionProp = {
    sectionName: string;
}

export type Link = {
    path : string,
    name : string
}

export type RecommendationData = {
    path : string,
    image : string,
    name : string,
    price : number
}

export type SliderData = string

export type TopTenData = {
    path: string,
    img : string,
    title: string,
    price: string
}

export type HowItWork = {
    image: string,
    text : string 
}

export type Benefit = {
    icon : string,
    text : string,
    title : string
}

export type WhatYouGet =  {
    icon : string,
    text : string
}  

export type PrivacyPolicy = string

export type Copyright = string

export type TermsAndCondtion = string

export type ModalProps =  { 
    selector : string,
    children? : React.ReactNode
}

export type CurrentDiscount =  {  
    name : string,
    price  : number,
    discountPrice: number,
    image : string
}