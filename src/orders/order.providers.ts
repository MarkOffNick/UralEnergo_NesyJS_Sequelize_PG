import { Order } from './entities/order.entity'

export const orderProviders = [
  {
    provide: 'orderRepository',
    useValue: Order
  }
]
