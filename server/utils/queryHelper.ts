import { Op } from 'sequelize'

// Generic filter configuration
interface FilterConfig {
  exact?: string[];      // Fields for exact match
  search?: string[];     // Fields for partial search (LIKE)
  numeric?: string[];    // Fields for numeric comparison (gte, lte)
}

// Generic function to build WHERE clause from query params
export const buildWhereClause = (filters: any, config: FilterConfig = {}): Record<string, any> => {
    const where: any = {};
    
    // Default config if none provided
    const defaultConfig: FilterConfig = {
        exact: ['brand', 'category', 'model_number', 'id'],
        search: ['name', 'title', 'description'],
        numeric: ['price', 'created_at', 'updated_at']
    };
    
    const finalConfig = { ...defaultConfig, ...config };
    
    // Handle exact matches
    finalConfig.exact?.forEach(field => {
        if (filters[field]) {
            where[field] = filters[field];
        }
    });
    
    // Handle search fields (partial match)
    finalConfig.search?.forEach(field => {
        if (filters[field]) {
            where[field] = { [Op.iLike]: `%${filters[field]}%` };
        }
    });
    
    // Handle numeric fields (with min/max)
    finalConfig.numeric?.forEach(field => {
        if (filters[`min_${field}`]) {
            where[field] = { ...where[field], [Op.gte]: filters[`min_${field}`] };
        }
        if (filters[`max_${field}`]) {
            where[field] = { ...where[field], [Op.lte]: filters[`max_${field}`] };
        }
    });
    
    return where;
}