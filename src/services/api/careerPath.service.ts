import { CareerPath } from '../../data/careerPaths/types';
import { careerPaths } from '../../data/careerPaths';
import { PaginationParams, PaginatedResponse } from './types';

export class CareerPathService {
  private static instance: CareerPathService;

  private constructor() {}

  public static getInstance(): CareerPathService {
    if (!CareerPathService.instance) {
      CareerPathService.instance = new CareerPathService();
    }
    return CareerPathService.instance;
  }

  async getCareerPaths(params: PaginationParams): Promise<PaginatedResponse<CareerPath>> {
    const { page = 1, limit = 10, search = '', category = '' } = params;
    
    let filteredPaths = [...careerPaths];

    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPaths = filteredPaths.filter(path => 
        path.title.toLowerCase().includes(searchLower) ||
        path.description.toLowerCase().includes(searchLower) ||
        path.skills.some(skill => skill.toLowerCase().includes(searchLower))
      );
    }

    // Apply category filter
    if (category) {
      filteredPaths = filteredPaths.filter(path => 
        path.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Calculate pagination
    const total = filteredPaths.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const items = filteredPaths.slice(startIndex, endIndex);

    return {
      items,
      total,
      page,
      totalPages,
      hasMore: page < totalPages
    };
  }

  async getCareerPathById(id: string): Promise<CareerPath | null> {
    const path = careerPaths.find(p => p.id === id);
    return path || null;
  }

  async getCategories(): Promise<string[]> {
    const categories = new Set(careerPaths.map(path => path.category));
    return Array.from(categories).sort();
  }

  async searchCareerPaths(query: string): Promise<CareerPath[]> {
    const searchLower = query.toLowerCase();
    return careerPaths.filter(path =>
      path.title.toLowerCase().includes(searchLower) ||
      path.description.toLowerCase().includes(searchLower) ||
      path.skills.some(skill => skill.toLowerCase().includes(searchLower))
    );
  }
}

export const careerPathService = CareerPathService.getInstance();