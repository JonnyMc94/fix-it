import { ProductsModel } from '../models/products.ts'
import { buildWhereClause } from '../utils/queryHelper.ts'

export class ProductsService {

    static findAll = async(filters: any) => {
        return await ProductsModel.findAll({
            where: buildWhereClause(filters),
            include: []
        })
    }

    static findById = async(id: string) => {
        return await ProductsModel.findByPk(id, {
            include: []
        })
    }
}