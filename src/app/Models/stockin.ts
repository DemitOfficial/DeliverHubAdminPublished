import { Url } from "url"

export class StockIn{

    productId: number 
    productName: string
    productName_Urdu: string
    category: string
    brand_Name: string
    brand_Name_Urdu: string
    productImage: Url
    barcode: number
    description: string
    description_Urdu: string
    status: boolean
    dateTime: Date
}