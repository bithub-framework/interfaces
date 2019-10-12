declare enum Action {
    BID = "bid",
    ASK = "ask"
}
interface Order {
    action: Action;
    price: number;
    amount: number;
}
interface Trade extends Order {
    time: number;
    id: number;
}
interface Orderbook {
    bids: Order[];
    asks: Order[];
}
interface PublicDataFromAgentToCenter {
    trades?: Trade[];
    orderbook?: Orderbook;
}
declare type Assets = {
    spot?: number;
    long?: number;
    short?: number;
    cash?: number;
    time?: number;
};
interface TradingDataFromSecretaryToCenter {
    assets?: Assets;
    trade?: Trade;
}
export { Action, Order, Trade, Orderbook, PublicDataFromAgentToCenter, TradingDataFromSecretaryToCenter, Assets, };
