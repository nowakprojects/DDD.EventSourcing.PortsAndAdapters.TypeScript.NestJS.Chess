import { AbstractMutableAggregateRoot } from "./abstract-mutable-aggregate-root";
import { AggregateId } from '../aggregate';

export interface AggregateRootRepository<I extends AggregateId, T extends AbstractMutableAggregateRoot<I>> {
  save(aggregate: T): Promise<void>;

  findById(id: I): Promise<T | null>;
}
