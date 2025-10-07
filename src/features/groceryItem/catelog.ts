export interface GroceryItem {
  id: string;
  name: string;
  quantity: string;
  notes?: string;
  category?: string;
  image?: File;
}
