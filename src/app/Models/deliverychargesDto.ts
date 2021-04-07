import { Grocerydeduction } from "./grocerydeduction";
import { Grocerydelivery } from "./grocerydelivery";
import { LocalDeliveryfair } from "./localDeliveryfair";
import { Restaurantdeduction } from "./restaurantdeduction";
import { Restaurantdelivery } from "./restaurantdelivery";

export class DeliverychargesDto {
    restaurantdelivery:Restaurantdelivery;
    restaurantdeduction:Restaurantdeduction;
    grocerydelivery:Grocerydelivery;
    grocerydeduction:Grocerydeduction;
    localDeliveryfair:LocalDeliveryfair;
}
