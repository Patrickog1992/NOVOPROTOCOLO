export interface ProductFeature {
  id: string;
  text: string;
}

export interface OfferDetails {
  originalPrice: number;
  discountedPrice: number;
  checkoutUrl: string;
  imageUrl: string;
}