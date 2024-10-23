import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CoffeeClient as _coffee_CoffeeClient, CoffeeDefinition as _coffee_CoffeeDefinition } from './coffee/Coffee';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  coffee: {
    Coffee: SubtypeConstructor<typeof grpc.Client, _coffee_CoffeeClient> & { service: _coffee_CoffeeDefinition }
    FlavorRequest: MessageTypeDefinition
    FlavorResponse: MessageTypeDefinition
    PriceRequest: MessageTypeDefinition
    PriceResponse: MessageTypeDefinition
  }
}

