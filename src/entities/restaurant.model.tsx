export class Restaurant {
  constructor(
    public name?: string,
    public image_url?: string,
    public display_phone?: string,
    public distance?: number,
    public location?: any,
    public phone?: string,
    public categories?: any[],
    public rating?: number,
  ) {
    // super();
  }
}
