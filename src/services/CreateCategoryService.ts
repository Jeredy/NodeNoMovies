import { myDataSource } from "../../ormconfig";
import { Category } from "../entity/Category.entity";

type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = myDataSource.getRepository(Category);

    //SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1
    if (
      await repo.findOne({
        where: {
          name,
        },
      })
    ) {
      return new Error("Category already exists");
    }

    const category = repo.create({
      name,
      description,
    });

    await repo.save(category);

    return category as Category;
  }
}
