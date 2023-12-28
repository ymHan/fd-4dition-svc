export class Util {
  public static separateId(id: string): any {
    const customerId: string = id.slice(0, 4);
    const sportsId: string = id.slice(4, 7);
    const venueId: string = id.slice(7, 10);
    const sectorId: string = id.slice(10, 13);

    return {
      customerId,
      sportsId,
      venueId,
      sectorId,
    };
  }

  public static toCamel = (s: string) => {
    return s.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace('-', '').replace('_', '');
    });
  };

  public static toSnake = (s: string) => {
    return s.replace(/[A-Z]/g, (letter) => {
      return `_${letter.toLowerCase()}`;
    });
  };

  public static keysToCamel = (o: object) => {
    if (o === Object(o) && !Array.isArray(o) && typeof o !== 'function') {
      const n = {};

      Object.keys(o).forEach((k) => {
        n[Util.toCamel(k)] = Util.keysToCamel(o[k]);
      });

      return n;
    }
    return o;
  };
}
