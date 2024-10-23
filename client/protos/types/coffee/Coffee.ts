// Original file: protos/proto/coffee.proto

import type * as grpc from "@grpc/grpc-js";
import type { MethodDefinition } from "@grpc/proto-loader";
import type {
  FlavorRequest as _coffee_FlavorRequest,
  FlavorRequest__Output as _coffee_FlavorRequest__Output
} from "./FlavorRequest";
import type {
  FlavorResponse as _coffee_FlavorResponse,
  FlavorResponse__Output as _coffee_FlavorResponse__Output
} from "./FlavorResponse";
import type {
  PriceRequest as _coffee_PriceRequest,
  PriceRequest__Output as _coffee_PriceRequest__Output
} from "./PriceRequest";
import type {
  PriceResponse as _coffee_PriceResponse,
  PriceResponse__Output as _coffee_PriceResponse__Output
} from "./PriceResponse";

export interface CoffeeClient extends grpc.Client {
  /**
   * Describe rpc services here **
   */
  Price(
    argument: _coffee_PriceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  Price(
    argument: _coffee_PriceRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  Price(
    argument: _coffee_PriceRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  Price(
    argument: _coffee_PriceRequest,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  /**
   * Describe rpc services here **
   */
  price(
    argument: _coffee_PriceRequest,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  price(
    argument: _coffee_PriceRequest,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  price(
    argument: _coffee_PriceRequest,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;
  price(
    argument: _coffee_PriceRequest,
    callback: grpc.requestCallback<_coffee_PriceResponse__Output>
  ): grpc.ClientUnaryCall;

  RandomFlavors(
    argument: _coffee_FlavorRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_coffee_FlavorResponse__Output>;
  RandomFlavors(
    argument: _coffee_FlavorRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_coffee_FlavorResponse__Output>;
  randomFlavors(
    argument: _coffee_FlavorRequest,
    metadata: grpc.Metadata,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_coffee_FlavorResponse__Output>;
  randomFlavors(
    argument: _coffee_FlavorRequest,
    options?: grpc.CallOptions
  ): grpc.ClientReadableStream<_coffee_FlavorResponse__Output>;
}

export interface CoffeeHandlers extends grpc.UntypedServiceImplementation {
  /**
   * Describe rpc services here **
   */
  Price: grpc.handleUnaryCall<
    _coffee_PriceRequest__Output,
    _coffee_PriceResponse
  >;

  RandomFlavors: grpc.handleServerStreamingCall<
    _coffee_FlavorRequest__Output,
    _coffee_FlavorResponse
  >;
}

export interface CoffeeDefinition extends grpc.ServiceDefinition {
  Price: MethodDefinition<
    _coffee_PriceRequest,
    _coffee_PriceResponse,
    _coffee_PriceRequest__Output,
    _coffee_PriceResponse__Output
  >;
  RandomFlavors: MethodDefinition<
    _coffee_FlavorRequest,
    _coffee_FlavorResponse,
    _coffee_FlavorRequest__Output,
    _coffee_FlavorResponse__Output
  >;
}
