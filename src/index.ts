enum Action {
    BID = 'bid',
    ASK = 'ask',
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
    bids: Order[],
    asks: Order[],
}

interface QuoteDataFromAgentToCenter {
    trades?: Trade[],
    orderbook?: Orderbook,
}

export {
    Action,
    Order,
    Trade,
    Orderbook,
    QuoteDataFromAgentToCenter,
}