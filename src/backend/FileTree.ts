export class Category {
    public name: string | undefined;
    public files: string[] | undefined;
    public categories: Category[] | undefined;
    public hidden: boolean = false;
}

export function updateHidden(category: Category, searchParam: string): boolean {
    let canHide: boolean = true;
    category.categories?.forEach(c => {
        if (!updateHidden(c, searchParam)) canHide = false;
    })

    category.files?.forEach(f => {
        if (f.includes(searchParam)) canHide = false
    })

    category.hidden = canHide;
    return category.hidden;
}

export class File {
    public name: string | undefined;
    public hidden: boolean = false

    public updateHidden(searchParam: string): boolean {
        return (this.hidden = this.name?.includes(searchParam) ?? false);
    }
}
