/**
 * @description base class for the spec to mock data objects
 * 
 * Override `mockOne` and `mockMany` for custom implementations.
 */
export abstract class Mock<T> {

    /**
     * @returns generates a single instance of the desired class
     */
    public abstract mockOne(name?: string | any): T;

    /**
     * @returns generates count instances of the desired class
     */
    public mockMany(names?: string[], count = 1): T[] {
        if (!names) {
            names = ['undefined'];
        }
        const arr = Array(count).fill(-1).map((_, index) => {
            const name = `${names![index % names!.length]}-${index}`;
            return this.mockOne(name);
        });
        return arr;
    }

    /**
     * @description generate a random number
     */
    public static rNumber(): number {
        return Math.round(Math.random() * 90000);
    }

}
