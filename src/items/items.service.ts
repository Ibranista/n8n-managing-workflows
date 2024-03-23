import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Listing } from './entities/listing.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
    private readonly repository: EntityManager,
  ) {}

  async create(createItemDto: CreateItemDto) {
    const listing = new Listing({
      ...createItemDto.listing,
      rating: 0,
    });
    const item = new Item({ ...createItemDto, listing });
    return await this.repository.save(item);
  }

  async findAll() {
    return await this.itemRepository.find({
      relations: { listing: true },
    });
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    return await this.itemRepository.update(id, updateItemDto);
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }

  async removeAll() {
    return await this.itemRepository.delete({});
  }
}
